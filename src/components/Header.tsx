import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { scrollToElement } from '@/hooks/use-lenis';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al hacer clic fuera o al hacer scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('header')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
      return () => {
        document.removeEventListener('click', handleClickOutside);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    scrollToElement(`#${sectionId}`, { offset: -80, duration: 1.5 });
    // Cerrar el menú móvil después de hacer clic en un enlace
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gradient">
            Isaac Sarceño
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection('contacto')}
              className="ml-4"
            >
              Hablemos
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="p-2 hover:bg-accent/50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-3 text-lg font-medium border-b border-border/20 last:border-b-0"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-3 text-lg font-medium border-b border-border/20 last:border-b-0"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-left text-muted-foreground hover:text-foreground transition-colors py-3 text-lg font-medium border-b border-border/20 last:border-b-0"
            >
              Contacto
            </button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection('contacto')}
              className="mt-4 w-full text-base py-3"
            >
              Hablemos
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;