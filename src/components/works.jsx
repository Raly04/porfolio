import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Space from "./space";
import Title from "./title";
import WorkBox from "./work.box";
import p1 from "../assets/images/Capture.png";
import smmec from "../assets/images/smmec.png";
import sal from "../assets/images/sal.png";
import aceem from "../assets/images/aceem.png";
import port from "../assets/images/portfolio.png";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const [t] = useTranslation("global");
  const workBoxRefs = useRef([]);
  const [columns, setColumns] = useState(3);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 1200) {
        setColumns(2);
      } else {
        setColumns(3);
      }
      ScrollTrigger.refresh();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Check if we're on mobile
    const isMobile = window.innerWidth < 768;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-container",
        start: isMobile ? "top 95%" : "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        refreshPriority: 1,
      },
    });

    workBoxRefs.current.forEach((ref, index) => {
      if (ref) {
        tl.fromTo(
          ref,
          {
            opacity: 0,
            y: isMobile ? 30 : 60,
            scale: isMobile ? 0.95 : 0.8,
            rotationY: isMobile ? 0 : 15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: isMobile ? 0.6 : 1,
            ease: isMobile ? "power2.out" : "power3.out",
          },
          index * (isMobile ? 0.1 : 0.15),
        );
      }
    });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const workBoxes = [
    {
      image: port,
      technologies: t("works.1.technologies"),
      title: t("works.1.title"),
      description: t("works.1.description"),
      link: "https://github.com/Raly04/porfolio",
      featured: true,
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
        <Title text={t("headers.menu.4")} lineWidth="4/6" />

        {/* Filter buttons */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
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

        {/* Masonry Layout */}
        <div className="projects-container mt-12 flex gap-6 w-full">
          {masonryColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex-1 flex flex-col gap-6">
              {column.map((box, itemIndex) => (
                <motion.div
                  key={box.originalIndex}
                  ref={(el) => (workBoxRefs.current[box.originalIndex] = el)}
                  className={`${box.featured ? "transform scale-105" : ""}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: columnIndex * 0.1 + itemIndex * 0.2,
                    ease: "easeOut",
                  }}
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
        </div>

        {/* Load more button */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-3 bg-primary/10 text-primary border border-primary/30 rounded-lg hover:bg-primary hover:text-background transition-all duration-300 font-medium"
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
