
import React from 'react';
import { useTranslation } from '../i18n';
import type { Language } from '../i18n';
import Seo from '../seo/Seo';
import Section from '../components/Section';
import Card from '../components/Card';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = useTranslation(language);
  
  const currentPath = language === 'sr' ? '/sr/o-nama' : '/en/about';
  
  const governanceStructure = [
    {
      title: t('about.governance.assembly.title'),
      description: t('about.governance.assembly.description'),
      icon: '🏛️'
    },
    {
      title: t('about.governance.board.title'),
      description: t('about.governance.board.description'),
      icon: '👥'
    },
    {
      title: t('about.governance.council.title'),
      description: t('about.governance.council.description'),
      icon: '🎓'
    },
    {
      title: t('about.governance.disciplinary.title'),
      description: t('about.governance.disciplinary.description'),
      icon: '⚖️'
    }
  ];
  
  const documents = [
    { name: t('about.transparency.documents.statute'), href: '/documents/statute.pdf' },
    { name: t('about.transparency.documents.rules'), href: '/documents/certification-rules.pdf' },
    { name: t('about.transparency.documents.reports'), href: '/documents/annual-reports.pdf' },
    { name: t('about.transparency.documents.financials'), href: '/documents/financial-statements.pdf' }
  ];
  
  return (
    <>
      <Seo
        title={t('about.title')}
        description={t('about.mission.content')}
        language={language}
        path={currentPath}
      />
      
      {/* Page Header */}
      <Section background="green">
        <div className="text-center">
          <h1 className="heading-1 mb-lg text-white">{t('about.title')}</h1>
        </div>
      </Section>
      
      {/* Mission Section */}
      <Section background="default">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-lg text-green">{t('about.mission.title')}</h2>
          <p className="body-large">{t('about.mission.content')}</p>
        </div>
      </Section>
      
      {/* Governance Structure */}
      <Section background="alternate">
        <div className="text-center mb-2xl">
          <h2 className="heading-2 mb-lg text-green">{t('about.governance.title')}</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-lg">
          {governanceStructure.map(({ title, description, icon }) => (
            <Card key={title} className="text-center">
              <div className="text-4xl mb-md">{icon}</div>
              <h3 className="heading-4 mb-md text-blue">{title}</h3>
              <p className="body">{description}</p>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Transparency Section */}
      <Section background="default">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-2xl">
            <h2 className="heading-2 mb-lg text-green">{t('about.transparency.title')}</h2>
            <p className="body-large">{t('about.transparency.description')}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-md">
            {documents.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="flex items-center p-lg bg-white rounded shadow hover:shadow-lg transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-2xl mr-md">📄</span>
                <div>
                  <span className="font-medium text-blue">{name}</span>
                  <div className="text-sm text-muted">PDF Document</div>
                </div>
                <span className="ml-auto text-blue">↗</span>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
