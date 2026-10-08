import { Product, Category, SiteSettings, RedirectItem } from '../src/types.ts';

export const initialSiteSettings: SiteSettings = {
  company_name: 'PRIMUS ENTERPRISES',
  tagline: 'Precision Automotive Lighting & Electrical Accessories',
  phone: '+91 8047635024',
  whatsapp_number: '+91 8047635024',
  secondary_phone: '+91 98112 34567',
  email: 'primusenterprises.delhi@gmail.com',
  support_email: 'info@primusenterprises.in.net',
  address: '2nd Floor, H.No-18-19, Khasra No.136/22/2, Street No-11, Block-A-1, Bengali Colony, Sant Nagar, Burari',
  area: 'Burari',
  city: 'New Delhi',
  state: 'Delhi',
  pincode: '110084',
  country: 'India',
  gstin: '07AAOFP1234F1Z8',
  ceo_name: 'Mr. Satyadev Pandit',
  established_year: '2016',
  business_type: 'Manufacturer / Wholesaler / Distributor',
  show_price_globally: false,
  default_moq: '50 Pieces',
  header_announcement: 'DIRECT MANUFACTURER & WHOLESALE SUPPLY • PAN-INDIA DISPATCH • B2B ENQUIRIES WELCOME',
  site_url: 'https://www.primusenterprises.in.net',
  google_analytics_id: 'G-PRIMUS2026',
  search_console_meta: 'primus-search-verification-code-2026'
};

export const initialCategories: Category[] = [
  {
    "id": "cat-fog-lamps",
    "name": "Fog Lamp & LED Lights",
    "slug": "fog-lamp-led-lights",
    "short_description": "High-intensity fog lamps, metal casing projectors, and dual-beam auxiliary lights for cars, SUVs, and commercial vehicles.",
    "description": "Primus Enterprises manufactures high-grade automotive fog lamps and auxiliary LED lighting systems engineered for severe weather, mist, highway navigation, and off-road illumination. Features die-cast aluminum heat sinks and optical precision lenses.",
    "category_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648221360/GB/YP/AQ/53826589/strobe-lamp-fog-500x500.png",
    "display_order": 1,
    "status": "active",
    "seo_title": "Fog Lamp & LED Lights | Automotive Products | Primus Enterprises",
    "seo_description": "Buy wholesale automotive fog lamps, LED auxiliary lights, and metal projector fog lamps manufactured by Primus Enterprises in New Delhi, India.",
    "canonical_url": "https://www.primusenterprises.in.net/category/fog-lamp-led-lights",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648221360/GB/YP/AQ/53826589/strobe-lamp-fog-500x500.png"
  },
  {
    "id": "cat-motorcycle-indicators",
    "name": "Motorcycle Indicators & Lights",
    "slug": "motorcycle-indicators",
    "short_description": "Durable LED turn signals, vintage black jali indicators, sequential flowing indicators, and handlebar lights.",
    "description": "Specialized 2-wheeler indicator solutions engineered for vibration resistance and high visibility. Available in OEM retro styling, bullet casings, flexible stems, and dynamic sequential light matrices.",
    "category_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570908231/YG/TE/TG/53826589/d-78-bike-indicator-light-abs-body-high-grip-placement-500x500.jpg",
    "display_order": 2,
    "status": "active",
    "seo_title": "Motorcycle Indicators & Bike Lights | Primus Enterprises New Delhi",
    "seo_description": "Manufacturer of motorcycle LED indicators, D-78 bike turn signals, D-74 black jali indicators and handle lights. Wholesale supply across India.",
    "canonical_url": "https://www.primusenterprises.in.net/category/motorcycle-indicators",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570908231/YG/TE/TG/53826589/d-78-bike-indicator-light-abs-body-high-grip-placement-500x500.jpg"
  },
  {
    "id": "cat-roof-lights",
    "name": "Roof Light & Cabin Lighting",
    "slug": "roof-light-cabin-lighting",
    "short_description": "Aero fan-type roof lights, commercial cabin dome fixtures, and interior illumination units for buses and trucks.",
    "description": "Commercial vehicle cabin and exterior roof lights designed for maximum diffusion, minimal thermal buildup, and long service life across 12V and 24V vehicle battery configurations.",
    "category_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644594474/EW/XD/IH/53826589/primus-led-roof-light-fan-type-500x500.png",
    "display_order": 3,
    "status": "active",
    "seo_title": "Automotive Roof Light & Cabin Lighting | Primus Enterprises",
    "seo_description": "Wholesale supplier of LED roof lights, fan-type cabin lights, and interior lighting assemblies for commercial transport vehicles in India.",
    "canonical_url": "https://www.primusenterprises.in.net/category/roof-light-cabin-lighting",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644594474/EW/XD/IH/53826589/primus-led-roof-light-fan-type-500x500.png"
  },
  {
    "id": "cat-led-lights",
    "name": "LED Lights & Retrofits",
    "slug": "led-lights",
    "short_description": "Universal LED auxiliary spotlights, grille lights, D-74 Black Jali lights, and energy-efficient retrofits.",
    "description": "Versatile LED lighting assemblies engineered with high luminous efficacy and durable ABS or alloy housings for custom vehicle enhancement.",
    "category_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571533285/HZ/VK/DO/53826589/d-74-black-jali-indicator-light-500x500.jpg",
    "display_order": 4,
    "status": "active",
    "seo_title": "LED Lights & Retrofits | Primus Enterprises Delhi",
    "seo_description": "Explore Primus Enterprises LED Lights catalogue. D-74 black jali lights, LED dome lights, and automotive retrofit solutions.",
    "canonical_url": "https://www.primusenterprises.in.net/category/led-lights",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571533285/HZ/VK/DO/53826589/d-74-black-jali-indicator-light-500x500.jpg"
  },
  {
    "id": "cat-flashers-relays",
    "name": "Flashers & Horn Relays",
    "slug": "flashers-horn-relays",
    "short_description": "Electronic LED flashers, speed-adjustable relay modules, melody horn tuners, and heavy-duty horn relays.",
    "description": "Precision electronic switching units, horn tuners, and automotive relays engineered to prevent hyper-flashing on LED retrofits and ensure maximum electrical stability.",
    "category_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570906060/VH/PE/FB/53826589/color-black-12-volt-8-way-horn-tuner-4-wire-melody-maker-500x500.jpg",
    "display_order": 5,
    "status": "active",
    "seo_title": "Electronic Flashers & Horn Relays | Primus Enterprises",
    "seo_description": "Industrial-grade automotive electronic flashers, adjustable flasher relays, and horn tuners. Direct manufacturer wholesale from Delhi.",
    "canonical_url": "https://www.primusenterprises.in.net/category/flashers-horn-relays",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570906060/VH/PE/FB/53826589/color-black-12-volt-8-way-horn-tuner-4-wire-melody-maker-500x500.jpg"
  },
  {
    "id": "cat-dc-converters",
    "name": "DC Converters & Mobile Chargers",
    "slug": "dc-converters-mobile-chargers",
    "short_description": "High-efficiency DC to AC/DC converters, handlebar switches, and dual USB bike and car chargers.",
    "description": "Heavy-duty switch-mode power converters and handlebar USB chargers built inside heat-dissipating casings, delivering stable voltage output for motorcycles, e-rickshaws, and cars.",
    "category_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646265613/QM/JI/TE/53826589/dc-to-ac-converters-with-double-usb-500x500.png",
    "display_order": 6,
    "status": "active",
    "seo_title": "DC Converters & Bike Chargers | Primus Enterprises Delhi",
    "seo_description": "Manufacturer of DC converters and dual USB bike chargers. B2B bulk orders.",
    "canonical_url": "https://www.primusenterprises.in.net/category/dc-converters-mobile-chargers",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646265613/QM/JI/TE/53826589/dc-to-ac-converters-with-double-usb-500x500.png"
  },
  {
    "id": "cat-strobe-warning",
    "name": "Strobe & Police Emergency Lights",
    "slug": "strobe-police-lights",
    "short_description": "Multi-pattern grill strobe flashers, warning beacons, and red-blue emergency lights for pilot and patrol vehicles.",
    "description": "High-lux warning and flashing strobe units featuring polycarbonate shatterproof lenses, synchronous flash controllers, and weatherproof potting.",
    "category_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644585141/TR/WB/PB/53826589/21-led-police-light-500x500.png",
    "display_order": 7,
    "status": "active",
    "seo_title": "Strobe & Police Emergency Warning Lights | Primus Enterprises",
    "seo_description": "Automotive grill strobe lights, police beacon lights, and multi-pattern flashers manufactured by Primus Enterprises in New Delhi.",
    "canonical_url": "https://www.primusenterprises.in.net/category/strobe-police-lights",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644585141/TR/WB/PB/53826589/21-led-police-light-500x500.png"
  },
  {
    "id": "cat-automotive-bulbs",
    "name": "Automotive Bulbs & LED Tubes",
    "slug": "automotive-bulbs-led-tubes",
    "short_description": "Ceramic T-10 parking bulbs and commercial passenger vehicle interior tube fixtures.",
    "description": "Precision socket LED bulbs and linear fixtures for commercial fleet refits. Delivers high luminous efficacy and low power consumption.",
    "category_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646022787/WV/VF/ME/53826589/t-10-parking-bulb-500x500.png",
    "display_order": 8,
    "status": "active",
    "seo_title": "Automotive Bulbs & LED Tubes | Primus Enterprises Catalogue",
    "seo_description": "B2B supply of T-10 parking bulbs and bus LED tube lights manufactured by Primus Enterprises.",
    "canonical_url": "https://www.primusenterprises.in.net/category/automotive-bulbs-led-tubes",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646022787/WV/VF/ME/53826589/t-10-parking-bulb-500x500.png"
  }
];

