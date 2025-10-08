
import React, { useState } from 'react';
import { useTranslation } from '../i18n';
import type { Language } from '../i18n';
import Seo from '../seo/Seo';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

// Import data
import eventsEn from '../data/events.en.json';
import eventsSr from '../data/events.sr.json';

interface EventsProps {
  language: Language;
}

const Events: React.FC<EventsProps> = ({ language }) => {
  const t = useTranslation(language);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  
  const events = language === 'sr' ? eventsSr : eventsEn;
  
  const currentPath = language === 'sr' ? '/sr/dogadjaji' : '/en/events';
  
  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const pastEvents = events.filter(event => event.status === 'past');
  
  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;
  
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
        title={t('events.title')}
        description={t('events.intro')}
        language={language}
        path={currentPath}
      />
      
      {/* Page Header */}
      <Section background="green">
        <div className="text-center">
          <h1 className="heading-1 mb-lg text-white">{t('events.title')}</h1>
          <p className="body-large text-white opacity-90">{t('events.intro')}</p>
        </div>
      </Section>
      
      {/* Events Section */}
      <Section background="default">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-2xl">
          <div className="inline-flex bg-white rounded-lg shadow">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-xl py-md rounded-l-lg transition ${
                activeTab === 'upcoming'
                  ? 'bg-green text-white'
                  : 'text-text hover:bg-green hover:bg-opacity-10'
              }`}
            >
              {t('events.upcoming')} ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-xl py-md rounded-r-lg transition ${
                activeTab === 'past'
                  ? 'bg-green text-white'
                  : 'text-text hover:bg-green hover:bg-opacity-10'
              }`}
            >
              {t('events.past')} ({pastEvents.length})
            </button>
          </div>
        </div>
        
        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-xl">
          {currentEvents.map((event) => (
            <Card key={event.id} className="h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-md">
                  <div className={`px-md py-sm rounded text-sm font-medium ${
                    event.status === 'upcoming' ? 'bg-lime text-white' : 'bg-muted text-white'
                  }`}>
                    {event.status === 'upcoming' ? 
                      (language === 'sr' ? 'Predstojeći' : 'Upcoming') : 
                      (language === 'sr' ? 'Završen' : 'Past')
                    }
                  </div>
                </div>
                
                <h3 className="heading-3 mb-md text-green">{event.title}</h3>
                
                <div className="flex flex-col gap-sm mb-lg">
                  <div className="flex items-center gap-sm text-muted">
                    <span>📅</span>
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-sm text-muted">
                    <span>📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="body mb-xl flex-grow">{event.description}</p>
                
                <div className="mt-auto">
                  {event.status === 'upcoming' ? (
                    <Button
                      href={event.registrationLink}
                      variant="primary"
                      size="md"
                      className="w-full"
                    >
                      {t('events.register')}
                    </Button>
                  ) : (
                    <Button
                      href="#"
                      variant="outline"
                      size="md"
                      className="w-full"
                    >
                      {t('events.learnMore')}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Empty state */}
        {currentEvents.length === 0 && (
          <div className="text-center py-2xl">
            <div className="text-6xl mb-lg">📅</div>
            <h3 className="heading-3 mb-md">
              {activeTab === 'upcoming' 
                ? (language === 'sr' ? 'Nema predstojećih događaja' : 'No Upcoming Events')
                : (language === 'sr' ? 'Nema prošlih događaja' : 'No Past Events')
              }
            </h3>
            <p className="body text-muted">
              {language === 'sr' 
                ? 'Proverite kasnije za nove događaje.'
                : 'Check back later for new events.'
              }
            </p>
          </div>
        )}
      </Section>
      
      {/* CTA Section */}
      <Section background="blue">
        <div className="text-white text-center max-w-2xl mx-auto">
          <h2 className="heading-2 mb-lg">
            {language === 'sr' ? 'Želite da organizujete događaj?' : 'Want to Organize an Event?'}
          </h2>
          <p className="body-large mb-xl opacity-90">
            {language === 'sr' 
              ? 'Kontaktirajte nas ako imate ideju za događaj koji bi mogao da interesuje našu zajednicu.'
              : 'Contact us if you have an idea for an event that might interest our community.'
            }
          </p>
          <Button
            href={language === 'sr' ? '/sr/kontakt' : '/en/contact'}
            variant="primary"
            size="lg"
            className="bg-white text-blue hover:bg-lime hover:text-white"
          >
            {language === 'sr' ? 'Kontaktirajte nas' : 'Contact Us'}
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Events;
