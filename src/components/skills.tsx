import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Space from "./space";
import Title from "./title";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const [t] = useTranslation("global");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const serviceDomains = [
    {
      id: "frontend",
      title: t("skills.service_domains.frontend"),
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Angular", "Framer Motion", "Shadcn UI"]
    },
    {
      id: "backend",
      title: t("skills.service_domains.backend"),
      skills: ["Spring Boot", "Node.js", "Express.js", "Golang", "PHP", "Laravel", "REST API", "GraphQL", "Microservices"]
    },
    {
      id: "iax",
      title: t("skills.service_domains.iax"),
      skills: ["Dify", "Ai Engine", "Pinecone", "Qdrant", "Apache Beam"]
    },
    {
      id: "database",
      title: t("skills.service_domains.database"),
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "MariaDB"]
    },
    {
      id: "devops",
      title: t("skills.service_domains.devops"),
      skills: ["Docker", "Linux", "Git", "GitHub ", "Apache", "Nginx"]
    },
    {
      id: "design",
      title: t("skills.service_domains.design"),
      skills: ["Figma", "UI Design"]
    }
  ];

  return (
    <div id={t("headers.menu.3")} className="flex pt-28">
      <Space />
      <div className="w-6/8 relative">
        {/* Animated decorative elements */}
        <motion.div
          className="absolute -left-10 top-20 w-8 h-8 border-2 border-primary/20 rounded-full"
          animate={{
            x: [0, 15, 0],
            y: [0, -10, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-1/4 -top-6 w-5 h-5 bg-primary/10 rounded-md rotate-45"
          animate={{
            y: [0, 20, 0],
            rotate: [45, 90, 45],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute right-10 top-40 w-4 h-4 border border-primary/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <Title text={t("headers.menu.31")} lineWidth="2/6" />

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {serviceDomains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-white/20 rounded-lg hover:border-white/40 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">
                {domain.title.split(' ')[0]}
              </h3>
              <div className="flex flex-wrap gap-2 text-secondary">
                {domain.skills.map((skill, idx) => (
                  <span key={idx} className="text-sm md:text-base font-medium">
                    {skill}{idx < domain.skills.length - 1 ? " • " : ""}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
