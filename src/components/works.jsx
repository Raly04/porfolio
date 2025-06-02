import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Space from "./space";
import Title from "./title";
import WorkBox from "./work.box";
import p1 from "../assets/images/Capture.png";
import smmec from "../assets/images/smmec.png";
import sal from "../assets/images/sal.png";
import aceem from "../assets/images/aceem.png";
import port from "../assets/images/portfolio.png";
import theend from "../assets/images/theend.png";
import { useTranslation } from "react-i18next";

export default function Works() {
  const [t] = useTranslation("global");
  const containerRef = useRef(null);
  const [columns, setColumns] = useState(3);
  const [activeFilter, setActiveFilter] = useState("all");
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 1200) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Start animations when in view
    if (isInView) {
      controls.start('visible');
    }
    
    // Apply will-change for better performance
    const elements = document.querySelectorAll('.work-animate');
    elements.forEach(el => {
      el.style.willChange = 'transform, opacity';
    });
    
    return () => {
      window.removeEventListener("resize", handleResize);
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
  
  const itemVariants = {
    hidden: () => ({
      opacity: 0,
      y: window.innerWidth < 768 ? 20 : 40, // Reduced distance
      scale: window.innerWidth < 768 ? 0.97 : 0.9, // Less scaling for smoother transition
      rotateY: window.innerWidth < 768 ? 0 : 8, // Reduced rotation
    }),
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring", // Spring physics for smoother motion
        stiffness: window.innerWidth < 768 ? 200 : 150,
        damping: window.innerWidth < 768 ? 20 : 16,
        mass: 0.8,
        delay: index * (window.innerWidth < 768 ? 0.07 : 0.1), // Reduced delay between items
      }
    })
  };

  const workBoxes = [
    {
      image: port,
      technologies: t("works.1.technologies"),
      title: t("works.1.title"),
      description: t("works.1.description"),
      link: "https://github.com/Raly04/porfolio",
      featured: true,
      isSecret: true,
      category: "personal",
    },
    {
      image: p1,
      technologies: t("works.2.technologies"),
      title: t("works.2.title"),
      description: t("works.2.description"),
      link: "https://github.com/Raly04/novice-immersion",
      category: "competitions",
    },
    {
      image: smmec,
      technologies: t("works.3.technologies"),
      title: t("works.3.title"),
      description: t("works.3.description"),
      isSecret: true,
      category: "internship",
    },
    {
      image: sal,
      technologies: t("works.4.technologies"),
      title: t("works.4.title"),
      description: t("works.4.description"),
      isSecret: true,
      featured: true,
      category: "competitions",
    },
    {
      image: aceem,
      technologies: t("works.5.technologies"),
      title: t("works.5.title"),
      description: t("works.5.description"),
      isSecret: true,
      category: "internship",
    },
    {
      image: theend,
      technologies: t("works.6.technologies"),
      title: t("works.6.title"),
      description: t("works.6.description"),
      isSecret: false,
      link:"https://infinity.madagascar.webcup.hodi.host",
      featured: true,
      category: "competitions",
    },
  ];

  // Filter projects based on active filter
  const filteredProjects = workBoxes.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  // Create masonry columns
  const createMasonryColumns = () => {
    const columnArrays = Array.from({ length: columns }, () => []);

    filteredProjects.forEach((box, index) => {
      const columnIndex = index % columns;
      columnArrays[columnIndex].push({ ...box, originalIndex: index });
    });

    return columnArrays;
  };

  const masonryColumns = createMasonryColumns();

  return (
    <div id={t("headers.menu.4")} className="flex pt-28">
      <Space />
      <div className="w-6/8 relative">
        {/* Animated decorative elements */}
        <motion.div 
          className="absolute -left-10 top-20 w-8 h-8 border-2 border-primary/20 rounded-full work-animate"
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
          className="absolute right-1/4 -top-6 w-5 h-5 bg-primary/10 rounded-md rotate-45 work-animate"
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
          className="absolute right-10 top-40 w-4 h-4 border border-primary/30 rounded-full work-animate"
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
        <Title text={t("headers.menu.4")} lineWidth="3/6" />

        {/* Filter buttons */}
        <div className="relative mt-8 mb-12">
          <motion.div 
            className="absolute -left-6 -bottom-6 w-3 h-3 bg-primary/15 rounded-sm work-animate"
            animate={{
              x: [0, 8, 0],
              y: [0, -5, 0],
              rotate: [0, 180, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { key: "all", label: "All" },
              { key: "internship", label: "Internship" },
              { key: "personal", label: "Personal" },
              { key: "competitions", label: "Competitions" },
            ].map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-primary text-background border-primary"
                    : "bg-background text-foreground border-secondary hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Masonry Layout */}
        <motion.div 
          ref={containerRef}
          className="projects-container mt-12 flex gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {masonryColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex-1 flex flex-col gap-6">
              {column.map((box) => (
                <motion.div
                  key={box.originalIndex}
                  className={`${box.featured ? "transform scale-105" : ""}`}
                  variants={itemVariants}
                  custom={box.originalIndex}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <WorkBox
                    image={box.image}
                    link={box.link}
                    technologies={box.technologies}
                    title={box.title}
                    description={box.description}
                    isSecret={box.isSecret}
                    featured={box.featured}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Load more button */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-3 bg-primary/10 text-primary border border-primary/30 rounded-lg hover:bg-primary hover:text-background transition-all duration-300 font-medium work-animate"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 173, 181, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
