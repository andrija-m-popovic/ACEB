
import React, { useState } from 'react';
import { useTranslation } from '../i18n';
import type { Language } from '../i18n';
import Seo from '../seo/Seo';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

interface MembershipProps {
  language: Language;
}

const Membership: React.FC<MembershipProps> = ({ language }) => {
  const t = useTranslation(language);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    category: '',
    organization: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const currentPath = language === 'sr' ? '/sr/clanstvo' : '/en/membership';
  
  const membershipCategories = [
    {
      title: t('membership.categories.licensed.title'),
      description: t('membership.categories.licensed.description'),
      fee: '100',
      icon: '🏆'
    },
    {
      title: t('membership.categories.trainee.title'),
      description: t('membership.categories.trainee.description'),
      fee: '60',
      icon: '📖'
    },
    {
      title: t('membership.categories.regular.title'),
      description: t('membership.categories.regular.description'),
      fee: '50',
      icon: '👤'
    },
    {
      title: t('membership.categories.associated.title'),
      description: t('membership.categories.associated.description'),
      fee: '200',
      icon: '🏢'
    },
    {
      title: t('membership.categories.honorary.title'),
      description: t('membership.categories.honorary.description'),
      fee: '0',
      icon: '⭐'
    }
  ];
  
  const benefitsTranslation = t('membership.benefits.items');
  const benefits = Array.isArray(benefitsTranslation) ? benefitsTranslation : [
    'Access to certification programs',
    'Professional development opportunities',
    'Networking events and conferences',
    'Industry publications and resources',
    'Career advancement support',
    'Advocacy representation'
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  
  const validateForm = () => {
    return (
      formData.fullName.trim() !== '' &&
      formData.email.trim() !== '' &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.phone.trim() !== '' &&
      formData.city.trim() !== '' &&
      formData.country.trim() !== '' &&
      formData.category !== '' &&
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
          fullName: '',
          email: '',
          phone: '',
          city: '',
          country: '',
          category: '',
          organization: '',
          message: '',
          consent: false
        });
        setShowForm(false);
        setSubmitStatus('idle');
      }, 3000);
    }, 2000);
  };
  
  return (
    <>
      <Seo
        title={t('membership.title')}
        description={t('membership.intro')}
        language={language}
        path={currentPath}
      />
      
      {/* Page Header */}
      <Section background="blue">
        <div className="text-center">
          <h1 className="heading-1 mb-lg text-white">{t('membership.title')}</h1>
          <p className="body-large text-white opacity-90">{t('membership.intro')}</p>
        </div>
      </Section>
      
      {/* Membership Categories */}
      <Section background="default">
        <div className="text-center mb-2xl">
          <h2 className="heading-2 mb-lg text-blue">{t('membership.categories.title')}</h2>
        </div>
        
        <div className="grid gap-lg mb-2xl">
          {membershipCategories.map(({ title, description, fee, icon }) => (
            <Card key={title} className="flex items-start gap-lg">
              <div className="text-4xl">{icon}</div>
              <div className="flex-1">
                <h3 className="heading-4 mb-md text-green">{title}</h3>
                <p className="body mb-md">{description}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue">
                  {fee === '0' ? (language === 'sr' ? 'Besplatno' : 'Free') : `${fee} ${t('membership.fees.currency')}`}
                </div>
                <div className="text-sm text-muted">{t('membership.fees.annual')}</div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button
            onClick={() => setShowForm(true)}
            variant="primary"
            size="lg"
          >
            {t('membership.apply')}
          </Button>
        </div>
      </Section>
      
      {/* Benefits */}
      <Section background="alternate">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-2xl">
            <h2 className="heading-2 mb-lg text-green">{t('membership.benefits.title')}</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-lg">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-md">
                <span className="text-green text-xl">✓</span>
                <span className="body">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Membership Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-md">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-xl">
              <div className="flex justify-between items-center mb-xl">
                <h2 className="heading-3 text-green">{t('form.membership.title')}</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-muted hover:text-text text-2xl"
                  aria-label="Close form"
                >
                  ×
                </button>
              </div>
              
              {submitStatus === 'success' ? (
                <div className="text-center py-2xl">
                  <div className="text-6xl mb-lg">✅</div>
                  <h3 className="heading-3 mb-md text-green">{language === 'sr' ? 'Uspešno poslato!' : 'Success!'}</h3>
                  <p className="body success">{t('form.membership.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-lg">
                  <div className="grid grid-cols-2 gap-lg">
                    <div>
                      <label htmlFor="fullName">{t('form.membership.fullName')} *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email">{t('form.membership.email')} *</label>
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
                  
                  <div className="grid grid-cols-2 gap-lg">
                    <div>
                      <label htmlFor="phone">{t('form.membership.phone')} *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city">{t('form.membership.city')} *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-lg">
                    <div>
                      <label htmlFor="country">{t('form.membership.country')} *</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="category">{t('form.membership.category')} *</label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select category</option>
                        {membershipCategories.map(cat => (
                          <option key={cat.title} value={cat.title}>{cat.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="organization">{t('form.membership.organization')}</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message">{t('form.membership.message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
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
                      {t('form.membership.consent')} *
                    </label>
                  </div>
                  
                  {submitStatus === 'error' && (
                    <div className="error">{t('contact.form.error')}</div>
                  )}
                  
                  <div className="flex gap-md pt-lg">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="flex-1"
                    >
                      {isSubmitting ? t('common.loading') : t('form.membership.submit')}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowForm(false)}
                      disabled={isSubmitting}
                    >
                      {language === 'sr' ? 'Otkaži' : 'Cancel'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Membership;
