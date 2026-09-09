export type PageRoute = 
  | '/'
  | '/products'
  | '/products/essential-oils'
  | '/products/cosmetics'
  | '/products/cosmetics-skincare'
  | '/products/personal-care'
  | '/products/powders-personal-care'
  | '/products/textiles'
  | '/products/shirting-fabrics'
  | '/products/perfumes-attars'
  | '/products/botanical-products'
  | '/products/speciality-products'
  | '/products/speciality-goods'
  | '/products/specialty-products'
  | '/products/attars-fragrances'
  | '/services'
  | '/services/export-support'
  | '/services/supplier-verification'
  | '/services/trade-consultancy'
  | '/services/procurement-coordination'
  | '/procurement'
  | '/export-services'
  | '/consultancy'
  | '/supplier-verification'
  | '/markets'
  | '/markets/usa'
  | '/markets/uae-gcc'
  | '/markets/uk'
  | '/markets/south-asia'
  | '/markets/africa'
  | '/markets/other'
  | '/markets/europe'
  | '/request-quote'
  | '/export-catalog'
  | '/about'
  | '/quality-documentation'
  | '/contact'
  | '/enquiry';

export interface ProductItem {
  id: string;
  name: string;
  botanicalOrTechnicalName?: string;
  origin: string;
  extractionOrMethod?: string;
  grade?: string;
  purity?: string;
  packaging?: string;
  leadTime?: string;
  hsCodeStatus?: 'Confirmed' | 'Pending Verification' | 'Under Batch Verification' | string;
  hsnCode?: string;
  hsnCategory?: string;
  documentation?: string[];
  description: string;
  image: string;
  applications?: string[];
  specs?: Record<string, string>;
  moq?: string;
}

export interface ProductCategory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  assetReferenceName?: string;
  summary: string;
  productRange: string[];
  products: ProductItem[];
  services?: string[];
  specMatrixHeaders?: string[];
}

export interface MarketCorridor {
  id: string;
  slug: string;
  name: string;
  flag: string;
  title: string;
  overview: string;
  keyProducts: string[];
  targetPorts: string[];
  transitTime: string;
  complianceCertifications: string[];
  tariffsAndDuties: string;
  buyerChecklist: string[];
}

export interface EnquiryFormData {
  name: string;
  company: string;
  country: string;
  email: string;
  whatsapp: string;
  targetCategory?: string;
  targetProduct?: string;
  message: string;
}

export interface RFQFormData {
  name: string;
  company: string;
  country: string;
  businessType?: string;
  email: string;
  whatsapp: string;
  targetCategory: string;
  targetProduct: string;
  specifications?: string;
  quantity?: string;
  quantityUnit?: string;
  packagingRequirements?: string;
  isPrivateLabel?: boolean;
  destinationPort?: string;
  preferredIncoterm?: string;
  purchaseFrequency?: string;
  fileName?: string;
}

