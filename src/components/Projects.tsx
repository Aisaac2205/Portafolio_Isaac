import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Store } from 'lucide-react';
import portadaPupuseria from '@/assets/PortadaDePupuseria.webp';
import portadaEcommerce from '@/assets/PortadadeEcomerce.webp';
import portadaTurboAuto from '@/assets/PortadadeTurboAuto.webp';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  storeUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Página web dedicada a la venta de camisolas de fútbol en Guatemala, procesamiento de pedidos mediante WhatsApp del Dueño. Diseño adaptable y optimizado para ventas.",
    image: portadaEcommerce,
    tags: ["React", "Node.js", "Vite", "TypeScript", "Tailwind CSS", "PostgreSQL", "NestJS", "Railway"],
    storeUrl: "https://www.lacasadelbalompie.com/"
  },
  {
    id: 2,
    title: "Página Web de Pupusería",
    description: "Página web para pedidos para una pupuseria de Quesada, Jutiapa. Con la meta de agilizar la toma de pedidos de los clientes mediante el uso de WhatsApp. Diseño adaptable y optimizado para ventas.",
    image: portadaPupuseria,
    tags: ["React", "Node.js", "Vite", "TypeScript", "Tailwind CSS", "Railway"],
    storeUrl: "https://donatoya.up.railway.app/"
  },
  {
    id: 3,
    title: "Turbo Auto - Taller y Carwash",
    description: "Página web informativa sobre servicios de taller mecánico y carwash ubicado en Quesada, Jutiapa. Incluye información de servicios, sección de canjear ofertas y más. Diseño moderno y funcional.",
    image: portadaTurboAuto,
    tags: ["React", "Node.js", "Vite", "TypeScript", "Tailwind CSS"],
    storeUrl: "https://turboautogt.com/"
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="proyectos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mis <span className="text-gradient">Proyectos Destacados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explora una selección de mis proyectos más destacados, donde combino 
              tecnologías modernas con diseño intuitivo para crear experiencias digitales excepcionales
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                {/* Imagen del proyecto - Más prominente */}
                <div className="relative cursor-pointer bg-muted/20" onClick={() => openLightbox(project)}>
                  <img
                    src={project.image}
                    alt={`Screenshot del proyecto ${project.title}`}
                    className="w-full h-auto max-h-[450px] object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Contenido del proyecto - Minimalista */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Botón de tienda - Centrado */}
                  <Button 
                    variant="default" 
                    className="w-full bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a 
                      href={project.storeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={
                        project.id === 2 
                          ? `Visitar restaurante ${project.title}` 
                          : project.id === 3 
                          ? `Visitar sitio web de ${project.title}`
                          : `Visitar tienda oficial de ${project.title}`
                      }
                    >
                      <Store className="h-4 w-4 mr-2" />
                      {project.id === 2 ? 'Visitar Restaurante' : project.id === 3 ? 'Visitar Sitio' : 'Visitar Tienda'}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal Mejorado */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              closeLightbox();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <div className="relative max-w-6xl w-full animate-in zoom-in-95 duration-300">
            {/* Header del modal */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <span id="lightbox-title" className="px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary text-sm font-medium rounded-full border border-primary/30">
                  {selectedProject.title}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/70 hover:text-white hover:bg-white/10"
                  asChild
                >
                  <a 
                    href={selectedProject.storeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Store className="h-4 w-4 mr-2" />
                    {selectedProject.id === 2 ? 'Visitar Restaurante' : selectedProject.id === 3 ? 'Visitar Sitio' : 'Visitar Tienda'}
                  </a>
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                onClick={closeLightbox}
                aria-label="Cerrar imagen ampliada"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Contenedor de la imagen */}
            <div 
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={`Vista ampliada del proyecto ${selectedProject.title}`}
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                width="1200"
                height="800"
              />
              
              {/* Overlay con información */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="max-w-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-xs text-white font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;