
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentLanguage } from './i18n';
import type { Language } from './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';

const App: React.FC = () => {
  const location = useLocation();
  const [language, setLanguage] = useState<Language>('en');
  
  useEffect(() => {
    const currentLang = getCurrentLanguage();
    setLanguage(currentLang);
  }, [location.pathname]);
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="App">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Header language={language} />
      
      <main id="main-content" role="main">
        <AppRoutes language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default App;
