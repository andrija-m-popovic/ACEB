
import { useEffect } from 'react';
import type { Language } from '../i18n';

interface SeoProps {
  title?: string;
  description?: string;
  language: Language;
  path: string;
  image?: string;
}

const Seo: React.FC<SeoProps> = ({
  title = 'ACEB - Association of Circular Economists of the Balkans',
  description = 'Advancing circular economy practices across the Balkans region through professional certification, knowledge sharing, and strategic advocacy.',
  language,
  path,
  image = '/aceb-logo-en.png'
}) => {
  const baseUrl = 'https://aceb.org';
  const currentUrl = `${baseUrl}${path}`;
  
  // Get alternate language path
  const getAlternatePath = (lang: Language) => {
    if (lang === language) return path;
    
    const routeMap: Record<string, string> = {
      '/en': '/sr',
      '/sr': '/en',
      '/en/about': '/sr/o-nama',
      '/sr/o-nama': '/en/about',
      '/en/membership': '/sr/clanstvo',
      '/sr/clanstvo': '/en/membership',
      '/en/certification': '/sr/licenciranje',
      '/sr/licenciranje': '/en/certification',
      '/en/knowledge': '/sr/baza-znanja',
      '/sr/baza-znanja': '/en/knowledge',
      '/en/events': '/sr/dogadjaji',
      '/sr/dogadjaji': '/en/events',
      '/en/news': '/sr/vesti',
      '/sr/vesti': '/en/news',
      '/en/partners': '/sr/partneri',
      '/sr/partneri': '/en/partners',
      '/en/contact': '/sr/kontakt',
      '/sr/kontakt': '/en/contact',
      '/en/directory': '/sr/imenik',
      '/sr/imenik': '/en/directory'
    };
    
    return routeMap[path] || path.replace(/^\/(en|sr)/, `/${lang}`);
  };

  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = description;
      document.head.appendChild(newMetaDescription);
    }
    
    // Update language
    document.documentElement.lang = language;
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;
    
    // Update hreflang links
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach(link => link.remove());
    
    // Add hreflang for both languages
    const languages: Language[] = ['en', 'sr'];
    languages.forEach(lang => {
      const hreflangLink = document.createElement('link');
      hreflangLink.rel = 'alternate';
      hreflangLink.hreflang = lang;
      hreflangLink.href = `${baseUrl}${getAlternatePath(lang)}`;
      document.head.appendChild(hreflangLink);
    });
    
    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${baseUrl}${image}` },
      { property: 'og:locale', content: language === 'sr' ? 'sr_RS' : 'en_US' },
      { property: 'og:site_name', content: 'ACEB' }
    ];
    
    ogTags.forEach(({ property, content }) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = content;
    });
    
    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${baseUrl}${image}` }
    ];
    
    twitterTags.forEach(({ name, content }) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.name = name;
        document.head.appendChild(twitterTag);
      }
      twitterTag.content = content;
    });
    
    // Schema.org structured data
    let schemaScript = document.querySelector('#schema-org') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'schema-org';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": language === 'sr' ? "Asocijacija Cirkularnih Ekonomista Balkana" : "Association of Circular Economists of the Balkans",
      "alternateName": "ACEB",
      "url": baseUrl,
      "logo": `${baseUrl}/aceb-logo-${language}.png`,
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vojvode Tankosića 14/8",
        "addressLocality": "Niš",
        "postalCode": "18000",
        "addressCountry": "RS"
      },
      "sameAs": [
        // Add social media URLs when available
      ]
    };
    
    schemaScript.textContent = JSON.stringify(schemaData);
    
  }, [title, description, language, path, currentUrl, image]);

  return null;
};

export default Seo;
