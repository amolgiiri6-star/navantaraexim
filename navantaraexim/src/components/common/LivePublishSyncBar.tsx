import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, RefreshCw, ExternalLink, Upload, AlertCircle, X } from 'lucide-react';
import { syncPreviewAssetsToLive, uploadSingleAssetToServer, SyncStatus } from '../../utils/syncService';

const PUBLISHED_URL = 'https://ais-pre-bcqpjohddsaebv3g3m5xhw-575006760427.asia-east1.run.app';

export const LivePublishSyncBar: React.FC = () => {
  const [status, setStatus] = useState<SyncStatus | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [visible, setVisible] = useState(true);
  const [feedback, setFeedback] = useState<string | null>(null);

  const bannerInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const doSync = async () => {
    setIsSyncing(true);
    setFeedback(null);
    const res = await syncPreviewAssetsToLive();
    setStatus(res);
    setIsSyncing(false);
    if (res.synced) {
      setFeedback('Preview images successfully synced to published website!');
      setTimeout(() => setFeedback(null), 6000);
    } else if (res.error) {
      setFeedback(res.error);
    }
  };

  useEffect(() => {
    // Automatically synchronize on mount
    doSync();
  }, []);

  const handleBannerUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsSyncing(true);
    setFeedback('Uploading hero banner...');
    const ok = await uploadSingleAssetToServer('banner', file);
    setIsSyncing(false);
    if (ok) {
      setFeedback('Hero banner updated and saved to published site!');
      setTimeout(() => setFeedback(null), 6000);
    } else {
      setFeedback('Failed to upload hero banner.');
    }
    if (bannerInputRef.current) bannerInputRef.current.value = '';
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsSyncing(true);
    setFeedback('Uploading official logo...');
    const ok = await uploadSingleAssetToServer('logo', file);
    setIsSyncing(false);
    if (ok) {
      setFeedback('Official logo updated and saved to published site!');
      setTimeout(() => setFeedback(null), 6000);
    } else {
      setFeedback('Failed to upload logo.');
    }
    if (logoInputRef.current) logoInputRef.current.value = '';
  };

  if (!visible) return null;

  return (
    <div className="bg-[#0B1522] border-b border-[#C5A059]/40 px-3 py-1.5 text-xs text-[#E5D7B7] flex flex-wrap items-center justify-between gap-2 z-50 shadow-md">
      {/* Hidden file pickers */}
      <input
        type="file"
        ref={bannerInputRef}
        onChange={handleBannerUpload}
        accept="image/*"
        className="hidden"
      />
      <input
        type="file"
        ref={logoInputRef}
        onChange={handleLogoUpload}
        accept="image/*"
        className="hidden"
      />

      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span className="font-medium text-slate-200">
          {feedback ? (
            <span className="text-amber-300 font-semibold">{feedback}</span>
          ) : (
            <>
              <strong>Preview &amp; Live Site Sync:</strong> All preview images (banner, stamp logo) are synced to your published URL.
            </>
          )}
        </span>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={doSync}
          disabled={isSyncing}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#16273c] hover:bg-[#1f3755] text-[#C5A059] border border-[#C5A059]/40 cursor-pointer font-medium disabled:opacity-50"
          title="Force synchronization of all preview images to the live server"
        >
          <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
          {isSyncing ? 'Syncing...' : 'Sync to Live'}
        </button>

        <button
          onClick={() => bannerInputRef.current?.click()}
          disabled={isSyncing}
          className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#16273c]/80 hover:bg-[#1f3755] text-slate-300 hover:text-white border border-white/10 cursor-pointer"
          title="Upload or change Hero Banner directly"
        >
          <Upload className="w-3 h-3 text-[#C5A059]" />
          <span>Upload Banner</span>
        </button>

        <button
          onClick={() => logoInputRef.current?.click()}
          disabled={isSyncing}
          className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#16273c]/80 hover:bg-[#1f3755] text-slate-300 hover:text-white border border-white/10 cursor-pointer"
          title="Upload or change Official Logo directly"
        >
          <Upload className="w-3 h-3 text-[#C5A059]" />
          <span>Upload Logo</span>
        </button>

        <a
          href={PUBLISHED_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#C5A059] hover:bg-[#b08b47] text-[#0B192C] font-bold cursor-pointer transition-colors"
        >
          <span>Open Live Site</span>
          <ExternalLink className="w-3 h-3" />
        </a>

        <button
          onClick={() => setVisible(false)}
          className="text-slate-400 hover:text-white p-1 cursor-pointer"
          title="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