export const initialProducts: Product[] = [
  {
    "id": "prod-224466970",
    "product_name": "Led Fog Light G3 Rocket",
    "slug": "led-fog-light-g3-rocket",
    "sku": "PE-G3",
    "product_code": "G3",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "Led Fog Light G3 Rocket manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Led Fog Light G3 Rocket (Part Number: G3) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Fitting Placement: Both Right & Left",
      "Electrical Input: 12 V",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12 V",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 65,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644581463/KA/TK/WQ/53826589/led-fog-light-g3-rocket-500x500.png",
    "primary_image_alt": "Led Fog Light G3 Rocket - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/644581463/KA/TK/WQ/53826589/led-fog-light-g3-rocket-500x500.png",
        "alt": "Led Fog Light G3 Rocket - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Led Fog Light G3 Rocket | Primus Enterprises",
    "seo_description": "Led Fog Light G3 Rocket wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Led Fog Light G3 Rocket, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/led-fog-light-g3-rocket",
    "og_title": "Led Fog Light G3 Rocket | Primus Enterprises",
    "og_description": "Led Fog Light G3 Rocket manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644581463/KA/TK/WQ/53826589/led-fog-light-g3-rocket-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-led-fog-light-g3-rocket-hero",
        "type": "hero",
        "title": "LED FOG LIGHT G3 ROCKET",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Led Fog Light G3 Rocket (Part Number: G3) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644581463/KA/TK/WQ/53826589/led-fog-light-g3-rocket-500x500.png",
        "image_alt": "Led Fog Light G3 Rocket Technical Profile"
      },
      {
        "id": "ap-led-fog-light-g3-rocket-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Fitting Place",
            "value": "Both Right & Left"
          },
          {
            "label": "Origin",
            "value": "Aftermarket"
          },
          {
            "label": "Part Number",
            "value": "G3"
          },
          {
            "label": "Voltage",
            "value": "12 V"
          },
          {
            "label": "Country of Origin",
            "value": "Made in India"
          },
          {
            "label": "Brand",
            "value": "Primus"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-204165217",
    "product_name": "SINGLE LED FOG LIGHT",
    "slug": "single-led-fog-light",
    "sku": "PE-204165217",
    "product_code": "204165217",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "SINGLE LED FOG LIGHT manufactured by Primus Enterprises. High-durability automotive component with 12 V input and Plastic construction.",
    "long_description": "The SINGLE LED FOG LIGHT (Part Number: 204165217) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust Plastic construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Illumination Color: White",
      "Housing Material: Plastic for durability",
      "Electrical Input: 12 V",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "Plastic",
    "colour": "White",
    "voltage": "12 V",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "Plastic",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 52,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644576469/SD/TU/JQ/53826589/single-led-fog-light-500x500.png",
    "primary_image_alt": "SINGLE LED FOG LIGHT - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/644576469/SD/TU/JQ/53826589/single-led-fog-light-500x500.png",
        "alt": "SINGLE LED FOG LIGHT - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "SINGLE LED FOG LIGHT | Primus Enterprises",
    "seo_description": "SINGLE LED FOG LIGHT wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "SINGLE LED FOG LIGHT, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/single-led-fog-light",
    "og_title": "SINGLE LED FOG LIGHT | Primus Enterprises",
    "og_description": "SINGLE LED FOG LIGHT manufactured by Primus Enterprises. High-durability automotive component with 12 V input and Plastic construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644576469/SD/TU/JQ/53826589/single-led-fog-light-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-single-led-fog-light-hero",
        "type": "hero",
        "title": "SINGLE LED FOG LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The SINGLE LED FOG LIGHT (Part Number: 204165217) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust Plastic construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644576469/SD/TU/JQ/53826589/single-led-fog-light-500x500.png",
        "image_alt": "SINGLE LED FOG LIGHT Technical Profile"
      },
      {
        "id": "ap-single-led-fog-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Compatibility",
            "value": "Light Vehicle"
          },
          {
            "label": "Lighting Color",
            "value": "White"
          },
          {
            "label": "Body Material",
            "value": "Plastic"
          },
          {
            "label": "Voltage",
            "value": "12 V"
          },
          {
            "label": "Usage/Application",
            "value": "Commercial/Outdoor Lights"
          },
          {
            "label": "Car Brand",
            "value": "UNIVERSAL"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467505",
    "product_name": "9 led cap light plastic",
    "slug": "9-led-cap-light-plastic",
    "sku": "PE-224467505",
    "product_code": "224467505",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "9 led cap light plastic manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS / Die-Cast Alloy construction.",
    "long_description": "The 9 led cap light plastic (Part Number: 224467505) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Fitting Placement: Both Right & Left",
      "Electrical Input: 12 V",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12 V",
    "wattage": "12 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 50,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570816057/DW/HO/YY/53826589/9-led-cap-light-plastic-500x500.jpg",
    "primary_image_alt": "9 led cap light plastic - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/570816057/DW/HO/YY/53826589/9-led-cap-light-plastic-500x500.jpg",
        "alt": "9 led cap light plastic - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "9 led cap light plastic | Primus Enterprises",
    "seo_description": "9 led cap light plastic wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "9 led cap light plastic, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/9-led-cap-light-plastic",
    "og_title": "9 led cap light plastic | Primus Enterprises",
    "og_description": "9 led cap light plastic manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570816057/DW/HO/YY/53826589/9-led-cap-light-plastic-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-9-led-cap-light-plastic-hero",
        "type": "hero",
        "title": "9 LED CAP LIGHT PLASTIC",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The 9 led cap light plastic (Part Number: 224467505) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570816057/DW/HO/YY/53826589/9-led-cap-light-plastic-500x500.jpg",
        "image_alt": "9 led cap light plastic Technical Profile"
      },
      {
        "id": "ap-9-led-cap-light-plastic-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Wattage",
            "value": "12 W"
          },
          {
            "label": "Fitting Place",
            "value": "Both Right & Left"
          },
          {
            "label": "IP Rating",
            "value": "IP40"
          },
          {
            "label": "Origin",
            "value": "Aftermarket"
          },
          {
            "label": "Voltage",
            "value": "12 V"
          },
          {
            "label": "Country of Origin",
            "value": "Made in India"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224466939",
    "product_name": "S6 FOG LIGHT UNIVERSAL ABS BODY HIGH BEAM",
    "slug": "s6-fog-light-universal-abs-body-high-beam",
    "sku": "PE-S6",
    "product_code": "S6",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "S6 FOG LIGHT UNIVERSAL ABS BODY HIGH BEAM manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS construction.",
    "long_description": "The S6 FOG LIGHT UNIVERSAL ABS BODY HIGH BEAM (Part Number: S6) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Fitting Placement: Both Right & Left",
      "Electrical Input: 12 V",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS",
    "colour": "Amber / White",
    "voltage": "12 V",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 78,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644574276/TT/RU/VD/53826589/s6-fog-light-universal-abs-body-high-beam-500x500.png",
    "primary_image_alt": "S6 FOG LIGHT UNIVERSAL ABS BODY HIGH BEAM - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/644574276/TT/RU/VD/53826589/s6-fog-light-universal-abs-body-high-beam-500x500.png",
        "alt": "S6 FOG LIGHT UNIVERSAL ABS BODY HIGH BEAM - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "S6 FOG LIGHT UNIVERSAL ABS BODY HIGH BEAM | Primus Enterprises",
    "seo_description": "S6 FOG LIGHT UNIVERSAL ABS BODY HIGH BEAM wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "S6 FOG LIGHT UNIVERSAL ABS BODY HIGH BEAM, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/s6-fog-light-universal-abs-body-high-beam",
    "og_title": "S6 FOG LIGHT UNIVERSAL ABS BODY HIGH BEAM | Primus Enterprises",
    "og_description": "S6 FOG LIGHT UNIVERSAL ABS BODY HIGH BEAM manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644574276/TT/RU/VD/53826589/s6-fog-light-universal-abs-body-high-beam-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-s6-fog-light-universal-abs-body-high-beam-hero",
        "type": "hero",
        "title": "S6 FOG LIGHT UNIVERSAL ABS BODY HIGH BEAM",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The S6 FOG LIGHT UNIVERSAL ABS BODY HIGH BEAM (Part Number: S6) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644574276/TT/RU/VD/53826589/s6-fog-light-universal-abs-body-high-beam-500x500.png",
        "image_alt": "S6 FOG LIGHT UNIVERSAL ABS BODY HIGH BEAM Technical Profile"
      },
      {
        "id": "ap-s6-fog-light-universal-abs-body-high-beam-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Voltage",
            "value": "12 V"
          },
          {
            "label": "Fitting Place",
            "value": "Both Right & Left"
          },
          {
            "label": "Origin",
            "value": "Aftermarket"
          },
          {
            "label": "Part Number",
            "value": "S6"
          },
          {
            "label": "Country of Origin",
            "value": "Made in India"
          },
          {
            "label": "Material",
            "value": "ABS"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467796",
    "product_name": "T-10 parking bulb",
    "slug": "t-10-parking-bulb",
    "sku": "PE-224467796",
    "product_code": "224467796",
    "category_id": "cat-automotive-bulbs",
    "category_name": "Automotive Bulbs & LED Tubes",
    "short_description": "T-10 parking bulb manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The T-10 parking bulb (Part Number: 224467796) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Light Source Type: LED",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "LED",
    "lighting_type": "LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 60,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646022787/WV/VF/ME/53826589/t-10-parking-bulb-500x500.png",
    "primary_image_alt": "T-10 parking bulb - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646022787/WV/VF/ME/53826589/t-10-parking-bulb-500x500.png",
        "alt": "T-10 parking bulb - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "T-10 parking bulb | Primus Enterprises",
    "seo_description": "T-10 parking bulb wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "T-10 parking bulb, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/t-10-parking-bulb",
    "og_title": "T-10 parking bulb | Primus Enterprises",
    "og_description": "T-10 parking bulb manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646022787/WV/VF/ME/53826589/t-10-parking-bulb-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-t-10-parking-bulb-hero",
        "type": "hero",
        "title": "T-10 PARKING BULB",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The T-10 parking bulb (Part Number: 224467796) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646022787/WV/VF/ME/53826589/t-10-parking-bulb-500x500.png",
        "image_alt": "T-10 parking bulb Technical Profile"
      },
      {
        "id": "ap-t-10-parking-bulb-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Lighting Type",
            "value": "LED"
          },
          {
            "label": "Car Model",
            "value": "Universal"
          },
          {
            "label": "Light Type",
            "value": "LED"
          },
          {
            "label": "Base Type",
            "value": "T10"
          },
          {
            "label": "Installation Side",
            "value": "Front"
          },
          {
            "label": "Brand",
            "value": "primus"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467000",
    "product_name": "Honda Activa Flashers",
    "slug": "honda-activa-flashers",
    "sku": "PE-224467000",
    "product_code": "224467000",
    "category_id": "cat-flashers-relays",
    "category_name": "Flashers & Horn Relays",
    "short_description": "Honda Activa Flashers manufactured by Primus Enterprises. High-durability automotive component with 12V input and ABS Plastic construction.",
    "long_description": "The Honda Activa Flashers (Part Number: 224467000) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12V",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS Plastic",
    "colour": "Amber / White",
    "voltage": "12V",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS Plastic",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 65,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571437632/DN/MJ/JF/53826589/honda-activa-flashers-500x500.jpg",
    "primary_image_alt": "Honda Activa Flashers - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/571437632/DN/MJ/JF/53826589/honda-activa-flashers-500x500.jpg",
        "alt": "Honda Activa Flashers - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Honda Activa Flashers | Primus Enterprises",
    "seo_description": "Honda Activa Flashers wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Honda Activa Flashers, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/honda-activa-flashers",
    "og_title": "Honda Activa Flashers | Primus Enterprises",
    "og_description": "Honda Activa Flashers manufactured by Primus Enterprises. High-durability automotive component with 12V input and ABS Plastic construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571437632/DN/MJ/JF/53826589/honda-activa-flashers-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-honda-activa-flashers-hero",
        "type": "hero",
        "title": "HONDA ACTIVA FLASHERS",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Honda Activa Flashers (Part Number: 224467000) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571437632/DN/MJ/JF/53826589/honda-activa-flashers-500x500.jpg",
        "image_alt": "Honda Activa Flashers Technical Profile"
      },
      {
        "id": "ap-honda-activa-flashers-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Voltage",
            "value": "12V"
          },
          {
            "label": "Number of Pin",
            "value": "4"
          },
          {
            "label": "Material",
            "value": "ABS Plastic"
          },
          {
            "label": "Warranty",
            "value": "6 Months"
          },
          {
            "label": "Country of Origin",
            "value": "Made in India"
          },
          {
            "label": "Brand",
            "value": "Primus"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-183043725",
    "product_name": "High Power Led Flashlights",
    "slug": "high-power-led-flashlights",
    "sku": "PE-183043725",
    "product_code": "183043725",
    "category_id": "cat-motorcycle-indicators",
    "category_name": "Motorcycle Indicators & Lights",
    "short_description": "High Power Led Flashlights manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The High Power Led Flashlights (Part Number: 183043725) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "15 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 45,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571960257/IP/TY/KP/53826589/high-power-led-flashlights-500x500.jpg",
    "primary_image_alt": "High Power Led Flashlights - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/571960257/IP/TY/KP/53826589/high-power-led-flashlights-500x500.jpg",
        "alt": "High Power Led Flashlights - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "High Power Led Flashlights | Primus Enterprises",
    "seo_description": "High Power Led Flashlights wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "High Power Led Flashlights, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/high-power-led-flashlights",
    "og_title": "High Power Led Flashlights | Primus Enterprises",
    "og_description": "High Power Led Flashlights manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571960257/IP/TY/KP/53826589/high-power-led-flashlights-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-high-power-led-flashlights-hero",
        "type": "hero",
        "title": "HIGH POWER LED FLASHLIGHTS",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The High Power Led Flashlights (Part Number: 183043725) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571960257/IP/TY/KP/53826589/high-power-led-flashlights-500x500.jpg",
        "image_alt": "High Power Led Flashlights Technical Profile"
      },
      {
        "id": "ap-high-power-led-flashlights-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Flashlight Type",
            "value": "Regular LED"
          },
          {
            "label": "Power Source",
            "value": "dc"
          },
          {
            "label": "Beam Distance",
            "value": "Long Range"
          },
          {
            "label": "Current Rating",
            "value": "1 A"
          },
          {
            "label": "Wattage",
            "value": "15 W"
          },
          {
            "label": "Light Output",
            "value": "200 lm"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-160291668",
    "product_name": "Primus Automotive Bike Hazard Flasher",
    "slug": "primus-automotive-bike-hazard-flasher",
    "sku": "PE-160291668",
    "product_code": "160291668",
    "category_id": "cat-flashers-relays",
    "category_name": "Flashers & Horn Relays",
    "short_description": "Primus Automotive Bike Hazard Flasher manufactured by Primus Enterprises. High-durability automotive component with 12 v input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Primus Automotive Bike Hazard Flasher (Part Number: 160291668) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 v electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12 v",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12 v",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 65,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570914760/CQ/AF/NK/53826589/bike-huzzard-flasher-500x500.jpg",
    "primary_image_alt": "Primus Automotive Bike Hazard Flasher - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/570914760/CQ/AF/NK/53826589/bike-huzzard-flasher-500x500.jpg",
        "alt": "Primus Automotive Bike Hazard Flasher - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Primus Automotive Bike Hazard Flasher | Primus Enterprises",
    "seo_description": "Primus Automotive Bike Hazard Flasher wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Primus Automotive Bike Hazard Flasher, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/primus-automotive-bike-hazard-flasher",
    "og_title": "Primus Automotive Bike Hazard Flasher | Primus Enterprises",
    "og_description": "Primus Automotive Bike Hazard Flasher manufactured by Primus Enterprises. High-durability automotive component with 12 v input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570914760/CQ/AF/NK/53826589/bike-huzzard-flasher-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-primus-automotive-bike-hazard-flasher-hero",
        "type": "hero",
        "title": "PRIMUS AUTOMOTIVE BIKE HAZARD FLASHER",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Primus Automotive Bike Hazard Flasher (Part Number: 160291668) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 v electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570914760/CQ/AF/NK/53826589/bike-huzzard-flasher-500x500.jpg",
        "image_alt": "Primus Automotive Bike Hazard Flasher Technical Profile"
      },
      {
        "id": "ap-primus-automotive-bike-hazard-flasher-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Flasher Type",
            "value": "Hazard Flasher"
          },
          {
            "label": "Voltage",
            "value": "12 v"
          },
          {
            "label": "Input Voltage",
            "value": "12–24 V DC"
          },
          {
            "label": "Number of Pin",
            "value": "4"
          },
          {
            "label": "Pin Configuration",
            "value": "4 Pin"
          },
          {
            "label": "Load Type",
            "value": "Bulb+LED"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467658",
    "product_name": "D 73 Crystal Indicator Light",
    "slug": "d-73-crystal-indicator-light",
    "sku": "PE-224467658",
    "product_code": "224467658",
    "category_id": "cat-motorcycle-indicators",
    "category_name": "Motorcycle Indicators & Lights",
    "short_description": "D 73 Crystal Indicator Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The D 73 Crystal Indicator Light (Part Number: 224467658) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Light Source Type: LED",
      "Illumination Color: Yellow",
      "Fitment Standard: OEM",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Yellow",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "LED",
    "lighting_type": "LED",
    "lens_type": "White Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Sets",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 95,
    "price_unit": "Set",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646248076/DL/ZA/TL/53826589/d-73-crystal-indicator-light-500x500.jpeg",
    "primary_image_alt": "D 73 Crystal Indicator Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646248076/DL/ZA/TL/53826589/d-73-crystal-indicator-light-500x500.jpeg",
        "alt": "D 73 Crystal Indicator Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "D 73 Crystal Indicator Light | Primus Enterprises",
    "seo_description": "D 73 Crystal Indicator Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "D 73 Crystal Indicator Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/d-73-crystal-indicator-light",
    "og_title": "D 73 Crystal Indicator Light | Primus Enterprises",
    "og_description": "D 73 Crystal Indicator Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646248076/DL/ZA/TL/53826589/d-73-crystal-indicator-light-500x500.jpeg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-d-73-crystal-indicator-light-hero",
        "type": "hero",
        "title": "D 73 CRYSTAL INDICATOR LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The D 73 Crystal Indicator Light (Part Number: 224467658) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646248076/DL/ZA/TL/53826589/d-73-crystal-indicator-light-500x500.jpeg",
        "image_alt": "D 73 Crystal Indicator Light Technical Profile"
      },
      {
        "id": "ap-d-73-crystal-indicator-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Brand",
            "value": "Universal"
          },
          {
            "label": "Light Type",
            "value": "LED"
          },
          {
            "label": "Installation Side",
            "value": "FRONT / REAR"
          },
          {
            "label": "Lighting Color",
            "value": "Yellow"
          },
          {
            "label": "Lens Color",
            "value": "White"
          },
          {
            "label": "Fitment Type",
            "value": "OEM"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467635",
    "product_name": "Arrow Type Indicator Light",
    "slug": "arrow-type-indicator-light",
    "sku": "PE-224467635",
    "product_code": "224467635",
    "category_id": "cat-motorcycle-indicators",
    "category_name": "Motorcycle Indicators & Lights",
    "short_description": "Arrow Type Indicator Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "long_description": "The Arrow Type Indicator Light (Part Number: 224467635) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Light Source Type: LED",
      "Housing Material: ABS Plastic for durability",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS Plastic",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "15 W",
    "light_source": "LED",
    "lighting_type": "LED",
    "lens_type": "Smoke Optical Lens",
    "body_material": "ABS Plastic",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Sets",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 90,
    "price_unit": "Set",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571533646/HB/LY/PI/53826589/arrow-type-indicator-light-500x500.jpg",
    "primary_image_alt": "Arrow Type Indicator Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/571533646/HB/LY/PI/53826589/arrow-type-indicator-light-500x500.jpg",
        "alt": "Arrow Type Indicator Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Arrow Type Indicator Light | Primus Enterprises",
    "seo_description": "Arrow Type Indicator Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Arrow Type Indicator Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/arrow-type-indicator-light",
    "og_title": "Arrow Type Indicator Light | Primus Enterprises",
    "og_description": "Arrow Type Indicator Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571533646/HB/LY/PI/53826589/arrow-type-indicator-light-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-arrow-type-indicator-light-hero",
        "type": "hero",
        "title": "ARROW TYPE INDICATOR LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Arrow Type Indicator Light (Part Number: 224467635) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571533646/HB/LY/PI/53826589/arrow-type-indicator-light-500x500.jpg",
        "image_alt": "Arrow Type Indicator Light Technical Profile"
      },
      {
        "id": "ap-arrow-type-indicator-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Brand",
            "value": "Universal"
          },
          {
            "label": "Light Type",
            "value": "LED"
          },
          {
            "label": "Body Material",
            "value": "ABS Plastic"
          },
          {
            "label": "Wattage",
            "value": "15 W"
          },
          {
            "label": "Shape",
            "value": "Round"
          },
          {
            "label": "Lens Color",
            "value": "Smoke"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467859",
    "product_name": "Bike Handle Light",
    "slug": "bike-handle-light",
    "sku": "PE-224467859",
    "product_code": "224467859",
    "category_id": "cat-motorcycle-indicators",
    "category_name": "Motorcycle Indicators & Lights",
    "short_description": "Bike Handle Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Bike Handle Light (Part Number: 224467859) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 80,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646031349/FO/LY/RN/53826589/bike-handle-light-500x500.png",
    "primary_image_alt": "Bike Handle Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646031349/FO/LY/RN/53826589/bike-handle-light-500x500.png",
        "alt": "Bike Handle Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Bike Handle Light | Primus Enterprises",
    "seo_description": "Bike Handle Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Bike Handle Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/bike-handle-light",
    "og_title": "Bike Handle Light | Primus Enterprises",
    "og_description": "Bike Handle Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646031349/FO/LY/RN/53826589/bike-handle-light-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-bike-handle-light-hero",
        "type": "hero",
        "title": "BIKE HANDLE LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Bike Handle Light (Part Number: 224467859) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646031349/FO/LY/RN/53826589/bike-handle-light-500x500.png",
        "image_alt": "Bike Handle Light Technical Profile"
      },
      {
        "id": "ap-bike-handle-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Bike Model",
            "value": "Universal"
          },
          {
            "label": "Model Year",
            "value": "Cyt"
          },
          {
            "label": "Usage/Application",
            "value": "Automotives"
          },
          {
            "label": "Origin",
            "value": "Aftermarket"
          },
          {
            "label": "Spare Part",
            "value": "Handle Light"
          },
          {
            "label": "Product Brand",
            "value": "Primus"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467031",
    "product_name": "s-12 pro Led Fog Light Universal ABS plastic with metal lock",
    "slug": "s-12-pro-led-fog-light-universal-abs-plastic-with-metal-lock",
    "sku": "PE-6",
    "product_code": "6",
    "category_id": "cat-motorcycle-indicators",
    "category_name": "Motorcycle Indicators & Lights",
    "short_description": "s-12 pro Led Fog Light Universal ABS plastic with metal lock manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS construction.",
    "long_description": "The s-12 pro Led Fog Light Universal ABS plastic with metal lock (Part Number: 6) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Fitting Placement: Both Right & Left",
      "Electrical Input: 12 V",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS",
    "colour": "Amber / White",
    "voltage": "12 V",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 65,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644579090/GE/PP/JP/53826589/s-12-pro-led-fog-light-universal-abs-plastic-with-metal-lock-500x500.png",
    "primary_image_alt": "s-12 pro Led Fog Light Universal ABS plastic with metal lock - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/644579090/GE/PP/JP/53826589/s-12-pro-led-fog-light-universal-abs-plastic-with-metal-lock-500x500.png",
        "alt": "s-12 pro Led Fog Light Universal ABS plastic with metal lock - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "s-12 pro Led Fog Light Universal ABS plastic with metal lock | Primus Enterprises",
    "seo_description": "s-12 pro Led Fog Light Universal ABS plastic with metal lock wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "s-12 pro Led Fog Light Universal ABS plastic with metal lock, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/s-12-pro-led-fog-light-universal-abs-plastic-with-metal-lock",
    "og_title": "s-12 pro Led Fog Light Universal ABS plastic with metal lock | Primus Enterprises",
    "og_description": "s-12 pro Led Fog Light Universal ABS plastic with metal lock manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644579090/GE/PP/JP/53826589/s-12-pro-led-fog-light-universal-abs-plastic-with-metal-lock-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-s-12-pro-led-fog-light-universal-abs-plastic-with-metal-lock-hero",
        "type": "hero",
        "title": "S-12 PRO LED FOG LIGHT UNIVERSAL ABS PLASTIC WITH METAL LOCK",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The s-12 pro Led Fog Light Universal ABS plastic with metal lock (Part Number: 6) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644579090/GE/PP/JP/53826589/s-12-pro-led-fog-light-universal-abs-plastic-with-metal-lock-500x500.png",
        "image_alt": "s-12 pro Led Fog Light Universal ABS plastic with metal lock Technical Profile"
      },
      {
        "id": "ap-s-12-pro-led-fog-light-universal-abs-plastic-with-metal-lock-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Voltage",
            "value": "12 V"
          },
          {
            "label": "Fitting Place",
            "value": "Both Right & Left"
          },
          {
            "label": "Origin",
            "value": "Aftermarket"
          },
          {
            "label": "Part Number",
            "value": "6"
          },
          {
            "label": "Country of Origin",
            "value": "Made in India"
          },
          {
            "label": "Material",
            "value": "ABS"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-157136447",
    "product_name": "DC To AC Converters with double USB",
    "slug": "dc-to-ac-converters-with-double-usb",
    "sku": "PE-157136447",
    "product_code": "157136447",
    "category_id": "cat-dc-converters",
    "category_name": "DC Converters & Mobile Chargers",
    "short_description": "DC To AC Converters with double USB manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "long_description": "The DC To AC Converters with double USB (Part Number: 157136447) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS Plastic",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Upto 60W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS Plastic",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "3 Month",
    "status": "published",
    "featured": true,
    "show_price": false,
    "price": 235,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646265613/QM/JI/TE/53826589/dc-to-ac-converters-with-double-usb-500x500.png",
    "primary_image_alt": "DC To AC Converters with double USB - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646265613/QM/JI/TE/53826589/dc-to-ac-converters-with-double-usb-500x500.png",
        "alt": "DC To AC Converters with double USB - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "DC To AC Converters with double USB | Primus Enterprises",
    "seo_description": "DC To AC Converters with double USB wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "DC To AC Converters with double USB, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/dc-to-ac-converters-with-double-usb",
    "og_title": "DC To AC Converters with double USB | Primus Enterprises",
    "og_description": "DC To AC Converters with double USB manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646265613/QM/JI/TE/53826589/dc-to-ac-converters-with-double-usb-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-dc-to-ac-converters-with-double-usb-hero",
        "type": "hero",
        "title": "DC TO AC CONVERTERS WITH DOUBLE USB",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The DC To AC Converters with double USB (Part Number: 157136447) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646265613/QM/JI/TE/53826589/dc-to-ac-converters-with-double-usb-500x500.png",
        "image_alt": "DC To AC Converters with double USB Technical Profile"
      },
      {
        "id": "ap-dc-to-ac-converters-with-double-usb-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Power",
            "value": "Upto 60W"
          },
          {
            "label": "Input Voltage",
            "value": "12VDC"
          },
          {
            "label": "Material",
            "value": "ABS Plastic"
          },
          {
            "label": "Brand",
            "value": "Primus"
          },
          {
            "label": "Country of Origin",
            "value": "Made in India"
          },
          {
            "label": "Warranty",
            "value": "3 Month"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-262088858",
    "product_name": "Motorcycle Handle Switch",
    "slug": "motorcycle-handle-switch",
    "sku": "PE-262088858",
    "product_code": "262088858",
    "category_id": "cat-dc-converters",
    "category_name": "DC Converters & Mobile Chargers",
    "short_description": "Motorcycle Handle Switch manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "long_description": "The Motorcycle Handle Switch (Part Number: 262088858) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS Plastic",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS Plastic",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 30,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610248479/WB/ID/GJ/53826589/motorcycle-handle-switch-500x500.png",
    "primary_image_alt": "Motorcycle Handle Switch - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610248479/WB/ID/GJ/53826589/motorcycle-handle-switch-500x500.png",
        "alt": "Motorcycle Handle Switch - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Motorcycle Handle Switch | Primus Enterprises",
    "seo_description": "Motorcycle Handle Switch wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Motorcycle Handle Switch, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/motorcycle-handle-switch",
    "og_title": "Motorcycle Handle Switch | Primus Enterprises",
    "og_description": "Motorcycle Handle Switch manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610248479/WB/ID/GJ/53826589/motorcycle-handle-switch-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-motorcycle-handle-switch-hero",
        "type": "hero",
        "title": "MOTORCYCLE HANDLE SWITCH",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Motorcycle Handle Switch (Part Number: 262088858) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610248479/WB/ID/GJ/53826589/motorcycle-handle-switch-500x500.png",
        "image_alt": "Motorcycle Handle Switch Technical Profile"
      },
      {
        "id": "ap-motorcycle-handle-switch-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Usage/Application",
            "value": "Automotives"
          },
          {
            "label": "Material",
            "value": "ABS Plastic"
          },
          {
            "label": "Company Name",
            "value": "Primus"
          },
          {
            "label": "Model Name",
            "value": "3 Way"
          },
          {
            "label": "Weight",
            "value": "100 g"
          },
          {
            "label": "Product Dimensions",
            "value": "18 inch"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467809",
    "product_name": "Ktm Hazard Flasher Relay",
    "slug": "ktm-hazard-flasher-relay",
    "sku": "PE-224467809",
    "product_code": "224467809",
    "category_id": "cat-flashers-relays",
    "category_name": "Flashers & Horn Relays",
    "short_description": "Ktm Hazard Flasher Relay manufactured by Primus Enterprises. High-durability automotive component with 12V input and ABS Plastic construction.",
    "long_description": "The Ktm Hazard Flasher Relay (Part Number: 224467809) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12V",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS Plastic",
    "colour": "Amber / White",
    "voltage": "12V",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS Plastic",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 65,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648228097/ZY/MV/WK/53826589/ktm-hazard-flasher-relay-500x500.png",
    "primary_image_alt": "Ktm Hazard Flasher Relay - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/648228097/ZY/MV/WK/53826589/ktm-hazard-flasher-relay-500x500.png",
        "alt": "Ktm Hazard Flasher Relay - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Ktm Hazard Flasher Relay | Primus Enterprises",
    "seo_description": "Ktm Hazard Flasher Relay wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Ktm Hazard Flasher Relay, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/ktm-hazard-flasher-relay",
    "og_title": "Ktm Hazard Flasher Relay | Primus Enterprises",
    "og_description": "Ktm Hazard Flasher Relay manufactured by Primus Enterprises. High-durability automotive component with 12V input and ABS Plastic construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648228097/ZY/MV/WK/53826589/ktm-hazard-flasher-relay-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-ktm-hazard-flasher-relay-hero",
        "type": "hero",
        "title": "KTM HAZARD FLASHER RELAY",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Ktm Hazard Flasher Relay (Part Number: 224467809) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648228097/ZY/MV/WK/53826589/ktm-hazard-flasher-relay-500x500.png",
        "image_alt": "Ktm Hazard Flasher Relay Technical Profile"
      },
      {
        "id": "ap-ktm-hazard-flasher-relay-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Voltage",
            "value": "12V"
          },
          {
            "label": "Number of Pin",
            "value": "4"
          },
          {
            "label": "Material",
            "value": "ABS Plastic"
          },
          {
            "label": "Warranty",
            "value": "6 Months"
          },
          {
            "label": "Weight",
            "value": "110 g"
          },
          {
            "label": "Dimensions",
            "value": "10 cm"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-157103150",
    "product_name": "Primus Deluxe Bike Led Flashing Light",
    "slug": "primus-deluxe-bike-led-flashing-light",
    "sku": "PE-157103150",
    "product_code": "157103150",
    "category_id": "cat-strobe-warning",
    "category_name": "Strobe & Police Emergency Lights",
    "short_description": "Primus Deluxe Bike Led Flashing Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "long_description": "The Primus Deluxe Bike Led Flashing Light (Part Number: 157103150) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Housing Material: ABS Plastic for durability",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS Plastic",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "15 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS Plastic",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 65,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646377578/XP/XI/WG/53826589/primus-deluxe-bike-led-flashing-light-500x500.png",
    "primary_image_alt": "Primus Deluxe Bike Led Flashing Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646377578/XP/XI/WG/53826589/primus-deluxe-bike-led-flashing-light-500x500.png",
        "alt": "Primus Deluxe Bike Led Flashing Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Primus Deluxe Bike Led Flashing Light | Primus Enterprises",
    "seo_description": "Primus Deluxe Bike Led Flashing Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Primus Deluxe Bike Led Flashing Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/primus-deluxe-bike-led-flashing-light",
    "og_title": "Primus Deluxe Bike Led Flashing Light | Primus Enterprises",
    "og_description": "Primus Deluxe Bike Led Flashing Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646377578/XP/XI/WG/53826589/primus-deluxe-bike-led-flashing-light-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-primus-deluxe-bike-led-flashing-light-hero",
        "type": "hero",
        "title": "PRIMUS DELUXE BIKE LED FLASHING LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Primus Deluxe Bike Led Flashing Light (Part Number: 157103150) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646377578/XP/XI/WG/53826589/primus-deluxe-bike-led-flashing-light-500x500.png",
        "image_alt": "Primus Deluxe Bike Led Flashing Light Technical Profile"
      },
      {
        "id": "ap-primus-deluxe-bike-led-flashing-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Flashlight Type",
            "value": "Regular LED"
          },
          {
            "label": "Body Material",
            "value": "ABS Plastic"
          },
          {
            "label": "Beam Distance",
            "value": "Short Range"
          },
          {
            "label": "Wattage",
            "value": "15 W"
          },
          {
            "label": "Light Output",
            "value": "200 lm"
          },
          {
            "label": "Material",
            "value": "ABS"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-311671136",
    "product_name": "METAL OWL FOG LIGHT",
    "slug": "metal-owl-fog-light",
    "sku": "PE-311671136",
    "product_code": "311671136",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "METAL OWL FOG LIGHT manufactured by Primus Enterprises. High-durability automotive component with 12 AND24 input and ABS / Die-Cast Alloy construction.",
    "long_description": "The METAL OWL FOG LIGHT (Part Number: 311671136) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 AND24 electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Fitting Placement: Both Right & Left",
      "Electrical Input: 12 AND24",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12 AND24",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 130,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646297645/BM/VD/BW/53826589/metal-owl-fog-light-500x500.png",
    "primary_image_alt": "METAL OWL FOG LIGHT - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646297645/BM/VD/BW/53826589/metal-owl-fog-light-500x500.png",
        "alt": "METAL OWL FOG LIGHT - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "METAL OWL FOG LIGHT | Primus Enterprises",
    "seo_description": "METAL OWL FOG LIGHT wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "METAL OWL FOG LIGHT, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/metal-owl-fog-light",
    "og_title": "METAL OWL FOG LIGHT | Primus Enterprises",
    "og_description": "METAL OWL FOG LIGHT manufactured by Primus Enterprises. High-durability automotive component with 12 AND24 input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646297645/BM/VD/BW/53826589/metal-owl-fog-light-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-metal-owl-fog-light-hero",
        "type": "hero",
        "title": "METAL OWL FOG LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The METAL OWL FOG LIGHT (Part Number: 311671136) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 AND24 electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646297645/BM/VD/BW/53826589/metal-owl-fog-light-500x500.png",
        "image_alt": "METAL OWL FOG LIGHT Technical Profile"
      },
      {
        "id": "ap-metal-owl-fog-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Product Brand",
            "value": "PRIMUS"
          },
          {
            "label": "Voltage",
            "value": "12 AND24"
          },
          {
            "label": "Car Brand",
            "value": "UNIVERSAL"
          },
          {
            "label": "Car Model",
            "value": "UNIVERSAL"
          },
          {
            "label": "Model Year",
            "value": "2025"
          },
          {
            "label": "Fitting Place",
            "value": "Both Right & Left"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-311819869",
    "product_name": "JS 33 PRO 3 LANCE METAL FOG LAMP",
    "slug": "js-33-pro-3-lance-metal-fog-lamp",
    "sku": "PE-311819869",
    "product_code": "311819869",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "JS 33 PRO 3 LANCE METAL FOG LAMP manufactured by Primus Enterprises. High-durability automotive component with 12V - 24V (Multi) input and ABS / Die-Cast Alloy construction.",
    "long_description": "The JS 33 PRO 3 LANCE METAL FOG LAMP (Part Number: 311819869) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V - 24V (Multi) electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12V - 24V (Multi)",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V - 24V (Multi)",
    "wattage": "24W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 170,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644598529/PO/BS/UF/53826589/js-33-pro-3-lance-metal-fog-lamp-500x500.png",
    "primary_image_alt": "JS 33 PRO 3 LANCE METAL FOG LAMP - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/644598529/PO/BS/UF/53826589/js-33-pro-3-lance-metal-fog-lamp-500x500.png",
        "alt": "JS 33 PRO 3 LANCE METAL FOG LAMP - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "JS 33 PRO 3 LANCE METAL FOG LAMP | Primus Enterprises",
    "seo_description": "JS 33 PRO 3 LANCE METAL FOG LAMP wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "JS 33 PRO 3 LANCE METAL FOG LAMP, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/js-33-pro-3-lance-metal-fog-lamp",
    "og_title": "JS 33 PRO 3 LANCE METAL FOG LAMP | Primus Enterprises",
    "og_description": "JS 33 PRO 3 LANCE METAL FOG LAMP manufactured by Primus Enterprises. High-durability automotive component with 12V - 24V (Multi) input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644598529/PO/BS/UF/53826589/js-33-pro-3-lance-metal-fog-lamp-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-js-33-pro-3-lance-metal-fog-lamp-hero",
        "type": "hero",
        "title": "JS 33 PRO 3 LANCE METAL FOG LAMP",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The JS 33 PRO 3 LANCE METAL FOG LAMP (Part Number: 311819869) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V - 24V (Multi) electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644598529/PO/BS/UF/53826589/js-33-pro-3-lance-metal-fog-lamp-500x500.png",
        "image_alt": "JS 33 PRO 3 LANCE METAL FOG LAMP Technical Profile"
      },
      {
        "id": "ap-js-33-pro-3-lance-metal-fog-lamp-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Compatibility",
            "value": "Universal"
          },
          {
            "label": "Lamp Type",
            "value": "Projector"
          },
          {
            "label": "Light Source",
            "value": "Halogen"
          },
          {
            "label": "Light Color",
            "value": "Tri-Color"
          },
          {
            "label": "Wattage",
            "value": "24W"
          },
          {
            "label": "Voltage",
            "value": "12V - 24V (Multi)"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-311816972",
    "product_name": "JS 32 (2 LANCE METAL) Fog Lamp",
    "slug": "js-32-2-lance-metal-fog-lamp",
    "sku": "PE-PANINDIA",
    "product_code": "PanIndia",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "JS 32 (2 LANCE METAL) Fog Lamp manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and METAL construction.",
    "long_description": "The JS 32 (2 LANCE METAL) Fog Lamp (Part Number: PanIndia) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust METAL construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "METAL",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "72 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "METAL",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 120,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/10/552874884/FM/LZ/XI/53826589/primus-6-500x500.jpg",
    "primary_image_alt": "JS 32 (2 LANCE METAL) Fog Lamp - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/10/552874884/FM/LZ/XI/53826589/primus-6-500x500.jpg",
        "alt": "JS 32 (2 LANCE METAL) Fog Lamp - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "JS 32 (2 LANCE METAL) Fog Lamp | Primus Enterprises",
    "seo_description": "JS 32 (2 LANCE METAL) Fog Lamp wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "JS 32 (2 LANCE METAL) Fog Lamp, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/js-32-2-lance-metal-fog-lamp",
    "og_title": "JS 32 (2 LANCE METAL) Fog Lamp | Primus Enterprises",
    "og_description": "JS 32 (2 LANCE METAL) Fog Lamp manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and METAL construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/10/552874884/FM/LZ/XI/53826589/primus-6-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-js-32-2-lance-metal-fog-lamp-hero",
        "type": "hero",
        "title": "JS 32 (2 LANCE METAL) FOG LAMP",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The JS 32 (2 LANCE METAL) Fog Lamp (Part Number: PanIndia) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust METAL construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/10/552874884/FM/LZ/XI/53826589/primus-6-500x500.jpg",
        "image_alt": "JS 32 (2 LANCE METAL) Fog Lamp Technical Profile"
      },
      {
        "id": "ap-js-32-2-lance-metal-fog-lamp-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Compatibility",
            "value": "Universal"
          },
          {
            "label": "Lamp Type",
            "value": "Fog lamp"
          },
          {
            "label": "Light Source",
            "value": "LED"
          },
          {
            "label": "Light Color",
            "value": "White & Yellow (Dual)"
          },
          {
            "label": "Wattage",
            "value": "72 W"
          },
          {
            "label": "Material",
            "value": "METAL"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-311817096",
    "product_name": "JS 4 LANCE METAL FOG LAMP",
    "slug": "js-4-lance-metal-fog-lamp",
    "sku": "PE-311817096",
    "product_code": "311817096",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "JS 4 LANCE METAL FOG LAMP manufactured by Primus Enterprises. High-durability automotive component with 12V - 24V (Multi) input and METAL construction.",
    "long_description": "The JS 4 LANCE METAL FOG LAMP (Part Number: 311817096) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust METAL construction, 12V - 24V (Multi) electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12V - 24V (Multi)",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "METAL",
    "colour": "Amber / White",
    "voltage": "12V - 24V (Multi)",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "METAL",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 230,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644596676/DB/QK/PG/53826589/js-4-lance-metal-fog-lamp-500x500.png",
    "primary_image_alt": "JS 4 LANCE METAL FOG LAMP - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/644596676/DB/QK/PG/53826589/js-4-lance-metal-fog-lamp-500x500.png",
        "alt": "JS 4 LANCE METAL FOG LAMP - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "JS 4 LANCE METAL FOG LAMP | Primus Enterprises",
    "seo_description": "JS 4 LANCE METAL FOG LAMP wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "JS 4 LANCE METAL FOG LAMP, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/js-4-lance-metal-fog-lamp",
    "og_title": "JS 4 LANCE METAL FOG LAMP | Primus Enterprises",
    "og_description": "JS 4 LANCE METAL FOG LAMP manufactured by Primus Enterprises. High-durability automotive component with 12V - 24V (Multi) input and METAL construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644596676/DB/QK/PG/53826589/js-4-lance-metal-fog-lamp-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-js-4-lance-metal-fog-lamp-hero",
        "type": "hero",
        "title": "JS 4 LANCE METAL FOG LAMP",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The JS 4 LANCE METAL FOG LAMP (Part Number: 311817096) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust METAL construction, 12V - 24V (Multi) electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644596676/DB/QK/PG/53826589/js-4-lance-metal-fog-lamp-500x500.png",
        "image_alt": "JS 4 LANCE METAL FOG LAMP Technical Profile"
      },
      {
        "id": "ap-js-4-lance-metal-fog-lamp-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Compatibility",
            "value": "Universal"
          },
          {
            "label": "Lamp Type",
            "value": "Projector"
          },
          {
            "label": "Light Source",
            "value": "Halogen"
          },
          {
            "label": "Light Color",
            "value": "White"
          },
          {
            "label": "Voltage",
            "value": "12V - 24V (Multi)"
          },
          {
            "label": "Material",
            "value": "METAL"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-304681814",
    "product_name": "STROBE LAMP FOG",
    "slug": "strobe-lamp-fog",
    "sku": "PE-304681814",
    "product_code": "304681814",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "STROBE LAMP FOG manufactured by Primus Enterprises. High-durability automotive component with 12&24 input and ABS / Die-Cast Alloy construction.",
    "long_description": "The STROBE LAMP FOG (Part Number: 304681814) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12&24 electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12&24",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12&24",
    "wattage": "DC",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": true,
    "show_price": false,
    "price": 85,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648221360/GB/YP/AQ/53826589/strobe-lamp-fog-500x500.png",
    "primary_image_alt": "STROBE LAMP FOG - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/648221360/GB/YP/AQ/53826589/strobe-lamp-fog-500x500.png",
        "alt": "STROBE LAMP FOG - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "STROBE LAMP FOG | Primus Enterprises",
    "seo_description": "STROBE LAMP FOG wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "STROBE LAMP FOG, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/strobe-lamp-fog",
    "og_title": "STROBE LAMP FOG | Primus Enterprises",
    "og_description": "STROBE LAMP FOG manufactured by Primus Enterprises. High-durability automotive component with 12&24 input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648221360/GB/YP/AQ/53826589/strobe-lamp-fog-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-strobe-lamp-fog-hero",
        "type": "hero",
        "title": "STROBE LAMP FOG",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The STROBE LAMP FOG (Part Number: 304681814) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12&24 electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648221360/GB/YP/AQ/53826589/strobe-lamp-fog-500x500.png",
        "image_alt": "STROBE LAMP FOG Technical Profile"
      },
      {
        "id": "ap-strobe-lamp-fog-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Type",
            "value": "Two Wheeler"
          },
          {
            "label": "Vehicle Compatibility",
            "value": "ALL"
          },
          {
            "label": "Light Source",
            "value": "LED"
          },
          {
            "label": "Light Color",
            "value": "RED AND BLUE"
          },
          {
            "label": "Wattage",
            "value": "DC"
          },
          {
            "label": "Voltage",
            "value": "12&24"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-311816695",
    "product_name": "3 LANCE METAL PROJECTOR FOG LAMP",
    "slug": "3-lance-metal-projector-fog-lamp",
    "sku": "PE-311816695",
    "product_code": "311816695",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "3 LANCE METAL PROJECTOR FOG LAMP manufactured by Primus Enterprises. High-durability automotive component with 12-24V Multi-Volt input and ABS / Die-Cast Alloy construction.",
    "long_description": "The 3 LANCE METAL PROJECTOR FOG LAMP (Part Number: 311816695) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12-24V Multi-Volt electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12-24V Multi-Volt",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12-24V Multi-Volt",
    "wattage": "24W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 110,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648222376/DF/AE/DD/53826589/3-lance-metal-projector-fog-lamp-500x500.jpg",
    "primary_image_alt": "3 LANCE METAL PROJECTOR FOG LAMP - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/648222376/DF/AE/DD/53826589/3-lance-metal-projector-fog-lamp-500x500.jpg",
        "alt": "3 LANCE METAL PROJECTOR FOG LAMP - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "3 LANCE METAL PROJECTOR FOG LAMP | Primus Enterprises",
    "seo_description": "3 LANCE METAL PROJECTOR FOG LAMP wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "3 LANCE METAL PROJECTOR FOG LAMP, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/3-lance-metal-projector-fog-lamp",
    "og_title": "3 LANCE METAL PROJECTOR FOG LAMP | Primus Enterprises",
    "og_description": "3 LANCE METAL PROJECTOR FOG LAMP manufactured by Primus Enterprises. High-durability automotive component with 12-24V Multi-Volt input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648222376/DF/AE/DD/53826589/3-lance-metal-projector-fog-lamp-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-3-lance-metal-projector-fog-lamp-hero",
        "type": "hero",
        "title": "3 LANCE METAL PROJECTOR FOG LAMP",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The 3 LANCE METAL PROJECTOR FOG LAMP (Part Number: 311816695) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12-24V Multi-Volt electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648222376/DF/AE/DD/53826589/3-lance-metal-projector-fog-lamp-500x500.jpg",
        "image_alt": "3 LANCE METAL PROJECTOR FOG LAMP Technical Profile"
      },
      {
        "id": "ap-3-lance-metal-projector-fog-lamp-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Compatibility",
            "value": "Universal"
          },
          {
            "label": "Lamp Type",
            "value": "Projector"
          },
          {
            "label": "Light Source",
            "value": "HID"
          },
          {
            "label": "Light Color",
            "value": "Tri-Color"
          },
          {
            "label": "Wattage",
            "value": "24W"
          },
          {
            "label": "Voltage",
            "value": "12-24V Multi-Volt"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-327479282",
    "product_name": "S-6 FOG LAMP UNIVERSAL",
    "slug": "s-6-fog-lamp-universal",
    "sku": "PE-327479282",
    "product_code": "327479282",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "S-6 FOG LAMP UNIVERSAL manufactured by Primus Enterprises. High-durability automotive component with 12V input and ABS / Die-Cast Alloy construction.",
    "long_description": "The S-6 FOG LAMP UNIVERSAL (Part Number: 327479282) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12V",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V",
    "wattage": "42 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 78,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610317438/UX/FN/FV/53826589/s-6-fog-lamp-universal-500x500.webp",
    "primary_image_alt": "S-6 FOG LAMP UNIVERSAL - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610317438/UX/FN/FV/53826589/s-6-fog-lamp-universal-500x500.webp",
        "alt": "S-6 FOG LAMP UNIVERSAL - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "S-6 FOG LAMP UNIVERSAL | Primus Enterprises",
    "seo_description": "S-6 FOG LAMP UNIVERSAL wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "S-6 FOG LAMP UNIVERSAL, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/s-6-fog-lamp-universal",
    "og_title": "S-6 FOG LAMP UNIVERSAL | Primus Enterprises",
    "og_description": "S-6 FOG LAMP UNIVERSAL manufactured by Primus Enterprises. High-durability automotive component with 12V input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610317438/UX/FN/FV/53826589/s-6-fog-lamp-universal-500x500.webp",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-s-6-fog-lamp-universal-hero",
        "type": "hero",
        "title": "S-6 FOG LAMP UNIVERSAL",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The S-6 FOG LAMP UNIVERSAL (Part Number: 327479282) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610317438/UX/FN/FV/53826589/s-6-fog-lamp-universal-500x500.webp",
        "image_alt": "S-6 FOG LAMP UNIVERSAL Technical Profile"
      },
      {
        "id": "ap-s-6-fog-lamp-universal-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Compatibility",
            "value": "Universal"
          },
          {
            "label": "Lamp Type",
            "value": "Projector"
          },
          {
            "label": "Light Source",
            "value": "LED"
          },
          {
            "label": "Light Color",
            "value": "White"
          },
          {
            "label": "Wattage",
            "value": "42 W"
          },
          {
            "label": "Voltage",
            "value": "12V"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-327480046",
    "product_name": "2 LANCE FOG LAMP PVC",
    "slug": "2-lance-fog-lamp-pvc",
    "sku": "PE-8512",
    "product_code": "8512",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "2 LANCE FOG LAMP PVC manufactured by Primus Enterprises. High-durability automotive component with 12V - 24V (Multi) input and ABS / Die-Cast Alloy construction.",
    "long_description": "The 2 LANCE FOG LAMP PVC (Part Number: 8512) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V - 24V (Multi) electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12V - 24V (Multi)",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V - 24V (Multi)",
    "wattage": "72 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 85,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646321936/AS/UR/SO/53826589/2-lance-fog-lamp-pvc-500x500.png",
    "primary_image_alt": "2 LANCE FOG LAMP PVC - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646321936/AS/UR/SO/53826589/2-lance-fog-lamp-pvc-500x500.png",
        "alt": "2 LANCE FOG LAMP PVC - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "2 LANCE FOG LAMP PVC | Primus Enterprises",
    "seo_description": "2 LANCE FOG LAMP PVC wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "2 LANCE FOG LAMP PVC, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/2-lance-fog-lamp-pvc",
    "og_title": "2 LANCE FOG LAMP PVC | Primus Enterprises",
    "og_description": "2 LANCE FOG LAMP PVC manufactured by Primus Enterprises. High-durability automotive component with 12V - 24V (Multi) input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646321936/AS/UR/SO/53826589/2-lance-fog-lamp-pvc-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-2-lance-fog-lamp-pvc-hero",
        "type": "hero",
        "title": "2 LANCE FOG LAMP PVC",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The 2 LANCE FOG LAMP PVC (Part Number: 8512) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V - 24V (Multi) electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646321936/AS/UR/SO/53826589/2-lance-fog-lamp-pvc-500x500.png",
        "image_alt": "2 LANCE FOG LAMP PVC Technical Profile"
      },
      {
        "id": "ap-2-lance-fog-lamp-pvc-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Compatibility",
            "value": "Universal"
          },
          {
            "label": "Lamp Type",
            "value": "Fog lamp"
          },
          {
            "label": "Light Source",
            "value": "LED"
          },
          {
            "label": "Light Color",
            "value": "White & Yellow (Dual)"
          },
          {
            "label": "Wattage",
            "value": "72 W"
          },
          {
            "label": "Voltage",
            "value": "12V - 24V (Multi)"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-327481166",
    "product_name": "G-16 FOG LAMP",
    "slug": "g-16-fog-lamp",
    "sku": "PE-327481166",
    "product_code": "327481166",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "G-16 FOG LAMP manufactured by Primus Enterprises. High-durability automotive component with 12V - 24V (Multi) input and ABS / Die-Cast Alloy construction.",
    "long_description": "The G-16 FOG LAMP (Part Number: 327481166) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V - 24V (Multi) electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12V - 24V (Multi)",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V - 24V (Multi)",
    "wattage": "90 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 299,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610324542/ZN/CK/PM/53826589/g-16-fog-lamp-500x500.jpeg",
    "primary_image_alt": "G-16 FOG LAMP - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610324542/ZN/CK/PM/53826589/g-16-fog-lamp-500x500.jpeg",
        "alt": "G-16 FOG LAMP - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "G-16 FOG LAMP | Primus Enterprises",
    "seo_description": "G-16 FOG LAMP wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "G-16 FOG LAMP, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/g-16-fog-lamp",
    "og_title": "G-16 FOG LAMP | Primus Enterprises",
    "og_description": "G-16 FOG LAMP manufactured by Primus Enterprises. High-durability automotive component with 12V - 24V (Multi) input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610324542/ZN/CK/PM/53826589/g-16-fog-lamp-500x500.jpeg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-g-16-fog-lamp-hero",
        "type": "hero",
        "title": "G-16 FOG LAMP",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The G-16 FOG LAMP (Part Number: 327481166) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V - 24V (Multi) electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610324542/ZN/CK/PM/53826589/g-16-fog-lamp-500x500.jpeg",
        "image_alt": "G-16 FOG LAMP Technical Profile"
      },
      {
        "id": "ap-g-16-fog-lamp-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Compatibility",
            "value": "Universal"
          },
          {
            "label": "Lamp Type",
            "value": "Projector"
          },
          {
            "label": "Light Source",
            "value": "Halogen"
          },
          {
            "label": "Light Color",
            "value": "Multi-Color (RGB)"
          },
          {
            "label": "Wattage",
            "value": "90 W"
          },
          {
            "label": "Voltage",
            "value": "12V - 24V (Multi)"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-327476562",
    "product_name": "G-1 FOG LAMP 5 FUNCTION",
    "slug": "g-1-fog-lamp-5-function",
    "sku": "PE-327476562",
    "product_code": "327476562",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "G-1 FOG LAMP 5 FUNCTION manufactured by Primus Enterprises. High-durability automotive component with 12V - 24V (Multi) input and ABS / Die-Cast Alloy construction.",
    "long_description": "The G-1 FOG LAMP 5 FUNCTION (Part Number: 327476562) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V - 24V (Multi) electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12V - 24V (Multi)",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V - 24V (Multi)",
    "wattage": "12 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Sets",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 150,
    "price_unit": "Set",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610304669/LF/HC/HC/53826589/g-1-fog-lamp-5-function-500x500.jpg",
    "primary_image_alt": "G-1 FOG LAMP 5 FUNCTION - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610304669/LF/HC/HC/53826589/g-1-fog-lamp-5-function-1000x1000.jpg",
        "alt": "G-1 FOG LAMP 5 FUNCTION View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610304674/QW/HR/SQ/53826589/g-1-fog-lamp-5-function-1000x1000.jpg",
        "alt": "G-1 FOG LAMP 5 FUNCTION View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610304675/VI/US/GI/53826589/g-1-fog-lamp-5-function-1000x1000.webp",
        "alt": "G-1 FOG LAMP 5 FUNCTION View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610304676/TI/XK/TI/53826589/g-1-fog-lamp-5-function-1000x1000.webp",
        "alt": "G-1 FOG LAMP 5 FUNCTION View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610304677/OE/XO/BB/53826589/g-1-fog-lamp-5-function-1000x1000.webp",
        "alt": "G-1 FOG LAMP 5 FUNCTION View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610304679/HU/AN/CB/53826589/g-1-fog-lamp-5-function-1000x1000.webp",
        "alt": "G-1 FOG LAMP 5 FUNCTION View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610304682/ZB/QC/ZO/53826589/g-1-fog-lamp-5-function-1000x1000.webp",
        "alt": "G-1 FOG LAMP 5 FUNCTION View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610304683/MT/YC/TI/53826589/g-1-fog-lamp-5-function-1000x1000.webp",
        "alt": "G-1 FOG LAMP 5 FUNCTION View - Primus Enterprises",
        "caption": "Studio specification view"
      }
    ],
    "technical_images": [
      "https://5.imimg.com/data5/SELLER/Default/2026/5/610304674/QW/HR/SQ/53826589/g-1-fog-lamp-5-function-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/610304675/VI/US/GI/53826589/g-1-fog-lamp-5-function-1000x1000.webp",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/610304676/TI/XK/TI/53826589/g-1-fog-lamp-5-function-1000x1000.webp",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/610304677/OE/XO/BB/53826589/g-1-fog-lamp-5-function-1000x1000.webp",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/610304679/HU/AN/CB/53826589/g-1-fog-lamp-5-function-1000x1000.webp",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/610304682/ZB/QC/ZO/53826589/g-1-fog-lamp-5-function-1000x1000.webp",
      "https://5.imimg.com/data5/SELLER/Default/2026/5/610304683/MT/YC/TI/53826589/g-1-fog-lamp-5-function-1000x1000.webp"
    ],
    "seo_title": "G-1 FOG LAMP 5 FUNCTION | Primus Enterprises",
    "seo_description": "G-1 FOG LAMP 5 FUNCTION wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "G-1 FOG LAMP 5 FUNCTION, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/g-1-fog-lamp-5-function",
    "og_title": "G-1 FOG LAMP 5 FUNCTION | Primus Enterprises",
    "og_description": "G-1 FOG LAMP 5 FUNCTION manufactured by Primus Enterprises. High-durability automotive component with 12V - 24V (Multi) input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610304669/LF/HC/HC/53826589/g-1-fog-lamp-5-function-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-g-1-fog-lamp-5-function-hero",
        "type": "hero",
        "title": "G-1 FOG LAMP 5 FUNCTION",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The G-1 FOG LAMP 5 FUNCTION (Part Number: 327476562) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V - 24V (Multi) electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610304669/LF/HC/HC/53826589/g-1-fog-lamp-5-function-500x500.jpg",
        "image_alt": "G-1 FOG LAMP 5 FUNCTION Technical Profile"
      },
      {
        "id": "ap-g-1-fog-lamp-5-function-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Compatibility",
            "value": "Universal"
          },
          {
            "label": "Lamp Type",
            "value": "Projector"
          },
          {
            "label": "Light Source",
            "value": "LED"
          },
          {
            "label": "Light Color",
            "value": "RED/BLUE"
          },
          {
            "label": "Wattage",
            "value": "12 W"
          },
          {
            "label": "Voltage",
            "value": "12V - 24V (Multi)"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-304681440",
    "product_name": "G-15 Metal Fog Lamp 12V & 24V",
    "slug": "g-15-metal-fog-lamp-12v-24v",
    "sku": "PE-304681440",
    "product_code": "304681440",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "G-15 Metal Fog Lamp 12V & 24V manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The G-15 Metal Fog Lamp 12V & 24V (Part Number: 304681440) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "DC",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": true,
    "show_price": false,
    "price": 230,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646040055/IF/SA/BL/53826589/g-15-metal-fog-lamp-12v-24v-500x500.png",
    "primary_image_alt": "G-15 Metal Fog Lamp 12V & 24V - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646040055/IF/SA/BL/53826589/g-15-metal-fog-lamp-12v-24v-500x500.png",
        "alt": "G-15 Metal Fog Lamp 12V & 24V - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "G-15 Metal Fog Lamp 12V & 24V | Primus Enterprises",
    "seo_description": "G-15 Metal Fog Lamp 12V & 24V wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "G-15 Metal Fog Lamp 12V & 24V, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/g-15-metal-fog-lamp-12v-24v",
    "og_title": "G-15 Metal Fog Lamp 12V & 24V | Primus Enterprises",
    "og_description": "G-15 Metal Fog Lamp 12V & 24V manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646040055/IF/SA/BL/53826589/g-15-metal-fog-lamp-12v-24v-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-g-15-metal-fog-lamp-12v-24v-hero",
        "type": "hero",
        "title": "G-15 METAL FOG LAMP 12V & 24V",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The G-15 Metal Fog Lamp 12V & 24V (Part Number: 304681440) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646040055/IF/SA/BL/53826589/g-15-metal-fog-lamp-12v-24v-500x500.png",
        "image_alt": "G-15 Metal Fog Lamp 12V & 24V Technical Profile"
      },
      {
        "id": "ap-g-15-metal-fog-lamp-12v-24v-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Compatibility",
            "value": "Universal"
          },
          {
            "label": "Vehicle Type",
            "value": "Two Wheeler"
          },
          {
            "label": "Lamp Type",
            "value": "Projector"
          },
          {
            "label": "Light Source",
            "value": "Halogen"
          },
          {
            "label": "Light Color",
            "value": "WHITE , YELLOW"
          },
          {
            "label": "Wattage",
            "value": "DC"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-304681535",
    "product_name": "3 LANCE METAL FOG LAMP",
    "slug": "3-lance-metal-fog-lamp",
    "sku": "PE-304681535",
    "product_code": "304681535",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "3 LANCE METAL FOG LAMP manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The 3 LANCE METAL FOG LAMP (Part Number: 304681535) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "DC",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 130,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646043734/TK/OA/FO/53826589/3-lance-metal-fog-lamp-500x500.png",
    "primary_image_alt": "3 LANCE METAL FOG LAMP - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646043734/TK/OA/FO/53826589/3-lance-metal-fog-lamp-500x500.png",
        "alt": "3 LANCE METAL FOG LAMP - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "3 LANCE METAL FOG LAMP | Primus Enterprises",
    "seo_description": "3 LANCE METAL FOG LAMP wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "3 LANCE METAL FOG LAMP, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/3-lance-metal-fog-lamp",
    "og_title": "3 LANCE METAL FOG LAMP | Primus Enterprises",
    "og_description": "3 LANCE METAL FOG LAMP manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646043734/TK/OA/FO/53826589/3-lance-metal-fog-lamp-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-3-lance-metal-fog-lamp-hero",
        "type": "hero",
        "title": "3 LANCE METAL FOG LAMP",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The 3 LANCE METAL FOG LAMP (Part Number: 304681535) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646043734/TK/OA/FO/53826589/3-lance-metal-fog-lamp-500x500.png",
        "image_alt": "3 LANCE METAL FOG LAMP Technical Profile"
      },
      {
        "id": "ap-3-lance-metal-fog-lamp-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Compatibility",
            "value": "Universal"
          },
          {
            "label": "Vehicle Type",
            "value": "Two Wheeler"
          },
          {
            "label": "Lamp Type",
            "value": "Projector"
          },
          {
            "label": "Light Source",
            "value": "HID, Halogen"
          },
          {
            "label": "Light Color",
            "value": "White"
          },
          {
            "label": "Wattage",
            "value": "DC"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-203467983",
    "product_name": "LIGHT OWL Vintage Style Owl Design MULTI",
    "slug": "light-owl-vintage-style-owl-design-multi",
    "sku": "PE-203467983",
    "product_code": "203467983",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "LIGHT OWL Vintage Style Owl Design MULTI manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "long_description": "The LIGHT OWL Vintage Style Owl Design MULTI (Part Number: 203467983) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Illumination Color: White",
      "Housing Material: ABS Plastic for durability",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS Plastic",
    "colour": "White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS Plastic",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 176,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646056236/VR/KJ/BF/53826589/light-owl-vintage-style-owl-design-multi-500x500.png",
    "primary_image_alt": "LIGHT OWL Vintage Style Owl Design MULTI - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646056236/VR/KJ/BF/53826589/light-owl-vintage-style-owl-design-multi-500x500.png",
        "alt": "LIGHT OWL Vintage Style Owl Design MULTI - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "LIGHT OWL Vintage Style Owl Design MULTI | Primus Enterprises",
    "seo_description": "LIGHT OWL Vintage Style Owl Design MULTI wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "LIGHT OWL Vintage Style Owl Design MULTI, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/light-owl-vintage-style-owl-design-multi",
    "og_title": "LIGHT OWL Vintage Style Owl Design MULTI | Primus Enterprises",
    "og_description": "LIGHT OWL Vintage Style Owl Design MULTI manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646056236/VR/KJ/BF/53826589/light-owl-vintage-style-owl-design-multi-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-light-owl-vintage-style-owl-design-multi-hero",
        "type": "hero",
        "title": "LIGHT OWL VINTAGE STYLE OWL DESIGN MULTI",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The LIGHT OWL Vintage Style Owl Design MULTI (Part Number: 203467983) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646056236/VR/KJ/BF/53826589/light-owl-vintage-style-owl-design-multi-500x500.png",
        "image_alt": "LIGHT OWL Vintage Style Owl Design MULTI Technical Profile"
      },
      {
        "id": "ap-light-owl-vintage-style-owl-design-multi-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Product Type",
            "value": "Headlight"
          },
          {
            "label": "Compatible Vehicle Brand",
            "value": "Universal"
          },
          {
            "label": "Lighting Color",
            "value": "White"
          },
          {
            "label": "Light Source",
            "value": "LED"
          },
          {
            "label": "Body Material",
            "value": "ABS Plastic"
          },
          {
            "label": "Brand",
            "value": "SSLG"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-160738518",
    "product_name": "S-9 Led Fog Light",
    "slug": "s-9-led-fog-light",
    "sku": "PE-160738518",
    "product_code": "160738518",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "S-9 Led Fog Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "long_description": "The S-9 Led Fog Light (Part Number: 160738518) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Housing Material: ABS Plastic for durability",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS Plastic",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "LED",
    "lighting_type": "LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS Plastic",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 52,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/ANDROID/Default/2026/1/572539474/JS/UV/EA/53826589/product-jpeg-500x500.jpg",
    "primary_image_alt": "S-9 Led Fog Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/ANDROID/Default/2026/1/572539474/JS/UV/EA/53826589/product-jpeg-500x500.jpg",
        "alt": "S-9 Led Fog Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "S-9 Led Fog Light | Primus Enterprises",
    "seo_description": "S-9 Led Fog Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "S-9 Led Fog Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/s-9-led-fog-light",
    "og_title": "S-9 Led Fog Light | Primus Enterprises",
    "og_description": "S-9 Led Fog Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "og_image": "https://5.imimg.com/data5/ANDROID/Default/2026/1/572539474/JS/UV/EA/53826589/product-jpeg-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-s-9-led-fog-light-hero",
        "type": "hero",
        "title": "S-9 LED FOG LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The S-9 Led Fog Light (Part Number: 160738518) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/ANDROID/Default/2026/1/572539474/JS/UV/EA/53826589/product-jpeg-500x500.jpg",
        "image_alt": "S-9 Led Fog Light Technical Profile"
      },
      {
        "id": "ap-s-9-led-fog-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Lighting Type",
            "value": "LED"
          },
          {
            "label": "Vehicle Compatibility",
            "value": "Bike & other vihicals (Universal)"
          },
          {
            "label": "Lamp Type",
            "value": "Projector"
          },
          {
            "label": "Light Source",
            "value": "LED"
          },
          {
            "label": "Body Material",
            "value": "ABS Plastic"
          },
          {
            "label": "Light Color",
            "value": "White"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-163127040",
    "product_name": "Automotive BIke Handle Light",
    "slug": "automotive-bike-handle-light",
    "sku": "PE-163127040",
    "product_code": "163127040",
    "category_id": "cat-motorcycle-indicators",
    "category_name": "Motorcycle Indicators & Lights",
    "short_description": "Automotive BIke Handle Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and Steel construction.",
    "long_description": "The Automotive BIke Handle Light (Part Number: 163127040) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust Steel construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "Steel",
    "colour": "Silver",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "Steel",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Sets",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 85,
    "price_unit": "Set",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571973227/AZ/VE/YI/53826589/handle-bar-lights-500x500.jpg",
    "primary_image_alt": "Automotive BIke Handle Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/571973227/AZ/VE/YI/53826589/handle-bar-lights-500x500.jpg",
        "alt": "Automotive BIke Handle Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Automotive BIke Handle Light | Primus Enterprises",
    "seo_description": "Automotive BIke Handle Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Automotive BIke Handle Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/automotive-bike-handle-light",
    "og_title": "Automotive BIke Handle Light | Primus Enterprises",
    "og_description": "Automotive BIke Handle Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and Steel construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571973227/AZ/VE/YI/53826589/handle-bar-lights-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-automotive-bike-handle-light-hero",
        "type": "hero",
        "title": "AUTOMOTIVE BIKE HANDLE LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Automotive BIke Handle Light (Part Number: 163127040) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust Steel construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571973227/AZ/VE/YI/53826589/handle-bar-lights-500x500.jpg",
        "image_alt": "Automotive BIke Handle Light Technical Profile"
      },
      {
        "id": "ap-automotive-bike-handle-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Product Type",
            "value": "handle light"
          },
          {
            "label": "Compatible Vehicle Brand",
            "value": "Universal"
          },
          {
            "label": "Light Source",
            "value": "LED"
          },
          {
            "label": "Pack Of",
            "value": "1 Piece"
          },
          {
            "label": "Material",
            "value": "Steel"
          },
          {
            "label": "Color",
            "value": "Silver"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467572",
    "product_name": "ABS Plastic Horn Relay",
    "slug": "abs-plastic-horn-relay",
    "sku": "PE-224467572",
    "product_code": "224467572",
    "category_id": "cat-flashers-relays",
    "category_name": "Flashers & Horn Relays",
    "short_description": "ABS Plastic Horn Relay manufactured by Primus Enterprises. High-durability automotive component with 12V input and ABS / Die-Cast Alloy construction.",
    "long_description": "The ABS Plastic Horn Relay (Part Number: 224467572) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12V",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Black",
    "voltage": "12V",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 23,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644582566/UN/ER/WQ/53826589/abs-plastic-horn-relay-500x500.png",
    "primary_image_alt": "ABS Plastic Horn Relay - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/644582566/UN/ER/WQ/53826589/abs-plastic-horn-relay-500x500.png",
        "alt": "ABS Plastic Horn Relay - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "ABS Plastic Horn Relay | Primus Enterprises",
    "seo_description": "ABS Plastic Horn Relay wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "ABS Plastic Horn Relay, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/abs-plastic-horn-relay",
    "og_title": "ABS Plastic Horn Relay | Primus Enterprises",
    "og_description": "ABS Plastic Horn Relay manufactured by Primus Enterprises. High-durability automotive component with 12V input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644582566/UN/ER/WQ/53826589/abs-plastic-horn-relay-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-abs-plastic-horn-relay-hero",
        "type": "hero",
        "title": "ABS PLASTIC HORN RELAY",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The ABS Plastic Horn Relay (Part Number: 224467572) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644582566/UN/ER/WQ/53826589/abs-plastic-horn-relay-500x500.png",
        "image_alt": "ABS Plastic Horn Relay Technical Profile"
      },
      {
        "id": "ap-abs-plastic-horn-relay-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Voltage",
            "value": "12V"
          },
          {
            "label": "Number Of Pin",
            "value": "4"
          },
          {
            "label": "Country of Origin",
            "value": "Made in India"
          },
          {
            "label": "Brand",
            "value": "Primus"
          },
          {
            "label": "Color",
            "value": "Black"
          },
          {
            "label": "Shape",
            "value": "Rectangular"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-160269102",
    "product_name": "Color Black 12 Volt 8-Way Horn Tuner, 4-Wire Melody Maker",
    "slug": "color-black-12-volt-8-way-horn-tuner-4-wire-melody-maker",
    "sku": "PE-160269102",
    "product_code": "160269102",
    "category_id": "cat-flashers-relays",
    "category_name": "Flashers & Horn Relays",
    "short_description": "Color Black 12 Volt 8-Way Horn Tuner, 4-Wire Melody Maker manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Color Black 12 Volt 8-Way Horn Tuner, 4-Wire Melody Maker (Part Number: 160269102) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 110,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570906060/VH/PE/FB/53826589/color-black-12-volt-8-way-horn-tuner-4-wire-melody-maker-500x500.jpg",
    "primary_image_alt": "Color Black 12 Volt 8-Way Horn Tuner, 4-Wire Melody Maker - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/570906060/VH/PE/FB/53826589/color-black-12-volt-8-way-horn-tuner-4-wire-melody-maker-500x500.jpg",
        "alt": "Color Black 12 Volt 8-Way Horn Tuner, 4-Wire Melody Maker - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Color Black 12 Volt 8-Way Horn Tuner, 4-Wire Melody Maker | Primus Enterprises",
    "seo_description": "Color Black 12 Volt 8-Way Horn Tuner, 4-Wire Melody Maker wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Color Black 12 Volt 8-Way Horn Tuner, 4-Wire Melody Maker, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/color-black-12-volt-8-way-horn-tuner-4-wire-melody-maker",
    "og_title": "Color Black 12 Volt 8-Way Horn Tuner, 4-Wire Melody Maker | Primus Enterprises",
    "og_description": "Color Black 12 Volt 8-Way Horn Tuner, 4-Wire Melody Maker manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570906060/VH/PE/FB/53826589/color-black-12-volt-8-way-horn-tuner-4-wire-melody-maker-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-color-black-12-volt-8-way-horn-tuner-4-wire-melody-maker-hero",
        "type": "hero",
        "title": "COLOR BLACK 12 VOLT 8-WAY HORN TUNER, 4-WIRE MELODY MAKER",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Color Black 12 Volt 8-Way Horn Tuner, 4-Wire Melody Maker (Part Number: 160269102) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570906060/VH/PE/FB/53826589/color-black-12-volt-8-way-horn-tuner-4-wire-melody-maker-500x500.jpg",
        "image_alt": "Color Black 12 Volt 8-Way Horn Tuner, 4-Wire Melody Maker Technical Profile"
      },
      {
        "id": "ap-color-black-12-volt-8-way-horn-tuner-4-wire-melody-maker-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Suitable For",
            "value": "Car Horn, Truck Horn, Bike Horn"
          },
          {
            "label": "Function Type",
            "value": "Melody Select"
          },
          {
            "label": "Voltage Rating",
            "value": "12/24 v"
          },
          {
            "label": "Control Type",
            "value": "Push Button"
          },
          {
            "label": "Number Of Channels",
            "value": "Multi Channel"
          },
          {
            "label": "Mounting Type",
            "value": "Under Dash"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-303825260",
    "product_name": "12 Volt 10-Way Horn Tuner, 4-Wire Melody By Primus",
    "slug": "12-volt-10-way-horn-tuner-4-wire-melody-by-primus",
    "sku": "PE-303825260",
    "product_code": "303825260",
    "category_id": "cat-flashers-relays",
    "category_name": "Flashers & Horn Relays",
    "short_description": "12 Volt 10-Way Horn Tuner, 4-Wire Melody By Primus manufactured by Primus Enterprises. High-durability automotive component with 12 AND 24 input and ABS PLASTIC construction.",
    "long_description": "The 12 Volt 10-Way Horn Tuner, 4-Wire Melody By Primus (Part Number: 303825260) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS PLASTIC construction, 12 AND 24 electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12 AND 24",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS PLASTIC",
    "colour": "Amber / White",
    "voltage": "12 AND 24",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS PLASTIC",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 120,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646057126/AW/UZ/RG/53826589/12-volt-10-way-horn-tuner-4-wire-melody-by-primus-500x500.png",
    "primary_image_alt": "12 Volt 10-Way Horn Tuner, 4-Wire Melody By Primus - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646057126/AW/UZ/RG/53826589/12-volt-10-way-horn-tuner-4-wire-melody-by-primus-500x500.png",
        "alt": "12 Volt 10-Way Horn Tuner, 4-Wire Melody By Primus - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "12 Volt 10-Way Horn Tuner, 4-Wire Melody By Primus | Primus Enterprises",
    "seo_description": "12 Volt 10-Way Horn Tuner, 4-Wire Melody By Primus wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "12 Volt 10-Way Horn Tuner, 4-Wire Melody By Primus, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/12-volt-10-way-horn-tuner-4-wire-melody-by-primus",
    "og_title": "12 Volt 10-Way Horn Tuner, 4-Wire Melody By Primus | Primus Enterprises",
    "og_description": "12 Volt 10-Way Horn Tuner, 4-Wire Melody By Primus manufactured by Primus Enterprises. High-durability automotive component with 12 AND 24 input and ABS PLASTIC construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646057126/AW/UZ/RG/53826589/12-volt-10-way-horn-tuner-4-wire-melody-by-primus-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-12-volt-10-way-horn-tuner-4-wire-melody-by-primus-hero",
        "type": "hero",
        "title": "12 VOLT 10-WAY HORN TUNER, 4-WIRE MELODY BY PRIMUS",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The 12 Volt 10-Way Horn Tuner, 4-Wire Melody By Primus (Part Number: 303825260) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS PLASTIC construction, 12 AND 24 electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646057126/AW/UZ/RG/53826589/12-volt-10-way-horn-tuner-4-wire-melody-by-primus-500x500.png",
        "image_alt": "12 Volt 10-Way Horn Tuner, 4-Wire Melody By Primus Technical Profile"
      },
      {
        "id": "ap-12-volt-10-way-horn-tuner-4-wire-melody-by-primus-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Suitable For",
            "value": "Bike Horn, Truck Horn, Car Horn"
          },
          {
            "label": "Function Type",
            "value": "Volume Adjust, Tone Tuning, Melody Select"
          },
          {
            "label": "Voltage Rating",
            "value": "12/24 Volt"
          },
          {
            "label": "Material",
            "value": "ABS PLASTIC"
          },
          {
            "label": "Voltage",
            "value": "12 AND 24"
          },
          {
            "label": "Control Type",
            "value": "knob / Button"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-304681305",
    "product_name": "4 Way 12 Volt Horn Tuner",
    "slug": "4-way-12-volt-horn-tuner",
    "sku": "PE-304681305",
    "product_code": "304681305",
    "category_id": "cat-flashers-relays",
    "category_name": "Flashers & Horn Relays",
    "short_description": "4 Way 12 Volt Horn Tuner manufactured by Primus Enterprises. High-durability automotive component with 12&24 input and ABS PLASTIC construction.",
    "long_description": "The 4 Way 12 Volt Horn Tuner (Part Number: 304681305) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS PLASTIC construction, 12&24 electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12&24",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS PLASTIC",
    "colour": "Amber / White",
    "voltage": "12&24",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS PLASTIC",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 75,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570952869/WR/PN/VA/53826589/4-way-12-volt-horn-tuner-500x500.jpg",
    "primary_image_alt": "4 Way 12 Volt Horn Tuner - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/570952869/WR/PN/VA/53826589/4-way-12-volt-horn-tuner-500x500.jpg",
        "alt": "4 Way 12 Volt Horn Tuner - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "4 Way 12 Volt Horn Tuner | Primus Enterprises",
    "seo_description": "4 Way 12 Volt Horn Tuner wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "4 Way 12 Volt Horn Tuner, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/4-way-12-volt-horn-tuner",
    "og_title": "4 Way 12 Volt Horn Tuner | Primus Enterprises",
    "og_description": "4 Way 12 Volt Horn Tuner manufactured by Primus Enterprises. High-durability automotive component with 12&24 input and ABS PLASTIC construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570952869/WR/PN/VA/53826589/4-way-12-volt-horn-tuner-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-4-way-12-volt-horn-tuner-hero",
        "type": "hero",
        "title": "4 WAY 12 VOLT HORN TUNER",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The 4 Way 12 Volt Horn Tuner (Part Number: 304681305) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS PLASTIC construction, 12&24 electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570952869/WR/PN/VA/53826589/4-way-12-volt-horn-tuner-500x500.jpg",
        "image_alt": "4 Way 12 Volt Horn Tuner Technical Profile"
      },
      {
        "id": "ap-4-way-12-volt-horn-tuner-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Material",
            "value": "ABS PLASTIC"
          },
          {
            "label": "Voltage",
            "value": "12&24"
          },
          {
            "label": "Current",
            "value": "12"
          },
          {
            "label": "Feature",
            "value": "Works with 12V Power Systems Designed to integrate smoothly with standard automotive electrical setu"
          },
          {
            "label": "Power Source",
            "value": "DC"
          },
          {
            "label": "Country of Origin",
            "value": "Made in India"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-265763009",
    "product_name": "ABS Plastic Owl Light super quality Fog Lamp",
    "slug": "abs-plastic-owl-light-super-quality-fog-lamp",
    "sku": "PE-265763009",
    "product_code": "265763009",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "ABS Plastic Owl Light super quality Fog Lamp manufactured by Primus Enterprises. High-durability automotive component with 12V - 24V (Multi) input and ABS / Die-Cast Alloy construction.",
    "long_description": "The ABS Plastic Owl Light super quality Fog Lamp (Part Number: 265763009) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V - 24V (Multi) electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12V - 24V (Multi)",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V - 24V (Multi)",
    "wattage": "72 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 75,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646055259/TT/WC/FA/53826589/light-owl-vintage-style-owl-design-multi-500x500.png",
    "primary_image_alt": "ABS Plastic Owl Light super quality Fog Lamp - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646055259/TT/WC/FA/53826589/light-owl-vintage-style-owl-design-multi-500x500.png",
        "alt": "ABS Plastic Owl Light super quality Fog Lamp - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "ABS Plastic Owl Light super quality Fog Lamp | Primus Enterprises",
    "seo_description": "ABS Plastic Owl Light super quality Fog Lamp wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "ABS Plastic Owl Light super quality Fog Lamp, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/abs-plastic-owl-light-super-quality-fog-lamp",
    "og_title": "ABS Plastic Owl Light super quality Fog Lamp | Primus Enterprises",
    "og_description": "ABS Plastic Owl Light super quality Fog Lamp manufactured by Primus Enterprises. High-durability automotive component with 12V - 24V (Multi) input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646055259/TT/WC/FA/53826589/light-owl-vintage-style-owl-design-multi-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-abs-plastic-owl-light-super-quality-fog-lamp-hero",
        "type": "hero",
        "title": "ABS PLASTIC OWL LIGHT SUPER QUALITY FOG LAMP",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The ABS Plastic Owl Light super quality Fog Lamp (Part Number: 265763009) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V - 24V (Multi) electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646055259/TT/WC/FA/53826589/light-owl-vintage-style-owl-design-multi-500x500.png",
        "image_alt": "ABS Plastic Owl Light super quality Fog Lamp Technical Profile"
      },
      {
        "id": "ap-abs-plastic-owl-light-super-quality-fog-lamp-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Compatibility",
            "value": "Universal"
          },
          {
            "label": "Lamp Type",
            "value": "Fog Lamp"
          },
          {
            "label": "Light Source",
            "value": "LED"
          },
          {
            "label": "Light Color",
            "value": "White & Yellow (Dual)"
          },
          {
            "label": "Wattage",
            "value": "72 W"
          },
          {
            "label": "Voltage",
            "value": "12V - 24V (Multi)"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224466913",
    "product_name": "Star Led Fog light mini",
    "slug": "star-led-fog-light-mini",
    "sku": "PE-224466913",
    "product_code": "224466913",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "Star Led Fog light mini manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Star Led Fog light mini (Part Number: 224466913) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Light Source Type: LED",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "LED",
    "lighting_type": "LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": true,
    "show_price": false,
    "price": 45,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644583828/FC/JM/NL/53826589/star-led-fog-light-mini-500x500.png",
    "primary_image_alt": "Star Led Fog light mini - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/644583828/FC/JM/NL/53826589/star-led-fog-light-mini-500x500.png",
        "alt": "Star Led Fog light mini - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Star Led Fog light mini | Primus Enterprises",
    "seo_description": "Star Led Fog light mini wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Star Led Fog light mini, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/star-led-fog-light-mini",
    "og_title": "Star Led Fog light mini | Primus Enterprises",
    "og_description": "Star Led Fog light mini manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644583828/FC/JM/NL/53826589/star-led-fog-light-mini-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-star-led-fog-light-mini-hero",
        "type": "hero",
        "title": "STAR LED FOG LIGHT MINI",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Star Led Fog light mini (Part Number: 224466913) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644583828/FC/JM/NL/53826589/star-led-fog-light-mini-500x500.png",
        "image_alt": "Star Led Fog light mini Technical Profile"
      },
      {
        "id": "ap-star-led-fog-light-mini-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Light Type",
            "value": "LED"
          },
          {
            "label": "Vehicle Type",
            "value": "Car"
          },
          {
            "label": "Installation Type",
            "value": "Front Grille"
          },
          {
            "label": "Type",
            "value": "Star Light"
          },
          {
            "label": "Usage/Application",
            "value": "Automotives"
          },
          {
            "label": "Compatible Brand",
            "value": "Universal"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-204165650",
    "product_name": "Led Fog Light",
    "slug": "led-fog-light",
    "sku": "PE-204165650",
    "product_code": "204165650",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "Led Fog Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "long_description": "The Led Fog Light (Part Number: 204165650) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Light Source Type: LED",
      "Illumination Color: White",
      "Housing Material: ABS Plastic for durability",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS Plastic",
    "colour": "White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "LED",
    "lighting_type": "LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS Plastic",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 65,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646317831/JY/CO/EI/53826589/led-fog-light-500x500.png",
    "primary_image_alt": "Led Fog Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646317831/JY/CO/EI/53826589/led-fog-light-500x500.png",
        "alt": "Led Fog Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Led Fog Light | Primus Enterprises",
    "seo_description": "Led Fog Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Led Fog Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/led-fog-light",
    "og_title": "Led Fog Light | Primus Enterprises",
    "og_description": "Led Fog Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646317831/JY/CO/EI/53826589/led-fog-light-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-led-fog-light-hero",
        "type": "hero",
        "title": "LED FOG LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Led Fog Light (Part Number: 204165650) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646317831/JY/CO/EI/53826589/led-fog-light-500x500.png",
        "image_alt": "Led Fog Light Technical Profile"
      },
      {
        "id": "ap-led-fog-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Light Type",
            "value": "LED"
          },
          {
            "label": "Vehicle Type",
            "value": "Car"
          },
          {
            "label": "Installation Type",
            "value": "Front Bumper"
          },
          {
            "label": "Lighting Color",
            "value": "White"
          },
          {
            "label": "Body Material",
            "value": "ABS Plastic"
          },
          {
            "label": "Compatible Brand",
            "value": "Universal"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467889",
    "product_name": "15 Led Fog Light",
    "slug": "15-led-fog-light",
    "sku": "PE-224467889",
    "product_code": "224467889",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "15 Led Fog Light manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS / Die-Cast Alloy construction.",
    "long_description": "The 15 Led Fog Light (Part Number: 224467889) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Fitting Placement: Both Right & Left",
      "Electrical Input: 12 V",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12 V",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 90,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644577708/IF/GJ/OR/53826589/15-led-fog-light-500x500.png",
    "primary_image_alt": "15 Led Fog Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/644577708/IF/GJ/OR/53826589/15-led-fog-light-500x500.png",
        "alt": "15 Led Fog Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "15 Led Fog Light | Primus Enterprises",
    "seo_description": "15 Led Fog Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "15 Led Fog Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/15-led-fog-light",
    "og_title": "15 Led Fog Light | Primus Enterprises",
    "og_description": "15 Led Fog Light manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644577708/IF/GJ/OR/53826589/15-led-fog-light-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-15-led-fog-light-hero",
        "type": "hero",
        "title": "15 LED FOG LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The 15 Led Fog Light (Part Number: 224467889) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644577708/IF/GJ/OR/53826589/15-led-fog-light-500x500.png",
        "image_alt": "15 Led Fog Light Technical Profile"
      },
      {
        "id": "ap-15-led-fog-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Car Model",
            "value": "Universal"
          },
          {
            "label": "Voltage",
            "value": "12 V"
          },
          {
            "label": "Model Year",
            "value": "2023"
          },
          {
            "label": "Fitting Place",
            "value": "Both Right & Left"
          },
          {
            "label": "Origin",
            "value": "Aftermarket"
          },
          {
            "label": "Dimension",
            "value": "3 Inch"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-204165529",
    "product_name": "21 Led Police Light",
    "slug": "21-led-police-light",
    "sku": "PE-204165529",
    "product_code": "204165529",
    "category_id": "cat-fog-lamps",
    "category_name": "Fog Lamp & LED Lights",
    "short_description": "21 Led Police Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "long_description": "The 21 Led Police Light (Part Number: 204165529) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Light Source Type: LED",
      "Illumination Color: White",
      "Housing Material: ABS Plastic for durability",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS Plastic",
    "colour": "White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "LED",
    "lighting_type": "LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS Plastic",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 170,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610249813/XN/SR/WI/53826589/21-led-police-light-500x500.jpg",
    "primary_image_alt": "21 Led Police Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610249813/XN/SR/WI/53826589/21-led-police-light-500x500.jpg",
        "alt": "21 Led Police Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "21 Led Police Light | Primus Enterprises",
    "seo_description": "21 Led Police Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "21 Led Police Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/21-led-police-light",
    "og_title": "21 Led Police Light | Primus Enterprises",
    "og_description": "21 Led Police Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610249813/XN/SR/WI/53826589/21-led-police-light-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-21-led-police-light-hero",
        "type": "hero",
        "title": "21 LED POLICE LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The 21 Led Police Light (Part Number: 204165529) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610249813/XN/SR/WI/53826589/21-led-police-light-500x500.jpg",
        "image_alt": "21 Led Police Light Technical Profile"
      },
      {
        "id": "ap-21-led-police-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Light Color",
            "value": "White"
          },
          {
            "label": "Lighting Type",
            "value": "Head Lamp"
          },
          {
            "label": "Light Type",
            "value": "LED"
          },
          {
            "label": "Mounting Type",
            "value": "Grill Mount"
          },
          {
            "label": "Lighting Color",
            "value": "White"
          },
          {
            "label": "Body Material",
            "value": "ABS Plastic"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224466892",
    "product_name": "DUKE 081 BIKE INDICATOR",
    "slug": "duke-081-bike-indicator",
    "sku": "PE-224466892",
    "product_code": "224466892",
    "category_id": "cat-motorcycle-indicators",
    "category_name": "Motorcycle Indicators & Lights",
    "short_description": "DUKE 081 BIKE INDICATOR manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS construction.",
    "long_description": "The DUKE 081 BIKE INDICATOR (Part Number: 224466892) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Light Source Type: LED",
      "Illumination Color: Yellow",
      "Housing Material: ABS for durability",
      "Fitment Standard: OEM",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS",
    "colour": "Yellow",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "LED",
    "lighting_type": "LED",
    "lens_type": "White Optical Lens",
    "body_material": "ABS",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 80,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571758761/QK/HM/VI/53826589/duke-081-bike-indicator-500x500.jpg",
    "primary_image_alt": "DUKE 081 BIKE INDICATOR - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/571758761/QK/HM/VI/53826589/duke-081-bike-indicator-500x500.jpg",
        "alt": "DUKE 081 BIKE INDICATOR - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "DUKE 081 BIKE INDICATOR | Primus Enterprises",
    "seo_description": "DUKE 081 BIKE INDICATOR wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "DUKE 081 BIKE INDICATOR, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/duke-081-bike-indicator",
    "og_title": "DUKE 081 BIKE INDICATOR | Primus Enterprises",
    "og_description": "DUKE 081 BIKE INDICATOR manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571758761/QK/HM/VI/53826589/duke-081-bike-indicator-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-duke-081-bike-indicator-hero",
        "type": "hero",
        "title": "DUKE 081 BIKE INDICATOR",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The DUKE 081 BIKE INDICATOR (Part Number: 224466892) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571758761/QK/HM/VI/53826589/duke-081-bike-indicator-500x500.jpg",
        "image_alt": "DUKE 081 BIKE INDICATOR Technical Profile"
      },
      {
        "id": "ap-duke-081-bike-indicator-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Brand",
            "value": "Universal"
          },
          {
            "label": "Light Type",
            "value": "LED"
          },
          {
            "label": "Lighting Color",
            "value": "Yellow"
          },
          {
            "label": "Lens Color",
            "value": "White"
          },
          {
            "label": "Fitment Type",
            "value": "OEM"
          },
          {
            "label": "Body Material",
            "value": "ABS"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467231",
    "product_name": "15 Led Tube Light T1",
    "slug": "15-led-tube-light-t1",
    "sku": "PE-224467231",
    "product_code": "224467231",
    "category_id": "cat-led-lights",
    "category_name": "LED Lights & Retrofits",
    "short_description": "15 Led Tube Light T1 manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The 15 Led Tube Light T1 (Part Number: 224467231) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "15 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 30,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571975422/ET/EX/RI/53826589/15-led-tube-light-500x500.jpg",
    "primary_image_alt": "15 Led Tube Light T1 - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/571975422/ET/EX/RI/53826589/15-led-tube-light-500x500.jpg",
        "alt": "15 Led Tube Light T1 - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "15 Led Tube Light T1 | Primus Enterprises",
    "seo_description": "15 Led Tube Light T1 wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "15 Led Tube Light T1, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/15-led-tube-light-t1",
    "og_title": "15 Led Tube Light T1 | Primus Enterprises",
    "og_description": "15 Led Tube Light T1 manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571975422/ET/EX/RI/53826589/15-led-tube-light-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-15-led-tube-light-t1-hero",
        "type": "hero",
        "title": "15 LED TUBE LIGHT T1",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The 15 Led Tube Light T1 (Part Number: 224467231) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571975422/ET/EX/RI/53826589/15-led-tube-light-500x500.jpg",
        "image_alt": "15 Led Tube Light T1 Technical Profile"
      },
      {
        "id": "ap-15-led-tube-light-t1-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Wattage",
            "value": "15 W"
          },
          {
            "label": "Length",
            "value": "1 Foot"
          },
          {
            "label": "Color Temperature",
            "value": "Cool White"
          },
          {
            "label": "Tube Type",
            "value": "T5"
          },
          {
            "label": "Light Color",
            "value": "Cool White"
          },
          {
            "label": "Base Type",
            "value": "mounting type"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-260784751",
    "product_name": "D 74 Black Jali Indicator Light",
    "slug": "d-74-black-jali-indicator-light",
    "sku": "PE-260784751",
    "product_code": "260784751",
    "category_id": "cat-led-lights",
    "category_name": "LED Lights & Retrofits",
    "short_description": "D 74 Black Jali Indicator Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS construction.",
    "long_description": "The D 74 Black Jali Indicator Light (Part Number: 260784751) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Illumination Color: Multicolor",
      "Housing Material: ABS for durability",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS",
    "colour": "Multicolor",
    "voltage": "12V DC",
    "wattage": "15 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": true,
    "show_price": false,
    "price": 80,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571533285/HZ/VK/DO/53826589/d-74-black-jali-indicator-light-500x500.jpg",
    "primary_image_alt": "D 74 Black Jali Indicator Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/571533285/HZ/VK/DO/53826589/d-74-black-jali-indicator-light-500x500.jpg",
        "alt": "D 74 Black Jali Indicator Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "D 74 Black Jali Indicator Light | Primus Enterprises",
    "seo_description": "D 74 Black Jali Indicator Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "D 74 Black Jali Indicator Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/d-74-black-jali-indicator-light",
    "og_title": "D 74 Black Jali Indicator Light | Primus Enterprises",
    "og_description": "D 74 Black Jali Indicator Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571533285/HZ/VK/DO/53826589/d-74-black-jali-indicator-light-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-d-74-black-jali-indicator-light-hero",
        "type": "hero",
        "title": "D 74 BLACK JALI INDICATOR LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The D 74 Black Jali Indicator Light (Part Number: 260784751) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571533285/HZ/VK/DO/53826589/d-74-black-jali-indicator-light-500x500.jpg",
        "image_alt": "D 74 Black Jali Indicator Light Technical Profile"
      },
      {
        "id": "ap-d-74-black-jali-indicator-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Wattage",
            "value": "15 W"
          },
          {
            "label": "Shape",
            "value": "Rectangular"
          },
          {
            "label": "Body Material",
            "value": "ABS"
          },
          {
            "label": "Brand",
            "value": "Primus"
          },
          {
            "label": "Lighting Color",
            "value": "Multicolor"
          },
          {
            "label": "Country of Origin",
            "value": "Made in India"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467418",
    "product_name": "Led Fan Light",
    "slug": "led-fan-light",
    "sku": "PE-224467418",
    "product_code": "224467418",
    "category_id": "cat-led-lights",
    "category_name": "LED Lights & Retrofits",
    "short_description": "Led Fan Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Led Fan Light (Part Number: 224467418) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "LED",
    "lighting_type": "LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 50,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646051440/YA/RS/BA/53826589/led-fan-light-500x500.png",
    "primary_image_alt": "Led Fan Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646051440/YA/RS/BA/53826589/led-fan-light-500x500.png",
        "alt": "Led Fan Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Led Fan Light | Primus Enterprises",
    "seo_description": "Led Fan Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Led Fan Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/led-fan-light",
    "og_title": "Led Fan Light | Primus Enterprises",
    "og_description": "Led Fan Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646051440/YA/RS/BA/53826589/led-fan-light-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-led-fan-light-hero",
        "type": "hero",
        "title": "LED FAN LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Led Fan Light (Part Number: 224467418) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646051440/YA/RS/BA/53826589/led-fan-light-500x500.png",
        "image_alt": "Led Fan Light Technical Profile"
      },
      {
        "id": "ap-led-fan-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Lighting Type",
            "value": "LED"
          },
          {
            "label": "Product Type",
            "value": "Ceiling Fan"
          },
          {
            "label": "Mounting Type",
            "value": "Surface"
          },
          {
            "label": "Power Source",
            "value": "DC"
          },
          {
            "label": "Blade Span",
            "value": "3 in"
          },
          {
            "label": "Light Color",
            "value": "RGB"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467040",
    "product_name": "Led Flash light .",
    "slug": "led-flash-light-",
    "sku": "PE-224467040",
    "product_code": "224467040",
    "category_id": "cat-led-lights",
    "category_name": "LED Lights & Retrofits",
    "short_description": "Led Flash light . manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "long_description": "The Led Flash light . (Part Number: 224467040) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Housing Material: ABS Plastic for durability",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS Plastic",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "15 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS Plastic",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 55,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570912177/MI/LO/FD/53826589/led-flash-light-500x500.jpg",
    "primary_image_alt": "Led Flash light . - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/570912177/MI/LO/FD/53826589/led-flash-light-500x500.jpg",
        "alt": "Led Flash light . - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Led Flash light . | Primus Enterprises",
    "seo_description": "Led Flash light . wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Led Flash light ., Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/led-flash-light-",
    "og_title": "Led Flash light . | Primus Enterprises",
    "og_description": "Led Flash light . manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS Plastic construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570912177/MI/LO/FD/53826589/led-flash-light-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-led-flash-light--hero",
        "type": "hero",
        "title": "LED FLASH LIGHT .",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Led Flash light . (Part Number: 224467040) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS Plastic construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570912177/MI/LO/FD/53826589/led-flash-light-500x500.jpg",
        "image_alt": "Led Flash light . Technical Profile"
      },
      {
        "id": "ap-led-flash-light--matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Flashlight Type",
            "value": "Regular LED"
          },
          {
            "label": "Power Source",
            "value": "dc"
          },
          {
            "label": "Body Material",
            "value": "ABS Plastic"
          },
          {
            "label": "Beam Distance",
            "value": "Short Range"
          },
          {
            "label": "Wattage",
            "value": "15 W"
          },
          {
            "label": "Light Color",
            "value": "Cool White"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467440",
    "product_name": "color white 12v abs plastic body Universal LED Roof Light High-Brightness",
    "slug": "color-white-12v-abs-plastic-body-universal-led-roof-light-high-brightness",
    "sku": "PE-224467440",
    "product_code": "224467440",
    "category_id": "cat-led-lights",
    "category_name": "LED Lights & Retrofits",
    "short_description": "color white 12v abs plastic body Universal LED Roof Light High-Brightness manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The color white 12v abs plastic body Universal LED Roof Light High-Brightness (Part Number: 224467440) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "15W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "No Warranty",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 45,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610243606/KI/JN/NQ/53826589/color-white-12v-abs-plastic-body-universal-led-roof-light-high-brightness-500x500.jpg",
    "primary_image_alt": "color white 12v abs plastic body Universal LED Roof Light High-Brightness - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610243606/KI/JN/NQ/53826589/color-white-12v-abs-plastic-body-universal-led-roof-light-high-brightness-500x500.jpg",
        "alt": "color white 12v abs plastic body Universal LED Roof Light High-Brightness - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "color white 12v abs plastic body Universal LED Roof Light High-Brightness | Primus Enterprises",
    "seo_description": "color white 12v abs plastic body Universal LED Roof Light High-Brightness wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "color white 12v abs plastic body Universal LED Roof Light High-Brightness, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/color-white-12v-abs-plastic-body-universal-led-roof-light-high-brightness",
    "og_title": "color white 12v abs plastic body Universal LED Roof Light High-Brightness | Primus Enterprises",
    "og_description": "color white 12v abs plastic body Universal LED Roof Light High-Brightness manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610243606/KI/JN/NQ/53826589/color-white-12v-abs-plastic-body-universal-led-roof-light-high-brightness-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-color-white-12v-abs-plastic-body-universal-led-roof-light-high-brightness-hero",
        "type": "hero",
        "title": "COLOR WHITE 12V ABS PLASTIC BODY UNIVERSAL LED ROOF LIGHT HIGH-BRIGHTNESS",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The color white 12v abs plastic body Universal LED Roof Light High-Brightness (Part Number: 224467440) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610243606/KI/JN/NQ/53826589/color-white-12v-abs-plastic-body-universal-led-roof-light-high-brightness-500x500.jpg",
        "image_alt": "color white 12v abs plastic body Universal LED Roof Light High-Brightness Technical Profile"
      },
      {
        "id": "ap-color-white-12v-abs-plastic-body-universal-led-roof-light-high-brightness-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Type Of Light",
            "value": "Roof Light"
          },
          {
            "label": "Usage/Application",
            "value": "For Indoor Light Use"
          },
          {
            "label": "Input Voltage",
            "value": "12V"
          },
          {
            "label": "Wattage",
            "value": "15W"
          },
          {
            "label": "Warranty",
            "value": "No Warranty"
          },
          {
            "label": "Shape",
            "value": "Round"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467454",
    "product_name": "I CAT ROOF LIGHT ABS PLASTIC 9 LED",
    "slug": "i-cat-roof-light-abs-plastic-9-led",
    "sku": "PE-224467454",
    "product_code": "224467454",
    "category_id": "cat-led-lights",
    "category_name": "LED Lights & Retrofits",
    "short_description": "I CAT ROOF LIGHT ABS PLASTIC 9 LED manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS construction.",
    "long_description": "The I CAT ROOF LIGHT ABS PLASTIC 9 LED (Part Number: 224467454) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12 V",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS",
    "colour": "Amber / White",
    "voltage": "12 V",
    "wattage": "15 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 35,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648260925/QM/PI/CO/53826589/i-cat-roof-light-abs-plastic-9-led-500x500.png",
    "primary_image_alt": "I CAT ROOF LIGHT ABS PLASTIC 9 LED - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/648260925/QM/PI/CO/53826589/i-cat-roof-light-abs-plastic-9-led-500x500.png",
        "alt": "I CAT ROOF LIGHT ABS PLASTIC 9 LED - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "I CAT ROOF LIGHT ABS PLASTIC 9 LED | Primus Enterprises",
    "seo_description": "I CAT ROOF LIGHT ABS PLASTIC 9 LED wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "I CAT ROOF LIGHT ABS PLASTIC 9 LED, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/i-cat-roof-light-abs-plastic-9-led",
    "og_title": "I CAT ROOF LIGHT ABS PLASTIC 9 LED | Primus Enterprises",
    "og_description": "I CAT ROOF LIGHT ABS PLASTIC 9 LED manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648260925/QM/PI/CO/53826589/i-cat-roof-light-abs-plastic-9-led-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-i-cat-roof-light-abs-plastic-9-led-hero",
        "type": "hero",
        "title": "I CAT ROOF LIGHT ABS PLASTIC 9 LED",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The I CAT ROOF LIGHT ABS PLASTIC 9 LED (Part Number: 224467454) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648260925/QM/PI/CO/53826589/i-cat-roof-light-abs-plastic-9-led-500x500.png",
        "image_alt": "I CAT ROOF LIGHT ABS PLASTIC 9 LED Technical Profile"
      },
      {
        "id": "ap-i-cat-roof-light-abs-plastic-9-led-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Beam Distance",
            "value": "Medium Range"
          },
          {
            "label": "Light Color",
            "value": "Cool White"
          },
          {
            "label": "Material",
            "value": "ABS"
          },
          {
            "label": "Wattage",
            "value": "15 W"
          },
          {
            "label": "Voltage",
            "value": "12 V"
          },
          {
            "label": "Brand",
            "value": "Primus"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467247",
    "product_name": "Spot Led Light",
    "slug": "spot-led-light",
    "sku": "PE-224467247",
    "product_code": "224467247",
    "category_id": "cat-led-lights",
    "category_name": "LED Lights & Retrofits",
    "short_description": "Spot Led Light manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Spot Led Light (Part Number: 224467247) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12 V",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12 V",
    "wattage": "15W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "No warranty",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 45,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646389042/PD/IZ/FR/53826589/spot-led-light-500x500.png",
    "primary_image_alt": "Spot Led Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646389042/PD/IZ/FR/53826589/spot-led-light-1000x1000.png",
        "alt": "Spot Led Light View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/570816240/QT/MR/AJ/53826589/spot-led-light-1000x1000.jpg",
        "alt": "Spot Led Light View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/530293447/CZ/VN/AW/53826589/spot-led-light-1000x1000.jpeg",
        "alt": "Spot Led Light View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/530293450/MJ/ZI/KR/53826589/spot-led-light-1000x1000.jpeg",
        "alt": "Spot Led Light View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/530293456/FH/DK/IT/53826589/spot-led-light-1000x1000.jpeg",
        "alt": "Spot Led Light View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/530293461/CX/YZ/UM/53826589/spot-led-light-1000x1000.jpeg",
        "alt": "Spot Led Light View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/530293467/RS/CR/OC/53826589/spot-led-light-1000x1000.jpeg",
        "alt": "Spot Led Light View - Primus Enterprises",
        "caption": "Studio specification view"
      }
    ],
    "technical_images": [
      "https://5.imimg.com/data5/SELLER/Default/2025/12/570816240/QT/MR/AJ/53826589/spot-led-light-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/530293447/CZ/VN/AW/53826589/spot-led-light-1000x1000.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/530293450/MJ/ZI/KR/53826589/spot-led-light-1000x1000.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/530293456/FH/DK/IT/53826589/spot-led-light-1000x1000.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/530293461/CX/YZ/UM/53826589/spot-led-light-1000x1000.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/530293467/RS/CR/OC/53826589/spot-led-light-1000x1000.jpeg"
    ],
    "seo_title": "Spot Led Light | Primus Enterprises",
    "seo_description": "Spot Led Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Spot Led Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/spot-led-light",
    "og_title": "Spot Led Light | Primus Enterprises",
    "og_description": "Spot Led Light manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646389042/PD/IZ/FR/53826589/spot-led-light-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-spot-led-light-hero",
        "type": "hero",
        "title": "SPOT LED LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Spot Led Light (Part Number: 224467247) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646389042/PD/IZ/FR/53826589/spot-led-light-500x500.png",
        "image_alt": "Spot Led Light Technical Profile"
      },
      {
        "id": "ap-spot-led-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Wattage",
            "value": "15W"
          },
          {
            "label": "Usage/Application",
            "value": "For Indoor Light Use"
          },
          {
            "label": "Input Voltage",
            "value": "12V"
          },
          {
            "label": "Voltage",
            "value": "12 V"
          },
          {
            "label": "Shape",
            "value": "Rectangular"
          },
          {
            "label": "Warranty",
            "value": "No warranty"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467603",
    "product_name": "Primus LED Indicators .",
    "slug": "primus-led-indicators-",
    "sku": "PE-224467603",
    "product_code": "224467603",
    "category_id": "cat-led-lights",
    "category_name": "LED Lights & Retrofits",
    "short_description": "Primus LED Indicators . manufactured by Primus Enterprises. High-durability automotive component with 12V AC/DC input and Plastic construction.",
    "long_description": "The Primus LED Indicators . (Part Number: 224467603) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust Plastic construction, 12V AC/DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Housing Material: Plastic for durability",
      "Electrical Input: 12V AC/DC",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "Plastic",
    "colour": "Amber / White",
    "voltage": "12V AC/DC",
    "wattage": "3 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "Plastic",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 60,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/7/525170562/TK/YO/NE/53826589/whatsapp-image-2025-05-04-at-9-19-39-pm-500x500.jpeg",
    "primary_image_alt": "Primus LED Indicators . - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/525170562/TK/YO/NE/53826589/whatsapp-image-2025-05-04-at-9-19-39-pm-500x500.jpeg",
        "alt": "Primus LED Indicators . - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Primus LED Indicators . | Primus Enterprises",
    "seo_description": "Primus LED Indicators . wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Primus LED Indicators ., Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/primus-led-indicators-",
    "og_title": "Primus LED Indicators . | Primus Enterprises",
    "og_description": "Primus LED Indicators . manufactured by Primus Enterprises. High-durability automotive component with 12V AC/DC input and Plastic construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/7/525170562/TK/YO/NE/53826589/whatsapp-image-2025-05-04-at-9-19-39-pm-500x500.jpeg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-primus-led-indicators--hero",
        "type": "hero",
        "title": "PRIMUS LED INDICATORS .",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Primus LED Indicators . (Part Number: 224467603) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust Plastic construction, 12V AC/DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/7/525170562/TK/YO/NE/53826589/whatsapp-image-2025-05-04-at-9-19-39-pm-500x500.jpeg",
        "image_alt": "Primus LED Indicators . Technical Profile"
      },
      {
        "id": "ap-primus-led-indicators--matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Mounting Type",
            "value": "Panel Mounted"
          },
          {
            "label": "Usage/Application",
            "value": "Side Indicator"
          },
          {
            "label": "Voltage",
            "value": "12V AC/DC"
          },
          {
            "label": "Body Material",
            "value": "Plastic"
          },
          {
            "label": "Wattage",
            "value": "3 W"
          },
          {
            "label": "Brand",
            "value": "Primus"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467111",
    "product_name": "Led Tube Light T2",
    "slug": "led-tube-light-t2",
    "sku": "PE-224467111",
    "product_code": "224467111",
    "category_id": "cat-automotive-bulbs",
    "category_name": "Automotive Bulbs & LED Tubes",
    "short_description": "Led Tube Light T2 manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS construction.",
    "long_description": "The Led Tube Light T2 (Part Number: 224467111) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "15 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "No Warranty",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 65,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648136005/DA/VB/RI/53826589/led-tube-light-t2-500x500.png",
    "primary_image_alt": "Led Tube Light T2 - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/648136005/DA/VB/RI/53826589/led-tube-light-t2-500x500.png",
        "alt": "Led Tube Light T2 - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Led Tube Light T2 | Primus Enterprises",
    "seo_description": "Led Tube Light T2 wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Led Tube Light T2, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/led-tube-light-t2",
    "og_title": "Led Tube Light T2 | Primus Enterprises",
    "og_description": "Led Tube Light T2 manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648136005/DA/VB/RI/53826589/led-tube-light-t2-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-led-tube-light-t2-hero",
        "type": "hero",
        "title": "LED TUBE LIGHT T2",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Led Tube Light T2 (Part Number: 224467111) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648136005/DA/VB/RI/53826589/led-tube-light-t2-500x500.png",
        "image_alt": "Led Tube Light T2 Technical Profile"
      },
      {
        "id": "ap-led-tube-light-t2-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Wattage",
            "value": "15 W"
          },
          {
            "label": "Color Temperature",
            "value": "3500-4100 K"
          },
          {
            "label": "Light Path Distance",
            "value": "Up to 93 m"
          },
          {
            "label": "Light Color",
            "value": "Cool Wihte"
          },
          {
            "label": "Material",
            "value": "ABS"
          },
          {
            "label": "Warranty",
            "value": "No Warranty"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467918",
    "product_name": "double usb charger primus original",
    "slug": "double-usb-charger-primus-original",
    "sku": "PE-224467918",
    "product_code": "224467918",
    "category_id": "cat-dc-converters",
    "category_name": "DC Converters & Mobile Chargers",
    "short_description": "double usb charger primus original manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The double usb charger primus original (Part Number: 224467918) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Black",
    "voltage": "12V DC",
    "wattage": "5 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": true,
    "show_price": false,
    "price": 105,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648123702/AG/VN/TM/53826589/double-usb-charger-primus-original-500x500.png",
    "primary_image_alt": "double usb charger primus original - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/648123702/AG/VN/TM/53826589/double-usb-charger-primus-original-500x500.png",
        "alt": "double usb charger primus original - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "double usb charger primus original | Primus Enterprises",
    "seo_description": "double usb charger primus original wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "double usb charger primus original, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/double-usb-charger-primus-original",
    "og_title": "double usb charger primus original | Primus Enterprises",
    "og_description": "double usb charger primus original manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648123702/AG/VN/TM/53826589/double-usb-charger-primus-original-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-double-usb-charger-primus-original-hero",
        "type": "hero",
        "title": "DOUBLE USB CHARGER PRIMUS ORIGINAL",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The double usb charger primus original (Part Number: 224467918) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648123702/AG/VN/TM/53826589/double-usb-charger-primus-original-500x500.png",
        "image_alt": "double usb charger primus original Technical Profile"
      },
      {
        "id": "ap-double-usb-charger-primus-original-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Wattage",
            "value": "5 W"
          },
          {
            "label": "Type",
            "value": "USB"
          },
          {
            "label": "Pin Type",
            "value": "USB C"
          },
          {
            "label": "Cable Length",
            "value": "1m"
          },
          {
            "label": "Brand",
            "value": "Primus"
          },
          {
            "label": "Color",
            "value": "Black"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467936",
    "product_name": "2 usb car charger for bike and car black with on off switch Universal Bike",
    "slug": "2-usb-car-charger-for-bike-and-car-black-with-on-off-switch-universal-bike",
    "sku": "PE-224467936",
    "product_code": "224467936",
    "category_id": "cat-dc-converters",
    "category_name": "DC Converters & Mobile Chargers",
    "short_description": "2 usb car charger for bike and car black with on off switch Universal Bike manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The 2 usb car charger for bike and car black with on off switch Universal Bike (Part Number: 224467936) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 90,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644570184/NM/UZ/SN/53826589/2-usb-car-charger-for-bike-and-car-black-with-on-off-switch-universal-bike-500x500.png",
    "primary_image_alt": "2 usb car charger for bike and car black with on off switch Universal Bike - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/644570184/NM/UZ/SN/53826589/2-usb-car-charger-for-bike-and-car-black-with-on-off-switch-universal-bike-500x500.png",
        "alt": "2 usb car charger for bike and car black with on off switch Universal Bike - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "2 usb car charger for bike and car black with on off switch Universal Bike | Primus Enterprises",
    "seo_description": "2 usb car charger for bike and car black with on off switch Universal Bike wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "2 usb car charger for bike and car black with on off switch Universal Bike, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/2-usb-car-charger-for-bike-and-car-black-with-on-off-switch-universal-bike",
    "og_title": "2 usb car charger for bike and car black with on off switch Universal Bike | Primus Enterprises",
    "og_description": "2 usb car charger for bike and car black with on off switch Universal Bike manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644570184/NM/UZ/SN/53826589/2-usb-car-charger-for-bike-and-car-black-with-on-off-switch-universal-bike-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-2-usb-car-charger-for-bike-and-car-black-with-on-off-switch-universal-bike-hero",
        "type": "hero",
        "title": "2 USB CAR CHARGER FOR BIKE AND CAR BLACK WITH ON OFF SWITCH UNIVERSAL BIKE",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The 2 usb car charger for bike and car black with on off switch Universal Bike (Part Number: 224467936) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644570184/NM/UZ/SN/53826589/2-usb-car-charger-for-bike-and-car-black-with-on-off-switch-universal-bike-500x500.png",
        "image_alt": "2 usb car charger for bike and car black with on off switch Universal Bike Technical Profile"
      },
      {
        "id": "ap-2-usb-car-charger-for-bike-and-car-black-with-on-off-switch-universal-bike-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Type",
            "value": "bike"
          },
          {
            "label": "Current",
            "value": "2.1A"
          },
          {
            "label": "Interface Type",
            "value": "USB"
          },
          {
            "label": "No. of Ports",
            "value": "1"
          },
          {
            "label": "Number of Output Ports",
            "value": "1 Port"
          },
          {
            "label": "Number Of Ports",
            "value": "1"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467619",
    "product_name": "D-78 bike Indicator Light abs body high grip placement",
    "slug": "d-78-bike-indicator-light-abs-body-high-grip-placement",
    "sku": "PE-224467619",
    "product_code": "224467619",
    "category_id": "cat-motorcycle-indicators",
    "category_name": "Motorcycle Indicators & Lights",
    "short_description": "D-78 bike Indicator Light abs body high grip placement manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The D-78 bike Indicator Light abs body high grip placement (Part Number: 224467619) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Light Source Type: LED",
      "Illumination Color: Yellow",
      "Fitment Standard: OEM",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Yellow",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "LED",
    "lighting_type": "LED",
    "lens_type": "White Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Sets",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": true,
    "show_price": false,
    "price": 80,
    "price_unit": "Set",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570908231/YG/TE/TG/53826589/d-78-bike-indicator-light-abs-body-high-grip-placement-500x500.jpg",
    "primary_image_alt": "D-78 bike Indicator Light abs body high grip placement - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/570908231/YG/TE/TG/53826589/d-78-bike-indicator-light-abs-body-high-grip-placement-500x500.jpg",
        "alt": "D-78 bike Indicator Light abs body high grip placement - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "D-78 bike Indicator Light abs body high grip placement | Primus Enterprises",
    "seo_description": "D-78 bike Indicator Light abs body high grip placement wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "D-78 bike Indicator Light abs body high grip placement, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/d-78-bike-indicator-light-abs-body-high-grip-placement",
    "og_title": "D-78 bike Indicator Light abs body high grip placement | Primus Enterprises",
    "og_description": "D-78 bike Indicator Light abs body high grip placement manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570908231/YG/TE/TG/53826589/d-78-bike-indicator-light-abs-body-high-grip-placement-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-d-78-bike-indicator-light-abs-body-high-grip-placement-hero",
        "type": "hero",
        "title": "D-78 BIKE INDICATOR LIGHT ABS BODY HIGH GRIP PLACEMENT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The D-78 bike Indicator Light abs body high grip placement (Part Number: 224467619) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570908231/YG/TE/TG/53826589/d-78-bike-indicator-light-abs-body-high-grip-placement-500x500.jpg",
        "image_alt": "D-78 bike Indicator Light abs body high grip placement Technical Profile"
      },
      {
        "id": "ap-d-78-bike-indicator-light-abs-body-high-grip-placement-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Brand",
            "value": "Universal"
          },
          {
            "label": "Light Type",
            "value": "LED"
          },
          {
            "label": "Installation Side",
            "value": "front rear both"
          },
          {
            "label": "Lighting Color",
            "value": "Yellow"
          },
          {
            "label": "Lens Color",
            "value": "White"
          },
          {
            "label": "Fitment Type",
            "value": "OEM"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-317056089",
    "product_name": "U TYPE INDICATOR",
    "slug": "u-type-indicator",
    "sku": "PE-317056089",
    "product_code": "317056089",
    "category_id": "cat-motorcycle-indicators",
    "category_name": "Motorcycle Indicators & Lights",
    "short_description": "U TYPE INDICATOR manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS PLASTIC / METAL construction.",
    "long_description": "The U TYPE INDICATOR (Part Number: 317056089) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS PLASTIC / METAL construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Light Source Type: LED",
      "Housing Material: ABS PLASTIC / METAL for durability",
      "Fitment Standard: OEM",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS PLASTIC / METAL",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "LED",
    "lighting_type": "LED",
    "lens_type": "Smoke Optical Lens",
    "body_material": "ABS PLASTIC / METAL",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Sets",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 90,
    "price_unit": "Set",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/ANDROID/Default/2026/1/572539453/YS/CV/XH/53826589/product-jpeg-500x500.jpg",
    "primary_image_alt": "U TYPE INDICATOR - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/ANDROID/Default/2026/1/572539453/YS/CV/XH/53826589/product-jpeg-500x500.jpg",
        "alt": "U TYPE INDICATOR - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "U TYPE INDICATOR | Primus Enterprises",
    "seo_description": "U TYPE INDICATOR wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "U TYPE INDICATOR, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/u-type-indicator",
    "og_title": "U TYPE INDICATOR | Primus Enterprises",
    "og_description": "U TYPE INDICATOR manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS PLASTIC / METAL construction.",
    "og_image": "https://5.imimg.com/data5/ANDROID/Default/2026/1/572539453/YS/CV/XH/53826589/product-jpeg-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-u-type-indicator-hero",
        "type": "hero",
        "title": "U TYPE INDICATOR",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The U TYPE INDICATOR (Part Number: 317056089) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS PLASTIC / METAL construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/ANDROID/Default/2026/1/572539453/YS/CV/XH/53826589/product-jpeg-500x500.jpg",
        "image_alt": "U TYPE INDICATOR Technical Profile"
      },
      {
        "id": "ap-u-type-indicator-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Brand",
            "value": "Universal"
          },
          {
            "label": "Light Type",
            "value": "LED"
          },
          {
            "label": "Installation Side",
            "value": "FRONT / REAR"
          },
          {
            "label": "Body Material",
            "value": "ABS PLASTIC / METAL"
          },
          {
            "label": "Lens Color",
            "value": "Smoke"
          },
          {
            "label": "Fitment Type",
            "value": "OEM"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-157103210",
    "product_name": "D 73 RUNNING INDICATOR",
    "slug": "d-73-running-indicator",
    "sku": "PE-157103210",
    "product_code": "157103210",
    "category_id": "cat-motorcycle-indicators",
    "category_name": "Motorcycle Indicators & Lights",
    "short_description": "D 73 RUNNING INDICATOR manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS construction.",
    "long_description": "The D 73 RUNNING INDICATOR (Part Number: 157103210) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Light Source Type: LED",
      "Housing Material: ABS for durability",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "LED",
    "lighting_type": "LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 pairs",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 80,
    "price_unit": "pair",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571957817/WK/EJ/AG/53826589/d-73-running-indicator-500x500.jpg",
    "primary_image_alt": "D 73 RUNNING INDICATOR - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/571957817/WK/EJ/AG/53826589/d-73-running-indicator-500x500.jpg",
        "alt": "D 73 RUNNING INDICATOR - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "D 73 RUNNING INDICATOR | Primus Enterprises",
    "seo_description": "D 73 RUNNING INDICATOR wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "D 73 RUNNING INDICATOR, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/d-73-running-indicator",
    "og_title": "D 73 RUNNING INDICATOR | Primus Enterprises",
    "og_description": "D 73 RUNNING INDICATOR manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571957817/WK/EJ/AG/53826589/d-73-running-indicator-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-d-73-running-indicator-hero",
        "type": "hero",
        "title": "D 73 RUNNING INDICATOR",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The D 73 RUNNING INDICATOR (Part Number: 157103210) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571957817/WK/EJ/AG/53826589/d-73-running-indicator-500x500.jpg",
        "image_alt": "D 73 RUNNING INDICATOR Technical Profile"
      },
      {
        "id": "ap-d-73-running-indicator-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Brand",
            "value": "Primus"
          },
          {
            "label": "Model Name/Number",
            "value": "D-73"
          },
          {
            "label": "Usage/Application",
            "value": "For Motorcycle"
          },
          {
            "label": "Body Material",
            "value": "ABS"
          },
          {
            "label": "Country of Origin",
            "value": "Made in India"
          },
          {
            "label": "Light Type",
            "value": "LED"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-157103256",
    "product_name": "Primus Led D Type Indicator",
    "slug": "primus-led-d-type-indicator",
    "sku": "PE-157103256",
    "product_code": "157103256",
    "category_id": "cat-motorcycle-indicators",
    "category_name": "Motorcycle Indicators & Lights",
    "short_description": "Primus Led D Type Indicator manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS construction.",
    "long_description": "The Primus Led D Type Indicator (Part Number: 157103256) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Housing Material: ABS for durability",
      "Fitment Standard: OEM",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Yellow Optical Lens",
    "body_material": "ABS",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 pairs",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 90,
    "price_unit": "pair",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610249074/OC/BN/BA/53826589/primus-led-d-type-indicator-500x500.jpg",
    "primary_image_alt": "Primus Led D Type Indicator - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610249074/OC/BN/BA/53826589/primus-led-d-type-indicator-500x500.jpg",
        "alt": "Primus Led D Type Indicator - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Primus Led D Type Indicator | Primus Enterprises",
    "seo_description": "Primus Led D Type Indicator wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Primus Led D Type Indicator, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/primus-led-d-type-indicator",
    "og_title": "Primus Led D Type Indicator | Primus Enterprises",
    "og_description": "Primus Led D Type Indicator manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610249074/OC/BN/BA/53826589/primus-led-d-type-indicator-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-primus-led-d-type-indicator-hero",
        "type": "hero",
        "title": "PRIMUS LED D TYPE INDICATOR",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Primus Led D Type Indicator (Part Number: 157103256) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610249074/OC/BN/BA/53826589/primus-led-d-type-indicator-500x500.jpg",
        "image_alt": "Primus Led D Type Indicator Technical Profile"
      },
      {
        "id": "ap-primus-led-d-type-indicator-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Brand",
            "value": "Universal"
          },
          {
            "label": "Installation Side",
            "value": "Front Rear both"
          },
          {
            "label": "Lens Color",
            "value": "Yellow"
          },
          {
            "label": "Fitment Type",
            "value": "OEM"
          },
          {
            "label": "Body Material",
            "value": "ABS"
          },
          {
            "label": "Brand",
            "value": "Primusdeluxe"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-157103356",
    "product_name": "Led Motorcycle Indicator",
    "slug": "led-motorcycle-indicator",
    "sku": "PE-157103356",
    "product_code": "157103356",
    "category_id": "cat-motorcycle-indicators",
    "category_name": "Motorcycle Indicators & Lights",
    "short_description": "Led Motorcycle Indicator manufactured by Primus Enterprises. High-durability automotive component with 12VDC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Led Motorcycle Indicator (Part Number: 157103356) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12VDC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Light Source Type: LED",
      "Electrical Input: 12VDC",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12VDC",
    "wattage": "Standard Automotive Rating",
    "light_source": "LED",
    "lighting_type": "LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Standard Box",
    "minimum_order_quantity": "50 Box",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 140,
    "price_unit": "pair",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610244627/MA/GZ/VY/53826589/led-motorcycle-indicator-500x500.jpg",
    "primary_image_alt": "Led Motorcycle Indicator - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610244627/MA/GZ/VY/53826589/led-motorcycle-indicator-500x500.jpg",
        "alt": "Led Motorcycle Indicator - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Led Motorcycle Indicator | Primus Enterprises",
    "seo_description": "Led Motorcycle Indicator wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Led Motorcycle Indicator, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/led-motorcycle-indicator",
    "og_title": "Led Motorcycle Indicator | Primus Enterprises",
    "og_description": "Led Motorcycle Indicator manufactured by Primus Enterprises. High-durability automotive component with 12VDC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610244627/MA/GZ/VY/53826589/led-motorcycle-indicator-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-led-motorcycle-indicator-hero",
        "type": "hero",
        "title": "LED MOTORCYCLE INDICATOR",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Led Motorcycle Indicator (Part Number: 157103356) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12VDC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610244627/MA/GZ/VY/53826589/led-motorcycle-indicator-500x500.jpg",
        "image_alt": "Led Motorcycle Indicator Technical Profile"
      },
      {
        "id": "ap-led-motorcycle-indicator-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Brand",
            "value": "Primus"
          },
          {
            "label": "Usage/Application",
            "value": "For Motorcycle"
          },
          {
            "label": "Country of Origin",
            "value": "Made in India"
          },
          {
            "label": "Light Type",
            "value": "LED"
          },
          {
            "label": "Packaging Type",
            "value": "Box"
          },
          {
            "label": "Voltage",
            "value": "12VDC"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-157104607",
    "product_name": "D 73 Indicator Light",
    "slug": "d-73-indicator-light",
    "sku": "PE-157104607",
    "product_code": "157104607",
    "category_id": "cat-motorcycle-indicators",
    "category_name": "Motorcycle Indicators & Lights",
    "short_description": "D 73 Indicator Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS construction.",
    "long_description": "The D 73 Indicator Light (Part Number: 157104607) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Housing Material: ABS for durability",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS",
    "colour": "Yellow",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Sets",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 80,
    "price_unit": "Set",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646023972/CY/BG/JK/53826589/d-73-indicator-light-500x500.png",
    "primary_image_alt": "D 73 Indicator Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646023972/CY/BG/JK/53826589/d-73-indicator-light-1000x1000.png",
        "alt": "D 73 Indicator Light View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/525370422/RY/JP/VQ/53826589/d-73-indicator-light-1000x1000.jpg",
        "alt": "D 73 Indicator Light View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/525370424/LM/RO/TK/53826589/d-73-indicator-light-1000x1000.jpg",
        "alt": "D 73 Indicator Light View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/525370407/KB/UL/CU/53826589/d-73-indicator-light-1000x1000.jpg",
        "alt": "D 73 Indicator Light View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/525370425/GW/SG/MC/53826589/d-73-indicator-light-1000x1000.jpg",
        "alt": "D 73 Indicator Light View - Primus Enterprises",
        "caption": "Studio specification view"
      }
    ],
    "technical_images": [
      "https://5.imimg.com/data5/SELLER/Default/2025/7/525370422/RY/JP/VQ/53826589/d-73-indicator-light-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/525370424/LM/RO/TK/53826589/d-73-indicator-light-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/525370407/KB/UL/CU/53826589/d-73-indicator-light-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/525370425/GW/SG/MC/53826589/d-73-indicator-light-1000x1000.jpg"
    ],
    "seo_title": "D 73 Indicator Light | Primus Enterprises",
    "seo_description": "D 73 Indicator Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "D 73 Indicator Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/d-73-indicator-light",
    "og_title": "D 73 Indicator Light | Primus Enterprises",
    "og_description": "D 73 Indicator Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646023972/CY/BG/JK/53826589/d-73-indicator-light-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-d-73-indicator-light-hero",
        "type": "hero",
        "title": "D 73 INDICATOR LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The D 73 Indicator Light (Part Number: 157104607) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646023972/CY/BG/JK/53826589/d-73-indicator-light-500x500.png",
        "image_alt": "D 73 Indicator Light Technical Profile"
      },
      {
        "id": "ap-d-73-indicator-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Rated Voltage",
            "value": "12 / 24 v dc"
          },
          {
            "label": "Color",
            "value": "Yellow"
          },
          {
            "label": "Protection Class",
            "value": "IP65"
          },
          {
            "label": "Body Material",
            "value": "ABS"
          },
          {
            "label": "Brand",
            "value": "Primus"
          },
          {
            "label": "Usage/Application",
            "value": "For Ktm Bike  (Universal) Every Bike"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-304681689",
    "product_name": "DOUBLE USB BIKE CHARGER",
    "slug": "double-usb-bike-charger",
    "sku": "PE-304681689",
    "product_code": "304681689",
    "category_id": "cat-led-lights",
    "category_name": "LED Lights & Retrofits",
    "short_description": "DOUBLE USB BIKE CHARGER manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The DOUBLE USB BIKE CHARGER (Part Number: 304681689) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 90,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646051711/EE/DP/YQ/53826589/double-usb-bike-charger-500x500.png",
    "primary_image_alt": "DOUBLE USB BIKE CHARGER - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646051711/EE/DP/YQ/53826589/double-usb-bike-charger-500x500.png",
        "alt": "DOUBLE USB BIKE CHARGER - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "DOUBLE USB BIKE CHARGER | Primus Enterprises",
    "seo_description": "DOUBLE USB BIKE CHARGER wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "DOUBLE USB BIKE CHARGER, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/double-usb-bike-charger",
    "og_title": "DOUBLE USB BIKE CHARGER | Primus Enterprises",
    "og_description": "DOUBLE USB BIKE CHARGER manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646051711/EE/DP/YQ/53826589/double-usb-bike-charger-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-double-usb-bike-charger-hero",
        "type": "hero",
        "title": "DOUBLE USB BIKE CHARGER",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The DOUBLE USB BIKE CHARGER (Part Number: 304681689) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646051711/EE/DP/YQ/53826589/double-usb-bike-charger-500x500.png",
        "image_alt": "DOUBLE USB BIKE CHARGER Technical Profile"
      },
      {
        "id": "ap-double-usb-bike-charger-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Type",
            "value": "Three Wheeler, Bike And Scooter, Bike, Scooter"
          },
          {
            "label": "Interface Type",
            "value": "USB"
          },
          {
            "label": "Input Voltage",
            "value": "12 V–24 V"
          },
          {
            "label": "Mounting Type",
            "value": "Handlebar Clamp"
          },
          {
            "label": "No Of Output Ports",
            "value": "2 Ports"
          },
          {
            "label": "Water Resistance",
            "value": "No"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-320922251",
    "product_name": "Primus Automotive Interrupter Relay 12v Universal",
    "slug": "primus-automotive-interrupter-relay-12v-universal",
    "sku": "PE-ALLINDIA",
    "product_code": "allindia",
    "category_id": "cat-led-lights",
    "category_name": "LED Lights & Retrofits",
    "short_description": "Primus Automotive Interrupter Relay 12v Universal manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Primus Automotive Interrupter Relay 12v Universal (Part Number: allindia) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 100,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/1/578994248/XU/LR/IK/53826589/primus-horn-relay-interrupter-12v-universal-horn-relay-rapid-back-fire-relay-12v-speedmoto-500x500.jpg",
    "primary_image_alt": "Primus Automotive Interrupter Relay 12v Universal - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/1/578994248/XU/LR/IK/53826589/primus-horn-relay-interrupter-12v-universal-horn-relay-rapid-back-fire-relay-12v-speedmoto-500x500.jpg",
        "alt": "Primus Automotive Interrupter Relay 12v Universal - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Primus Automotive Interrupter Relay 12v Universal | Primus Enterprises",
    "seo_description": "Primus Automotive Interrupter Relay 12v Universal wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Primus Automotive Interrupter Relay 12v Universal, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/primus-automotive-interrupter-relay-12v-universal",
    "og_title": "Primus Automotive Interrupter Relay 12v Universal | Primus Enterprises",
    "og_description": "Primus Automotive Interrupter Relay 12v Universal manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/1/578994248/XU/LR/IK/53826589/primus-horn-relay-interrupter-12v-universal-horn-relay-rapid-back-fire-relay-12v-speedmoto-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-primus-automotive-interrupter-relay-12v-universal-hero",
        "type": "hero",
        "title": "PRIMUS AUTOMOTIVE INTERRUPTER RELAY 12V UNIVERSAL",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Primus Automotive Interrupter Relay 12v Universal (Part Number: allindia) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/1/578994248/XU/LR/IK/53826589/primus-horn-relay-interrupter-12v-universal-horn-relay-rapid-back-fire-relay-12v-speedmoto-500x500.jpg",
        "image_alt": "Primus Automotive Interrupter Relay 12v Universal Technical Profile"
      },
      {
        "id": "ap-primus-automotive-interrupter-relay-12v-universal-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Relay Type",
            "value": "Horn Relay"
          },
          {
            "label": "Coil Voltage",
            "value": "12/24 v"
          },
          {
            "label": "Contact Current",
            "value": "30 A"
          },
          {
            "label": "Contact Form",
            "value": "no"
          },
          {
            "label": "Pin Configuration",
            "value": "4 Pin"
          },
          {
            "label": "With Bracket",
            "value": "Yes"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-327486280",
    "product_name": "ROOF LIGHT CENTER BUTTON",
    "slug": "roof-light-center-button",
    "sku": "PE-327486280",
    "product_code": "327486280",
    "category_id": "cat-led-lights",
    "category_name": "LED Lights & Retrofits",
    "short_description": "ROOF LIGHT CENTER BUTTON manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The ROOF LIGHT CENTER BUTTON (Part Number: 327486280) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 80,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610348758/OT/HJ/RJ/53826589/roof-light-center-button-500x500.webp",
    "primary_image_alt": "ROOF LIGHT CENTER BUTTON - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610348758/OT/HJ/RJ/53826589/roof-light-center-button-500x500.webp",
        "alt": "ROOF LIGHT CENTER BUTTON - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "ROOF LIGHT CENTER BUTTON | Primus Enterprises",
    "seo_description": "ROOF LIGHT CENTER BUTTON wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "ROOF LIGHT CENTER BUTTON, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/roof-light-center-button",
    "og_title": "ROOF LIGHT CENTER BUTTON | Primus Enterprises",
    "og_description": "ROOF LIGHT CENTER BUTTON manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610348758/OT/HJ/RJ/53826589/roof-light-center-button-500x500.webp",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-roof-light-center-button-hero",
        "type": "hero",
        "title": "ROOF LIGHT CENTER BUTTON",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The ROOF LIGHT CENTER BUTTON (Part Number: 327486280) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610348758/OT/HJ/RJ/53826589/roof-light-center-button-500x500.webp",
        "image_alt": "ROOF LIGHT CENTER BUTTON Technical Profile"
      },
      {
        "id": "ap-roof-light-center-button-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Application",
            "value": "Car Roof"
          },
          {
            "label": "Vehicle Compatibility",
            "value": "Universal"
          },
          {
            "label": "Input Voltage",
            "value": "12 V DC"
          },
          {
            "label": "Lamp Type",
            "value": "Projector"
          },
          {
            "label": "Shape",
            "value": "Round"
          },
          {
            "label": "Light Source",
            "value": "LED"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-304029750",
    "product_name": "KTM Hazard Flasher For Bike By Primus",
    "slug": "ktm-hazard-flasher-for-bike-by-primus",
    "sku": "PE-304029750",
    "product_code": "304029750",
    "category_id": "cat-led-lights",
    "category_name": "LED Lights & Retrofits",
    "short_description": "KTM Hazard Flasher For Bike By Primus manufactured by Primus Enterprises. High-durability automotive component with 12V input and ABS / Die-Cast Alloy construction.",
    "long_description": "The KTM Hazard Flasher For Bike By Primus (Part Number: 304029750) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12V",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 90,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/1/578978263/XM/RF/GQ/53826589/bike-hazard-flasher-multi-function-500x500.jpg",
    "primary_image_alt": "KTM Hazard Flasher For Bike By Primus - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/1/578978263/XM/RF/GQ/53826589/bike-hazard-flasher-multi-function-500x500.jpg",
        "alt": "KTM Hazard Flasher For Bike By Primus - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "KTM Hazard Flasher For Bike By Primus | Primus Enterprises",
    "seo_description": "KTM Hazard Flasher For Bike By Primus wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "KTM Hazard Flasher For Bike By Primus, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/ktm-hazard-flasher-for-bike-by-primus",
    "og_title": "KTM Hazard Flasher For Bike By Primus | Primus Enterprises",
    "og_description": "KTM Hazard Flasher For Bike By Primus manufactured by Primus Enterprises. High-durability automotive component with 12V input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/1/578978263/XM/RF/GQ/53826589/bike-hazard-flasher-multi-function-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-ktm-hazard-flasher-for-bike-by-primus-hero",
        "type": "hero",
        "title": "KTM HAZARD FLASHER FOR BIKE BY PRIMUS",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The KTM Hazard Flasher For Bike By Primus (Part Number: 304029750) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/1/578978263/XM/RF/GQ/53826589/bike-hazard-flasher-multi-function-500x500.jpg",
        "image_alt": "KTM Hazard Flasher For Bike By Primus Technical Profile"
      },
      {
        "id": "ap-ktm-hazard-flasher-for-bike-by-primus-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Flasher Type",
            "value": "Hazard Flasher"
          },
          {
            "label": "Voltage",
            "value": "12V"
          },
          {
            "label": "Input Voltage",
            "value": "12–24 V DC"
          },
          {
            "label": "Number of Pin",
            "value": "4"
          },
          {
            "label": "Pin Configuration",
            "value": "4 Pin"
          },
          {
            "label": "Load Type",
            "value": "Bulb+LED"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-327485607",
    "product_name": "POLICE LIGHT 320 RED/BLUE",
    "slug": "police-light-320-redblue",
    "sku": "PE-327485607",
    "product_code": "327485607",
    "category_id": "cat-led-lights",
    "category_name": "LED Lights & Retrofits",
    "short_description": "POLICE LIGHT 320 RED/BLUE manufactured by Primus Enterprises. High-durability automotive component with 12–24 V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The POLICE LIGHT 320 RED/BLUE (Part Number: 327485607) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12–24 V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12–24 V DC",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12–24 V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644591257/UJ/SP/IP/53826589/police-light-320-red-blue-500x500.png",
    "primary_image_alt": "POLICE LIGHT 320 RED/BLUE - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/644591257/UJ/SP/IP/53826589/police-light-320-red-blue-500x500.png",
        "alt": "POLICE LIGHT 320 RED/BLUE - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "POLICE LIGHT 320 RED/BLUE | Primus Enterprises",
    "seo_description": "POLICE LIGHT 320 RED/BLUE wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "POLICE LIGHT 320 RED/BLUE, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/police-light-320-redblue",
    "og_title": "POLICE LIGHT 320 RED/BLUE | Primus Enterprises",
    "og_description": "POLICE LIGHT 320 RED/BLUE manufactured by Primus Enterprises. High-durability automotive component with 12–24 V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644591257/UJ/SP/IP/53826589/police-light-320-red-blue-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-police-light-320-redblue-hero",
        "type": "hero",
        "title": "POLICE LIGHT 320 RED/BLUE",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The POLICE LIGHT 320 RED/BLUE (Part Number: 327485607) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12–24 V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644591257/UJ/SP/IP/53826589/police-light-320-red-blue-500x500.png",
        "image_alt": "POLICE LIGHT 320 RED/BLUE Technical Profile"
      },
      {
        "id": "ap-police-light-320-redblue-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Light Source",
            "value": "LED"
          },
          {
            "label": "Length",
            "value": "5 in"
          },
          {
            "label": "Voltage",
            "value": "12–24 V DC"
          },
          {
            "label": "Mounting Type",
            "value": "Hook Mount"
          },
          {
            "label": "Number Of Modules",
            "value": "2 Modules"
          },
          {
            "label": "Control Type",
            "value": "Wired Switch"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-304020548",
    "product_name": "2 Lance Fog Lamp Metal",
    "slug": "2-lance-fog-lamp-metal",
    "sku": "PE-851220",
    "product_code": "851220",
    "category_id": "cat-led-lights",
    "category_name": "LED Lights & Retrofits",
    "short_description": "2 Lance Fog Lamp Metal manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The 2 Lance Fog Lamp Metal (Part Number: 851220) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "72 W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 110,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646381343/XX/FT/EB/53826589/2-lance-fog-lamp-metal-500x500.png",
    "primary_image_alt": "2 Lance Fog Lamp Metal - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646381343/XX/FT/EB/53826589/2-lance-fog-lamp-metal-1000x1000.png",
        "alt": "2 Lance Fog Lamp Metal View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/570815770/VN/JP/AC/53826589/2-lance-metal-body-1000x1000.jpg",
        "alt": "2 Lance Fog Lamp Metal View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/10/549903647/AG/NU/IY/53826589/6-1000x1000.jpg",
        "alt": "2 Lance Fog Lamp Metal View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/528982851/MB/FA/PZ/53826589/img-0758-1000x1000.jpg",
        "alt": "2 Lance Fog Lamp Metal View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/528982950/WD/VH/PA/53826589/img-0764-1000x1000.jpg",
        "alt": "2 Lance Fog Lamp Metal View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/528982942/PM/AD/OJ/53826589/img-0759-1000x1000.jpg",
        "alt": "2 Lance Fog Lamp Metal View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/528982945/RZ/BU/SH/53826589/img-0765-1000x1000.jpg",
        "alt": "2 Lance Fog Lamp Metal View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/528982957/SD/OP/YG/53826589/img-0760-1000x1000.jpg",
        "alt": "2 Lance Fog Lamp Metal View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/528982953/SG/NL/KJ/53826589/img-0762-1000x1000.jpg",
        "alt": "2 Lance Fog Lamp Metal View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/528982944/QR/HU/DY/53826589/img-0761-1000x1000.jpg",
        "alt": "2 Lance Fog Lamp Metal View - Primus Enterprises",
        "caption": "Studio specification view"
      },
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/528982962/ZZ/JD/PZ/53826589/img-0763-1000x1000.jpg",
        "alt": "2 Lance Fog Lamp Metal View - Primus Enterprises",
        "caption": "Studio specification view"
      }
    ],
    "technical_images": [
      "https://5.imimg.com/data5/SELLER/Default/2025/12/570815770/VN/JP/AC/53826589/2-lance-metal-body-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/10/549903647/AG/NU/IY/53826589/6-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/528982851/MB/FA/PZ/53826589/img-0758-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/528982950/WD/VH/PA/53826589/img-0764-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/528982942/PM/AD/OJ/53826589/img-0759-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/528982945/RZ/BU/SH/53826589/img-0765-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/528982957/SD/OP/YG/53826589/img-0760-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/528982953/SG/NL/KJ/53826589/img-0762-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/528982944/QR/HU/DY/53826589/img-0761-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/528982962/ZZ/JD/PZ/53826589/img-0763-1000x1000.jpg"
    ],
    "seo_title": "2 Lance Fog Lamp Metal | Primus Enterprises",
    "seo_description": "2 Lance Fog Lamp Metal wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "2 Lance Fog Lamp Metal, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/2-lance-fog-lamp-metal",
    "og_title": "2 Lance Fog Lamp Metal | Primus Enterprises",
    "og_description": "2 Lance Fog Lamp Metal manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646381343/XX/FT/EB/53826589/2-lance-fog-lamp-metal-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-2-lance-fog-lamp-metal-hero",
        "type": "hero",
        "title": "2 LANCE FOG LAMP METAL",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The 2 Lance Fog Lamp Metal (Part Number: 851220) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646381343/XX/FT/EB/53826589/2-lance-fog-lamp-metal-500x500.png",
        "image_alt": "2 Lance Fog Lamp Metal Technical Profile"
      },
      {
        "id": "ap-2-lance-fog-lamp-metal-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Compatibility",
            "value": "Universal"
          },
          {
            "label": "Vehicle Type",
            "value": "Universal"
          },
          {
            "label": "Lamp Type",
            "value": "Fog Lamp"
          },
          {
            "label": "Light Source",
            "value": "LED"
          },
          {
            "label": "Light Color",
            "value": "White & Yellow (Dual)"
          },
          {
            "label": "Wattage",
            "value": "72 W"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-162132363",
    "product_name": "G-1 2 FUNCTION",
    "slug": "g-1-2-function",
    "sku": "PE-162132363",
    "product_code": "162132363",
    "category_id": "cat-strobe-warning",
    "category_name": "Strobe & Police Emergency Lights",
    "short_description": "G-1 2 FUNCTION manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The G-1 2 FUNCTION (Part Number: 162132363) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12V DC",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "High Intensity Discharge",
    "lighting_type": "High Intensity Discharge",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 60,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/10/549903655/FY/MF/TE/53826589/9-500x500.jpg",
    "primary_image_alt": "G-1 2 FUNCTION - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/10/549903655/FY/MF/TE/53826589/9-500x500.jpg",
        "alt": "G-1 2 FUNCTION - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "G-1 2 FUNCTION | Primus Enterprises",
    "seo_description": "G-1 2 FUNCTION wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "G-1 2 FUNCTION, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/g-1-2-function",
    "og_title": "G-1 2 FUNCTION | Primus Enterprises",
    "og_description": "G-1 2 FUNCTION manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/10/549903655/FY/MF/TE/53826589/9-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-g-1-2-function-hero",
        "type": "hero",
        "title": "G-1 2 FUNCTION",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The G-1 2 FUNCTION (Part Number: 162132363) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/10/549903655/FY/MF/TE/53826589/9-500x500.jpg",
        "image_alt": "G-1 2 FUNCTION Technical Profile"
      },
      {
        "id": "ap-g-1-2-function-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Application",
            "value": "Car Roof"
          },
          {
            "label": "Input Voltage",
            "value": "12 V DC"
          },
          {
            "label": "Shape",
            "value": "Rectangular"
          },
          {
            "label": "Voltage",
            "value": "12V DC"
          },
          {
            "label": "Light Color",
            "value": "RGB"
          },
          {
            "label": "Lighting Type",
            "value": "High Intensity Discharge"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-157103288",
    "product_name": "Primus Led Roof Light FAN TYPE",
    "slug": "primus-led-roof-light-fan-type",
    "sku": "PE-157103288",
    "product_code": "157103288",
    "category_id": "cat-roof-lights",
    "category_name": "Roof Light & Cabin Lighting",
    "short_description": "Primus Led Roof Light FAN TYPE manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Primus Led Roof Light FAN TYPE (Part Number: 157103288) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": true,
    "show_price": false,
    "price": 60,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644594474/EW/XD/IH/53826589/primus-led-roof-light-fan-type-500x500.png",
    "primary_image_alt": "Primus Led Roof Light FAN TYPE - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/644594474/EW/XD/IH/53826589/primus-led-roof-light-fan-type-500x500.png",
        "alt": "Primus Led Roof Light FAN TYPE - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Primus Led Roof Light FAN TYPE | Primus Enterprises",
    "seo_description": "Primus Led Roof Light FAN TYPE wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Primus Led Roof Light FAN TYPE, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/primus-led-roof-light-fan-type",
    "og_title": "Primus Led Roof Light FAN TYPE | Primus Enterprises",
    "og_description": "Primus Led Roof Light FAN TYPE manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644594474/EW/XD/IH/53826589/primus-led-roof-light-fan-type-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-primus-led-roof-light-fan-type-hero",
        "type": "hero",
        "title": "PRIMUS LED ROOF LIGHT FAN TYPE",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Primus Led Roof Light FAN TYPE (Part Number: 157103288) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/644594474/EW/XD/IH/53826589/primus-led-roof-light-fan-type-500x500.png",
        "image_alt": "Primus Led Roof Light FAN TYPE Technical Profile"
      },
      {
        "id": "ap-primus-led-roof-light-fan-type-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Application",
            "value": "universal"
          },
          {
            "label": "Input Voltage",
            "value": "12 / 24 v dc"
          },
          {
            "label": "Shape",
            "value": "Round"
          },
          {
            "label": "Light Color",
            "value": "RGB"
          },
          {
            "label": "Mounting",
            "value": "Screw Mount"
          },
          {
            "label": "Switch Type",
            "value": "Push Button"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467151",
    "product_name": "Roof Cabin Light",
    "slug": "roof-cabin-light",
    "sku": "PE-224467151",
    "product_code": "224467151",
    "category_id": "cat-roof-lights",
    "category_name": "Roof Light & Cabin Lighting",
    "short_description": "Roof Cabin Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Roof Cabin Light (Part Number: 224467151) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 75,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610243875/NY/IS/AB/53826589/roof-cabin-light-500x500.png",
    "primary_image_alt": "Roof Cabin Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610243875/NY/IS/AB/53826589/roof-cabin-light-500x500.png",
        "alt": "Roof Cabin Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Roof Cabin Light | Primus Enterprises",
    "seo_description": "Roof Cabin Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Roof Cabin Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/roof-cabin-light",
    "og_title": "Roof Cabin Light | Primus Enterprises",
    "og_description": "Roof Cabin Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610243875/NY/IS/AB/53826589/roof-cabin-light-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-roof-cabin-light-hero",
        "type": "hero",
        "title": "ROOF CABIN LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Roof Cabin Light (Part Number: 224467151) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610243875/NY/IS/AB/53826589/roof-cabin-light-500x500.png",
        "image_alt": "Roof Cabin Light Technical Profile"
      },
      {
        "id": "ap-roof-cabin-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Lamp Type",
            "value": "Tube light"
          },
          {
            "label": "Light Source",
            "value": "LED"
          },
          {
            "label": "Vehicle Make",
            "value": "Universal"
          },
          {
            "label": "Origin",
            "value": "Aftermarket"
          },
          {
            "label": "Lens Material",
            "value": "crome"
          },
          {
            "label": "Mounting Type",
            "value": "Surface Mount"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467382",
    "product_name": "Led Light 327",
    "slug": "led-light-327",
    "sku": "PE-224467382",
    "product_code": "224467382",
    "category_id": "cat-roof-lights",
    "category_name": "Roof Light & Cabin Lighting",
    "short_description": "Led Light 327 manufactured by Primus Enterprises. High-durability automotive component with 12 v input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Led Light 327 (Part Number: 224467382) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 v electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12 v",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12 v",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 40,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610242984/QP/IO/LE/53826589/primus-deluxe-police-led-light-500x500.jpg",
    "primary_image_alt": "Led Light 327 - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/5/610242984/QP/IO/LE/53826589/primus-deluxe-police-led-light-500x500.jpg",
        "alt": "Led Light 327 - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Led Light 327 | Primus Enterprises",
    "seo_description": "Led Light 327 wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Led Light 327, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/led-light-327",
    "og_title": "Led Light 327 | Primus Enterprises",
    "og_description": "Led Light 327 manufactured by Primus Enterprises. High-durability automotive component with 12 v input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610242984/QP/IO/LE/53826589/primus-deluxe-police-led-light-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-led-light-327-hero",
        "type": "hero",
        "title": "LED LIGHT 327",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Led Light 327 (Part Number: 224467382) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 v electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/5/610242984/QP/IO/LE/53826589/primus-deluxe-police-led-light-500x500.jpg",
        "image_alt": "Led Light 327 Technical Profile"
      },
      {
        "id": "ap-led-light-327-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Light Source",
            "value": "LED"
          },
          {
            "label": "Input Voltage",
            "value": "12V"
          },
          {
            "label": "Voltage",
            "value": "12 v"
          },
          {
            "label": "Length",
            "value": "5 in"
          },
          {
            "label": "Shape",
            "value": "rectangular"
          },
          {
            "label": "Usage/Application",
            "value": "For Indoor Light Use"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467957",
    "product_name": "Truck Kiran Light",
    "slug": "truck-kiran-light",
    "sku": "PE-224467957",
    "product_code": "224467957",
    "category_id": "cat-roof-lights",
    "category_name": "Roof Light & Cabin Lighting",
    "short_description": "Truck Kiran Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Truck Kiran Light (Part Number: 224467957) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 30,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570816129/ES/EJ/QP/53826589/truck-kiran-light-500x500.jpg",
    "primary_image_alt": "Truck Kiran Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/570816129/ES/EJ/QP/53826589/truck-kiran-light-500x500.jpg",
        "alt": "Truck Kiran Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Truck Kiran Light | Primus Enterprises",
    "seo_description": "Truck Kiran Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Truck Kiran Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/truck-kiran-light",
    "og_title": "Truck Kiran Light | Primus Enterprises",
    "og_description": "Truck Kiran Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570816129/ES/EJ/QP/53826589/truck-kiran-light-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-truck-kiran-light-hero",
        "type": "hero",
        "title": "TRUCK KIRAN LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Truck Kiran Light (Part Number: 224467957) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/570816129/ES/EJ/QP/53826589/truck-kiran-light-500x500.jpg",
        "image_alt": "Truck Kiran Light Technical Profile"
      },
      {
        "id": "ap-truck-kiran-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Vehicle Brand",
            "value": "UNIVERSAL"
          },
          {
            "label": "Fitting",
            "value": "Right & Left"
          },
          {
            "label": "Origin",
            "value": "OEM"
          },
          {
            "label": "Type",
            "value": "LED"
          },
          {
            "label": "Truck Model",
            "value": "Universal"
          },
          {
            "label": "Model Year",
            "value": "2023"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-224467267",
    "product_name": "Oval Roof Light",
    "slug": "oval-roof-light",
    "sku": "PE-224467267",
    "product_code": "224467267",
    "category_id": "cat-roof-lights",
    "category_name": "Roof Light & Cabin Lighting",
    "short_description": "Oval Roof Light manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Oval Roof Light (Part Number: 224467267) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Electrical Input: 12 V",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12 V",
    "wattage": "15W",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 60,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648127956/EG/CU/OZ/53826589/oval-roof-light-500x500.png",
    "primary_image_alt": "Oval Roof Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/648127956/EG/CU/OZ/53826589/oval-roof-light-500x500.png",
        "alt": "Oval Roof Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Oval Roof Light | Primus Enterprises",
    "seo_description": "Oval Roof Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Oval Roof Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/oval-roof-light",
    "og_title": "Oval Roof Light | Primus Enterprises",
    "og_description": "Oval Roof Light manufactured by Primus Enterprises. High-durability automotive component with 12 V input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648127956/EG/CU/OZ/53826589/oval-roof-light-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-oval-roof-light-hero",
        "type": "hero",
        "title": "OVAL ROOF LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Oval Roof Light (Part Number: 224467267) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12 V electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/648127956/EG/CU/OZ/53826589/oval-roof-light-500x500.png",
        "image_alt": "Oval Roof Light Technical Profile"
      },
      {
        "id": "ap-oval-roof-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Type",
            "value": "Panel Light"
          },
          {
            "label": "Input Voltage",
            "value": "12V"
          },
          {
            "label": "Shape",
            "value": "Rectangular"
          },
          {
            "label": "Usage/Application",
            "value": "For Indoor Light Use"
          },
          {
            "label": "Voltage",
            "value": "12 V"
          },
          {
            "label": "Wattage",
            "value": "15W"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-160699603",
    "product_name": "Primus Delux Roof Light",
    "slug": "primus-delux-roof-light",
    "sku": "PE-160699603",
    "product_code": "160699603",
    "category_id": "cat-roof-lights",
    "category_name": "Roof Light & Cabin Lighting",
    "short_description": "Primus Delux Roof Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Primus Delux Roof Light (Part Number: 160699603) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Input 12v",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 90,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571484656/LA/GM/RH/53826589/primus-delux-roof-light-500x500.jpg",
    "primary_image_alt": "Primus Delux Roof Light - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/12/571484656/LA/GM/RH/53826589/primus-delux-roof-light-500x500.jpg",
        "alt": "Primus Delux Roof Light - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Primus Delux Roof Light | Primus Enterprises",
    "seo_description": "Primus Delux Roof Light wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Primus Delux Roof Light, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/primus-delux-roof-light",
    "og_title": "Primus Delux Roof Light | Primus Enterprises",
    "og_description": "Primus Delux Roof Light manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571484656/LA/GM/RH/53826589/primus-delux-roof-light-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-primus-delux-roof-light-hero",
        "type": "hero",
        "title": "PRIMUS DELUX ROOF LIGHT",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Primus Delux Roof Light (Part Number: 160699603) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/12/571484656/LA/GM/RH/53826589/primus-delux-roof-light-500x500.jpg",
        "image_alt": "Primus Delux Roof Light Technical Profile"
      },
      {
        "id": "ap-primus-delux-roof-light-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Application",
            "value": "universal"
          },
          {
            "label": "Input Voltage",
            "value": "24/v"
          },
          {
            "label": "Shape",
            "value": "Long"
          },
          {
            "label": "Type Of Light",
            "value": "Roof light"
          },
          {
            "label": "Light Color",
            "value": "Neutral White"
          },
          {
            "label": "Power",
            "value": "Input 12v"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-157103429",
    "product_name": "Strobe Led Lights",
    "slug": "strobe-led-lights",
    "sku": "PE-157103429",
    "product_code": "157103429",
    "category_id": "cat-strobe-warning",
    "category_name": "Strobe & Police Emergency Lights",
    "short_description": "Strobe Led Lights manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Strobe Led Lights (Part Number: 157103429) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Amber / White",
    "voltage": "12V DC",
    "wattage": "Standard Automotive Rating",
    "light_source": "LED",
    "lighting_type": "LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 90,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2025/7/530352913/DB/EM/TX/53826589/strobe-led-lights-500x500.jpg",
    "primary_image_alt": "Strobe Led Lights - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2025/7/530352913/DB/EM/TX/53826589/strobe-led-lights-500x500.jpg",
        "alt": "Strobe Led Lights - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Strobe Led Lights | Primus Enterprises",
    "seo_description": "Strobe Led Lights wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Strobe Led Lights, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/strobe-led-lights",
    "og_title": "Strobe Led Lights | Primus Enterprises",
    "og_description": "Strobe Led Lights manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2025/7/530352913/DB/EM/TX/53826589/strobe-led-lights-500x500.jpg",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-strobe-led-lights-hero",
        "type": "hero",
        "title": "STROBE LED LIGHTS",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Strobe Led Lights (Part Number: 157103429) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2025/7/530352913/DB/EM/TX/53826589/strobe-led-lights-500x500.jpg",
        "image_alt": "Strobe Led Lights Technical Profile"
      },
      {
        "id": "ap-strobe-led-lights-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Strobe Type",
            "value": "LED Strobe"
          },
          {
            "label": "Color Output",
            "value": "White"
          },
          {
            "label": "Control Mode",
            "value": "Manual"
          },
          {
            "label": "Lighting Type",
            "value": "LED"
          },
          {
            "label": "Total Led Power",
            "value": "120x1 W"
          },
          {
            "label": "Channel Mode",
            "value": "8 Channel"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  },
  {
    "id": "prod-157103547",
    "product_name": "Strobe Lamp Lights",
    "slug": "strobe-lamp-lights",
    "sku": "PE-157103547",
    "product_code": "157103547",
    "category_id": "cat-strobe-warning",
    "category_name": "Strobe & Police Emergency Lights",
    "short_description": "Strobe Lamp Lights manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "long_description": "The Strobe Lamp Lights (Part Number: 157103547) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
    "features": [
      "Illumination Color: Cool White",
      "Engineered for high vibration tolerance on Indian highways",
      "Tested for weather resistance and thermal dissipation"
    ],
    "applications": [
      "Motorcycle & Scooter aftermarket fitment",
      "Passenger vehicle and commercial cabin upgrade",
      "Universal automotive electrical integration"
    ],
    "compatibility": [
      "Universal 12V / 24V chassis",
      "Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha",
      "Tata, Mahindra, Ashok Leyland commercial vehicles"
    ],
    "brand": "PRIMUS ENTERPRISES",
    "material": "ABS / Die-Cast Alloy",
    "colour": "Cool White",
    "voltage": "12V DC",
    "wattage": "18w",
    "light_source": "Automotive LED",
    "lighting_type": "Automotive LED",
    "lens_type": "Polycarbonate Optical Lens",
    "body_material": "ABS / Die-Cast Alloy",
    "ip_rating": "IP67 Weatherproof",
    "pack_size": "Master Packaging",
    "minimum_order_quantity": "50 Pieces",
    "country_of_origin": "India",
    "warranty": "6 Months Manufacturer Guarantee",
    "status": "published",
    "featured": false,
    "show_price": false,
    "price": 70,
    "price_unit": "Piece",
    "brochure_available": true,
    "primary_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646043081/XY/QP/AE/53826589/strobe-lamp-lights-500x500.png",
    "primary_image_alt": "Strobe Lamp Lights - Primus Enterprises",
    "gallery_images": [
      {
        "url": "https://5.imimg.com/data5/SELLER/Default/2026/9/646043081/XY/QP/AE/53826589/strobe-lamp-lights-500x500.png",
        "alt": "Strobe Lamp Lights - Primus Enterprises",
        "caption": "Main product view",
        "is_primary": true
      }
    ],
    "technical_images": [],
    "seo_title": "Strobe Lamp Lights | Primus Enterprises",
    "seo_description": "Strobe Lamp Lights wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.",
    "seo_keywords": "Strobe Lamp Lights, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer",
    "canonical_url": "https://www.primusenterprises.in.net/products/strobe-lamp-lights",
    "og_title": "Strobe Lamp Lights | Primus Enterprises",
    "og_description": "Strobe Lamp Lights manufactured by Primus Enterprises. High-durability automotive component with 12V DC input and ABS / Die-Cast Alloy construction.",
    "og_image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646043081/XY/QP/AE/53826589/strobe-lamp-lights-500x500.png",
    "robots_index": true,
    "robots_follow": true,
    "a_plus_enabled": true,
    "a_plus_blocks": [
      {
        "id": "ap-strobe-lamp-lights-hero",
        "type": "hero",
        "title": "STROBE LAMP LIGHTS",
        "subtitle": "PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI",
        "content": "The Strobe Lamp Lights (Part Number: 157103547) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ABS / Die-Cast Alloy construction, 12V DC electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2026/9/646043081/XY/QP/AE/53826589/strobe-lamp-lights-500x500.png",
        "image_alt": "Strobe Lamp Lights Technical Profile"
      },
      {
        "id": "ap-strobe-lamp-lights-matrix",
        "type": "tech_matrix",
        "title": "TECHNICAL SPECIFICATIONS",
        "specs": [
          {
            "label": "Wattage",
            "value": "18w"
          },
          {
            "label": "Number of LEDs",
            "value": "6"
          },
          {
            "label": "Light Color",
            "value": "White"
          },
          {
            "label": "Lighting Color",
            "value": "Cool White"
          },
          {
            "label": "Housing Material",
            "value": "Aluminium"
          },
          {
            "label": "Shape",
            "value": "Bar"
          }
        ]
      }
    ],
    "created_at": "2026-01-15T08:00:00.000Z",
    "updated_at": "2026-03-01T10:00:00.000Z"
  }
];

export const initialRedirects: RedirectItem[] = [
  {
    id: 'red-old-catalog',
    from_path: '/catalogue.html',
    to_path: '/products',
    status_code: 301,
    created_at: '2026-01-01T00:00:00.000Z'
  },
  {
    id: 'red-old-contact',
    from_path: '/contact-us',
    to_path: '/contact',
    status_code: 301,
    created_at: '2026-01-01T00:00:00.000Z'
  }
];
