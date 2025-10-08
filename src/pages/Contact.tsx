
import React, { useState } from 'react';
import { useTranslation } from '../i18n';
import type { Language } from '../i18n';
import Seo from '../seo/Seo';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = useTranslation(language);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const currentPath = language === 'sr' ? '/sr/kontakt' : '/en/contact';
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  
  const validateForm = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.subject.trim() !== '' &&
      formData.message.trim() !== '' &&
      formData.consent
    );
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          consent: false
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 2000);
  };
  
  return (
    <>
      <Seo
        title={t('contact.title')}
        description={t('contact.intro')}
        language={language}
        path={currentPath}
      />
      
      {/* Page Header */}
      <Section background="green">
        <div className="text-center">
          <h1 className="heading-1 mb-lg text-white">{t('contact.title')}</h1>
          <p className="body-large text-white opacity-90">{t('contact.intro')}</p>
        </div>
      </Section>
      
      <Section background="default">
        <div className="grid lg:grid-cols-2 gap-2xl">
          {/* Contact Information */}
          <div>
            <h2 className="heading-2 mb-xl text-green">
              {language === 'sr' ? 'Informacije za kontakt' : 'Contact Information'}
            </h2>
            
            <div className="grid gap-lg mb-2xl">
              {/* Address */}
              <Card>
                <div className="flex items-start gap-lg">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="heading-4 mb-md text-blue">{t('contact.address.title')}</h3>
                    <p className="body">
                      {t('contact.address.street')}<br />
                      {t('contact.address.city')}
                    </p>
                  </div>
                </div>
              </Card>
              
              {/* Email */}
              <Card>
                <div className="flex items-start gap-lg">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h3 className="heading-4 mb-md text-blue">Email</h3>
                    <p className="body">
                      <a href="mailto:info@aceb.org" className="text-blue hover:underline">
                        info@aceb.org
                      </a>
                    </p>
                  </div>
                </div>
              </Card>
              
              {/* Phone */}
              <Card>
                <div className="flex items-start gap-lg">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="heading-4 mb-md text-blue">
                      {language === 'sr' ? 'Telefon' : 'Phone'}
                    </h3>
                    <p className="body">
                      <a href="tel:+381184567890" className="text-blue hover:underline">
                        +381 18 456 7890
                      </a>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Map placeholder */}
            <Card className="h-64 flex items-center justify-center bg-bg">
              <div className="text-center text-muted">
                <div className="text-4xl mb-md">🗺️</div>
                <p>{language === 'sr' ? 'Mapa lokacije' : 'Location Map'}</p>
                <p className="text-sm">Vojvode Tankosića 14/8, Niš</p>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div>
            <Card>
              <h2 className="heading-2 mb-xl text-green">{t('contact.form.title')}</h2>
              
              {submitStatus === 'success' ? (
                <div className="text-center py-2xl">
                  <div className="text-6xl mb-lg">✅</div>
                  <h3 className="heading-3 mb-md text-green">{language === 'sr' ? 'Uspešno poslato!' : 'Success!'}</h3>
                  <p className="body success">{t('contact.form.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-lg">
                  <div className="grid md:grid-cols-2 gap-lg">
                    <div>
                      <label htmlFor="name">{t('contact.form.name')} *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email">{t('contact.form.email')} *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject">{t('contact.form.subject')} *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message">{t('contact.form.message')} *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="flex items-start gap-sm">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="mt-xs"
                    />
                    <label htmlFor="consent" className="text-sm">
                      {t('contact.form.consent')} *
                    </label>
                  </div>
                  
                  {submitStatus === 'error' && (
                    <div className="error">{t('contact.form.error')}</div>
                  )}
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? t('common.loading') : t('contact.form.submit')}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Section>
      
      {/* Alternative Contact Methods */}
      <Section background="alternate">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-lg text-blue">
            {language === 'sr' ? 'Drugi načini kontakta' : 'Other Ways to Reach Us'}
          </h2>
          <p className="body-large mb-xl">
            {language === 'sr'
              ? 'Možete nas kontaktirati direktno ili pratiti na društvenim mrežama'
              : 'You can contact us directly or follow us on social media'
            }
          </p>
          
          <div className="flex gap-md justify-center">
            <Button
              href="mailto:info@aceb.org?subject=General Inquiry&body=Hello ACEB team,"
              variant="outline"
            >
              📧 {language === 'sr' ? 'Pošaljite email' : 'Send Email'}
            </Button>
            <Button
              href={`mailto:info@aceb.org?subject=${encodeURIComponent(language === 'sr' ? 'Zahtev za članstvo' : 'Membership Inquiry')}`}
              variant="outline"
            >
              👥 {language === 'sr' ? 'Upit o članstvu' : 'Membership Inquiry'}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
