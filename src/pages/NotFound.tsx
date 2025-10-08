
import React from 'react';
import { useTranslation } from '../i18n';
import type { Language } from '../i18n';
import Seo from '../seo/Seo';
import Section from '../components/Section';
import Button from '../components/Button';

interface NotFoundProps {
  language: Language;
}

const NotFound: React.FC<NotFoundProps> = ({ language }) => {
  const t = useTranslation(language);
  
  const currentPath = window.location.pathname;
  
  return (
    <>
      <Seo
        title={t('common.notFound')}
        description={language === 'sr' ? 'Stranica koju tražite nije pronađena.' : 'The page you are looking for was not found.'}
        language={language}
        path={currentPath}
      />
      
      <Section background="default" size="lg">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Visual */}
          <div className="mb-2xl">
            <div className="text-9xl font-bold text-green opacity-20 mb-md">404</div>
            <div className="text-6xl mb-lg">🔍</div>
          </div>
          
          {/* Error Message */}
          <h1 className="heading-1 mb-lg text-green">
            {t('common.notFound')}
          </h1>
          
          <p className="body-large mb-xl text-muted">
            {language === 'sr'
              ? 'Stranica koju tražite ne postoji ili je premeštena. Možda je URL pogrešno ukucan ili je stranica uklonjena.'
              : 'The page you are looking for does not exist or has been moved. The URL might be mistyped or the page has been removed.'
            }
          </p>
          
          {/* Navigation Options */}
          <div className="grid md:grid-cols-2 gap-lg mb-2xl">
            <div className="p-lg bg-white rounded shadow text-left">
              <h3 className="heading-4 mb-md text-blue">
                {language === 'sr' ? 'Popularne stranice' : 'Popular Pages'}
              </h3>
              <div className="grid gap-sm">
                <a 
                  href={language === 'sr' ? '/sr' : '/en'}
                  className="text-green hover:underline"
                >
                  {t('nav.home')}
                </a>
                <a 
                  href={language === 'sr' ? '/sr/o-nama' : '/en/about'}
                  className="text-green hover:underline"
                >
                  {t('nav.about')}
                </a>
                <a 
                  href={language === 'sr' ? '/sr/clanstvo' : '/en/membership'}
                  className="text-green hover:underline"
                >
                  {t('nav.membership')}
                </a>
                <a 
                  href={language === 'sr' ? '/sr/licenciranje' : '/en/certification'}
                  className="text-green hover:underline"
                >
                  {t('nav.certification')}
                </a>
              </div>
            </div>
            
            <div className="p-lg bg-white rounded shadow text-left">
              <h3 className="heading-4 mb-md text-blue">
                {language === 'sr' ? 'Potrebna pomoć?' : 'Need Help?'}
              </h3>
              <div className="grid gap-sm">
                <a 
                  href={language === 'sr' ? '/sr/kontakt' : '/en/contact'}
                  className="text-green hover:underline"
                >
                  {t('nav.contact')}
                </a>
                <a 
                  href={language === 'sr' ? '/sr/baza-znanja' : '/en/knowledge'}
                  className="text-green hover:underline"
                >
                  {t('nav.knowledge')}
                </a>
                <a 
                  href={language === 'sr' ? '/sr/imenik' : '/en/directory'}
                  className="text-green hover:underline"
                >
                  {t('nav.directory')}
                </a>
                <a 
                  href="mailto:info@aceb.org"
                  className="text-green hover:underline"
                >
                  Email: info@aceb.org
                </a>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex gap-md justify-center">
            <Button
              href={language === 'sr' ? '/sr' : '/en'}
              variant="primary"
              size="lg"
            >
              {t('common.backHome')}
            </Button>
            
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
            >
              {language === 'sr' ? 'Nazad' : 'Go Back'}
            </Button>
          </div>
          
          {/* Language Suggestion */}
          <div className="mt-xl pt-xl border-t border-muted border-opacity-20">
            <p className="text-sm text-muted mb-md">
              {language === 'sr'
                ? 'Možda stranica postoji na drugom jeziku?'
                : 'Maybe the page exists in another language?'
              }
            </p>
            <div className="flex gap-sm justify-center">
              <Button
                href={language === 'sr' ? '/en' : '/sr'}
                variant="ghost"
                size="sm"
              >
                {language === 'sr' ? '🇬🇧 Switch to English' : '🇷🇸 Prebaci na srpski'}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default NotFound;
