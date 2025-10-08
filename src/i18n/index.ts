
export type Language = 'en' | 'sr';

export interface Translation {
  [key: string]: string | Translation | string[];
}

export interface Translations {
  en: Translation;
  sr: Translation;
}

export const translations: Translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      membership: 'Membership',
      certification: 'Certification',
      knowledge: 'Knowledge Base',
      events: 'Events',
      news: 'News',
      partners: 'Partners',
      contact: 'Contact',
      directory: 'Directory'
    },
    
    // Home page
    home: {
      title: 'Association of Circular Economists of the Balkans',
      subtitle: 'Advancing circular economy practices across the Balkans region through professional certification, knowledge sharing, and strategic advocacy.',
      cta1: 'Become a Member',
      cta2: 'Learn More',
      pillars: {
        title: 'Our Four Pillars',
        certification: {
          title: 'Certification',
          description: 'Professional certification programs for circular economy specialists'
        },
        knowledge: {
          title: 'Knowledge',
          description: 'Comprehensive knowledge base and educational resources'
        },
        networking: {
          title: 'Networking',
          description: 'Connect with fellow professionals and industry leaders'
        },
        advocacy: {
          title: 'Advocacy',
          description: 'Promoting circular economy policies and practices'
        }
      },
      upcomingEvents: 'Upcoming Events',
      latestNews: 'Latest News',
      seeAll: 'See All',
      readMore: 'Read More'
    },
    
    // About page
    about: {
      title: 'About ACEB',
      mission: {
        title: 'Our Mission',
        content: 'To advance the circular economy in the Balkans region by providing professional certification, fostering knowledge exchange, and advocating for sustainable economic practices that benefit both society and the environment.'
      },
      governance: {
        title: 'Governance Structure',
        assembly: {
          title: 'Assembly',
          description: 'The highest governing body comprising all active members'
        },
        board: {
          title: 'Executive Board',
          description: 'Responsible for strategic direction and operational oversight'
        },
        council: {
          title: 'Professional Council',
          description: 'Oversees certification standards and professional development'
        },
        disciplinary: {
          title: 'Disciplinary Body',
          description: 'Ensures professional standards and ethical conduct'
        }
      },
      transparency: {
        title: 'Transparency',
        description: 'We are committed to transparency in our operations and governance.',
        documents: {
          statute: 'Association Statute',
          rules: 'Certification Rules',
          reports: 'Annual Reports',
          financials: 'Financial Statements'
        }
      }
    },
    
    // Membership page
    membership: {
      title: 'Membership',
      intro: 'Join ACEB and become part of a growing community of circular economy professionals in the Balkans.',
      categories: {
        title: 'Membership Categories',
        licensed: {
          title: 'Licensed Circular Economist',
          description: 'Certified professionals with recognized expertise in circular economy'
        },
        trainee: {
          title: 'Trainee Circular Economist',
          description: 'Professionals working towards full certification'
        },
        regular: {
          title: 'Regular Active Member',
          description: 'Individuals active in circular economy fields'
        },
        associated: {
          title: 'Associated Member',
          description: 'Organizations and institutions supporting circular economy'
        },
        honorary: {
          title: 'Honorary Member',
          description: 'Distinguished individuals recognized for their contributions'
        }
      },
      benefits: {
        title: 'Membership Benefits',
        items: [
          'Access to certification programs',
          'Professional development opportunities',
          'Networking events and conferences',
          'Industry publications and resources',
          'Career advancement support',
          'Advocacy representation'
        ]
      },
      fees: {
        title: 'Membership Fees',
        annual: 'Annual Fee',
        currency: 'EUR'
      },
      apply: 'Apply Now'
    },
    
    // Certification page
    certification: {
      title: 'Certification Programs',
      intro: 'Our three-level certification system ensures comprehensive professional development in circular economy principles and practices.',
      levels: {
        title: 'Certification Levels',
        level1: {
          title: 'Level I - Foundation',
          description: 'Basic understanding of circular economy principles, sustainability concepts, and introductory practices.'
        },
        level2: {
          title: 'Level II - Practitioner',
          description: 'Advanced knowledge and practical application of circular economy strategies in business and policy contexts.'
        },
        level3: {
          title: 'Level III - Expert',
          description: 'Comprehensive expertise in circular economy design, implementation, and leadership across various sectors.'
        }
      },
      process: {
        title: 'Certification Process',
        steps: [
          'Submit application with required documentation',
          'Complete relevant coursework and training',
          'Pass written examination',
          'Complete practical project assessment',
          'Receive certification and join professional register'
        ]
      },
      schedule: {
        title: 'Exam Schedule',
        description: 'Examinations are conducted quarterly. Next exam dates:'
      },
      cta: 'Get More Information'
    },
    
    // Knowledge page
    knowledge: {
      title: 'Knowledge Base',
      intro: 'Access our comprehensive collection of resources on circular economy practices, research, and case studies.',
      filters: {
        all: 'All Types',
        type: 'Type',
        sector: 'Sector',
        year: 'Year',
        search: 'Search resources...'
      },
      types: {
        article: 'Article',
        guide: 'Guide',
        report: 'Report'
      },
      download: 'Download',
      view: 'View'
    },
    
    // Events page
    events: {
      title: 'Events',
      intro: 'Stay informed about our upcoming conferences, workshops, and networking events.',
      upcoming: 'Upcoming Events',
      past: 'Past Events',
      register: 'Register',
      learnMore: 'Learn More'
    },
    
    // News page
    news: {
      title: 'News',
      intro: 'Latest updates and announcements from ACEB and the circular economy community.',
      readMore: 'Read More'
    },
    
    // Partners page
    partners: {
      title: 'Partners',
      intro: 'We work closely with leading organizations to advance circular economy practices across the Balkans.',
      becomePartner: 'Become a Partner'
    },
    
    // Contact page
    contact: {
      title: 'Contact Us',
      intro: 'Get in touch with us for inquiries about membership, certification, or partnership opportunities.',
      address: {
        title: 'Address',
        street: 'Vojvode Tankosića 14/8',
        city: '18000 Niš, Serbia'
      },
      form: {
        title: 'Send us a message',
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        consent: 'I agree to the processing of my personal data',
        submit: 'Send Message',
        success: 'Your message has been sent successfully. We will contact you soon.',
        error: 'Please fill in all required fields correctly.'
      }
    },
    
    // Directory page
    directory: {
      title: 'Professional Directory',
      intro: 'Find certified circular economists and professionals in our public register.',
      search: 'Search by name...',
      filters: {
        city: 'City',
        level: 'License Level',
        status: 'Status'
      },
      levels: {
        all: 'All Levels',
        'I': 'Level I',
        'II': 'Level II',
        'III': 'Level III'
      },
      statuses: {
        all: 'All Statuses',
        active: 'Active',
        inactive: 'Inactive'
      }
    },
    
    // Forms
    form: {
      required: 'Required field',
      invalidEmail: 'Please enter a valid email address',
      consentRequired: 'You must agree to the processing of your personal data',
      membership: {
        title: 'Membership Application',
        fullName: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        city: 'City',
        country: 'Country',
        category: 'Membership Category',
        organization: 'Organization (Optional)',
        message: 'Message (Optional)',
        consent: 'I agree to the processing of my personal data',
        submit: 'Submit Application',
        success: 'Your application has been submitted successfully. We will contact you soon.'
      }
    },
    
    // Footer
    footer: {
      copyright: '© 2024 ACEB. All rights reserved.',
      address: 'Vojvode Tankosića 14/8, 18000 Niš, Serbia',
      links: {
        about: 'About',
        contact: 'Contact',
        privacy: 'Privacy Policy'
      }
    },
    
    // Common
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      notFound: 'Page not found',
      backHome: 'Back to Home',
      language: 'Language'
    }
  },
  
  sr: {
    // Navigation
    nav: {
      home: 'Početna',
      about: 'O nama',
      membership: 'Članstvo',
      certification: 'Licenciranje',
      knowledge: 'Baza znanja',
      events: 'Događaji',
      news: 'Vesti',
      partners: 'Partneri',
      contact: 'Kontakt',
      directory: 'Imenik'
    },
    
    // Home page
    home: {
      title: 'Asocijacija Cirkularnih Ekonomista Balkana',
      subtitle: 'Unapređujemo cirkularne ekonomske prakse širom Balkana kroz profesionalnu sertifikaciju, razmenu znanja i strateško zagovaranje.',
      cta1: 'Postanite član',
      cta2: 'Saznajte više',
      pillars: {
        title: 'Naši četiri stuba',
        certification: {
          title: 'Licenciranje',
          description: 'Programi profesionalnih sertifikata za specijaliste cirkularne ekonomije'
        },
        knowledge: {
          title: 'Znanje',
          description: 'Sveobuhvatna baza znanja i edukacioni resursi'
        },
        networking: {
          title: 'Umrežavanje',
          description: 'Povežite se sa kolegama i liderima u industriji'
        },
        advocacy: {
          title: 'Zagovaranje',
          description: 'Promovisanje politika i praksi cirkularne ekonomije'
        }
      },
      upcomingEvents: 'Predstojeći događaji',
      latestNews: 'Najnovije vesti',
      seeAll: 'Pogledajte sve',
      readMore: 'Pročitajte više'
    },
    
    // About page
    about: {
      title: 'O ACEB',
      mission: {
        title: 'Naša misija',
        content: 'Unapređujemo cirkularnu ekonomiju u regionu Balkana pružanjem profesionalnog sertifikovanja, podsticanjem razmene znanja i zagovaranjem održivih ekonomskih praksi koje koriste i društvu i životnoj sredini.'
      },
      governance: {
        title: 'Upravljačka struktura',
        assembly: {
          title: 'Skupština',
          description: 'Najviši upravljački organ koji čine svi aktivni članovi'
        },
        board: {
          title: 'Izvršni odbor',
          description: 'Odgovoran za strateški pravac i operativni nadzor'
        },
        council: {
          title: 'Stručni savet',
          description: 'Nadzire standarde sertifikovanja i profesionalni razvoj'
        },
        disciplinary: {
          title: 'Disciplinsko telo',
          description: 'Osigurava profesionalne standarde i etičko ponašanje'
        }
      },
      transparency: {
        title: 'Transparentnost',
        description: 'Posvećeni smo transparentnosti u našem radu i upravljanju.',
        documents: {
          statute: 'Statut asocijacije',
          rules: 'Pravila sertifikovanja',
          reports: 'Godišnji izveštaji',
          financials: 'Finansijski izveštaji'
        }
      }
    },
    
    // Membership page
    membership: {
      title: 'Članstvo',
      intro: 'Pridružite se ACEB-u i postanite deo rastuce zajednice profesionalaca cirkularne ekonomije na Balkanu.',
      categories: {
        title: 'Kategorije članstva',
        licensed: {
          title: 'Licencirani cirkularni ekonomista',
          description: 'Sertifikovani profesionalci sa priznatom ekspertizom u cirkularnoj ekonomiji'
        },
        trainee: {
          title: 'Pripravnik cirkularni ekonomista',
          description: 'Profesionalci koji rade na punoj sertifikaciji'
        },
        regular: {
          title: 'Redovni aktivni član',
          description: 'Pojedinci aktivni u oblasti cirkularne ekonomije'
        },
        associated: {
          title: 'Pridruženi član',
          description: 'Organizacije i institucije koje podržavaju cirkularnu ekonomiju'
        },
        honorary: {
          title: 'Počasni član',
          description: 'Ugledni pojedinci priznati za svoj doprinos'
        }
      },
      benefits: {
        title: 'Benefiti članstva',
        items: [
          'Pristup programima sertifikacije',
          'Mogućnosti profesionalnog razvoja',
          'Networking događaji i konferencije',
          'Industrijske publikacije i resursi',
          'Podrška u napredovanju karijere',
          'Zastupanje u zagovaranju'
        ]
      },
      fees: {
        title: 'Članarine',
        annual: 'Godišnja članarina',
        currency: 'EUR'
      },
      apply: 'Aplicirajte sada'
    },
    
    // Certification page
    certification: {
      title: 'Programi licenciranja',
      intro: 'Naš trostepeni sistem sertifikacije osigurava sveobuhvatan profesionalni razvoj u principima i praksama cirkularne ekonomije.',
      levels: {
        title: 'Nivoi sertifikacije',
        level1: {
          title: 'Nivo I - Osnove',
          description: 'Osnovno razumevanje principa cirkularne ekonomije, koncepata održivosti i uvodni pristupi.'
        },
        level2: {
          title: 'Nivo II - Praktičar',
          description: 'Napredno znanje i praktična primena strategija cirkularne ekonomije u poslovnom i politickom kontekstu.'
        },
        level3: {
          title: 'Nivo III - Ekspert',
          description: 'Sveobuhvatna ekspertiza u dizajnu, implementaciji i liderstvu cirkularne ekonomije kroz različite sektore.'
        }
      },
      process: {
        title: 'Proces sertifikacije',
        steps: [
          'Pošaljite prijavu sa potrebnom dokumentacijom',
          'Završite relevantne kursevi i obuku',
          'Položite pismenji ispit',
          'Završite procenu praktičnog projekta',
          'Primite sertifikat i pridružite se profesionalnom registru'
        ]
      },
      schedule: {
        title: 'Raspored ispita',
        description: 'Ispiti se sprovode kvartalno. Sledeći termini:'
      },
      cta: 'Dobijte više informacija'
    },
    
    // Knowledge page
    knowledge: {
      title: 'Baza znanja',
      intro: 'Pristupite našoj sveobuhvatnoj kolekciji resursa o praksama cirkularne ekonomije, istraživanjima i studijama slučaja.',
      filters: {
        all: 'Svi tipovi',
        type: 'Tip',
        sector: 'Sektor',
        year: 'Godina',
        search: 'Pretragite resurse...'
      },
      types: {
        article: 'Članak',
        guide: 'Vodič',
        report: 'Izveštaj'
      },
      download: 'Preuzmi',
      view: 'Pogledaj'
    },
    
    // Events page
    events: {
      title: 'Događaji',
      intro: 'Budite informisani o našim predstojećim konferencijama, radionicama i networking događajima.',
      upcoming: 'Predstojeći događaji',
      past: 'Prošli događaji',
      register: 'Registrujte se',
      learnMore: 'Saznajte više'
    },
    
    // News page
    news: {
      title: 'Vesti',
      intro: 'Najnovije vesti i najave od ACEB-a i zajednice cirkularne ekonomije.',
      readMore: 'Pročitajte više'
    },
    
    // Partners page
    partners: {
      title: 'Partneri',
      intro: 'Blisko sarađujemo sa vodećim organizacijama da unapredimo prakse cirkularne ekonomije širom Balkana.',
      becomePartner: 'Postanite partner'
    },
    
    // Contact page
    contact: {
      title: 'Kontaktirajte nas',
      intro: 'Obratite nam se za upite o članstvu, sertifikaciji ili mogućnostima partnerstva.',
      address: {
        title: 'Adresa',
        street: 'Vojvode Tankosića 14/8',
        city: '18000 Niš, Srbija'
      },
      form: {
        title: 'Pošaljite nam poruku',
        name: 'Ime i prezime',
        email: 'Email adresa',
        subject: 'Naslov',
        message: 'Poruka',
        consent: 'Slažem se sa obradom mojih ličnih podataka',
        submit: 'Pošaljite poruku',
        success: 'Vaša poruka je uspešno poslata. Uskoro ćemo vas kontaktirati.',
        error: 'Molimo popunite sva potrebna polja ispravno.'
      }
    },
    
    // Directory page
    directory: {
      title: 'Profesionalni imenik',
      intro: 'Pronađite sertifikovane cirkularne ekonomiste i profesionalce u našem javnom registru.',
      search: 'Pretraži po imenu...',
      filters: {
        city: 'Grad',
        level: 'Nivo licence',
        status: 'Status'
      },
      levels: {
        all: 'Svi nivoi',
        'I': 'Nivo I',
        'II': 'Nivo II',
        'III': 'Nivo III'
      },
      statuses: {
        all: 'Svi statusi',
        active: 'Aktivni',
        inactive: 'Neaktivni'
      }
    },
    
    // Forms
    form: {
      required: 'Obavezno polje',
      invalidEmail: 'Molimo unesite validnu email adresu',
      consentRequired: 'Morate se složiti sa obradom ličnih podataka',
      membership: {
        title: 'Prijava za članstvo',
        fullName: 'Ime i prezime',
        email: 'Email adresa',
        phone: 'Broj telefona',
        city: 'Grad',
        country: 'Zemlja',
        category: 'Kategorija članstva',
        organization: 'Organizacija (opciono)',
        message: 'Poruka (opciono)',
        consent: 'Slažem se sa obradom mojih ličnih podataka',
        submit: 'Pošaljite prijavu',
        success: 'Vaša prijava je uspešno poslata. Uskoro ćemo vas kontaktirati.'
      }
    },
    
    // Footer
    footer: {
      copyright: '© 2024 ACEB. Sva prava zadržana.',
      address: 'Vojvode Tankosića 14/8, 18000 Niš, Srbija',
      links: {
        about: 'O nama',
        contact: 'Kontakt',
        privacy: 'Politika privatnosti'
      }
    },
    
    // Common
    common: {
      loading: 'Učitava...',
      error: 'Došlo je do greške',
      notFound: 'Stranica nije pronađena',
      backHome: 'Nazad na početnu',
      language: 'Jezik'
    }
  }
};

