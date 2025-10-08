
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getLocalizedPath } from '../i18n';
import type { Language } from '../i18n';

interface LangSwitchProps {
  currentLanguage: Language;
  className?: string;
}

const LangSwitch: React.FC<LangSwitchProps> = ({
  currentLanguage,
  className = ''
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const switchLanguage = (targetLanguage: Language) => {
    const newPath = getLocalizedPath(location.pathname, targetLanguage);
    navigate(newPath);
  };
  
  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'sr', name: 'Српски', flag: '🇷🇸' }
  ];
  
  return (
    <div className={`flex items-center gap-sm ${className}`}>
      {languages.map(({ code, name, flag }) => (
        <button
          key={code}
          onClick={() => switchLanguage(code)}
          className={`flex items-center gap-xs px-sm py-xs rounded transition text-sm ${
            currentLanguage === code
              ? 'bg-blue text-white'
              : 'text-text hover:bg-blue hover:bg-opacity-10'
          }`}
          aria-label={`Switch to ${name}`}
        >
          <span className="text-base">{flag}</span>
          <span className="hidden sm:inline">{name}</span>
        </button>
      ))}
    </div>
  );
};

export default LangSwitch;
