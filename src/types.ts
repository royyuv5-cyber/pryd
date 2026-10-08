export interface ProductImageItem {
  url: string;
  alt: string;
  caption?: string;
  is_primary?: boolean;
}

export interface APlusBlock {
  id: string;
  type: 'hero' | 'overview' | 'features_grid' | 'tech_matrix' | 'application_split' | 'build_engineering' | 'installation' | 'faq' | 'callout';
  title: string;
  subtitle?: string;
  content?: string;
  image?: string;
  image_alt?: string;
  secondary_image?: string;
  bullets?: string[];
  specs?: { label: string; value: string }[];
  faqs?: { question: string; answer: string }[];
}

export interface Product {
  id: string;
  product_name: string;
  slug: string;
  sku: string;
  product_code: string;
  category_id: string;
  category_name?: string;
  subcategory_id?: string;
  short_description: string;
  long_description: string;
  features: string[];
  applications: string[];
  compatibility: string[];
  brand: string;
  material: string;
  colour: string;
  voltage: string;
  wattage: string;
  light_source: string;
  lighting_type: string;
  lens_type: string;
  body_material: string;
  ip_rating: string;
  pack_size: string;
  minimum_order_quantity: string;
  country_of_origin: string;
  warranty: string;
  status: 'published' | 'draft' | 'archived';
  featured: boolean;
  show_price: boolean;
  price?: number;
  price_unit?: string;
  brochure_available?: boolean;
  
  // Images
  primary_image: string;
  primary_image_alt?: string;
  gallery_images: ProductImageItem[];
  technical_images?: string[];

  // SEO Fields
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  canonical_url: string;
  og_title: string;
  og_description: string;
  og_image: string;
  robots_index: boolean;
  robots_follow: boolean;

  // A+ Content
  a_plus_enabled: boolean;
  a_plus_blocks: APlusBlock[];

  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  category_image: string;
  parent_category?: string;
  display_order: number;
  status: 'active' | 'inactive';
  product_count?: number;

  // SEO
  seo_title: string;
  seo_description: string;
  canonical_url: string;
  og_image: string;
}

export interface Enquiry {
  id: string;
  type: 'wholesale_quote' | 'whatsapp_click' | 'contact_form' | 'catalogue_request';
  name: string;
  company_name?: string;
  email: string;
  phone: string;
  city?: string;
  state?: string;
  product_id?: string;
  product_name?: string;
  sku?: string;
  quantity?: string;
  message: string;
  status: 'new' | 'in_progress' | 'quoted' | 'closed';
  created_at: string;
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  alt: string;
  caption?: string;
  size_kb?: number;
  created_at: string;
}

export interface SiteSettings {
  company_name: string;
  tagline: string;
  phone: string;
  whatsapp_number: string;
  secondary_phone?: string;
  email: string;
  support_email?: string;
  address: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  gstin: string;
  ceo_name: string;
  established_year: string;
  business_type: string;
  show_price_globally: boolean;
  default_moq: string;
  google_analytics_id?: string;
  search_console_meta?: string;
  header_announcement?: string;
  site_url: string;
}

export interface RedirectItem {
  id: string;
  from_path: string;
  to_path: string;
  status_code: 301 | 302;
  created_at: string;
}
