import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import heroImage from '@/assets/hero-bg.jpg';
import { scrollToElement } from '@/hooks/use-lenis';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    scrollToElement(`#${sectionId}`, { offset: -80, duration: 1.5 });
  };

  // Detect device performance and disable particles on low-end devices
  const [enableParticles, setEnableParticles] = useState(() => {
    // Disable particles on mobile devices or low-end devices
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      return !isMobile && !isLowEndDevice && !prefersReducedMotion;
    }
    return true;
  });

  const particlesInit = useCallback(async (engine: Engine) => {
    if (enableParticles) {
      await loadSlim(engine);
    }
  }, [enableParticles]);

  const redirectToGitHub = () => {
    window.open('https://github.com/Aisaac2205', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Particles Background - Only on capable devices */}
      {enableParticles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0"
          options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#7c3aed",
            },
            links: {
              color: "#7c3aed",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        />
      )}

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Imagen de fondo decorativa"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              ¡Hola! Soy Full Stack Developer
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient">Isaac Sarceño</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Especializado en <span className="text-primary font-semibold">tecnologías modernas</span> y desarrollo web completo. 
            Creo experiencias web excepcionales que combinan diseño elegante con funcionalidad robusta.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="hero" 
                size="lg"
                onClick={redirectToGitHub}
                className="min-w-[160px]"
              >
                Ver Proyectos
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contacto')}
                className="min-w-[160px]"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contactar
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="https://github.com/Aisaac2205"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card transition-all duration-300 glow-on-hover"
              aria-label="GitHub de Isaac Sarceño"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/isaac-flores-aa2850374"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card transition-all duration-300 glow-on-hover"
              aria-label="LinkedIn de Isaac Sarceño"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;