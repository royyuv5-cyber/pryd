import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
  structuredData?: object | object[];
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  noIndex,
  structuredData,
}) => {
  useEffect(() => {
    // Title
    const formattedTitle = title
      ? (title.includes('Primus Enterprises') || title.includes('PRIMUS') ? title : `${title} | Primus Enterprises`)
      : 'PRIMUS ENTERPRISES - Automotive Lighting & Electrical Products | B2B Catalogue';
    document.title = formattedTitle;

    // Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    const defaultDesc =
      'Primus Enterprises is a leading manufacturer & wholesale distributor of precision automotive lighting, LED fog lamps, bike indicators, DC converters & electrical accessories in New Delhi, India.';
    const finalDesc = description || defaultDesc;
    if (metaDesc) {
      metaDesc.setAttribute('content', finalDesc);
    }

    // Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow');

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://www.primusenterprises.in.net');
    canonical.setAttribute('href', currentUrl);

    // OpenGraph Title & Description
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) ogTitleTag.setAttribute('content', formattedTitle);

    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) ogDescTag.setAttribute('content', finalDesc);

    const ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) ogUrlTag.setAttribute('content', currentUrl);

    if (ogImage) {
      let ogImgTag = document.querySelector('meta[property="og:image"]');
      if (!ogImgTag) {
        ogImgTag = document.createElement('meta');
        ogImgTag.setAttribute('property', 'og:image');
        document.head.appendChild(ogImgTag);
      }
      ogImgTag.setAttribute('content', ogImage);
    }

    // JSON-LD Structured Data
    const SCRIPT_ID = 'primus-structured-data-jsonld';
    let scriptTag = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = SCRIPT_ID;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    if (structuredData) {
      scriptTag.textContent = JSON.stringify(structuredData, null, 2);
    } else {
      // Default Organization Schema
      const defaultOrgSchema = {
        '@context': 'https://schema.org',
        '@type': 'AutoPartsStore',
        name: 'Primus Enterprises',
        alternateName: 'Primus Automotive Lighting',
        description: 'Manufacturer and wholesale distributor of automotive LED lighting, fog lamps, motorcycle indicators, DC converters and accessories.',
        url: 'https://www.primusenterprises.in.net',
        logo: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2nd Floor, H.No-18-19, Khasra No.136/22/2, Street No-11, Block-A-1, Bengali Colony, Sant Nagar, Burari',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110084',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '28.7490',
          longitude: '77.2025'
        },
        telephone: '+919811234567',
        priceRange: '₹₹ (Wholesale / Bulk)',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:30',
            closes: '19:30'
          }
        ]
      };
      scriptTag.textContent = JSON.stringify(defaultOrgSchema, null, 2);
    }

    return () => {
      // Cleanup on unmount if needed
    };
  }, [title, description, canonicalUrl, ogImage, noIndex, structuredData]);

  return null;
};
