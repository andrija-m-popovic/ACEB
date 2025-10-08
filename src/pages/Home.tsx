
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import type { Language } from '../i18n';
import Seo from '../seo/Seo';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

// Import data
import newsEn from '../data/news.en.json';
import newsSr from '../data/news.sr.json';
import eventsEn from '../data/events.en.json';
import eventsSr from '../data/events.sr.json';

interface HomeProps {
  language: Language;
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const t = useTranslation(language);
  
  const news = language === 'sr' ? newsSr : newsEn;
  const events = language === 'sr' ? eventsSr : eventsEn;
  
  // Get latest 3 news items
  const latestNews = news.slice(0, 3);
  
  // Get upcoming events (latest 3)
  const upcomingEvents = events
    .filter(event => event.status === 'upcoming')
    .slice(0, 3);
  
  const pillars = [
    {
      title: t('home.pillars.certification.title'),
      description: t('home.pillars.certification.description'),
      icon: '🎓',
      href: language === 'sr' ? '/sr/licenciranje' : '/en/certification'
    },
    {
      title: t('home.pillars.knowledge.title'),
      description: t('home.pillars.knowledge.description'),
      icon: '📚',
      href: language === 'sr' ? '/sr/baza-znanja' : '/en/knowledge'
    },
    {
      title: t('home.pillars.networking.title'),
      description: t('home.pillars.networking.description'),
      icon: '🤝',
      href: language === 'sr' ? '/sr/dogadjaji' : '/en/events'
    },
    {
      title: t('home.pillars.advocacy.title'),
      description: t('home.pillars.advocacy.description'),
      icon: '📢',
      href: language === 'sr' ? '/sr/o-nama' : '/en/about'
    }
  ];
  
  const currentPath = language === 'sr' ? '/sr' : '/en';
  
  return (
    <>
      <Seo
        title={t('home.title')}
        description={t('home.subtitle')}
        language={language}
        path={currentPath}
      />
      
      {/* Hero Section */}
      <Hero
        title={t('home.title')}
        subtitle={t('home.subtitle')}
        primaryCta={{
          text: t('home.cta1'),
          href: language === 'sr' ? '/sr/clanstvo' : '/en/membership'
        }}
        secondaryCta={{
          text: t('home.cta2'),
          href: language === 'sr' ? '/sr/o-nama' : '/en/about'
        }}
      />
      
      {/* Four Pillars Section */}
      <Section background="default">
        <div className="text-center mb-2xl">
          <h2 className="heading-2 mb-lg">{t('home.pillars.title')}</h2>
        </div>
        
        <div className="grid grid-cols-4 gap-lg">
          {pillars.map(({ title, description, icon, href }) => (
            <Card key={title} className="text-center">
              <div className="text-4xl mb-md">{icon}</div>
              <h3 className="heading-4 mb-md text-green">{title}</h3>
              <p className="body mb-lg">{description}</p>
              <Button href={href} variant="outline" size="sm">
                {language === 'sr' ? 'Saznajte više' : 'Learn More'}
              </Button>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <Section background="alternate">
          <div className="flex justify-between items-center mb-2xl">
            <h2 className="heading-2">{t('home.upcomingEvents')}</h2>
            <Link 
              to={language === 'sr' ? '/sr/dogadjaji' : '/en/events'}
              className="text-blue hover:text-blue-deep transition"
            >
              {t('home.seeAll')} →
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-lg">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="h-full">
                <div className="flex flex-col h-full">
                  <div className="text-sm text-muted mb-sm">
                    {new Date(event.date).toLocaleDateString(language === 'sr' ? 'sr-RS' : 'en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="heading-4 mb-md text-green">{event.title}</h3>
                  <div className="text-sm text-muted mb-md">📍 {event.location}</div>
                  <p className="body mb-lg flex-grow">{event.description}</p>
                  <Button 
                    href={event.registrationLink} 
                    variant="outline" 
                    size="sm"
                    className="mt-auto"
                  >
                    {language === 'sr' ? 'Registrujte se' : 'Register'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}
      
      {/* Latest News */}
      <Section background="default">
        <div className="flex justify-between items-center mb-2xl">
          <h2 className="heading-2">{t('home.latestNews')}</h2>
          <Link 
            to={language === 'sr' ? '/sr/vesti' : '/en/news'}
            className="text-blue hover:text-blue-deep transition"
          >
            {t('home.seeAll')} →
          </Link>
        </div>
        
        <div className="grid grid-cols-3 gap-lg">
          {latestNews.map((article) => (
            <Card key={article.id} className="h-full">
              <div className="flex flex-col h-full">
                <div className="text-sm text-muted mb-sm">
                  {new Date(article.date).toLocaleDateString(language === 'sr' ? 'sr-RS' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h3 className="heading-4 mb-md text-green">{article.title}</h3>
                <p className="body mb-lg flex-grow">{article.excerpt}</p>
                <Button 
                  href={`${language === 'sr' ? '/sr/vesti' : '/en/news'}#${article.slug}`} 
                  variant="ghost" 
                  size="sm"
                  className="mt-auto text-left justify-start p-0"
                >
                  {t('home.readMore')} →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;
