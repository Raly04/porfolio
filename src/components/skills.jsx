import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import SkillBox from "./skill.box";
import Space from "./space";
import Title from "./title";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const langs = ["Java", "C#", "JavaScript", "Golang", "Dart", "Python"];
const db = ["MongoDB", "MySQL", "PostgreSQL", "MariaDB", "Redis"];
const frams = [
  "React.js",
  "Express.js",
  "Spring Boot",
  "Angular",
  "Laravel",
  "Flutter",
];
const tools = ["VS Code", "Linux", "Docker", "Git", "Inkscape", "Figma"];
const others = ["GitHub", "REST API", "JPA", "Apache Beam", "GraphQL"];

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
  const skillBoxRefs = useRef([]);
  const servicesRef = useRef([]);

  useEffect(() => {
    // Check if we're on mobile
    const isMobile = window.innerWidth < 768;
    
    // Create a master timeline for the entire section with mobile-friendly settings
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-services-container",
        start: isMobile ? "top 90%" : "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        refreshPriority: 1,
      }
    });

    // Services animation timeline with mobile optimizations
    const servicesTl = gsap.timeline();
    servicesRef.current.forEach((ref, index) => {
      if (ref) {
        servicesTl.fromTo(ref,
          { 
            opacity: 0, 
            x: isMobile ? 0 : -60, 
            y: isMobile ? 30 : 0,
            scale: 0.9,
            rotationY: isMobile ? 0 : -15
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: isMobile ? 0.8 : 1.2,
            ease: "power3.out",
          },
          index * (isMobile ? 0.1 : 0.15)
        );
      }
    });

    // Skills animation timeline with mobile optimizations
    const skillsTl = gsap.timeline();
    skillBoxRefs.current.forEach((ref, index) => {
      if (ref) {
        skillsTl.fromTo(ref,
          { 
            opacity: 0, 
            x: isMobile ? 0 : 60, 
            y: isMobile ? 30 : 0,
            scale: 0.8,
            rotationY: isMobile ? 0 : 15
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: isMobile ? 0.6 : 1,
            ease: isMobile ? "power2.out" : "elastic.out(0.6, 0.8)",
          },
          index * (isMobile ? 0.1 : 0.2)
        );
      }
    });

    // Add timelines to master timeline
    masterTl
      .add(servicesTl, 0)
      .add(skillsTl, isMobile ? 0.2 : 0.3);



    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id={t("headers.menu.3")} className="flex pt-20 md:pt-28">
      <Space />
      <div className="w-6/8 relative">
        <Title text={t("headers.menu.31")} lineWidth="2/6" />
        
        {/* Combined Skills & Services Section */}
        <div className="skills-services-container mt-8 md:mt-12 flex xl:flex-row flex-col gap-8 md:gap-16">
          {/* Services Section - Left */}
          <div className="xl:w-1/2 w-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="text-primary mr-2">#</span>
                Services
              </h3>
            </div>

            <div className="space-y-4 md:space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  ref={(el) => (servicesRef.current[index] = el)}
                  className="group relative bg-background border border-secondary/30 rounded-xl p-6"
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


                </div>
              ))}
            </div>
          </div>

          {/* Skills Section - Right */}
          <div className="xl:w-1/2 w-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="text-primary mr-2">#</span>
                Skills
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 md:gap-4">
              <div ref={(el) => (skillBoxRefs.current[0] = el)}>
                <SkillBox group={t("skills.list.1")} elements={frams} />
              </div>
              <div ref={(el) => (skillBoxRefs.current[1] = el)}>
                <SkillBox group={t("skills.list.5")} elements={langs} />
              </div>
              <div ref={(el) => (skillBoxRefs.current[2] = el)}>
                <SkillBox group={t("skills.list.7")} elements={db} />
              </div>
              <div ref={(el) => (skillBoxRefs.current[3] = el)}>
                <SkillBox group={t("skills.list.2")} elements={tools} />
              </div>
              <div
                ref={(el) => (skillBoxRefs.current[4] = el)}
                className="lg:col-span-2"
              >
                <SkillBox group={t("skills.list.4")} elements={others} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
