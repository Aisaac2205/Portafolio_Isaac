import { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { useLenis } from '@/hooks/use-lenis';

// Lazy load components below the fold for better initial load performance
const About = lazy(() => import('@/components/About'));
const Projects = lazy(() => import('@/components/Projects'));
const Contact = lazy(() => import('@/components/Contact'));

// Simple loading skeleton
const SectionSkeleton = () => (
  <div className="py-20">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="h-12 bg-muted/50 rounded-lg mb-8 animate-pulse" />
        <div className="h-64 bg-muted/30 rounded-lg animate-pulse" />
      </div>
    </div>
  </div>
);

const Index = () => {
  useLenis(); // Inicializar Lenis para scroll suave

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
