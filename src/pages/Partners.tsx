
import React from 'react';
import { useTranslation } from '../i18n';
import type { Language } from '../i18n';
import Seo from '../seo/Seo';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

interface PartnersProps {
  language: Language;
}

const Partners: React.FC<PartnersProps> = ({ language }) => {
  const t = useTranslation(language);
  
  const currentPath = language === 'sr' ? '/sr/partneri' : '/en/partners';
  
  // Mock partner data
  const partners = [
    {
      id: 1,
      name: 'European Environment Agency',
      type: 'international',
      description: language === 'sr' 
        ? 'Međunarodna saradnja na projektima cirkularne ekonomije i održivog razvoja.'
        : 'International cooperation on circular economy and sustainable development projects.',
      logo: '🏛️'
    },
    {
      id: 2,
      name: 'University of Belgrade',
      type: 'academic',
      description: language === 'sr'
        ? 'Akademsko partnerstvo za istraživanje i edukaciju u oblasti cirkularne ekonomije.'
        : 'Academic partnership for research and education in circular economy field.',
      logo: '🎓'
    },
    {
      id: 3,
      name: 'Green Business Network',
      type: 'business',
      description: language === 'sr'
        ? 'Mreža zelenih preduzeća koja promoviše cirkularne poslovne prakse.'
        : 'Network of green businesses promoting circular business practices.',
      logo: '🌱'
    },
    {
      id: 4,
      name: 'Regional Development Agency',
      type: 'government',
      description: language === 'sr'
        ? 'Državni partner za implementaciju politika cirkularne ekonomije u regionu.'
        : 'Government partner for implementing circular economy policies in the region.',
      logo: '🏢'
    },
    {
      id: 5,
      name: 'Circular Innovation Hub',
      type: 'innovation',
      description: language === 'sr'
        ? 'Centar za inovacije koji podržava startup kompanije u cirkularnoj ekonomiji.'
        : 'Innovation center supporting circular economy startup companies.',
      logo: '💡'
    },
    {
      id: 6,
      name: 'Sustainable Finance Institute',
      type: 'finance',
      description: language === 'sr'
        ? 'Institut za održivo finansiranje koji podržava projekte cirkularne ekonomije.'
        : 'Sustainable finance institute supporting circular economy projects.',
      logo: '💰'
    }
  ];
  
  const partnerTypes = {
    international: {
      title: language === 'sr' ? 'Međunarodne organizacije' : 'International Organizations',
      color: 'blue'
    },
    academic: {
      title: language === 'sr' ? 'Akademske institucije' : 'Academic Institutions',
      color: 'green'
    },
    business: {
      title: language === 'sr' ? 'Poslovni partneri' : 'Business Partners',
      color: 'lime'
    },
    government: {
      title: language === 'sr' ? 'Državne institucije' : 'Government Institutions',
      color: 'blue-deep'
    },
    innovation: {
      title: language === 'sr' ? 'Inovacioni centri' : 'Innovation Centers',
      color: 'lime'
    },
    finance: {
      title: language === 'sr' ? 'Finansijske institucije' : 'Financial Institutions',
      color: 'green'
    }
  };
  
  return (
    <>
      <Seo
        title={t('partners.title')}
        description={t('partners.intro')}
        language={language}
        path={currentPath}
      />
      
      {/* Page Header */}
      <Section background="green">
        <div className="text-center">
          <h1 className="heading-1 mb-lg text-white">{t('partners.title')}</h1>
          <p className="body-large text-white opacity-90">{t('partners.intro')}</p>
        </div>
      </Section>
      
      {/* Partners Grid */}
      <Section background="default">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {partners.map((partner) => {
            const partnerType = partnerTypes[partner.type as keyof typeof partnerTypes];
            return (
              <Card key={partner.id} className="text-center h-full">
                <div className="flex flex-col h-full">
                  <div className="text-6xl mb-md">{partner.logo}</div>
                  
                  <div className={`inline-block px-sm py-xs rounded text-sm font-medium mb-md text-white self-center ${
                    partnerType.color === 'blue' ? 'bg-blue' :
                    partnerType.color === 'green' ? 'bg-green' :
                    partnerType.color === 'lime' ? 'bg-lime' :
                    partnerType.color === 'blue-deep' ? 'bg-blue-deep' : 'bg-blue'
                  }`}>
                    {partnerType.title}
                  </div>
                  
                  <h3 className="heading-4 mb-md text-green">{partner.name}</h3>
                  <p className="body flex-grow">{partner.description}</p>
                  
                  <div className="mt-lg">
                    <Button
                      href="#"
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      {language === 'sr' ? 'Saznajte više' : 'Learn More'}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>
      
      {/* Partnership Benefits */}
      <Section background="alternate">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-2xl">
            <h2 className="heading-2 mb-lg text-blue">
              {language === 'sr' ? 'Benefiti partnerstva' : 'Partnership Benefits'}
            </h2>
            <p className="body-large">
              {language === 'sr'
                ? 'Zašto organizacije biraju da sarađuju sa ACEB-om'
                : 'Why organizations choose to partner with ACEB'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-lg">
            {[
              {
                title: language === 'sr' ? 'Pristup ekspertizi' : 'Access to Expertise',
                description: language === 'sr'
                  ? 'Pristup širokoj mreži sertifikovanih stručnjaka za cirkularnu ekonomiju'
                  : 'Access to a wide network of certified circular economy professionals',
                icon: '🧠'
              },
              {
                title: language === 'sr' ? 'Zajedničke aktivnosti' : 'Joint Activities',
                description: language === 'sr'
                  ? 'Organizovanje zajedničkih projekata, istraživanja i edukacionih programa'
                  : 'Organizing joint projects, research, and educational programs',
                icon: '🤝'
              },
              {
                title: language === 'sr' ? 'Umrežavanje' : 'Networking',
                description: language === 'sr'
                  ? 'Povezivanje sa ključnim akterima u oblasti cirkularne ekonomije'
                  : 'Connecting with key players in the circular economy field',
                icon: '🌐'
              },
              {
                title: language === 'sr' ? 'Vidljivost' : 'Visibility',
                description: language === 'sr'
                  ? 'Povećana vidljivost kroz naše kanale komunikacije i događaje'
                  : 'Increased visibility through our communication channels and events',
                icon: '📢'
              }
            ].map(({ title, description, icon }) => (
              <div key={title} className="flex items-start gap-lg p-lg bg-white rounded shadow">
                <div className="text-4xl">{icon}</div>
                <div>
                  <h3 className="heading-4 mb-md text-green">{title}</h3>
                  <p className="body">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="blue">
        <div className="text-white text-center max-w-2xl mx-auto">
          <h2 className="heading-2 mb-lg">{t('partners.becomePartner')}</h2>
          <p className="body-large mb-xl opacity-90">
            {language === 'sr' 
              ? 'Zainteresovani ste za partnerstvo sa ACEB-om? Kontaktirajte nas da biste saznali više o mogućnostima saradnje.'
              : 'Interested in partnering with ACEB? Contact us to learn more about collaboration opportunities.'
            }
          </p>
          <div className="flex gap-md justify-center">
            <Button
              href={language === 'sr' ? '/sr/kontakt' : '/en/contact'}
              variant="primary"
              size="lg"
              className="bg-white text-blue hover:bg-lime hover:text-white"
            >
              {language === 'sr' ? 'Kontaktirajte nas' : 'Contact Us'}
            </Button>
            <Button
              href={language === 'sr' ? '/sr/o-nama' : '/en/about'}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue"
            >
              {language === 'sr' ? 'Saznajte više o nama' : 'Learn About Us'}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Partners;
