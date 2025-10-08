
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../i18n';
import type { Language } from '../i18n';
import LangSwitch from './LangSwitch';
import aceEnLogo from '../assets/aceb-logo-en.png';
import aceSrLogo from '../assets/aceb-logo-sr.png';

interface HeaderProps {
  language: Language;
}

const Header: React.FC<HeaderProps> = ({ language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslation(language);
  const location = useLocation();
  
  const logo = language === 'sr' ? aceSrLogo : aceEnLogo;
  
  const navigation = [
    { key: 'home', href: `/${language}`, label: t('nav.home') },
    { 
      key: 'about', 
      href: language === 'sr' ? '/sr/o-nama' : '/en/about', 
      label: t('nav.about') 
    },
    { 
      key: 'membership', 
      href: language === 'sr' ? '/sr/clanstvo' : '/en/membership', 
      label: t('nav.membership') 
    },
    { 
      key: 'certification', 
      href: language === 'sr' ? '/sr/licenciranje' : '/en/certification', 
      label: t('nav.certification') 
    },
    { 
      key: 'knowledge', 
      href: language === 'sr' ? '/sr/baza-znanja' : '/en/knowledge', 
      label: t('nav.knowledge') 
    },
    { 
      key: 'events', 
      href: language === 'sr' ? '/sr/dogadjaji' : '/en/events', 
      label: t('nav.events') 
    },
    { 
      key: 'news', 
      href: language === 'sr' ? '/sr/vesti' : '/en/news', 
      label: t('nav.news') 
    },
    { 
      key: 'partners', 
      href: language === 'sr' ? '/sr/partneri' : '/en/partners', 
      label: t('nav.partners') 
    },
    { 
      key: 'contact', 
      href: language === 'sr' ? '/sr/kontakt' : '/en/contact', 
      label: t('nav.contact') 
    },
    { 
      key: 'directory', 
      href: language === 'sr' ? '/sr/imenik' : '/en/directory', 
      label: t('nav.directory') 
    }
  ];
  
  const isActive = (href: string) => {
    if (href === `/${language}`) {
      return location.pathname === href || location.pathname === `/${language}/`;
    }
    return location.pathname === href;
  };
  
  return (
    <header className="bg-white bg-opacity-95 shadow sticky top-0 z-50 backdrop-blur-sm">
      <div className="container">
        <div className="flex items-center justify-between py-md">
          {/* Logo */}
          <Link to={`/${language}`} className="flex items-center">
            <img 
              src={logo} 
              alt="ACEB Logo" 
              className="h-12 w-auto"
              loading="eager"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-lg">
            {navigation.map(({ key, href, label }) => (
              <Link
                key={key}
                to={href}
                className={`text-sm font-medium transition hover:text-blue ${
                  isActive(href) ? 'text-blue border-b-2 border-blue' : 'text-text'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          
          {/* Language Switch & Mobile Menu Button */}
          <div className="flex items-center gap-md">
            <LangSwitch currentLanguage={language} />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-sm rounded hover:bg-blue hover:bg-opacity-10 transition"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-md">
            <div className="grid gap-sm">
              {navigation.map(({ key, href, label }) => (
                <Link
                  key={key}
                  to={href}
                  className={`text-sm font-medium p-md rounded transition hover:bg-blue hover:bg-opacity-10 ${
                    isActive(href) ? 'text-blue bg-blue bg-opacity-10' : 'text-text'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
