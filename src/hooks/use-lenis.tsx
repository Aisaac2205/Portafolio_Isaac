import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

// Crear una instancia global de Lenis
let lenisInstance: Lenis | null = null;

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      lenisInstance = lenisRef.current;

      function raf(time: number) {
        if (lenisRef.current) {
          lenisRef.current.raf(time);
          requestAnimationFrame(raf);
        }
      }

      requestAnimationFrame(raf);

      // Handle smooth scroll for anchor links
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
        
        if (anchor) {
          const href = anchor.getAttribute('href');
          if (href && href !== '#') {
            const element = document.querySelector(href) as HTMLElement;
            if (element && lenisRef.current) {
              e.preventDefault();
              lenisRef.current.scrollTo(element, {
                offset: -80, // Offset para el header fijo
                duration: 1.5,
              });
            }
          }
        }
      };

      document.addEventListener('click', handleClick);

      return () => {
        if (lenisRef.current) {
          lenisRef.current.destroy();
          lenisInstance = null;
        }
        document.removeEventListener('click', handleClick);
      };
    }
  }, []);

  return lenisRef.current;
};

// Función helper para hacer scroll a un elemento
export const scrollToElement = (selector: string | HTMLElement, options?: { offset?: number; duration?: number }) => {
  if (lenisInstance) {
    const element = typeof selector === 'string' ? document.querySelector(selector) as HTMLElement : selector;
    if (element) {
      lenisInstance.scrollTo(element, {
        offset: options?.offset ?? -80,
        duration: options?.duration ?? 1.5,
      });
    }
  } else {
    // Fallback si Lenis no está disponible
    const element = typeof selector === 'string' ? document.querySelector(selector) as HTMLElement : selector;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

