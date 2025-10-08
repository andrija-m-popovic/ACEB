
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import type { Language } from '../i18n';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = useTranslation(language);
  
  const footerLinks = [
    {
      href: language === 'sr' ? '/sr/o-nama' : '/en/about',
      label: t('footer.links.about')
    },
    {
      href: language === 'sr' ? '/sr/kontakt' : '/en/contact',
      label: t('footer.links.contact')
    }
  ];
  
  return (
    <footer className="bg-text text-white">
      <div className="container py-2xl">
        <div className="grid md:grid-cols-2 gap-xl">
          {/* Contact Info */}
          <div>
            <h3 className="heading-4 mb-md text-white">
              {language === 'sr' ? 'Asocijacija Cirkularnih Ekonomista Balkana' : 'Association of Circular Economists of the Balkans'}
            </h3>
            <p className="body-small opacity-80 mb-md">
              {t('footer.address')}
            </p>
            <p className="body-small opacity-80">
              info@aceb.org
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="heading-4 mb-md text-white">
              {language === 'sr' ? 'Brze veze' : 'Quick Links'}
            </h4>
            <div className="flex flex-col gap-sm">
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  to={href}
                  className="body-small opacity-80 hover:opacity-100 transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white border-opacity-20 mt-xl pt-xl text-center">
          <p className="body-small opacity-60">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
