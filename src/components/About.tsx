import { Code, Lightbulb, Target, Briefcase, GraduationCap } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiReact, 
  SiTypescript, 
  SiGit, 
  SiGithub, 
  SiNestjs,
} from 'react-icons/si';
import { Button } from '@/components/ui/button';

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      id="sobre-mi" 
      className="py-20 bg-gradient-subtle"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* CAMBIO: Título más directo y profesional */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Desarrollador <span className="text-gradient">Full Stack</span>
            </h2>
            {/* CAMBIO: Subtítulo enfocado en la propuesta de valor */}
            <p className="text-xl text-muted-foreground">
              Construyendo soluciones web robustas, escalables y centradas en el usuario.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                      <img 
                        src="/profile.jpg" 
                        alt="Isaac Sarceño" 
                        className="w-28 h-28 rounded-full object-cover"
                        width="112"
                        height="112"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Isaac Sarceño</h3>
                  <p className="text-primary font-medium">Ingeniería de Software</p> {/* CAMBIO: Más formal que "Full Stack" */}
                </div>
              </div>
              
              {/* CAMBIO: Título más profesional y contenido con viñetas y evidencia */}
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                Trayectoria y Enfoque
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Desarrollador con una sólida formación en ingeniería y un enfoque práctico en la creación de valor. 
                Mi especialidad es el ciclo de vida completo del desarrollo de aplicaciones, desde la concepción de la API hasta la implementación de una interfaz de usuario intuitiva y eficiente.
              </p>
              
              {/* Experiencia y logros */}
              <ul className="space-y-3 text-muted-foreground list-disc list-inside marker:text-primary">
                <li>Construyo sistemas que <strong>crecen con tu negocio</strong>, usando tecnologías modernas como NestJS y PostgreSQL que garantizan que tu plataforma funcione de manera fluida incluso cuando aumentan los usuarios y las ventas.</li>
                <li>Automatizo procesos que <strong>ahorran tiempo y aumentan ventas</strong>, como integrar WhatsApp para que los clientes hagan pedidos directamente, reduciendo el tiempo de respuesta y mejorando la atención al cliente.</li>
                <li>Creo sitios web <strong>rápidos y optimizados</strong> que cargan en menos de 2 segundos, mejorando la experiencia del usuario y el posicionamiento en buscadores, lo que se traduce en más visitantes y conversiones.</li>
              </ul>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* CAMBIO: Los títulos y descripciones ahora son más orientados a resultados */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">Desarrollo End-to-End</h4>
                </div>
                <p className="text-muted-foreground">
                  Construyo aplicaciones completas y funcionales, asegurando una comunicación fluida entre el frontend y el backend para entregar una experiencia de usuario cohesiva.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">Arquitectura y Calidad</h4>
                </div>
                <p className="text-muted-foreground">
                  Me enfoco en escribir código limpio, modular y escalable. Implemento patrones de diseño y buenas prácticas que facilitan el mantenimiento y la futura expansión del proyecto.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">Orientado a Resultados</h4>
                </div>
                <p className="text-muted-foreground">
                  Mi objetivo final es entregar software que no solo funcione, sino que también impulse los objetivos del negocio y aporte un valor tangible a los usuarios finales.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Technology Stack Section */}
          <motion.div 
            className="mt-20"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-12">
              {/* CAMBIO: Título y subtítulo más directos y confiables */}
              <h3 className="text-3xl font-bold mb-4">
                Mi Stack <span className="text-gradient">Tecnológico</span>
              </h3>
              <p className="text-muted-foreground text-lg">
                Las herramientas que domino para construir soluciones robustas y modernas.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', bgColor: 'transparent' },
                { name: 'HTML5', Icon: SiHtml5, color: '#E34F26', bgColor: 'transparent' },
                { name: 'CSS3', Icon: SiCss3, color: '#1572B6', bgColor: 'transparent' },
                { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', bgColor: 'transparent' },
                { name: 'Node.js', Icon: SiNodedotjs, color: '#339933', bgColor: 'transparent' },
                { name: 'React', Icon: SiReact, color: '#61DAFB', bgColor: 'transparent' },
                { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', bgColor: 'transparent' },
                { name: 'Git', Icon: SiGit, color: '#F05032', bgColor: 'transparent' },
                { name: 'GitHub', Icon: SiGithub, color: '#ffffff', bgColor: '#000000' },
                { name: 'NestJS', Icon: SiNestjs, color: '#E0234E', bgColor: '#000000' },
              ].map((tech, index) => (
                <motion.div 
                  key={tech.name}
                  className="group flex flex-col items-center space-y-3 w-full"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3,
                    delay: shouldReduceMotion ? 0 : index * 0.05,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={shouldReduceMotion ? {} : { y: -5 }}
                >
                  <motion.div 
                    className="relative w-16 h-16 rounded-2xl border border-border/50 backdrop-blur-sm shadow-lg flex items-center justify-center"
                    style={{
                      '--tech-color': tech.color,
                      backgroundColor: tech.bgColor === 'transparent' ? 'rgba(255, 255, 255, 0.05)' : tech.bgColor,
                      willChange: 'transform', // Optimización para GPU
                    } as React.CSSProperties}
                    whileHover={shouldReduceMotion ? {} : { 
                      scale: 1.08,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                  >
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { 
                        rotate: [0, -5, 5, 0],
                        scale: 1.1,
                        transition: { duration: 0.4, ease: "easeOut" }
                      }}
                    >
                      <tech.Icon 
                        className="text-3xl flex-shrink-0" 
                        style={{ color: tech.color }}
                      />
                    </motion.div>
                    <motion.div 
                      className="absolute inset-0 rounded-2xl"
                      style={{ backgroundColor: tech.color }}
                      initial={{ opacity: 0 }}
                      whileHover={shouldReduceMotion ? {} : { opacity: 0.15 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                  <span className="text-sm font-medium text-center transition-colors duration-200 group-hover:text-primary">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;