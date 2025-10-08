
import React, { useState, useMemo } from 'react';
import { useTranslation } from '../i18n';
import type { Language } from '../i18n';
import Seo from '../seo/Seo';
import Section from '../components/Section';
import Card from '../components/Card';

// Import data
import directoryData from '../data/directory.json';

interface DirectoryProps {
  language: Language;
}

interface DirectoryEntry {
  id: string;
  name: string;
  city: string;
  country: string;
  licenseLevel: string;
  status: string;
  email: string;
  organization: string;
}

const Directory: React.FC<DirectoryProps> = ({ language }) => {
  const t = useTranslation(language);
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  
  const directory = directoryData as DirectoryEntry[];
  
  const currentPath = language === 'sr' ? '/sr/imenik' : '/en/directory';
  
  // Get unique values for filters
  const uniqueCities = [...new Set(directory.map(entry => entry.city))].sort();
  const uniqueLevels = [...new Set(directory.map(entry => entry.licenseLevel))].sort();
  const uniqueStatuses = [...new Set(directory.map(entry => entry.status))].sort();
  const uniqueCountries = [...new Set(directory.map(entry => entry.country))];
  
  // Filter directory entries
  const filteredEntries = useMemo(() => {
    return directory.filter(entry => {
      const matchesSearch = entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           entry.organization.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCity = cityFilter === 'all' || entry.city === cityFilter;
      const matchesLevel = levelFilter === 'all' || entry.licenseLevel === levelFilter;
      const matchesStatus = statusFilter === 'all' || entry.status === statusFilter;
      
      return matchesSearch && matchesCity && matchesLevel && matchesStatus;
    });
  }, [directory, searchTerm, cityFilter, levelFilter, statusFilter]);
  
  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'I':
        return 'lime';
      case 'II':
        return 'blue';
      case 'III':
        return 'green';
      default:
        return 'muted';
    }
  };
  
  const getStatusBadgeColor = (status: string) => {
    return status === 'Active' ? 'green' : 'muted';
  };
  
  return (
    <>
      <Seo
        title={t('directory.title')}
        description={t('directory.intro')}
        language={language}
        path={currentPath}
      />
      
      {/* Page Header */}
      <Section background="blue">
        <div className="text-center">
          <h1 className="heading-1 mb-lg text-white">{t('directory.title')}</h1>
          <p className="body-large text-white opacity-90">{t('directory.intro')}</p>
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
                placeholder={t('directory.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            {/* City Filter */}
            <div>
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="w-full"
              >
                <option value="all">{language === 'sr' ? 'Svi gradovi' : 'All Cities'}</option>
                {uniqueCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            
            {/* Level Filter */}
            <div>
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="w-full"
              >
                <option value="all">{t('directory.levels.all')}</option>
                {uniqueLevels.map(level => (
                  <option key={level} value={level}>
                    {t(`directory.levels.${level}`)}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Status Filter */}
            <div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full"
              >
                <option value="all">{t('directory.statuses.all')}</option>
                {uniqueStatuses.map(status => (
                  <option key={status} value={status}>
                    {t(`directory.statuses.${status.toLowerCase()}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Results count */}
          <div className="text-center text-muted">
            {language === 'sr' 
              ? `Prikazano ${filteredEntries.length} od ${directory.length} stručnjaka`
              : `Showing ${filteredEntries.length} of ${directory.length} professionals`
            }
          </div>
        </div>
        
        {/* Directory Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {filteredEntries.map((entry) => (
            <Card key={entry.id} className="h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-md">
                  <div className="text-3xl">👤</div>
                  <div className="flex flex-col gap-xs">
                    <span className={`inline-block text-white px-sm py-xs rounded text-sm text-center ${
                      getLevelBadgeColor(entry.licenseLevel) === 'lime' ? 'bg-lime' :
                      getLevelBadgeColor(entry.licenseLevel) === 'blue' ? 'bg-blue' :
                      getLevelBadgeColor(entry.licenseLevel) === 'green' ? 'bg-green' : 'bg-muted'
                    }`}>
                      {language === 'sr' ? 'Nivo' : 'Level'} {entry.licenseLevel}
                    </span>
                    <span className={`inline-block text-white px-sm py-xs rounded text-sm text-center ${
                      getStatusBadgeColor(entry.status) === 'green' ? 'bg-green' : 'bg-muted'
                    }`}>
                      {t(`directory.statuses.${entry.status.toLowerCase()}`)}
                    </span>
                  </div>
                </div>
                
                <h3 className="heading-4 mb-md text-green">{entry.name}</h3>
                
                <div className="flex flex-col gap-sm mb-lg flex-grow">
                  <div className="flex items-center gap-sm text-muted">
                    <span>🏢</span>
                    <span className="text-sm">{entry.organization}</span>
                  </div>
                  <div className="flex items-center gap-sm text-muted">
                    <span>📍</span>
                    <span className="text-sm">{entry.city}, {entry.country}</span>
                  </div>
                  {entry.status === 'Active' && (
                    <div className="flex items-center gap-sm text-muted">
                      <span>✉️</span>
                      <a 
                        href={`mailto:${entry.email}`}
                        className="text-sm text-blue hover:underline"
                      >
                        {language === 'sr' ? 'Kontakt' : 'Contact'}
                      </a>
                    </div>
                  )}
                </div>
                
                <div className="mt-auto">
                  <div className="text-xs text-muted text-center pt-md border-t border-muted border-opacity-20">
                    {language === 'sr' ? 'Član od' : 'Member since'} 2023
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* No results */}
        {filteredEntries.length === 0 && (
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
      
      {/* Statistics Section */}
      <Section background="default">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-2xl">
            <h2 className="heading-2 mb-lg text-green">
              {language === 'sr' ? 'Statistike' : 'Statistics'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-lg">
            <Card className="text-center">
              <div className="text-3xl font-bold text-blue mb-sm">
                {directory.length}
              </div>
              <div className="text-sm text-muted">
                {language === 'sr' ? 'Ukupno članova' : 'Total Members'}
              </div>
            </Card>
            
            <Card className="text-center">
              <div className="text-3xl font-bold text-green mb-sm">
                {directory.filter(e => e.status === 'Active').length}
              </div>
              <div className="text-sm text-muted">
                {language === 'sr' ? 'Aktivni članovi' : 'Active Members'}
              </div>
            </Card>
            
            <Card className="text-center">
              <div className="text-3xl font-bold text-lime mb-sm">
                {uniqueCountries.length}
              </div>
              <div className="text-sm text-muted">
                {language === 'sr' ? 'Zemlje' : 'Countries'}
              </div>
            </Card>
            
            <Card className="text-center">
              <div className="text-3xl font-bold text-blue-deep mb-sm">
                {directory.filter(e => e.licenseLevel === 'III').length}
              </div>
              <div className="text-sm text-muted">
                {language === 'sr' ? 'Eksperti (Nivo III)' : 'Experts (Level III)'}
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Directory;
