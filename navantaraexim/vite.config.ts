import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function assetSyncPlugin(): Plugin {
  return {
    name: 'asset-sync-plugin',
    configureServer(server) {
      server.middlewares.use('/api/sync-assets', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const publicDir = path.resolve(__dirname, 'public');
              const distDir = path.resolve(__dirname, 'dist');

              if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir, { recursive: true });
              }

              const saveFile = (filename: string, base64Data: string) => {
                if (!base64Data || typeof base64Data !== 'string') return;
                const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
                const buffer = matches ? Buffer.from(matches[2], 'base64') : Buffer.from(base64Data, 'base64');
                const pubPath = path.join(publicDir, filename);
                fs.writeFileSync(pubPath, buffer);
                if (fs.existsSync(distDir)) {
                  fs.writeFileSync(path.join(distDir, filename), buffer);
                }
              };

              let savedCount = 0;
              if (data.bannerData) {
                saveFile('custom-hero-banner.png', data.bannerData);
                savedCount++;
              }
              if (data.logoData) {
                saveFile('custom-logo.png', data.logoData);
                savedCount++;
              }
              if (data.productsHeroData) {
                saveFile('custom-products-hero.png', data.productsHeroData);
                savedCount++;
              }
              if (data.productImages && typeof data.productImages === 'object') {
                const prodPubDir = path.join(publicDir, 'products');
                const prodDistDir = path.join(distDir, 'products');
                if (!fs.existsSync(prodPubDir)) fs.mkdirSync(prodPubDir, { recursive: true });
                if (fs.existsSync(distDir) && !fs.existsSync(prodDistDir)) fs.mkdirSync(prodDistDir, { recursive: true });
                for (const [key, val] of Object.entries(data.productImages)) {
                  if (typeof val === 'string') {
                    saveFile(`products/${key}.png`, val);
                    savedCount++;
                  }
                }
              }

              res.setHeader('Content-Type', 'application/json');
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.end(JSON.stringify({ success: true, savedCount }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.end(JSON.stringify({ error: String(err) }));
            }
          });
        } else if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.end();
        } else {
          const hasBanner = fs.existsSync(path.resolve(__dirname, 'public/custom-hero-banner.png'));
          const hasLogo = fs.existsSync(path.resolve(__dirname, 'public/custom-logo.png'));
          const hasProductsHero = fs.existsSync(path.resolve(__dirname, 'public/custom-products-hero.png'));
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.end(JSON.stringify({ hasBanner, hasLogo, hasProductsHero }));
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), assetSyncPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
