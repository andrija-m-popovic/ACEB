
import { Route, Routes, Navigate } from 'react-router-dom';
import type { Language } from './i18n';

// Import all pages
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Certification from './pages/Certification';
import Knowledge from './pages/Knowledge';
import Events from './pages/Events';
import News from './pages/News';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Directory from './pages/Directory';
import NotFound from './pages/NotFound';

interface AppRoutesProps {
  language: Language;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ language }) => {
  return (
    <Routes>
      {/* Redirect root to default language */}
      <Route path="/" element={<Navigate to="/en" replace />} />
      
      {/* English routes */}
      <Route path="/en" element={<Home language="en" />} />
      <Route path="/en/about" element={<About language="en" />} />
      <Route path="/en/membership" element={<Membership language="en" />} />
      <Route path="/en/certification" element={<Certification language="en" />} />
      <Route path="/en/knowledge" element={<Knowledge language="en" />} />
      <Route path="/en/events" element={<Events language="en" />} />
      <Route path="/en/news" element={<News language="en" />} />
      <Route path="/en/partners" element={<Partners language="en" />} />
      <Route path="/en/contact" element={<Contact language="en" />} />
      <Route path="/en/directory" element={<Directory language="en" />} />
      
      {/* Serbian routes */}
      <Route path="/sr" element={<Home language="sr" />} />
      <Route path="/sr/o-nama" element={<About language="sr" />} />
      <Route path="/sr/clanstvo" element={<Membership language="sr" />} />
      <Route path="/sr/licenciranje" element={<Certification language="sr" />} />
      <Route path="/sr/baza-znanja" element={<Knowledge language="sr" />} />
      <Route path="/sr/dogadjaji" element={<Events language="sr" />} />
      <Route path="/sr/vesti" element={<News language="sr" />} />
      <Route path="/sr/partneri" element={<Partners language="sr" />} />
      <Route path="/sr/kontakt" element={<Contact language="sr" />} />
      <Route path="/sr/imenik" element={<Directory language="sr" />} />
      
      {/* 404 page */}
      <Route path="*" element={<NotFound language={language} />} />
    </Routes>
  );
};

export default AppRoutes;
