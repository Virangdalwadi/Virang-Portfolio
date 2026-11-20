import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CustomCursor } from './components/CustomCursor';
import { NegativeMode } from './components/NegativeMode';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollToTop } from './components/ScrollToTop';
import { PageTransition } from './components/PageTransition';
import { SiteHeader } from './components/SiteHeader';
import { Preloader } from './components/Preloader';
import { SkipToContent } from './components/SkipToContent';
import { AnimatePresence } from 'framer-motion';
import { usePWA } from './hooks/usePWA';
import { initGA, usePageTracking } from './hooks/useAnalytics';

// Pages secondaires chargées à la demande (bundle initial plus léger)
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const LegalNoticePage = lazy(() => import('./pages/LegalNoticePage'));
const CVPage = lazy(() => import('./pages/CVPage'));

/** Service worker (PWA) : le hook vit dans un composant rendu seulement en production. */
const PwaRegister = () => {
  usePWA();
  return null;
};

function App() {

  // Initialize Google Analytics
  useEffect(() => {
    initGA();
  }, []);

  // Track page views
  usePageTracking();

  return (
    <div className="min-h-screen bg-background text-paper">
      {import.meta.env.PROD && <PwaRegister />}
      <Preloader />
      <SkipToContent />
      <CustomCursor />
      <SiteHeader />
      <NegativeMode />
      <ScrollToTop />
      <Suspense fallback={<LoadingScreen />}>
        <AnimatePresence mode="wait">
          <PageTransition>
            {/* Cible du lien d'évitement ; chaque page porte son propre <main> (un seul par page) */}
            <div id="main-content" tabIndex={-1} className="focus:outline-none">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/cv" element={<CVPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/legal-notice" element={<LegalNoticePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </PageTransition>
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

export default App;
