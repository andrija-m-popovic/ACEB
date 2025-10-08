
import React, { useState, useMemo } from 'react';
import { useTranslation } from '../i18n';
import type { Language } from '../i18n';
import Seo from '../seo/Seo';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

// Import data
import resourcesEn from '../data/resources.en.json';
import resourcesSr from '../data/resources.sr.json';

interface KnowledgeProps {
  language: Language;
}

const Knowledge: React.FC<KnowledgeProps> = ({ language }) => {
  const t = useTranslation(language);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [sectorFilter, setSectorFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');
  
  const resources = language === 'sr' ? resourcesSr : resourcesEn;
  
  const currentPath = language === 'sr' ? '/sr/baza-znanja' : '/en/knowledge';
  
  // Get unique values for filters
  const uniqueTypes = [...new Set(resources.map(r => r.type))];
  const uniqueSectors = [...new Set(resources.map(r => r.sector))];
  const uniqueYears = [...new Set(resources.map(r => r.year))].sort((a, b) => b - a);
  
  // Filter resources
  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = typeFilter === 'all' || resource.type === typeFilter;
      const matchesSector = sectorFilter === 'all' || resource.sector === sectorFilter;
      const matchesYear = yearFilter === 'all' || resource.year.toString() === yearFilter;
      
      return matchesSearch && matchesType && matchesSector && matchesYear;
    });
  }, [resources, searchTerm, typeFilter, sectorFilter, yearFilter]);
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
      case 'članak':
        return '📄';
      case 'guide':
      case 'vodič':
        return '📘';
      case 'report':
      case 'izveštaj':
        return '📊';
      default:
        return '📎';
    }
  };
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
      case 'članak':
        return 'blue';
      case 'guide':
      case 'vodič':
        return 'green';
      case 'report':
      case 'izveštaj':
        return 'lime';
      default:
        return 'muted';
    }
  };
  
  return (
    <>
      <Seo
        title={t('knowledge.title')}
        description={t('knowledge.intro')}
        language={language}
        path={currentPath}
      />
      
      {/* Page Header */}
      <Section background="blue">
        <div className="text-center">
          <h1 className="heading-1 mb-lg text-white">{t('knowledge.title')}</h1>
          <p className="body-large text-white opacity-90">{t('knowledge.intro')}</p>
        </div>
      </Section>
      
      {/* Filters */}
      <Section background="alternate">
        <div className="mb-2xl">
          <div className="grid md:grid-cols-4 gap-lg mb-lg">
            {/* Search */}
            <div>
              <input
                type="text"
                placeholder={t('knowledge.filters.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            {/* Type Filter */}
            <div>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full"
              >
                <option value="all">{t('knowledge.filters.all')}</option>
                {uniqueTypes.map(type => (
                  <option key={type} value={type}>
                    {t(`knowledge.types.${type}`) || type}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Sector Filter */}
            <div>
              <select
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value)}
                className="w-full"
              >
                <option value="all">{language === 'sr' ? 'Svi sektori' : 'All Sectors'}</option>
                {uniqueSectors.map(sector => (
                  <option key={sector} value={sector}>{sector}</option>
                ))}
              </select>
            </div>
            
            {/* Year Filter */}
            <div>
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="w-full"
              >
                <option value="all">{language === 'sr' ? 'Sve godine' : 'All Years'}</option>
                {uniqueYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Results count */}
          <div className="text-center text-muted">
            {language === 'sr' 
              ? `Prikazano ${filteredResources.length} od ${resources.length} resursa`
              : `Showing ${filteredResources.length} of ${resources.length} resources`
            }
          </div>
        </div>
        
        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-md">
                  <div className="text-3xl">{getTypeIcon(resource.type)}</div>
                  <div className="text-right">
                    <span className={`inline-block text-white px-sm py-xs rounded text-sm ${
                      getTypeColor(resource.type) === 'blue' ? 'bg-blue' :
                      getTypeColor(resource.type) === 'green' ? 'bg-green' :
                      getTypeColor(resource.type) === 'lime' ? 'bg-lime' : 'bg-muted'
                    }`}>
                      {t(`knowledge.types.${resource.type}`) || resource.type}
                    </span>
                    <div className="text-sm text-muted mt-xs">{resource.year}</div>
                  </div>
                </div>
                
                <h3 className="heading-4 mb-md text-blue">{resource.title}</h3>
                <p className="body mb-md text-muted flex-grow">{resource.description}</p>
                
                <div className="mb-lg">
                  <span className="inline-block bg-bg px-sm py-xs rounded text-sm text-muted">
                    {resource.sector}
                  </span>
                </div>
                
                <div className="flex gap-sm">
                  <Button
                    href={resource.downloadLink}
                    variant="primary"
                    size="sm"
                    className="flex-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('knowledge.download')}
                  </Button>
                  <Button
                    href={resource.downloadLink}
                    variant="outline"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('knowledge.view')}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* No results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-2xl">
            <div className="text-6xl mb-lg">🔍</div>
            <h3 className="heading-3 mb-md">
              {language === 'sr' ? 'Nema rezultata' : 'No Results Found'}
            </h3>
            <p className="body text-muted">
              {language === 'sr' 
                ? 'Pokušajte da promenite filtere ili pretragu.'
                : 'Try adjusting your filters or search terms.'
              }
            </p>
          </div>
        )}
      </Section>
    </>
  );
};

export default Knowledge;
