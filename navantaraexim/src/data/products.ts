import { ProductCategory } from '../types';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'essential-oils',
    slug: 'essential-oils',
    title: 'Essential Oils',
    subtitle: 'Selected Indian Essential Oils & Natural Extracts',
    assetReferenceName: 'Bio1 Asset Reference',
    heroImage: '/essential oils02_compressed.jpeg',
    summary: 'Selected Indian essential oils for international wholesale, distribution, formulation, and commercial requirements. Steam-distilled from hand-selected botanicals across India for authentic aroma profile and chemical purity.',
    productRange: [
      'Lavender Essential Oil (Lavandula angustifolia)',
      'Peppermint Essential Oil (Mentha piperita)',
      'Ginger Essential Oil (Zingiber officinale)',
      'Clove Bud Oil (Syzygium aromaticum)',
      'Palma Rosa Oil (Cymbopogon martinii)',
      'Cinnamon Bark & Leaf Oil (Cinnamomum verum)',
      'Caraway Seed Oil (Carum carvi)',
      'Indian Sandalwood Oil (Santalum album)',
      'Lemongrass Oil (Cymbopogon flexuosus)',
      'Eucalyptus Oil (Eucalyptus globulus)'
    ],
    services: [
      'Supplier Coordination in Kannauj, Nilgiris & Kerala',
      'Batch Certificate of Analysis (COA) & GC-MS Profiles',
      'Export Packaging in UN-Approved Aluminum Canisters & HDPE Drums',
      'Comprehensive Export Documentation (COA, MSDS, Certificate of Origin)'
    ],
    specMatrixHeaders: ['Product Name', 'Botanical Name', 'Origin', 'Extraction Method', 'Grade / Quality', 'Export Packaging', 'Batch Documentation'],
    products: [
      {
        id: 'eo-1',
        name: 'Pure Sandalwood Essential Oil',
        botanicalOrTechnicalName: 'Santalum album',
        origin: 'Karnataka & Tamil Nadu, India',
        extractionOrMethod: 'Traditional Steam Distillation (Heartwood)',
        grade: 'Therapeutic / Perfumery Grade',
        purity: '100% Pure & Natural (Santanol Content >90%)',
        packaging: '1kg Aluminum canisters / 5kg & 25kg UN Drums',
        leadTime: '7 - 12 Business Days',
        hsCodeStatus: 'Confirmed',
        documentation: ['COA', 'GC-MS Analysis', 'MSDS', 'Origin Certificate'],
        description: 'Authentic Indian Sandalwood oil with deep balsamic, woody, sweet aroma. Sourced for international fragrance houses, personal care formulations, and commercial requirements.',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
        applications: ['Fine Fragrances', 'Skincare Formulations', 'Aromatherapy', 'Wellness Products']
      },
      {
        id: 'eo-2',
        name: 'Peppermint Essential Oil',
        botanicalOrTechnicalName: 'Mentha piperita',
        origin: 'Uttar Pradesh & Punjab, India',
        extractionOrMethod: 'Steam Distillation (Fresh Aerial Parts)',
        grade: 'USP / Food & Cosmetic Grade',
        purity: 'Menthol Content 50% - 65% Min',
        packaging: '25kg HDPE Carboys / 180kg Epoxy-lined Steel Drums',
        leadTime: '10 - 15 Business Days',
        hsCodeStatus: 'Confirmed',
        documentation: ['COA', 'GC-MS Analysis', 'TDS', 'MSDS', 'Allergen Declaration'],
        description: 'Crisp, invigorating, high-menthol natural peppermint oil supplied for oral care, confectionery, cosmetic cooling, and commercial applications.',
        image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80',
        applications: ['Oral Care & Toothpaste', 'Confectionery', 'Balms & Personal Care', 'Shampoos']
      },
      {
        id: 'eo-3',
        name: 'Ginger Essential Oil',
        botanicalOrTechnicalName: 'Zingiber officinale',
        origin: 'Kerala & Assam, India',
        extractionOrMethod: 'Supercritical CO2 & Steam Distilled',
        grade: 'Food Grade / Commercial Grade',
        purity: '100% Pure, Gingerol & Zingiberene Rich',
        packaging: '5kg Aluminum Flasks / 25kg Drums',
        leadTime: '10 - 14 Business Days',
        hsCodeStatus: 'Confirmed',
        documentation: ['COA', 'MSDS', 'Microbiological Test', 'Heavy Metal Test'],
        description: 'Warm, spicy, pungent aroma with high bioactive content. Sourced from high-grade Malabar ginger rhizomes, free from synthetic diluents.',
        image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
        applications: ['Beverage Formulations', 'Wellness Products', 'Personal Care Blends', 'Spicy Perfumery']
      },
      {
        id: 'eo-4',
        name: 'Palma Rosa Essential Oil',
        botanicalOrTechnicalName: 'Cymbopogon martinii var. motia',
        origin: 'Maharashtra & Madhya Pradesh, India',
        extractionOrMethod: 'Hydro-Steam Distillation of Grass',
        grade: 'Cosmetic / Aromatherapy Grade',
        purity: 'Geraniol > 82%, Geranyl Acetate > 9%',
        packaging: '25kg & 50kg Drums',
        leadTime: '10 - 14 Business Days',
        hsCodeStatus: 'Confirmed',
        documentation: ['COA', 'GC-MS', 'MSDS', 'IFRA Compliance Statement'],
        description: 'Floral, sweet, rose-like aroma with prominent geraniol levels. Widely utilized in soap manufacturing, facial oils, and as a natural rose note enhancer.',
        image: 'https://images.unsplash.com/photo-1608571424266-edeb9bbefdec?auto=format&fit=crop&w=800&q=80',
        applications: ['Natural Soaps', 'Face Oils', 'Floral Fragrances', 'Personal Care']
      },
      {
        id: 'eo-5',
        name: 'Clove Bud Essential Oil',
        botanicalOrTechnicalName: 'Syzygium aromaticum',
        origin: 'Kerala & Tamil Nadu, India',
        extractionOrMethod: 'Steam Distillation (Selected Flower Buds)',
        grade: 'Food & Dental Grade',
        purity: 'Eugenol Content 85% - 90%',
        packaging: '25kg Drums / 200kg Barrels',
        leadTime: '7 - 10 Business Days',
        hsCodeStatus: 'Confirmed',
        documentation: ['COA', 'MSDS', 'Food Grade Compliance', 'Non-GMO Statement'],
        description: 'Deep, rich, spicy aroma known for strong antiseptic properties. High Eugenol concentration suitable for dental formulations and spice flavoring.',
        image: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=800&q=80',
        applications: ['Dental Care', 'Muscle Rubs', 'Food Flavoring', 'Aromatic Formulations']
      }
    ]
  },
  {
    id: 'cosmetics',
    slug: 'cosmetics',
    title: 'Cosmetics',
    subtitle: 'Clean-Beauty Formulations (HS 33079090) & Precision Brushes (HS 9603.30)',
    assetReferenceName: 'Beauty & Brush Asset Reference',
    heroImage: '/Cosmetic Main page Image.png',
    summary: 'Specializing in clean-beauty export formulations (HS 33079090) and precision applicator brushes (HS 9603.30)—including cruelty-free synthetic PBT cosmetic brushes, high-demand fine arts & writing brushes for educational sectors, and hygienic specialty applicators. Formulated with organic Indian raw materials and engineered with precision bristle craftsmanship commanding premium export margins across international retail, salon, and institutional markets.',
    productRange: [
      "Brushes for Application of Cosmetics (Cruelty-Free Synthetic PBT, HS 96033020)",
      "Artists' Brushes & Writing Brushes for Educational / Fine Arts (HS 96033010)",
      "Specialty Skincare & Detailing Applicator Brushes (HS 96033090)",
      "Pre-Moistened Herbal Cosmetic & Cleansing Wipes (HS 33079090)",
      
    ],
    services: [
      'HS 9603.30 OEM/ODM Private Label Brush Manufacturing & Assembly',
      'Cruelty-Free Synthetic PBT Micro-Tapering & Anti-Bacterial Treatment',
      'Educational & Fine Arts Institutional Supply (EN71-3 & ASTM D-4236)',
      'HS 33079090 Clean-Beauty Export Formulation & Sourcing',
      'Organic Indian Raw Material Integration (Aloe, Vetiver, Soapnut)',
      'CPSR, ECOCERT, Vegan Audit & International Cosmetic Compliance Documentation'
    ],
    specMatrixHeaders: ['Product Item', 'Customs Tariff (HSN)', 'Key Material / Actives', 'Target Application', 'Packaging Format', 'Lead Time', 'Batch Documentation'],
    products: [
      {
        id: 'cs-brush-96033020',
        name: 'Brushes for Application of Cosmetics (Cruelty-Free Synthetic PBT Filaments)',
        botanicalOrTechnicalName: 'Micro-Tapered Synthetic PBT (Polybutylene Terephthalate) Filaments + FSC Hardwood Handle + Anodized Aluminum Ferrule',
        origin: 'Agra & Noida Industrial Clusters, Uttar Pradesh / Mumbai, India',
        extractionOrMethod: 'Cleanroom Automated Tapering, Micro-Waved Filament Crimping & Double-Epoxy Ferrule Bonding',
        grade: 'Professional MUA & Retail Vegan Export Grade',
        purity: '100% Animal-Free Cruelty-Free Synthetic PBT, Zero Fiber Shed, Antibacterial Coated',
        packaging: 'Custom Biodegradable EVA Sleeves, Luxury Rigid Magnetic Presentation Boxes & 500-Unit Master Shipping Cartons',
        leadTime: '14 - 20 Business Days',
        hsCodeStatus: 'Confirmed',
        hsnCode: '96033020',
        hsnCategory: 'HSN 96033020 (Brushes for Application of Cosmetics - Cruelty-Free PBT)',
        moq: '1,000 Custom Sets / 2,500 Individual Brushes',
        documentation: ['Certificate of Origin', 'Vegan & Cruelty-Free Audit', 'REACH Phthalate & Heavy Metal Free Test', 'ISO 9001:2015', 'FSC Wood Chain of Custody'],
        description: 'Engineered specifically for the global clean-beauty transition, this high-performance cosmetic brush line replaces animal hair with advanced micro-tapered synthetic PBT (Polybutylene Terephthalate) filaments. Designed with microscopic wave crimping to optimize both powder pick-up and liquid foundation dispersion without absorbing or wasting product. Features seamless double-crimped anti-corrosive aluminum ferrules and ergonomically weighted FSC-certified birch handles finished with non-toxic, solvent-free eco-lacquer.',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
        applications: ['Liquid Foundation Buffing', 'Mineral Powder Setting', 'Angled Cheek & Contour', 'Eyeshadow Blending', 'Private Label Cosmetics Retail']
      },
      {
        id: 'cs-brush-96033010',
        name: "Artists' Brushes & Fine Writing Brushes (Fine Arts & Educational Sectors)",
        botanicalOrTechnicalName: 'Multi-Diameter Micro-Fine Synthetic Nylon/PBT Filament Reservoir Blend + Nickel-Plated Seamless Brass Ferrule',
        origin: 'Meerut & Jalandhar Precision Brushmaking Clusters, India',
        extractionOrMethod: 'Hand-Cupped Needlepoint Assembly, Thermodynamic Bristle Setting & Precision Mechanical Double-Crimping',
        grade: 'Studio & Fine Arts Academic Grade (EN71-3 / ASTM D-4236 Certified)',
        purity: '100% Non-Toxic, Zero Lead/Cadmium in Paint, Shed-Proof High-Resilience Filament Memory',
        packaging: 'Educational Blister 6-Packs, Waterproof Zipper Canvas Brush Rolls & Bulk Master School Cartons',
        leadTime: '15 - 22 Business Days',
        hsCodeStatus: 'Confirmed',
        hsnCode: '96033010',
        hsnCategory: "HSN 96033010 (Artists' Brushes & Writing Brushes - Educational & Fine Arts)",
        moq: '2,000 Retail Sets / 5,000 Educational Bulk Units',
        documentation: ['EN71 Part 3 Toy & Art Tool Safety', 'ASTM D-4236 (LHAMA Non-Toxic)', 'COA', 'Tensile Bristle Retention Audit', 'ISO 9001'],
        description: 'High-demand precision brushes supplying international fine arts academies, primary/secondary school educational boards, and commercial studio artists. Fabricated with engineered multi-diameter synthetic filaments that replicate the spring, snap, and fluid-holding capillary action of traditional kolinsky sable without animal cruelty. Retains razor-sharp chisel edges and needle-fine points across watercolor, acrylic, oil, gouache, and Indian ink calligraphy applications.',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
        applications: ['Educational School Art Kits', 'Fine Art Academy Watercolor & Acrylic', 'Calligraphy & Sumi Writing', 'Ceramic & Miniature Detailing', 'Wholesale Stationery Chains']
      },
      {
        id: 'cs-brush-96033090',
        name: 'Specialty Applicator Brushes & Precision Beauty Spatulas',
        botanicalOrTechnicalName: 'Medical-Grade Flexible Silicone Head / Micro-Crystal Flocked Doe-Foot Applicators + Aluminum Ferrule',
        origin: 'Gujarat & Maharashtra Medical & Beauty Plastics Facilities, India',
        extractionOrMethod: 'Injection Molded Food-Contact Silicone Vulcanization & Ultrasonic Handle Welded Assembly',
        grade: 'Clinical & Aesthetic Spa Grade (FDA 21 CFR 177.2600 Compliant)',
        purity: '100% BPA-Free, Latex-Free, Non-Porous Hygienic Surface (Zero Product Absorption)',
        packaging: 'Hermetically Sealed Individual Sterilized Pouches, Clinic Multi-Packs & Hang-Card Retail Packs',
        leadTime: '10 - 15 Business Days',
        hsCodeStatus: 'Confirmed',
        hsnCode: '96033090',
        hsnCategory: 'HSN 96033090 (Other Related Applicator Brushes & Treatment Spatulas)',
        moq: '3,000 Units',
        documentation: ['FDA 21 CFR Grade Silicone Compliance', 'BPA-Free Test Report', 'USP Class VI Biocompatibility', 'COA', 'MSDS'],
        description: 'Hygienic specialty cosmetic and skincare applicator brushes engineered for zero product waste and seamless sanitation. Features ultra-flexible contoured silicone paddle heads for applying clay masks, chemical peels, and serums evenly without harboring bacterial build-up or trapping expensive formulations in fibers. Also encompasses high-precision micro-applicators for lip gloss, eyeliner detailing, and aesthetic dermatology treatments.',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
        applications: ['Facial Mud & Clay Mask Spreading', 'Dermatology & Chemical Peel Application', 'Precision Lip & Lash Tint Detailing', 'Professional Aesthetic Clinic Use', 'Zero-Waste Skincare Dispensing']
      },
      {
        id: 'cs-wipe-1',
        name: 'Pre-Moistened Herbal Cosmetic & Cleansing Wipes',
        botanicalOrTechnicalName: 'Organic Aloe Leaf Juice + Steam-Distilled Vetiver Hydrosol + Rose Distillate',
        origin: 'Maharashtra & Uttar Pradesh, India',
        extractionOrMethod: 'Ultrasonic Substrate Impregnation in ISO 22716 Cleanroom',
        grade: 'Clean-Beauty / Dermatologically Tested Cosmetic Wipes',
        purity: '99.4% Natural Origin Ingredients, 0% Alcohol, 100% Compostable Bamboo Substrate',
        packaging: '30-Sheet / 60-Sheet Resealable Foil Packs & 1,000-Sheet Master Shipping Cartons',
        leadTime: '14 - 20 Business Days',
        hsCodeStatus: 'Confirmed',
        hsnCode: '33079090',
        hsnCategory: 'HSN 33079090 (Pre-Moistened Cosmetic Wipes & Hydrosol Sheets)',
        moq: '3,000 Retail Packs / Custom Master Rolls',
        documentation: ['COA', 'CPSR (EU Cosmetic Safety Report)', 'Biodegradability ISO 14855', 'Dermatological Patch Test', 'Microbiology Test'],
        description: 'Ultra-soft, 100% plant-cellulose wipes pre-saturated with organic Indian aloe vera juice and steam-distilled vetiver (Khus) botanical water. Effortlessly lifts waterproof makeup, sunscreen, and urban pollutants while replenishing the skin barrier. Formulated with zero alcohol and zero phenoxyethanol to command top clean-beauty price premiums in European and North American retail channels.',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
        applications: ['Clean Makeup Removal', 'Travel Skincare Packs', 'Post-Workout Cleansing', 'Eco-Luxury Hotel Amenities']
      }
    ]
  },
  {
    id: 'personal-care',
    slug: 'personal-care',
    title: 'Personal Care',
    subtitle: 'Cosmetic Powders & Everyday Care Products',
    assetReferenceName: 'Powders Asset Reference',
    heroImage: '/Powder Main Image.png',
    summary: 'Cosmetic talc, cornstarch-based baby powders, cooling skin powders, and personal care essentials manufactured in India for international distribution, wholesale, and institutional buyers.',
    productRange: [
      'Perfumed Talcum Powder (Floral & Oriental fragrance blends)',
      'Cooling Prickly Heat Skin Powder',
      'Ultra-Gentle Cornstarch Baby Powder (Hypoallergenic)',
      'Translucent Loose Setting Finishing Powder',
      'Illuminating Body Dusting Powders',
      'Herbal Bath & Ubtan Body Care Powders',
      'High-Purity Talc for Industrial & Personal Care',
      'Scent-Infused Herbal Wardrobe & Drawer Sheets'
    ],
    services: [
      'Asbestos-Free Certified Lab Testing Verification',
      'Custom Fragrance Coordination',
      'Export Packaging in Composite Canisters & Shaker Bottles',
      'Palletized Ocean Freight Coordination from JNPT / Mundra'
    ],
    specMatrixHeaders: ['Product Name', 'Base Ingredient', 'Particle Fineness', 'Fragrance Profile', 'Packaging Format', 'Lead Time', 'Compliance Documentation'],
    products: [
      {
        id: 'pow-1',
        name: 'Cooling Medicated Body Powder',
        botanicalOrTechnicalName: 'Zinc Oxide, Menthol & Talc Compound',
        origin: 'Rajasthan & Gujarat, India',
        extractionOrMethod: 'Air-Classifier Jet Micronization (<10 microns)',
        grade: 'Personal Care / OTC Grade',
        purity: 'Asbestos-Free Certified (XRD Tested)',
        packaging: '100g / 200g Twist-top Perforated Shaker Canister',
        leadTime: '14 - 20 Business Days',
        hsCodeStatus: 'Confirmed',
        documentation: ['COA', 'Asbestos-Free Certificate', 'XRD Mineralogy Test', 'MSDS'],
        description: 'Effective cooling body powder providing skin relief from perspiration, friction, and heat irritation in warm climates.',
        image: 'https://images.unsplash.com/photo-1512290900672-1f4803d526e0?auto=format&fit=crop&w=800&q=80',
        applications: ['Summer Cooling Care', 'Personal Freshness', 'Anti-Chafing Care']
      },
      {
        id: 'pow-2',
        name: 'Gentle Care Cornstarch Baby Powder',
        botanicalOrTechnicalName: 'Pure Zea Mays (Corn) Starch + Chamomile Extract',
        origin: 'Maharashtra Facilities, India',
        extractionOrMethod: 'Triple-Filtered Pharmaceutical Pulverization',
        grade: 'Infant & Sensitive Skin Grade',
        purity: '100% Talc-Free, Clinically Hypoallergenic',
        packaging: '150g Ergonomic Squeeze HDPE Bottle with Sifter',
        leadTime: '15 - 20 Business Days',
        hsCodeStatus: 'Confirmed',
        documentation: ['COA', 'Safety Evaluation Report', 'Microbial Limit Test', 'MSDS'],
        description: 'Gentle, talc-free cornstarch powder enriched with chamomile extract to absorb excess moisture and soothe delicate skin.',
        image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
        applications: ['Infant Care', 'Sensitive Skin Care', 'Daily Moisture Absorption']
      },
      {
        id: 'pow-3',
        name: 'Translucent Loose Setting Powder',
        botanicalOrTechnicalName: 'Silica, Mica & Fine Starch Complex',
        origin: 'Northern Export Belt, India',
        extractionOrMethod: 'Ultra-Fine Jet Milling (5 Micron)',
        grade: 'Cosmetic Grade',
        purity: 'Micro-Fine, Flashback-Free Formulation',
        packaging: '20g Acrylic Sifter Jar with Velvet Puff & Mirror',
        leadTime: '15 - 20 Business Days',
        hsCodeStatus: 'Confirmed',
        documentation: ['COA', 'Heavy Metals Test', 'MSDS', 'Safety Assessment'],
        description: 'Micro-fine translucent setting powder that controls surface shine and locks makeup smoothly without caking.',
        image: 'https://images.unsplash.com/photo-1512290900672-1f4803d526e0?auto=format&fit=crop&w=800&q=80',
        applications: ['Cosmetic Setting', 'Oil Control', 'Daily Face Finishing']
      },
            {
        id: 'cs-sheet-1',
        name: 'Scent-Infused Herbal Wardrobe & Drawer Sheets',
        botanicalOrTechnicalName: 'Indian Vetiver (Khus) + Sandalwood + Botanical Fragrance Blend',
        origin: 'India',
        extractionOrMethod: 'Botanical Infusion & Scent-Diffusion Coating',
        grade: 'Botanical Home & Textile Care Grade',
        purity: 'Botanical-Based Formulation — Specifications Available on Request',
        packaging: 'Retail Sheets / Bulk Export Packaging — To Be Confirmed',
        leadTime: 'To Be Confirmed',
        hsCodeStatus: 'To Be Confirmed Product-by-Product',
        documentation: ['COA — Available on Request', 'Product Specification Sheet — Available on Request'],
        description: 'Botanical scent-infused sheets designed for wardrobes, drawers, linen storage and other textile-care applications. Developed using Indian botanical fragrance materials and suitable for wholesale, private-label and export sourcing enquiries, subject to product and supplier verification.',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
        applications: ['Wardrobe & Drawer Care', 'Linen Storage', 'Textile Scenting', 'Home Fragrance']
      }
    ]
  },
  {
    id: 'textiles',
    slug: 'textiles',
    title: 'Shirting Fabrics',
    subtitle: 'HS 52083310: Dyed 3-Thread & 4-Thread Twill Cotton Shirting (≥ 85% Cotton, ≤ 200 g/m²)',
    assetReferenceName: 'Fabrics Asset Reference',
    heroImage: '/fabrics_compressed.jpeg',
    summary: 'India is a premier global weaving origin for fine cotton shirting fabrics, with prime export specialization under tariff code HS 52083310: Woven fabrics of cotton, containing ≥ 85% cotton by weight, weighing not more than 200 g/m² - Dyed: 3-thread or 4-thread twill shirting. Produced on high-speed air-jet and rapier electronic dobby looms across Ahmedabad, Coimbatore, Surat, and Ichalkaranji, our shirting range features combed compact yarns (40s to 100/2s), continuous vat/reactive dyeing, liquid ammonia silky finishes, strict dimensional stability (< 2% shrinkage), and OEKO-TEX Standard 100 compliance for international garment makers and brands.',
    productRange: [
      'HS 52083310: Dyed 4-Thread Twill Cotton Shirting (60s, 80/2s, 100/2s • 135–160 g/m²)',
      'HS 52083310: Dyed 3-Thread Micro-Twill Shirting (50s, 70s, 80/2s • 115–130 g/m²)',
      'HS 52083310: Yarn-Dyed 4-Thread Structured Herringbone & Broken Twill (142 g/m²)',
      'HS 52083310: Silky Compact 4-Thread Satin-Twill (100/2 Two-Ply Suvin/Giza • 122 g/m²)',
      'HS 52083310: Peach-Finish Brushed 3-Thread Casual Twill (40s x 40s • 155 g/m²)',
      '100% Combed Compact Cotton Poplin Shirting (HS 52083120 • 60s, 80s, 100/2s)',
      'Royal Oxford & Pinpoint Basket-Weave Shirting (HS 52083990 • 40s, 50s, 80/2s)',
      'Pure Flax Linen & Cotton-Linen Blends (HS 53091910 • 60 Lea, 40 Lea)'
    ],
    services: [
      'Air-Jet & Rapier Weaving Mill Direct Coordination in Ahmedabad, Surat, Coimbatore & Ichalkaranji',
      'HS 52083310 Tariff Classification & Customs Export Documentation Compliance',
      'Physical Swatch Hanger & 10m–50m Sample Yardage Express Courier via FedEx / DHL',
      'ISO 105 Testing (Color Fastness to Washing 4–5, Rubbing 4, Tensile & Tear Strength)',
      'Roll-to-Roll Export Packaging: Double-Fold on Heavy Tube with Poly Sheath, Desiccant & Burlap'
    ],
    specMatrixHeaders: ['Fabric Code / Construction', '8-Digit HSN Code', 'Yarn Count & Weave Structure', 'Weight (GSM)', 'Usable Width', 'Dyeing & Finish', 'Compliance Dossier'],
    products: [
      {
        id: 'fab-twill-4th-60s',
        name: 'Executive 4-Thread Twill Cotton Shirting',
        botanicalOrTechnicalName: '100% Combed Compact Cotton • 60s x 60s / 144 x 88 • 2/2 Twill',
        origin: 'Ahmedabad & Coimbatore Weaving Clusters, India',
        extractionOrMethod: 'Air-Jet Loom Woven, Continuous Pad-Steam Reactive Dyed, Liquid Ammonia + Easy-Iron Finish',
        grade: 'Export Shirting Grade A',
        purity: '100% Long-Staple Indian Cotton (Shankar-6), Azo-Free Dyeing',
        packaging: '100m–120m double-folded rolls on heavy cardboard core, moisture-barrier poly wrap & woven outer sack',
        leadTime: '15 - 20 Business Days (Greige stock available)',
        hsCodeStatus: 'Confirmed HS 52083310',
        hsnCode: '52083310',
        hsnCategory: 'HS 52083310 • Dyed 4-Thread Twill Shirting (≥85% Cotton, ≤200 g/m²)',
        documentation: ['OEKO-TEX Standard 100 Certificate', 'Mill Test Certificate (MTC)', 'Color Fastness to Washing (ISO 105-C06: Grade 4–5)', 'Tensile & Tear Strength Report', 'Shrinkage Test (<1.8%)'],
        description: 'Primary highlighted shirting fabric under HS 52083310: Woven fabrics of cotton, containing ≥ 85% cotton by weight, weighing not more than 200 g/m² - Dyed: 3-thread or 4-thread twill shirting. Features sharp diagonal twill ridges, rich opacity, fluid drape, and silky smooth hand feel for luxury formal shirts.',
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
        applications: ['Formal Dress Shirts', 'Luxury Tailored Menswear', 'Executive Uniform Programs', 'Structured Casual Shirts'],
        specs: {
          'HSN Code': '52083310',
          'Tariff Description': 'Dyed 3-thread or 4-thread twill shirting, cotton ≥ 85%, ≤ 200 g/m²',
          'Weave Pattern': '4-Thread Twill (2/2 Construction)',
          'Yarn Count': '60s Combed Compact x 60s Combed Compact',
          'Density (EPI x PPI)': '144 x 88',
          'Weight': '135 g/m² (GSM)',
          'Width': '58 inches (147 cm) Usable',
          'Color Fastness': 'Grade 4–5 (ISO 105-C06)',
          'Shrinkage': '< 1.8% (ISO 6330)'
        }
      },
      {
        id: 'fab-twill-3th-80s',
        name: 'Royal 3-Thread Micro-Twill Shirting',
        botanicalOrTechnicalName: '100% Combed Cotton • 80/2 x 80/2 Two-Ply • 160 x 96 • 2/1 Twill',
        origin: 'Coimbatore & Tirupur Export Weaving Hubs, Tamil Nadu',
        extractionOrMethod: 'High-Speed Electronic Dobby Air-Jet Loom, Reactive Piece-Dyed, Silk Protein Mercerized',
        grade: 'Superfine 80s Two-Ply Export Grade',
        purity: '100% Extra-Long Staple Cotton, Formaldehyde-Free Easy Care',
        packaging: '100m rolls wrapped in primary polyethylene tube + heavy polypropylene woven outer bag',
        leadTime: '18 - 22 Business Days',
        hsCodeStatus: 'Confirmed HS 52083310',
        hsnCode: '52083310',
        hsnCategory: 'HS 52083310 • Dyed 3-Thread Twill Shirting (≥85% Cotton, ≤200 g/m²)',
        documentation: ['OEKO-TEX Certificate', 'BCI Cotton Certificate', 'Tensile Strength ISO 13934-1', 'Color Fastness to Perspiration & Light (Grade 4–5)'],
        description: 'Lightweight 3-thread (2/1) twill shirting classified under HS 52083310. Subtle micro-ribbed surface, remarkable breathability, and feather-soft drape engineered for premium tropical business shirts and modern slim-fit apparel.',
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
        applications: ['Slim-Fit Dress Shirts', 'Tropical & Summer Business Wear', 'Bespoke Tailoring', 'Luxury Womenswear Blouses'],
        specs: {
          'HSN Code': '52083310',
          'Tariff Description': 'Dyed 3-thread or 4-thread twill shirting, cotton ≥ 85%, ≤ 200 g/m²',
          'Weave Pattern': '3-Thread Twill (2/1 Construction)',
          'Yarn Count': '80/2 Two-Ply Combed x 80/2 Two-Ply Combed',
          'Density (EPI x PPI)': '160 x 96',
          'Weight': '125 g/m² (GSM)',
          'Width': '58 inches (147 cm) Usable',
          'Color Fastness': 'Grade 4–5 to Washing',
          'Shrinkage': '< 1.5%'
        }
      },
      {
        id: 'fab-twill-4th-yd-herringbone',
        name: 'Yarn-Dyed 4-Thread Structured Herringbone Twill',
        botanicalOrTechnicalName: '100% Combed Cotton • 50s x 50s / 138 x 84 • 3/1 Broken Twill / Chevron',
        origin: 'Surat & Ichalkaranji Weaving Belts, India',
        extractionOrMethod: 'Rapier Electronic Dobby Weaving, Vat Yarn-Dyed, Sanforized Pre-Shrunk Finish',
        grade: 'Premium Sartorial Weave Grade',
        purity: '100% Cotton, High-Torque Ring-Spun Yarns, Azo-Free Dyes',
        packaging: 'Export palletized rolls, individually poly-wrapped with silica gel desiccants & plastic end caps',
        leadTime: '20 - 25 Business Days',
        hsCodeStatus: 'Confirmed HS 52083310',
        hsnCode: '52083310',
        hsnCategory: 'HS 52083310 • Dyed 4-Thread Twill Shirting (≥85% Cotton, ≤200 g/m²)',
        documentation: ['Dimensional Stability Report (Shrinkage < 1.5%)', 'Rubbing Fastness Grade 4–5', 'Mill Certificate of Conformity'],
        description: 'Exquisite yarn-dyed 4-thread twill shirting woven in subtle herringbone and chevron geometric patterns under HS 52083310. High-contrast yarn dye achieves timeless executive depth, resistant to repeated commercial laundering.',
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
        applications: ['Sartorial Business Shirts', 'Classic Herringbone Dress Shirts', 'Executive Brand Collections'],
        specs: {
          'HSN Code': '52083310',
          'Tariff Description': 'Dyed 3-thread or 4-thread twill shirting, cotton ≥ 85%, ≤ 200 g/m²',
          'Weave Pattern': '4-Thread Broken Twill / Herringbone (3/1)',
          'Yarn Count': '50s Combed x 50s Combed Yarn-Dyed',
          'Density (EPI x PPI)': '138 x 84',
          'Weight': '142 g/m² (GSM)',
          'Width': '58 inches (147 cm) Usable',
          'Color Fastness': 'Grade 5 (Vat Dyeing)',
          'Shrinkage': '< 1.5%'
        }
      },
      {
        id: 'fab-twill-4th-satin-100s',
        name: 'Ultra-Compact 4-Thread Satin-Twill (100/2s)',
        botanicalOrTechnicalName: '100% Suvin / Giza Equivalent Cotton • 100/2 x 100/2 • 175 x 105 • 3/1 Twill',
        origin: 'Coimbatore & Ahmedabad Export Mills, India',
        extractionOrMethod: 'Air-Jet Loom, Double Singeing, Liquid Ammonia Mercerization, Silk Touch Nano-Finish',
        grade: 'Luxury 100/2 Two-Ply Haute Couture Grade',
        purity: '100% Long-Staple Cotton, Zero Synthetic Admixture, OEKO-TEX Standard 100',
        packaging: 'Premium double-fold board packaging with golden protective edge protectors (100m/roll)',
        leadTime: '18 - 25 Business Days',
        hsCodeStatus: 'Confirmed HS 52083310',
        hsnCode: '52083310',
        hsnCategory: 'HS 52083310 • Dyed 4-Thread Twill Shirting (≥85% Cotton, ≤200 g/m²)',
        documentation: ['OEKO-TEX Certificate', 'Staple Length Purity Assay', 'Tear Resistance ISO 13937-2', 'Smoothness Grade DP 3.8'],
        description: 'The pinnacle of Indian luxury shirting: ultra-fine 100/2 two-ply combed compact yarn woven in a 4-thread (3/1) steep twill angle under HS 52083310. Exceptional natural lustre resembling silk, impeccable drape, and ultra-high crease recovery.',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
        applications: ['Tuxedo & Black-Tie Shirts', 'Haute Couture & Luxury Tailoring', 'Diplomatic & Executive Wardrobes'],
        specs: {
          'HSN Code': '52083310',
          'Tariff Description': 'Dyed 3-thread or 4-thread twill shirting, cotton ≥ 85%, ≤ 200 g/m²',
          'Weave Pattern': '4-Thread Steep Satin Twill (3/1)',
          'Yarn Count': '100/2 Two-Ply Compact x 100/2 Two-Ply Compact',
          'Density (EPI x PPI)': '175 x 105',
          'Weight': '122 g/m² (GSM)',
          'Width': '58 inches (147 cm) Usable',
          'Color Fastness': 'Grade 4–5',
          'Shrinkage': '< 1.2%'
        }
      },
      {
        id: 'fab-twill-3th-peach-40s',
        name: 'Peach-Finish 3-Thread Casual Cotton Twill',
        botanicalOrTechnicalName: '100% Combed Cotton • 40s x 40s / 120 x 76 • 2/1 Twill',
        origin: 'Ichalkaranji & Surat Weaving Clusters, Maharashtra/Gujarat',
        extractionOrMethod: 'Rapier Loom, Garment-Dye Ready / Continuous Reactive Dye, Diamond-Emery Peach Sueding',
        grade: 'Smart Casual Autumn/Winter Grade',
        purity: '100% Natural Cotton, Micro-Sueded Face, High Breathability',
        packaging: '100m rolls with moisture-proof polyethylene sheath and heavy kraft outer wrapping',
        leadTime: '15 - 20 Business Days',
        hsCodeStatus: 'Confirmed HS 52083310',
        hsnCode: '52083310',
        hsnCategory: 'HS 52083310 • Dyed 3-Thread Twill Shirting (≥85% Cotton, ≤200 g/m²)',
        documentation: ['Pilling Test Report Grade 4', 'Color Fastness to Perspiration', 'Formaldehyde-Free Verification'],
        description: 'Comfort-engineered 3-thread (2/1) twill shirting with a micro-brushed velvet peach finish under HS 52083310. Combines the substantial diagonal structure of twill with a cozy, ultra-soft tactile feel for weekend collections and button-downs.',
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80',
        applications: ['Smart-Casual Button Downs', 'Autumn/Winter Over-Shirts', 'Preppy Garment-Washed Apparel'],
        specs: {
          'HSN Code': '52083310',
          'Tariff Description': 'Dyed 3-thread or 4-thread twill shirting, cotton ≥ 85%, ≤ 200 g/m²',
          'Weave Pattern': '3-Thread Soft Twill (2/1 Micro-Sueded)',
          'Yarn Count': '40s Combed x 40s Combed',
          'Density (EPI x PPI)': '120 x 76',
          'Weight': '155 g/m² (GSM)',
          'Width': '58 inches (147 cm) Usable',
          'Color Fastness': 'Grade 4',
          'Shrinkage': '< 2.0%'
        }
      },
      {
        id: 'fab-poplin-100s',
        name: 'Executive Compact Cotton Poplin',
        botanicalOrTechnicalName: '100% Combed Compact Cotton • 100/2 x 100/2 • 144 x 80 • Plain Weave',
        origin: 'Ahmedabad & Coimbatore Weaving Clusters, India',
        extractionOrMethod: 'Air-Jet Loom Woven, Mercerized & Pre-shrunk, Reactive Piece-Dyed',
        grade: 'Export Shirting Grade',
        purity: '100% Cotton, Azo-Free Reactive Dyeing',
        packaging: 'Double-Fold Rolls in Poly & Woven Burlap wrapping (100m/roll)',
        leadTime: '15 - 20 Business Days',
        hsCodeStatus: 'Confirmed HS 52083120',
        hsnCode: '52083120',
        hsnCategory: 'HS 52083120 • Plain Weave Cotton Shirting (≤200 g/m²)',
        documentation: ['Lab Test Report', 'Color Fastness Report', 'Tensile Strength Test'],
        description: 'High-density combed cotton poplin offering a smooth surface, crisp handle, and lustrous finish for premium dress shirts and tailored apparel.',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
        applications: ['Formal Dress Shirts', 'Uniform Programs', 'Bespoke Tailoring']
      },
      {
        id: 'fab-oxford-50s',
        name: 'Royal Oxford Basket-Weave Shirting',
        botanicalOrTechnicalName: '50s x 50s Cotton Oxford Weave • Basket Weave',
        origin: 'Surat Textile Hub, India',
        extractionOrMethod: 'Rapier Loom with Reactive Yarn Dyeing',
        grade: 'Garment Manufacturing Grade',
        purity: 'Breathable, High Durability Weave',
        packaging: '120m Flat Folded Rolls with Edge Protectors',
        leadTime: '18 - 25 Business Days',
        hsCodeStatus: 'Confirmed HS 52083990',
        hsnCode: '52083990',
        hsnCategory: 'HS 52083990 • Other Woven Cotton Shirting (≤200 g/m²)',
        documentation: ['Test Certificate', 'Shrinkage Test (<2%)', 'Color Fastness to Washing'],
        description: 'Textured basket-weave Oxford shirting providing natural breathability, substantial drape, and classic versatility for casual-to-business apparel.',
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80',
        applications: ['Button-Down Oxford Shirts', 'Casual Menswear', 'Corporate Apparel']
      },
      {
        id: 'fab-linen-60lea',
        name: 'Pure Flax Linen Shirting (60 Lea)',
        botanicalOrTechnicalName: '100% Pure Natural Flax Fiber • Plain Weave',
        origin: 'Bhilwara / Surat Weaving Clusters, India',
        extractionOrMethod: 'Wet Spun, Aerodynamic Softened',
        grade: 'Summer & Resort Grade',
        purity: 'Pure Natural Bast Fiber',
        packaging: 'Vacuum Sealed Rolls with Barcode Identification',
        leadTime: '20 Business Days',
        hsCodeStatus: 'Confirmed HS 53091910',
        hsnCode: '53091910',
        hsnCategory: 'HS 53091910 • Woven Fabrics of Flax / Pure Linen',
        documentation: ['Flax Verification Certificate', 'Lab Test Report', 'Azo-Free Dyeing Certificate'],
        description: 'Naturally breathable, lightweight 60 Lea linen fabric with subtle slub texture and relaxed drape for warm-weather garment collections.',
        image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
        applications: ['Resort Wear', 'Summer Tunics & Shirts', 'Casual Blouses']
      }
    ]
  },
  {
    id: 'perfumes-attars',
    slug: 'perfumes-attars',
    title: 'Perfumes, Attars & Artisanal Fragrances',
    subtitle: 'HSN-Classified Indian Perfumery, Hydro-Distillates, Essential Oils & Deodorants',
    assetReferenceName: 'Perfumes & Attars Asset Reference',
    heroImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
    summary: 'India is the historic cradle of natural perfumery and essential oil distillation. Navantara Exim structures compliant global exports for the most demanded categories classified under precise 8-digit Indian HSN codes: traditional Attars distilled into fixed carrier oils (HSN 33019031), high-volume hydro-distilled Rose Water (HSN 33030020), coastal Keora Water (HSN 33030030), aqueous floral hydrosols (HSN 33019060), key export essential oils under sub-chapter 3301 (Rose, Lemongrass, Palmarosa, Patchouli, Davana, and Sandalwood), and clean non-aerosol roll-ons, sticks & deodorant creams (HSN 33072000). Every batch is verified through GC-MS profiling, IFRA compliance dossiers, and UN-certified export packaging.',
    productRange: [
      'Attars in Fixed Oil Base (HSN 33019031: Pure Mitti Attar, Ruh Khus & Shamama in Fixed Carrier Oil)',
      'Rose Water / Gulab Jal (HSN 33030020: Traditional Hydro-Distilled Rose Petal Distillate)',
      'Keora Water (HSN 33030030: Pandanus odoratissimus Coastal Distillate)',
      'Aqueous Distillates & Solutions of Essential Oils (HSN 33019060: Natural Floral Waters & Hydrosols)',
      'Key Exported Essential Oils (Sub-Chapter 3301: Rose, Lemongrass, Palmarosa, Patchouli, Davana, Sandalwood)',
      'Roll-Ons, Sticks & Deodorant Creams (HSN 33072000: Non-Aerosol, Emulsions & Alcohol-Free Solids)'
    ],
    services: [
      '8-Digit HSN Classification & Customs Harmonized Tariff Verification',
      'GC-MS Fingerprinting (Chiral Purity, Bio-Active Marker Assays & Adulteration Screening)',
      'IFRA 50th Amendment Certificates, 26-Allergen Breakdown & CPSR Safety Dossiers',
      'UN-Approved Dangerous Goods (DG) Packaging & Non-Alcoholic Halal/Vegan Compliance',
      'Direct Sourcing from Heritage Distilleries in Kannauj, Mysore, Ganjam, and Tamil Nadu'
    ],
    specMatrixHeaders: ['Product Item', '8-Digit HSN Code', 'Botanical / Technical Standard', 'Distillation & Base Carrier', 'Export Packaging', 'Lead Time', 'Compliance Dossier'],
    products: [
      // 1. Attars in Fixed Oil Base (HSN 33019031)
      {
        id: 'attar-mitti-33019031',
        name: 'Kannauj Pure Mitti Attar (Baked Earth in Fixed Oil)',
        botanicalOrTechnicalName: 'Hydro-distilled Gangetic Alluvial Clay in Pure Sandalwood Carrier Oil',
        origin: 'Kannauj (Perfume Capital of India), Uttar Pradesh',
        extractionOrMethod: 'Traditional Deg & Bhapka Hydro-Distillation into Fixed Carrier Oil',
        grade: '100% Pure Heritage Attar (Alcohol-Free)',
        purity: '100% Natural, Zero Synthetic Solvents, Non-Alcoholic',
        packaging: '500ml - 5kg Aluminum Carboys / 12ml Crystal Tola Vials',
        leadTime: '7 - 12 Business Days',
        hsnCode: '33019031',
        hsnCategory: 'Attars in Fixed Oil Base',
        hsCodeStatus: 'HSN 33019031 Confirmed',
        documentation: ['GC-MS Purity Fingerprint', 'IFRA Compliance Statement', 'MSDS', 'Certificate of Origin'],
        description: 'World-renowned Kannauj petrichor essence formulated by distilling sun-baked Gangetic alluvial clay directly into a base of natural fixed carrier oil (pure sandalwood base). Revered by international niche perfumers for evocative, therapeutic petrichor aroma.',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
        applications: ['Niche Luxury Perfumery', 'Natural Aromatherapy Formulations', 'Personal Signature Attars']
      },
      {
        id: 'attar-khus-33019031',
        name: 'Ruh Khus Attar (Wild Vetiver in Fixed Oil Base)',
        botanicalOrTechnicalName: 'Vetiveria zizanioides Roots Hydro-distilled in Sandalwood Carrier Base',
        origin: 'Hasayan & Kannauj, Uttar Pradesh / Rajasthan Border, India',
        extractionOrMethod: 'Traditional Deg & Bhapka Copper Still Distillation into Fixed Carrier Oil',
        grade: 'Grade A Traditional Attar (Green Khus)',
        purity: '100% Pure Natural Essence, Zero Dilution',
        packaging: '1kg - 10kg Export Aluminum Bottles / 10ml - 25ml Flacons',
        leadTime: '7 - 14 Business Days',
        hsnCode: '33019031',
        hsnCategory: 'Attars in Fixed Oil Base',
        hsCodeStatus: 'HSN 33019031 Confirmed',
        documentation: ['GC-MS Composition Report', 'COA', 'Allergen Analysis', 'Certificate of Origin'],
        description: 'Authentic Indian Ruh Khus attar created by slow hydro-distillation of wild-harvested green vetiver roots into pure sandalwood carrier oil. Provides legendary natural cooling notes and profound fixative longevity.',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
        applications: ['Prestige Perfume Fixatives', 'Cooling Body Oils', 'Luxury Masculine & Oriental Accords']
      },
      {
        id: 'attar-shamama-33019031',
        name: 'Traditional Shamama & Saffron Attar Compound',
        botanicalOrTechnicalName: '40+ Botanical & Spice Co-Distillate in Pure Fixed Oil Base',
        origin: 'Kannauj, Uttar Pradesh, India',
        extractionOrMethod: 'Multi-Stage Copper Deg Co-Distillation into Fixed Carrier Oil',
        grade: 'Oriental Master Perfume Attar Grade',
        purity: 'Alcohol-Free 100% Concentrated Attar',
        packaging: '1kg - 25kg Aluminum Casks / Decorated 12ml Vials',
        leadTime: '10 - 15 Business Days',
        hsnCode: '33019031',
        hsnCategory: 'Attars in Fixed Oil Base',
        hsCodeStatus: 'HSN 33019031 Confirmed',
        documentation: ['GC-MS Fingerprint', 'IFRA 50th Compliance Dossier', 'MSDS', 'COA'],
        description: 'Historic Indian spiced attar formulated by distilling rare botanicals, Kashmiri saffron, henna leaves, and spices into a warm fixed carrier oil base over weeks of copper vessel maceration. Rich, multifaceted sillage for oriental fragrance houses.',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
        applications: ['Gulf & Middle East Export', 'Oriental Perfume Blending', 'Sacred Ceremonial Scents']
      },

      // 2. Rose Water / Gulab Jal (HSN 33030020)
      {
        id: 'rosewater-gulabjal-33030020',
        name: 'Traditional Pure Rose Water / Gulab Jal',
        botanicalOrTechnicalName: 'Pure Hydro-Distilled Rosa damascena Flower Water (100% Undiluted Distillate)',
        origin: 'Hasayan, Aligarh & Kannauj (Rose Belt), Uttar Pradesh, India',
        extractionOrMethod: 'Traditional Wood-Fired Copper Deg Hydro-Distillation of Morning Fresh Petals',
        grade: 'Cosmetic & Pharmaceutical Grade (Food/Flavor Grade on request)',
        purity: 'Zero Alcohol, Zero Added Fragrance, 100% Steam-Condensate',
        packaging: '25L, 50L, 200L Food-Grade HDPE Barrels / 100ml - 250ml Cosmetic Spray Bottles',
        leadTime: '5 - 10 Business Days',
        hsnCode: '33030020',
        hsnCategory: 'Rose Water / Gulab Jal',
        hsCodeStatus: 'HSN 33030020 Confirmed',
        documentation: ['Microbiological Analysis', 'Certificate of Analysis (COA)', 'Heavy Metal Test', 'Certificate of Origin'],
        description: 'Traditional hydro-distilled rose petal distillate exported in high volumes as cosmetic skin mists, gentle facial toners, and luxury formulation bases. Condenses the exquisite volatile essence of millions of handpicked Indian Damask roses without preservatives or alcohol.',
        image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
        applications: ['Cosmetic Skin Mists & Toners', 'Clean Beauty Formulations', 'Spa Rituals & Confectionery']
      },

      // 3. Keora Water (HSN 33030030)
      {
        id: 'keora-water-33030030',
        name: 'Traditional Pure Keora (Kewra) Water',
        botanicalOrTechnicalName: 'Aqueous Distillate of Pandanus odoratissimus Flower Spadices',
        origin: 'Ganjam Coast, Odisha & Kannauj, India',
        extractionOrMethod: 'Traditional Deg Hydro-Distillation of Fragrant Male Pandanus Spadices',
        grade: 'Premium Fragrance & Culinary Grade Distillate',
        purity: '100% Pure Aqueous Distillate, Zero Chemical Additives',
        packaging: '25L - 200L Sealed HDPE Drums / 500ml - 1L Amber Flacons',
        leadTime: '7 - 12 Business Days',
        hsnCode: '33030030',
        hsnCategory: 'Keora Water',
        hsCodeStatus: 'HSN 33030030 Confirmed',
        documentation: ['GC Purity Profiling', 'Microbiological Clearance', 'COA', 'Certificate of Origin'],
        description: 'Natural distillate of Pandanus odoratissimus flowers sourced from the pristine coastal groves of Ganjam (Odisha). Renowned for an intensely sweet, floral-honeyed aroma used extensively in prestige cosmetics, niche perfumery, and premium culinary sectors.',
        image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
        applications: ['Prestige Cosmetics & Toners', 'Niche Perfume Aqueous Accords', 'Luxury Culinary & Flavor Sector']
      },

      // 4. Aqueous Distillates & Solutions of Essential Oils (HSN 33019060)
      {
        id: 'aqueous-distillates-33019060',
        name: 'Natural Botanical Hydrosols & Aqueous Distillates',
        botanicalOrTechnicalName: 'Aqueous Distillates & Solutions of Pure Essential Oils (Khus, Jasmine & Lavender)',
        origin: 'Tamil Nadu, Karnataka & Uttar Pradesh, India',
        extractionOrMethod: 'Direct Steam-Distillation Condensate Hydro-Separation',
        grade: 'High-Purity Botanical Hydrosol Grade',
        purity: 'Non-Alcoholic, Preservative-Free True Hydrosols',
        packaging: '25L - 200L UN-Certified Drums / 1000L IBC Totes',
        leadTime: '5 - 10 Business Days',
        hsnCode: '33019060',
        hsnCategory: 'Aqueous Distillates & Solutions of Essential Oils',
        hsCodeStatus: 'HSN 33019060 Confirmed',
        documentation: ['Microbiological Clearance', 'Phytochemical Fingerprint', 'MSDS', 'COA'],
        description: 'Generic natural floral waters and botanical hydrosols distilled from Indian vetiver, jasmine sambac, chamomile, and lavender. Serves international organic cosmetic brands seeking water-replacement bases for creams, lotions, and soothing face mists.',
        image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
        applications: ['Organic Cosmetic Formulation Water Bases', 'Facial & Scalp Tonics', 'Aromatherapeutic Wellness Mists']
      },

      // 5. Key Exported Essential Oils (Sub-Chapter 3301)
      {
        id: 'oil-rose-33012938',
        name: 'Indian Rose Oil / Ruh Gulab Pure Essential Oil',
        botanicalOrTechnicalName: 'Rosa damascena Pure Essential Oil (Otto)',
        origin: 'Hasayan & Kannauj, Uttar Pradesh, India',
        extractionOrMethod: 'Fractional Hydro-Distillation with Florentine Separator',
        grade: '100% Pure Therapeutic & Fine Perfumery Grade',
        purity: '100% Volatile Essential Oil, Zero Fixed Oil Carrier',
        packaging: '100ml, 500ml, 1kg, 5kg UN-Approved Aluminum Bottles',
        leadTime: '7 - 12 Business Days',
        hsnCode: '33012938',
        hsnCategory: 'Key Exported Essential Oils (Sub-Chapter 3301)',
        hsCodeStatus: 'HSN 33012938 Confirmed',
        documentation: ['GC-MS Peak Analysis (Citronellol/Geraniol/Nerol)', 'IFRA Certificate', 'COA', 'MSDS'],
        description: 'Pure 100% volatile essential oil of Rosa damascena produced in the historic Gangetic plains. Characterized by high natural geraniol and citronellol ratios, providing rich sweet-honey floral notes for master perfumers and luxury anti-aging skincare.',
        image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
        applications: ['Prestige Fine Perfumery', 'Ultra-Luxury Anti-Aging Cosmetics', 'High-End Aromatherapy']
      },
      {
        id: 'oil-lemongrass-33012942',
        name: 'Indian Lemongrass Oil (High-Citral)',
        botanicalOrTechnicalName: 'Cymbopogon flexuosus Pure Essential Oil',
        origin: 'Kerala & Assam, India',
        extractionOrMethod: 'Fresh Leaf Steam Distillation in High-Capacity Retorts',
        grade: 'Export Industrial & Fine Fragrance Grade (75%+ Citral Content)',
        purity: '100% Pure & Natural Volatile Oil',
        packaging: '25kg Aluminum Casks / 180kg Epoxy-Lined Steel Drums',
        leadTime: '5 - 10 Business Days',
        hsnCode: '33012942',
        hsnCategory: 'Key Exported Essential Oils (Sub-Chapter 3301)',
        hsCodeStatus: 'HSN 33012942 Confirmed',
        documentation: ['GC-MS Citral Assay', 'COA', 'Technical Data Sheet (TDS)', 'MSDS'],
        description: 'Major Indian export essential oil steam-distilled from freshly harvested Cymbopogon flexuosus leaves. High citral content delivers vibrant natural citrus notes for perfumery, natural soaps, insect-repellent formulations, and aromatherapy.',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
        applications: ['Citrus Fragrance Blends', 'Natural Cleansers & Soaps', 'Industrial Flavors & Aromatics']
      },
      {
        id: 'oil-palmarosa-33012933',
        name: 'Indian Palmarosa Oil (High-Geraniol)',
        botanicalOrTechnicalName: 'Cymbopogon martinii var. motia Essential Oil',
        origin: 'Madhya Pradesh & Maharashtra, India',
        extractionOrMethod: 'Low-Pressure Steam Distillation of Flowering Grass Tops',
        grade: 'Cosmetic & Perfumery Grade (88%+ Total Geraniol)',
        purity: '100% Pure, Unadulterated Essential Oil',
        packaging: '25kg Aluminum Casks / 190kg Steel Drums',
        leadTime: '5 - 10 Business Days',
        hsnCode: '33012933',
        hsnCategory: 'Key Exported Essential Oils (Sub-Chapter 3301)',
        hsCodeStatus: 'HSN 33012933 Confirmed',
        documentation: ['GC-MS Geraniol/Geranyl Acetate Profile', 'COA', 'MSDS', 'Certificate of Origin'],
        description: 'Wild-harvested and cultivated Cymbopogon martinii essential oil boasting 88%+ natural geraniol. Widely utilized worldwide by cosmetic formulators as a natural rose-scented active, skin-balancing agent, and premium soap fragrance compound.',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
        applications: ['Natural Rose Accord Formulations', 'Acne & Skin Balancing Serums', 'Luxury Scented Soaps']
      },
      {
        id: 'oil-patchouli-33012934',
        name: 'Indian Aged Patchouli Oil',
        botanicalOrTechnicalName: 'Pogostemon cablin Essential Oil (30%+ Patchoulol)',
        origin: 'Karnataka & Coastal Kerala, India',
        extractionOrMethod: 'Shade-Cured Leaf Steam Distillation & Controlled Cellar Aging',
        grade: 'Aged Dark Fine Perfumery Grade',
        purity: '100% Pure Volatile Essential Oil, Zero Dilution',
        packaging: '25kg UN Aluminum Carboys / 200kg Iron Drums',
        leadTime: '7 - 12 Business Days',
        hsnCode: '33012934',
        hsnCategory: 'Key Exported Essential Oils (Sub-Chapter 3301)',
        hsCodeStatus: 'HSN 33012934 Confirmed',
        documentation: ['GC-MS Patchoulol Content Report', 'COA', 'IFRA Compliance Statement', 'MSDS'],
        description: 'Deep, earthy, aged patchouli oil distilled from fermented Pogostemon cablin leaves in Southern India. High natural patchoulol content guarantees exceptional fixative capacity in oriental, chypre, and woody perfume compositions.',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
        applications: ['Chypre & Oriental Perfume Bases', 'Fine Incense Formulations', 'Natural Long-Lasting Fixatives']
      },
      {
        id: 'oil-davana-33012944',
        name: 'Indian Davana Oil (Adaptive Fruity-Herbaceous)',
        botanicalOrTechnicalName: 'Artemisia pallens Pure Essential Oil',
        origin: 'Karnataka, Tamil Nadu & Andhra Pradesh, India',
        extractionOrMethod: 'Steam Distillation of Fresh Tender Flowering Aerial Shoots',
        grade: 'Export Fine Fragrance Grade (High Davanone)',
        purity: '100% Pure Undiluted Botanical Oil',
        packaging: '1kg, 5kg, 25kg Aluminum Canisters',
        leadTime: '7 - 14 Business Days',
        hsnCode: '33012944',
        hsnCategory: 'Key Exported Essential Oils (Sub-Chapter 3301)',
        hsCodeStatus: 'HSN 33012944 Confirmed',
        documentation: ['GC-MS Davanone Assay', 'IFRA Certificate', 'COA', 'MSDS'],
        description: 'Exclusively Indian botanical treasure distilled from Artemisia pallens. Celebrated globally for unique olfactory adaptive properties—reacting uniquely with individual human skin chemistry—and delivering luscious dried-fruit, apricot, and herbal tea notes.',
        image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
        applications: ['Adaptive Signature Perfumery', 'Fruity-Woody Fine Accords', 'Gourmet Flavors & Liqueurs']
      },
      {
        id: 'oil-sandalwood-33012937',
        name: 'East Indian Mysore Sandalwood Oil',
        botanicalOrTechnicalName: 'Santalum album Heartwood Essential Oil (90%+ Santalols)',
        origin: 'Karnataka & Tamil Nadu, India (Government-Auctioned Heartwood)',
        extractionOrMethod: 'High-Temperature Hydro-Steam Distillation of Aged Heartwood',
        grade: 'Pharmacopoeial & Master Perfumery Grade',
        purity: '100% Pure Legal Santalum album, Zero Amyris Adulteration',
        packaging: '500g, 1kg, 5kg UN Tamper-Evident Aluminum Flacons',
        leadTime: '10 - 15 Business Days',
        hsnCode: '33012937',
        hsnCategory: 'Key Exported Essential Oils (Sub-Chapter 3301)',
        hsCodeStatus: 'HSN 33012937 Confirmed',
        documentation: ['Alpha & Beta Santalol GC-MS Assay', 'Legal Wood Transit Permit', 'COA', 'CITES/Forest Clearance'],
        description: 'The pinnacle of aromatic oils. Sourced from legally harvested mature Santalum album heartwood in Southern India, yielding 90%+ alpha and beta santalols. Unrivaled warm, velvety, creamy wood sillage serving as the holy grail base note worldwide.',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
        applications: ['Master Perfumery Fixative', 'Prestige Anti-Aging Skincare', 'Sacred Ritual Oils']
      },

      // 6. Roll-Ons, Sticks & Deodorant Creams (HSN 33072000)
      {
        id: 'deo-rollon-sticks-33072000',
        name: 'Botanical Roll-Ons & Stick Deodorants (Non-Aerosol)',
        botanicalOrTechnicalName: 'Non-Aerosol Water/Oil-Based Emulsions with Mineral Alum & Plant Actives',
        origin: 'Bangalore & Kannauj, India',
        extractionOrMethod: 'Cold-Emulsified Botanical Base with Micro-Mineral Potassium Alum',
        grade: 'Clean-Label Organic Personal Care Grade',
        purity: '0% Aluminum Chlorohydrate, 0% Synthetic Fragrance, 0% Propellant Gas',
        packaging: '50ml Frosted Glass Roll-Ons / 75g Biodegradable Paper Sticks',
        leadTime: '10 - 14 Business Days',
        hsnCode: '33072000',
        hsnCategory: 'Roll-Ons, Sticks & Deodorant Creams',
        hsCodeStatus: 'HSN 33072000 Confirmed',
        documentation: ['Cosmetic Safety Dossier (CPSR)', 'Microbiological Challenge Test', 'COA', 'Allergen Analysis'],
        description: 'Non-aerosol, water/oil-based emulsions, and alcohol-free solid stick deodorants formulated with natural potassium mineral alum, zinc ricinoleate, and cooling Indian vetiver & sandalwood extracts for clean 24-hour odor defense.',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
        applications: ['Clean Beauty Retail Brands', 'DTC Personal Care Lines', 'Eco-Luxury Grooming Ranges']
      },
      {
        id: 'deo-creams-solids-33072000',
        name: 'Artisanal Deodorant Creams & Alcohol-Free Solids',
        botanicalOrTechnicalName: 'Water/Oil-Based Solid Creams & Balms with Organic Shea, Arrowroot & Essential Oils',
        origin: 'Tamil Nadu & Kerala, India',
        extractionOrMethod: 'Small-Batch Handcrafted Molten Blending with Cold-Pressed Lipids',
        grade: 'Artisanal Eco-Cosmetic Grade',
        purity: 'Alcohol-Free Solid Formulation, 100% Biodegradable Ingredients',
        packaging: '50g - 100g Recyclable Amber Glass Jars / Embossed Vintage Aluminum Tins',
        leadTime: '10 - 15 Business Days',
        hsnCode: '33072000',
        hsnCategory: 'Roll-Ons, Sticks & Deodorant Creams',
        hsCodeStatus: 'HSN 33072000 Confirmed',
        documentation: ['Stability Testing Report', 'Dermatological Patch Test', 'MSDS', 'COA'],
        description: 'Smooth, non-greasy deodorant creams and alcohol-free solids blending organic plant butters, arrowroot starch, and pure Indian essential oils. Specifically developed for international zero-waste beauty and eco-luxury bath retail shelves.',
        image: 'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=800&q=80',
        applications: ['Zero-Waste Eco Boutiques', 'Luxury Spa Personal Care', 'Sensitive Skin Formulations']
      }
    ]
  },
  {
    id: 'speciality-products',
    slug: 'speciality-products',
    title: 'Speciality Goods',
    subtitle: 'Chapter 24 Specialty Tobacco & Nicotiana Preparations (HS 2403.99)',
    assetReferenceName: 'Speciality Goods Asset Reference',
    heroImage: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=1200&q=80',
    summary: 'Export-grade Indian manufactured tobacco and specialty preparations under Chapter 24 (Customs Tariff Heading HS 2403.99). Sourced from registered primary processing facilities across Gujarat, Andhra Pradesh, and Uttar Pradesh with full Tobacco Board of India RCMC compliance, DPPQS Phytosanitary certification, CORESTA testing, and destination-customized hermetic packaging.',
    productRange: [
      'HS 24039910: Chewing Tobacco & Filter Khaini (Micro-Porous Portions & Loose Flakes)',
      'HS 24039920: Preparations Containing Chewing Tobacco (Compounded Spiced Blends)',
      'HS 24039930: Jarda Scented Tobacco (Heritage Zafrani & Silver Flakes)',
      'HS 24039940: Snuff (Micro-Milled Madras Dry, Moist & Mentholated)',
      'HS 24039970: Cut-Tobacco (Rag Cut 0.6mm-1.0mm Flue-Cured Virginia & Burley)',
      'Tobacco Board of India (RCMC) & DPPQS Phytosanitary Compliant Consignments',
      'Hermetic Nitrogen-Flushed Cans, Vacuum Pouches & Export C-48 Cartons'
    ],
    services: [
      'Tobacco Board of India RCMC Registration & Export Clearance',
      'Destination-Customized Health Warning Packaging (GSO 246/2012, TPD, FDA)',
      'Airtight Nitrogen-Flushed Vacuum Packaging (Cans, Jars, C-48 Master Cases)',
      'Port Logistics & Customs Inspection at Nhava Sheva (JNPT) & Mundra Port'
    ],
    specMatrixHeaders: ['Product / Tariff Item', 'HS Code', 'Leaf Variety / Matrix', 'Processing / Curing Method', 'Moisture & Nicotine Profile', 'Export Packaging Format', 'Compliance Status'],
    products: [
      {
        id: 'tob-24039910-khaini',
        name: 'Chewing Tobacco / Filter Khaini Portions & Flakes',
        botanicalOrTechnicalName: 'Nicotiana rustica & N. tabacum Flakes with Mineral Alkali Matrix',
        origin: 'Gujarat & Bihar Processing Belts, India',
        extractionOrMethod: 'Sun-Cured, Fermentation Conditioned & Micro-Pouched',
        grade: 'Export Grade A Filter Portion / Loose Flake',
        purity: 'Uniform Cut Flakes, Controlled Moisture (18-22%), Alkalinity pH 8.2-8.6',
        packaging: 'Non-woven porous filter sachets (0.5g–1.0g) in nitrogen-flushed cans (20 portions/can) or 50g vacuum pouches; master export cartons',
        leadTime: '12 - 18 Business Days',
        hsCodeStatus: 'Confirmed',
        hsnCode: '24039910',
        hsnCategory: 'HS 24039910 • Chewing Tobacco / Filter Khaini',
        documentation: ['Tobacco Board RCMC', 'Phytosanitary Certificate', 'COA (Nicotine & Moisture Assay)', 'Health Warning Compliant Labels', 'Certificate of Origin'],
        description: 'Premium Indian filter khaini and chewing tobacco manufactured from selected sun-cured Nicotiana rustica and tabacum leaf flakes. Conditioned with food-grade edible mineral matrices and mild menthol/spice infusions, sealed in non-woven food-grade micro-porous pouches to ensure uniform release without direct particulate contact. Sourced for international licensed specialty tobacco distributors.',
        image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
        applications: ['Licensed Tobacco Importers', 'Smokeless Tobacco Retailers', 'Traditional Ethnic Distribution Networks']
      },
      {
        id: 'tob-24039920-prep',
        name: 'Preparations Containing Chewing Tobacco (Compounded Blends)',
        botanicalOrTechnicalName: 'Compounded Nicotiana Flakes Infused with Spices, Saffron & Floral Essences',
        origin: 'Uttar Pradesh (Kannauj & Kanpur) & Gujarat, India',
        extractionOrMethod: 'Steam-Cured Tobacco Flakes Blended with Essential Oils & Spices',
        grade: 'Export Luxury Compounded Grade',
        purity: 'Tobacco content calibrated to import regulations; 100% Food-Grade Aromatic Infusions',
        packaging: 'Airtight multi-layer barrier zip pouches (25g, 50g, 100g) with nitrogen flush, or sealed aluminum jars; 10kg master bulk cases',
        leadTime: '14 - 20 Business Days',
        hsCodeStatus: 'Confirmed',
        hsnCode: '24039920',
        hsnCategory: 'HS 24039920 • Preparations Containing Chewing Tobacco',
        documentation: ['Tobacco Board Clearance', 'Phytosanitary Dossier', 'GC-MS Aroma Assay', 'Moisture & Nicotine Assay', 'Heavy Metal Test', 'Certificate of Origin'],
        description: 'Specialty compounded chewing tobacco preparations created by curing high-grade flue-cured and sun-cured tobacco leaf flakes with precious aromatic distillates—including natural cardamom oil, clove essence, kewra distillate, and hint of saffron. Formulated strictly for licensed international importers seeking authentic Indian heritage masticatory preparations with stable shelf-life and moisture integrity.',
        image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
        applications: ['Heritage Tobacco Wholesalers', 'Specialty Confectionery Importers', 'Regional Duty-Free Markets']
      },
      {
        id: 'tob-24039930-jarda',
        name: 'Jarda Scented Tobacco (Heritage Zafrani Flakes)',
        botanicalOrTechnicalName: 'Flue-Cured Rustica Leaf Boiled & Infused with Silver/Saffron Attar',
        origin: 'Kannauj & Lucknow Regional Clusters, India',
        extractionOrMethod: 'Traditional Slow-Infusion Decoction with Botanical Attars',
        grade: 'Heritage Royal Grade (Zafrani / Rose / Sandal Infused)',
        purity: 'Slow-aged sun-cured tobacco leaf flakes infused with food-grade attars; Silver leaf (vark) garnishing option',
        packaging: 'Embossed gold & silver metal tins with inner foil seal (50g, 100g) and 250g tamper-evident metal cans; packed in export wooden/corrugated shippers',
        leadTime: '15 - 20 Business Days',
        hsCodeStatus: 'Confirmed',
        hsnCode: '24039930',
        hsnCategory: 'HS 24039930 • Jarda Scented Tobacco',
        documentation: ['Tobacco Board RCMC', 'Certificate of Analysis (Nicotine 2.5-3.8%, Moisture 12-14%)', 'Microbial Limits', 'Phytosanitary Certificate', 'GRL Test Report'],
        description: 'World-renowned Indian Zafrani Jarda scented tobacco. Crafted using centuries-old heritage methods: premium tobacco leaf flakes are gently de-ribbed, steeped in aromatic infusions of saffron, rosewater, kewra, and sandalwood extracts, then dried to perfection under controlled humidity. Delivers an opulent, rich aromatic bouquet prized across South Asian, Middle Eastern, and global connoisseur communities.',
        image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
        applications: ['Luxury Tobacco Boutiques', 'Middle East & GCC Heritage Markets', 'Specialized Pan Masala & Tobacco Blenders']
      },
      {
        id: 'tob-24039940-snuff',
        name: 'Snuff (Traditional Fine-Cut, Moist & Mentholated Nasal/Oral)',
        botanicalOrTechnicalName: 'Micro-Pulverized Fermented Nicotiana rustica Leaf Blend',
        origin: 'Andhra Pradesh & Tamil Nadu (Madras Snuff Belt), India',
        extractionOrMethod: 'Deep Curing, Controlled Fermentation & Ultra-Fine Micro-Milling',
        grade: 'Export Fine-Milled Grade (Dry / Moist / Mentholated)',
        purity: 'Screened to 100-200 mesh particle size; natural menthol, camphor & floral hydrosol options',
        packaging: '10g, 25g, 50g round seamless metal pocket tins with screw lids; 500g airtight jars; 25kg airtight drums for industrial repacking',
        leadTime: '10 - 15 Business Days',
        hsCodeStatus: 'Confirmed',
        hsnCode: '24039940',
        hsnCategory: 'HS 24039940 • Snuff',
        documentation: ['Tobacco Board Export Permission', 'Particle Mesh Analysis', 'Nicotine & Free Nicotine Assay', 'Heavy Metal Profile', 'DPPQS Phytosanitary Certificate'],
        description: 'Finely micro-milled traditional Indian nasal and oral snuff, renowned globally as Madras Snuff. Formulated from specially cured, high-nicotine Nicotiana rustica leaves subjected to traditional anaerobic fermentation to unlock rich tobacco undertones. Available in classic unflavored toasted dry snuff, cooling mentholated varieties, and delicately perfumed blends for international market distribution.',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
        applications: ['Nasal Snuff Importers', 'Heritage Tobacco Retailers', 'Specialty Smoke Shops in Europe & North America']
      },
      {
        id: 'tob-24039970-cuttobacco',
        name: 'Cut-Tobacco (Flue-Cured Virginia & Burley Rag Cut)',
        botanicalOrTechnicalName: 'Shredded Nicotiana tabacum Lam. Leaf (Cut Width 0.6mm - 1.0mm)',
        origin: 'Guntur (Andhra Pradesh) & Mysuru (Karnataka) Flue-Cured Belts, India',
        extractionOrMethod: 'Stemmed, Conditioned, Rotary Knife Shredded & Cylinder Dried',
        grade: 'Export Rag Cut / Pipe & Roll-Your-Own Grade',
        purity: 'Uniform shred length, stem content < 1.5%, conditioned moisture 13.5% ± 0.5%',
        packaging: '100g, 250g, 500g vacuum foil barrier pouches, 5kg/10kg bulk vacuum blocks, 100kg corrugated export C-48 cardboard cartons',
        leadTime: '10 - 15 Business Days',
        hsCodeStatus: 'Confirmed',
        hsnCode: '24039970',
        hsnCategory: 'HS 24039970 • Cut-Tobacco',
        documentation: ['Tobacco Board RCMC', 'CORESTA Testing Dossier', 'Particle Strand Assay', 'Moisture Retention Certificate', 'Phytosanitary Certificate', 'Bill of Lading'],
        description: 'Uniformly shredded cut-tobacco (rag cut) manufactured from top-tier Indian Flue-Cured Virginia (FCV) and sun-cured Burley leaves grown in the black and light soils of Andhra Pradesh and Karnataka. Processed with precise rotary guillotine slicing (0.6mm–1.0mm cut width) to ensure even combustion, smooth draw, and optimal filling value. Sourced for licensed cigarette manufacturers, pipe tobacco blenders, and Roll-Your-Own (RYO) commercial packers worldwide.',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
        applications: ['Licensed Cigarette & Bidi Manufacturers', 'Pipe Tobacco Blenders', 'Roll-Your-Own (RYO) Packers', 'Hookah Substrate Base']
      }
    ]
  }
];

