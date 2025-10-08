
import React from 'react';
import { useTranslation } from '../i18n';
import type { Language } from '../i18n';
import Seo from '../seo/Seo';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

interface CertificationProps {
  language: Language;
}

const Certification: React.FC<CertificationProps> = ({ language }) => {
  const t = useTranslation(language);
  
  const currentPath = language === 'sr' ? '/sr/licenciranje' : '/en/certification';
  
  const certificationLevels = [
    {
      title: t('certification.levels.level1.title'),
      description: t('certification.levels.level1.description'),
      icon: '🥉',
      color: 'lime'
    },
    {
      title: t('certification.levels.level2.title'),
      description: t('certification.levels.level2.description'),
      icon: '🥈',
      color: 'blue'
    },
    {
      title: t('certification.levels.level3.title'),
      description: t('certification.levels.level3.description'),
      icon: '🥇',
      color: 'green'
    }
  ];
  
  const processStepsTranslation = t('certification.process.steps');
  const processSteps = Array.isArray(processStepsTranslation) ? processStepsTranslation : [
    'Submit application with required documentation',
    'Complete relevant coursework and training',
    'Pass written examination',
    'Complete practical project assessment',
    'Receive certification and join professional register'
  ];
  
  const examSchedule = [
    { date: '2024-06-15', level: 'I', location: 'Online' },
    { date: '2024-09-20', level: 'II', location: 'Belgrade, Serbia' },
    { date: '2024-12-10', level: 'III', location: 'Zagreb, Croatia' },
    { date: '2025-03-15', level: 'I', location: 'Online' }
  ];
  
  return (
    <>
      <Seo
        title={t('certification.title')}
        description={t('certification.intro')}
        language={language}
        path={currentPath}
      />
      
      {/* Page Header */}
      <Section background="green">
        <div className="text-center text-white">
          <h1 className="heading-1 mb-lg">{t('certification.title')}</h1>
          <p className="body-large opacity-90">{t('certification.intro')}</p>
        </div>
      </Section>
      
      {/* Certification Levels */}
      <Section background="default">
        <div className="text-center mb-2xl">
          <h2 className="heading-2 mb-lg text-green">{t('certification.levels.title')}</h2>
        </div>
        
        <div className="grid gap-xl">
          {certificationLevels.map(({ title, description, icon, color }, index) => (
            <Card key={title} className={`border-l-4 ${color === 'lime' ? 'border-lime' : color === 'blue' ? 'border-blue' : 'border-green'}`}>
              <div className="flex items-start gap-lg">
                <div className="text-6xl">{icon}</div>
                <div>
                  <h3 className={`heading-3 mb-md ${color === 'lime' ? 'text-lime' : color === 'blue' ? 'text-blue' : 'text-green'}`}>{title}</h3>
                  <p className="body-large">{description}</p>
                </div>
                <div className="text-right">
                  <div className={`text-4xl font-bold ${color === 'lime' ? 'text-lime' : color === 'blue' ? 'text-blue' : 'text-green'}`}>
                    {index + 1}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Certification Process */}
      <Section background="alternate">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-2xl">
            <h2 className="heading-2 mb-lg text-blue">{t('certification.process.title')}</h2>
          </div>
          
          <div className="grid gap-lg">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-lg p-lg bg-white rounded shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-blue text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="body pt-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Exam Schedule */}
      <Section background="default">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-2xl">
            <h2 className="heading-2 mb-lg text-green">{t('certification.schedule.title')}</h2>
            <p className="body-large">{t('certification.schedule.description')}</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th>{language === 'sr' ? 'Datum' : 'Date'}</th>
                  <th>{language === 'sr' ? 'Nivo' : 'Level'}</th>
                  <th>{language === 'sr' ? 'Lokacija' : 'Location'}</th>
                  <th>{language === 'sr' ? 'Akcija' : 'Action'}</th>
                </tr>
              </thead>
              <tbody>
                {examSchedule.map(({ date, level, location }, index) => (
                  <tr key={index}>
                    <td>
                      {new Date(date).toLocaleDateString(language === 'sr' ? 'sr-RS' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </td>
                    <td>
                      <span className="bg-blue text-white px-sm py-xs rounded text-sm">
                        {language === 'sr' ? 'Nivo' : 'Level'} {level}
                      </span>
                    </td>
                    <td>{location}</td>
                    <td>
                      <Button variant="outline" size="sm">
                        {language === 'sr' ? 'Registrujte se' : 'Register'}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="green">
        <div className="text-white text-center max-w-2xl mx-auto">
          <h2 className="heading-2 mb-lg">{language === 'sr' ? 'Spremni ste da počnete?' : 'Ready to Get Started?'}</h2>
          <p className="body-large mb-xl opacity-90">
            {language === 'sr' 
              ? 'Kontaktirajte nas za više informacija o našim programima sertifikacije.'
              : 'Contact us for more information about our certification programs.'
            }
          </p>
          <div className="flex gap-md justify-center">
            <Button
              href={language === 'sr' ? '/sr/kontakt' : '/en/contact'}
              variant="primary"
              size="lg"
              className="bg-white text-green hover:bg-lime hover:text-white"
            >
              {t('certification.cta')}
            </Button>
            <Button
              href={language === 'sr' ? '/sr/baza-znanja' : '/en/knowledge'}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green"
            >
              {language === 'sr' ? 'Istražite resurse' : 'Explore Resources'}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Certification;
