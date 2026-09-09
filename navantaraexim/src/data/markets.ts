import { MarketCorridor } from '../types';

export const MARKET_CORRIDORS: MarketCorridor[] = [
  {
    id: 'usa',
    slug: 'usa',
    name: 'United States of America',
    flag: '🇺🇸',
    title: 'Indian Products for USA Importers & Brands',
    overview: 'Direct export solutions connecting verified Indian manufacturers with US distributors, wholesalers, Amazon FBA aggregators, and private label brands under US FDA, MoCRA, and USDA compliance.',
    keyProducts: [
      'Bulk Essential Oils & Terpenes (Lavender, Peppermint, Sandalwood)',
      'Clean Beauty Skincare & Cosmetics (MoCRA Registered)',
      '100% Cotton & Linen Shirting Fabrics (Garment Cutters)',
      'Standardized Botanical Extracts (Ashwagandha, Curcumin for Dietary Supplements)'
    ],
    targetPorts: ['Port of New York / New Jersey', 'Port of Los Angeles / Long Beach', 'Port of Savannah', 'Port of Houston', 'JFK & ORD Air Cargo'],
    transitTime: 'Ocean FCL/LCL: 26 - 32 Days | Air Freight: 3 - 5 Days',
    complianceCertifications: [
      'US FDA Food Facility Registration',
      'MoCRA (Modernization of Cosmetics Regulation Act) Compliance',
      'USDA Organic Certification',
      'Proposition 65 Heavy Metal & Toxicant Screen',
      'TSCA & EPA Import Declarations'
    ],
    tariffsAndDuties: 'HTS Chapter 3301 (Essential Oils: Duty-Free to 3%), Chapter 5208 (Cotton Shirting: 5% - 10%), Chapter 2938 (Phytochemicals: 3.7%). GSP and MFN rates applied accurately.',
    buyerChecklist: [
      'Obtain Customs Bond (Continuous or Single Entry)',
      'Verify FDA Prior Notice submission 2-4 hours prior to port arrival',
      'Confirm ISF 10+2 (Importer Security Filing) 24 hours prior to India vessel departure',
      'Review Certificate of Analysis (COA) with third-party testing',
      'Inspect tamper-evident palletization with slip sheets and corner protectors'
    ]
  },
  {
    id: 'uae-gcc',
    slug: 'uae-gcc',
    name: 'UAE & GCC Region',
    flag: '🇦🇪',
    title: 'Indian Products for UAE, Saudi Arabia & GCC Trade',
    overview: 'Fast-track Gulf corridor leveraging the India-UAE CEPA (Comprehensive Economic Partnership Agreement) with near-zero duties, preferential clearance at Jebel Ali, and dedicated Halal & GSO compliance.',
    keyProducts: [
      'Artisanal Attars, Oudh & Arabian Fine Fragrances',
      'Aerosol Deodorants & Antiperspirant Body Sprays',
      'Heritage Tobacco, Chewing Blends & Scented Varieties',
      'Cosmetics, Skin Brightening Creams & Talc Powders'
    ],
    targetPorts: ['Jebel Ali Port (Dubai)', 'Khalifa Port (Abu Dhabi)', 'King Abdulaziz Port (Dammam)', 'Jeddah Islamic Port', 'Hamad Port (Qatar)'],
    transitTime: 'Ocean FCL/LCL: 4 - 7 Days | Air Cargo: 24 - 48 Hours',
    complianceCertifications: [
      'GSO 1943 / SASO Cosmetics Technical Regulations',
      'ESMA / MoIAT Halal Certificate of Compliance',
      'Gulf CEPA Preferential Certificate of Origin (Form 1)',
      'Bilingual Arabic-English Packaging Labels with Barcode',
      'Batch Stability & Chemical Free-Sale Certificates'
    ],
    tariffsAndDuties: '0% Duty under India-UAE CEPA for 90%+ tariff lines including essential oils, perfumes, and textiles. Standard GCC 5% VAT applied at entry.',
    buyerChecklist: [
      'Submit Montaji (Dubai Municipality) or Saber (Saudi Arabia) product registration',
      'Ensure Arabic mandatory labeling on retail secondary packaging',
      'Benefit from CEPA digital certificate of origin for 0% tariff clearance',
      'Utilize direct container feeder services from Mundra & Nhava Sheva (JNPT)'
    ]
  },
  {
    id: 'uk',
    slug: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    title: 'Indian Products for UK Wholesalers & Retailers',
    overview: 'Strategic sourcing partner for UK brands, retailers, and pharmaceutical suppliers transitioning post-Brexit trade requirements with full UKCA, UK-REACH, and MHRA/OPSS documentation.',
    keyProducts: [
      'Organic Certified Botanical Extracts & Ayurvedic Blends',
      'High-Count Cotton Poplin & Oxford Shirting Fabrics',
      'Pure Aromatherapy Oils & Diffuser Fragrances',
      'Private Label Skincare & Body Powders'
    ],
    targetPorts: ['Port of Felixstowe', 'Port of Southampton', 'London Gateway', 'Heathrow World Cargo (LHR)'],
    transitTime: 'Ocean FCL/LCL: 22 - 28 Days | Air Cargo: 2 - 4 Days',
    complianceCertifications: [
      'UK Cosmetic Regulation (SCPN notification portal)',
      'UK-REACH Chemical Registration',
      'Organic Soil Association / BRCGS Equivalency',
      'UKCA Conformity Marks where applicable'
    ],
    tariffsAndDuties: 'Developing Countries Trading Scheme (DCTS) applies preferential low or zero tariffs on selected agricultural and textile products from India.',
    buyerChecklist: [
      'Appoint UK Responsible Person (RP) for cosmetic and skincare imports',
      'Submit notification on Submit Cosmetic Product Notification (SCPN)',
      'Verify EORI number starting with GB is active on UK CDS system',
      'Review phytosanitary certificates through UK IPAFFS portal'
    ]
  },
  {
    id: 'europe',
    slug: 'europe',
    name: 'European Union',
    flag: '🇪🇺',
    title: 'Certified Indian Sourcing for EU Importers',
    overview: 'Rigorous compliance and certified supply chains meeting the European Union’s highest safety standards: EU CPNP cosmetic dossiers, EU REACH, EFSA botanical purity, and GOTS textiles.',
    keyProducts: [
      'Bulk Cosmetic-Grade & Therapeutic Essential Oils (IFRA 51st compliant)',
      'Standardized Herbal Extracts with low pesticide limits (EU Ph.)',
      'GOTS Certified Organic Shirting Fabrics & Linen Blends',
      'Sustainable Packaging Skincare Formulations'
    ],
    targetPorts: ['Port of Rotterdam (Netherlands)', 'Port of Hamburg (Germany)', 'Port of Antwerp (Belgium)', 'Port of Le Havre (France)', 'Frankfurt Cargo Hub (FRA)'],
    transitTime: 'Ocean FCL/LCL: 24 - 30 Days | Air Cargo: 2 - 4 Days',
    complianceCertifications: [
      'EU Regulation (EC) No 1223/2009 (CPNP Notification & PIF)',
      'EU REACH (Registration, Evaluation, Authorisation and Restriction of Chemicals)',
      'IFRA 51st Amendment Certificate of Conformity',
      'European Pharmacopoeia (Ph. Eur.) Microbial & Pesticide Monograph'
    ],
    tariffsAndDuties: 'EU TARIC database codes applied. Standard duty range 0% - 6.5% with potential GSP concessions.',
    buyerChecklist: [
      'Product Information File (PIF) and Safety Assessment (CPSR) signed by certified EU toxicologist',
      'EU Responsible Person designation registered in an EU member state',
      'Complete lab analysis including allergens list (26 regulated fragrance allergens)',
      'Validated packaging recyclability markings under EU Packaging Directive'
    ]
  },
  {
    id: 'africa',
    slug: 'africa',
    name: 'African Markets',
    flag: '🌍',
    title: 'B2B Wholesale Supply for East, West & Southern Africa',
    overview: 'High-volume commercial supply channels catering to fast-growing consumer markets in Kenya, Nigeria, South Africa, Tanzania, and Ghana with specialized bulk packaging and price competitiveness.',
    keyProducts: [
      'Personal Care Powders & Antifungal Prickly Heat Formulations',
      'Mass Market Aerosol Deodorants & Roll-on Antiperspirants',
      'Cost-Effective Cotton Poplin & Uniform Shirting Fabrics',
      'Specialty Tobacco & Traditional Chewing Products'
    ],
    targetPorts: ['Port of Mombasa (Kenya)', 'Port of Lagos / Apapa (Nigeria)', 'Port of Durban (South Africa)', 'Port of Dar es Salaam (Tanzania)', 'Port of Tema (Ghana)'],
    transitTime: 'Ocean FCL: 10 - 18 Days (Direct East Africa service from Nhava Sheva)',
    complianceCertifications: [
      'Pre-Export Verification of Conformity (PVoC / CoC)',
      'SONCAP (Standards Organisation of Nigeria)',
      'KEBS Standards (Kenya Bureau of Standards)',
      'SABS Standards (South African Bureau of Standards)'
    ],
    tariffsAndDuties: 'Regional economic community tariffs (ECOWAS, EAC, SADC). Navantara coordinates required Form M, Clean Report of Inspection, and pre-shipment inspections.',
    buyerChecklist: [
      'Schedule mandated Pre-Shipment Inspection (PSI) with SGS, Bureau Veritas, or Intertek',
      'Verify import permits and Clean Report of Findings (CRF)',
      'Opt for 20ft / 40ft High Cube container consolidation to maximize freight economies'
    ]
  },
  {
    id: 'south-asia',
    slug: 'south-asia',
    name: 'South Asia Corridor',
    flag: '🌏',
    title: 'Cross-Border Supply for South & Southeast Asia',
    overview: 'Seamless land and sea freight links to neighboring markets (Sri Lanka, Bangladesh, Nepal, Malaysia, Singapore) with short transit times and SAFTA duty concessions.',
    keyProducts: [
      'Shirting Fabrics & Garment Trims for Apparel Factories',
      'Botanical Raw Materials & Herbal Extracts',
      'Specialty Tobacco Products & Fragrance Compounds'
    ],
    targetPorts: ['Port of Colombo (Sri Lanka)', 'Port of Chittagong (Bangladesh)', 'Port of Singapore', 'Port Klang (Malaysia)'],
    transitTime: 'Sea: 3 - 8 Days | Land border LCS: 2 - 4 Days',
    complianceCertifications: ['SAFTA Preferential Rules of Origin', 'Standard BSTI / SLSI Conformity Certs'],
    tariffsAndDuties: 'Deep preferential tariff cuts under SAFTA Agreement (0% - 5% on covered tariff lines).',
    buyerChecklist: ['Utilize SAFTA Certificate of Origin for customs clearance', 'Fast direct container feeder services']
  }
];