// Helper to resolve slugs including historical/alias routes
export function findCategoryBySlug(slug: string): ProductCategory | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();

  // Direct match
  const direct = PRODUCT_CATEGORIES.find((c) => c.slug === normalized || c.id === normalized);
  if (direct) return direct;

  // Aliases
  if (
    normalized === 'cosmetics-skincare' ||
    normalized === 'clean-beauty' ||
    normalized === 'hs-33079090' ||
    normalized === '33079090' ||
    normalized === 'cosmetic-wipes'
  ) {
    return PRODUCT_CATEGORIES.find((c) => c.id === 'cosmetics');
  }
  if (normalized === 'powders-personal-care') {
    return PRODUCT_CATEGORIES.find((c) => c.id === 'personal-care');
  }
  if (
    normalized === 'shirting-fabrics' ||
    normalized === 'shirting' ||
    normalized === 'textiles' ||
    normalized === 'fabrics' ||
    normalized === 'cotton-fabrics' ||
    normalized === 'twill-shirting' ||
    normalized === 'hs-52083310' ||
    normalized === '52083310'
  ) {
    return PRODUCT_CATEGORIES.find((c) => c.id === 'textiles');
  }
  if (
    normalized === 'botanical-products' ||
    normalized === 'perfumes' ||
    normalized === 'attars' ||
    normalized === 'deodorants' ||
    normalized === 'attars-fragrances' ||
    normalized === 'perfumes-attars' ||
    normalized === 'artisanal-fragrances'
  ) {
    return PRODUCT_CATEGORIES.find((c) => c.id === 'perfumes-attars');
  }
  if (
    normalized === 'specialty-products' ||
    normalized === 'speciality-goods' ||
    normalized === 'specialty-goods' ||
    normalized === 'specialty' ||
    normalized === 'speciality' ||
    normalized === 'tobacco' ||
    normalized === 'hs-2403' ||
    normalized === '2403' ||
    normalized === '240399' ||
    normalized === '24039910' ||
    normalized === '24039920' ||
    normalized === '24039930' ||
    normalized === '24039940' ||
    normalized === '24039970' ||
    normalized === 'khaini' ||
    normalized === 'jarda' ||
    normalized === 'snuff' ||
    normalized === 'cut-tobacco'
  ) {
    return PRODUCT_CATEGORIES.find((c) => c.id === 'speciality-products');
  }

  return undefined;
}
