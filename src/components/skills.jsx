import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import SkillBox from "./skill.box";
import Space from "./space";
import Title from "./title";
import { useTranslation } from "react-i18next";

const langs = ["Java", "C#", "JavaScript", "Golang", "Dart", "Python", "PHP"];
const db = ["MongoDB", "MySQL", "PostgreSQL", "MariaDB", "Redis"];
const frams = [
  "React.js",
  "Express.js",
  "Spring Boot",
  "Angular",
  "Laravel",
  "Flutter",
  "WordPress",
];
const tools = ["VS Code", "Linux", "Docker", "Git", "Inkscape", "Figma"];
const others = ["GitHub", "REST API", "JPA", "Apache Beam", "GraphQL", "Dify"];

// Services data
const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description: "Full-stack web applications with modern frameworks",
    technologies: ["React.js", "Node.js", "Express.js", "Next.js"],
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Cross-platform mobile apps with native performance",
    technologies: ["Flutter", "Dart", "React Native"],
    features: ["iOS & Android", "Native Performance", "Modern UI/UX"],
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    description: "Scalable server-side solutions and APIs",
    technologies: ["Spring Boot", "Express.js", "Golang", "PostgreSQL"],
    features: ["REST APIs", "Database Design", "Cloud Integration"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces",
    technologies: ["Figma", "Adobe XD", "Tailwind CSS"],
    features: ["User Research", "Prototyping", "Design Systems"],
  },
];

export default function Skills() {
  const [t] = useTranslation("global");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    // Start animations when in view
    if (isInView) {
      controls.start('visible');
    }

    // Apply will-change for better performance
    const elements = document.querySelectorAll('.skill-animate');
    elements.forEach(el => {
      el.style.willChange = 'transform, opacity';
    });

    return () => {
      elements.forEach(el => {
        el.style.willChange = 'auto';
      });
    };
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Faster staggering
        delayChildren: 0.05, // Reduced delay
        duration: 0.3, // Faster fade-in
        ease: "linear" // Simple easing for opacity
      }
    }
  };

  const serviceVariants = {
    hidden: {
      opacity: 0,
      x: -20, // Reduced distance for smoother animation
      scale: 0.97 // Less scaling for smoother transition
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring", // Spring physics for smoother motion
        stiffness: 200,
        damping: 20,
        mass: 0.8,
        delay: i * 0.07, // Reduced delay between items
      }
    })
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      x: 20, // Reduced distance
      scale: 0.97 // Less scaling for smoother transition
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring", // Spring physics for smoother motion
        stiffness: 180,
        damping: 18,
        mass: 0.8,
        delay: 0.1 + (i * 0.05), // Reduced delays
      }
    })
  };

  return (
    <div id={t("headers.menu.3")} className="flex pt-20 md:pt-28">
      <Space />
      <div className="w-6/8 relative">
        <Title text={t("headers.menu.31")} lineWidth="2/6" />

        {/* Combined Skills & Services Section */}
        <motion.div
          ref={containerRef}
          className="skills-services-container mt-8 md:mt-12 flex xl:flex-row flex-col gap-8 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Services Section - Left */}
          <div className="xl:w-1/2 w-full relative">
            {/* Animated decorative elements */}
            <motion.div
              className="absolute -left-8 top-12 w-6 h-6 border-2 border-primary/20 rounded-full skill-animate"
              animate={{
                x: [0, 10, 0],
                y: [0, -5, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute right-1/4 -top-4 w-4 h-4 bg-primary/10 rotate-45 skill-animate"
              animate={{
                y: [0, 15, 0],
                rotate: [45, 90, 45],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <motion.span
                  className="text-primary mr-2"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >#</motion.span>
                Services
              </h3>
            </div>

            <div className="space-y-4 md:space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={serviceVariants}
                  custom={index}
                  className="group relative bg-background border border-secondary/30 rounded-xl p-6 skill-animate"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="text-2xl flex-shrink-0">
                      {service.icon}
                    </div>

                    <div className="flex-1">
                      {/* Title */}
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {service.title}
                      </h4>

                      {/* Description */}
                      <p className="text-secondary text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1">
                        {service.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        {service.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs text-secondary">
                            +{service.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>


                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section - Right */}
          <div className="xl:w-1/2 w-full relative">
            {/* Animated decorative elements */}
            <motion.div
              className="absolute -right-6 top-20 w-5 h-5 border border-primary/30 rounded-full skill-animate"
              animate={{
                x: [0, -8, 0],
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <motion.div
              className="absolute left-1/3 -top-6 w-3 h-3 bg-primary/15 rounded-sm skill-animate"
              animate={{
                y: [0, 10, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <motion.span
                  className="text-primary mr-2"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >#</motion.span>
                Skills
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 md:gap-4">
              <motion.div variants={skillVariants} custom={0} className="skill-animate">
                <SkillBox group={t("skills.list.1")} elements={frams} />
              </motion.div>
              <motion.div variants={skillVariants} custom={1} className="skill-animate">
                <SkillBox group={t("skills.list.5")} elements={langs} />
              </motion.div>
              <motion.div variants={skillVariants} custom={2} className="skill-animate">
                <SkillBox group={t("skills.list.7")} elements={db} />
              </motion.div>
              <motion.div variants={skillVariants} custom={3} className="skill-animate">
                <SkillBox group={t("skills.list.2")} elements={tools} />
              </motion.div>
              <motion.div
                variants={skillVariants}
                custom={4}
                className="lg:col-span-2 skill-animate"
              >
                <SkillBox group={t("skills.list.4")} elements={others} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
