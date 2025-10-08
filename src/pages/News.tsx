
import React from 'react';
import { useTranslation } from '../i18n';
import type { Language } from '../i18n';
import Seo from '../seo/Seo';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

// Import data
import newsEn from '../data/news.en.json';
import newsSr from '../data/news.sr.json';

interface NewsProps {
  language: Language;
}

const News: React.FC<NewsProps> = ({ language }) => {
  const t = useTranslation(language);
  
  const news = language === 'sr' ? newsSr : newsEn;
  
  const currentPath = language === 'sr' ? '/sr/vesti' : '/en/news';
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === 'sr' ? 'sr-RS' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <>
      <Seo
        title={t('news.title')}
        description={t('news.intro')}
        language={language}
        path={currentPath}
      />
      
      {/* Page Header */}
      <Section background="blue">
        <div className="text-center">
          <h1 className="heading-1 mb-lg text-white">{t('news.title')}</h1>
          <p className="body-large text-white opacity-90">{t('news.intro')}</p>
        </div>
      </Section>
      
      {/* News Articles */}
      <Section background="default">
        <div className="grid gap-xl">
          {news.map((article, index) => (
            <Card key={article.id} className="flex flex-col md:flex-row gap-lg">
              {/* Article number indicator */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              
              {/* Article content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-md">
                  <div className="text-sm text-muted mb-sm md:mb-0">
                    {formatDate(article.date)}
                  </div>
                </div>
                
                <h2 className="heading-3 mb-md text-green" id={article.slug}>
                  {article.title}
                </h2>
                
                <p className="body mb-lg">{article.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <Button
                    href={`#${article.slug}`}
                    variant="ghost"
                    size="sm"
                    className="p-0 text-blue"
                  >
                    {t('news.readMore')} →
                  </Button>
                  
                  {/* Share button */}
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: article.title,
                          text: article.excerpt,
                          url: `${window.location.origin}${currentPath}#${article.slug}`
                        });
                      } else {
                        // Fallback: copy to clipboard
                        navigator.clipboard.writeText(
                          `${article.title}\n${window.location.origin}${currentPath}#${article.slug}`
                        );
                        alert(language === 'sr' ? 'Link je kopiran!' : 'Link copied!');
                      }
                    }}
                    className="text-muted hover:text-blue transition p-sm rounded"
                    title={language === 'sr' ? 'Podelite članak' : 'Share article'}
                  >
                    📤
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Newsletter CTA */}
        <div className="mt-3xl">
          <Card className="text-center bg-green text-white">
            <h3 className="heading-3 mb-md">
              {language === 'sr' ? 'Budite u toku' : 'Stay Updated'}
            </h3>
            <p className="body-large mb-xl opacity-90">
              {language === 'sr' 
                ? 'Prijavite se na našu mailing listu da biste primali najnovije vesti direktno u svoj inbox.'
                : 'Subscribe to our mailing list to receive the latest news directly in your inbox.'
              }
            </p>
            <div className="flex flex-col md:flex-row gap-md max-w-md mx-auto">
              <input
                type="email"
                placeholder={language === 'sr' ? 'Vaša email adresa' : 'Your email address'}
                className="flex-1 text-text"
              />
              <Button
                variant="primary"
                className="bg-white text-green hover:bg-lime hover:text-white"
              >
                {language === 'sr' ? 'Prijavite se' : 'Subscribe'}
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default News;