// Helper functions
export function getTranslation(language: Language, key: string): string {
  const keys = key.split('.');
  let result: any = translations[language];
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      console.warn(`Translation key "${key}" not found for language "${language}"`);
      return key;
    }
  }
  
  return typeof result === 'string' ? result : key;
}

export function getCurrentLanguage(): Language {
  const path = window.location.pathname;
  if (path.startsWith('/sr')) return 'sr';
  return 'en';
}

export function getLanguageFromPath(path: string): Language {
  if (path.startsWith('/sr')) return 'sr';
  return 'en';
}

export function getLocalizedPath(path: string, targetLanguage: Language): string {
  const currentLang = getLanguageFromPath(path);
  
  if (currentLang === targetLanguage) {
    return path;
  }
  
  // Remove current language prefix
  const cleanPath = path.replace(/^\/(en|sr)/, '');
  
  // Route mappings for Serbian URLs
  const routeMap: Record<string, string> = {
    '/about': '/o-nama',
    '/membership': '/clanstvo',
    '/certification': '/licenciranje',
    '/knowledge': '/baza-znanja',
    '/events': '/dogadjaji',
    '/news': '/vesti',
    '/partners': '/partneri',
    '/contact': '/kontakt',
    '/directory': '/imenik'
  };
  
  const reverseRouteMap: Record<string, string> = Object.fromEntries(
    Object.entries(routeMap).map(([k, v]) => [v, k])
  );
  
  let targetPath = cleanPath;
  
  if (targetLanguage === 'sr') {
    // Converting to Serbian
    targetPath = routeMap[cleanPath] || cleanPath;
  } else {
    // Converting to English
    targetPath = reverseRouteMap[cleanPath] || cleanPath;
  }
  
  return `/${targetLanguage}${targetPath || ''}`;
}

export function createLanguageHref(currentPath: string, language: Language): string {
  return getLocalizedPath(currentPath, language);
}

// Hook for using translations
export function useTranslation(language: Language) {
  return (key: string) => getTranslation(language, key);
}
