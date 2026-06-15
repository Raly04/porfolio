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
import ls from "../assets/images/ls.png";
import helio from "../assets/images/heliosol.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AllProjects() {
  const [t] = useTranslation("global");
  const containerRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(3);
  const [activeFilter, setActiveFilter] = useState("all");
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
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
    window.scrollTo(0, 0);

    if (isInView) {
      controls.start("visible");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
        duration: 0.3,
        ease: "linear",
      },
    },
  };

  const itemVariants = {
    hidden: () => ({
      opacity: 0,
      y: 20,
      scale: 0.95,
    }),
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 16,
        mass: 0.8,
        delay: index * 0.05,
      },
    }),
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
      category: "innovation",
    },
    {
      image: p1,
      technologies: t("works.2.technologies"),
      title: t("works.2.title"),
      description: t("works.2.description"),
      link: "https://github.com/Raly04/novice-immersion",
      category: "education",
    },
    {
      image: smmec,
      technologies: t("works.3.technologies"),
      title: t("works.3.title"),
      description: t("works.3.description"),
      isSecret: true,
      category: "banking",
    },
    {
      image: sal,
      technologies: t("works.4.technologies"),
      title: t("works.4.title"),
      description: t("works.4.description"),
      isSecret: true,
      featured: true,
      category: "healthcare",
    },
    {
      image: aceem,
      technologies: t("works.5.technologies"),
      title: t("works.5.title"),
      description: t("works.5.description"),
      isSecret: true,
      category: "education",
    },
    {
      image: theend,
      technologies: t("works.6.technologies"),
      title: t("works.6.title"),
      description: t("works.6.description"),
      isSecret: false,
      link: "https://infinity.madagascar.webcup.hodi.host",
      featured: true,
      category: "innovation",
    },
    {
      image: ls,
      technologies: t("works.7.technologies"),
      title: t("works.7.title"),
      description: t("works.7.description"),
      link: "https://ls.netlink-digital.com/limitless",
      isSecret: false,
      category: "education",
    },
    {
      image: helio,
      technologies: t("works.8.technologies"),
      title: t("works.8.title"),
      description: t("works.8.description"),
      link: "https://heliosol-flow.vercel.app/",
      isSecret: false,
      category: "innovation",
    },
  ];

  const filteredProjects = workBoxes.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  const createMasonryColumns = () => {
    const columnArrays = Array.from(
      { length: columns },
      () => [] as typeof workBoxes,
    );

    filteredProjects.forEach((box, index) => {
      const columnIndex = index % columns;
      columnArrays[columnIndex].push({ ...box, originalIndex: index });
    });

    return columnArrays;
  };

  const masonryColumns = createMasonryColumns();

  return (
    <div className="bg-background min-h-screen flex pt-20 md:pt-28">
      <Space />
      <div className="w-6/8 relative pb-20">
        <Link to="/">
          <motion.div
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8 cursor-pointer"
            whileHover={{ x: -10 }}
          >
            <ArrowLeft size={20} />
            <span className="font-medium">{t("btn.back_home")}</span>
          </motion.div>
        </Link>

        <Title text={t("headers.menu.4")} lineWidth="3/6" />

        <div className="relative mt-12 mb-16">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              { key: "all", label: "All" },
              { key: "banking", label: "Banking" },
              { key: "education", label: "Education" },
              { key: "innovation", label: "Innovation" },
              { key: "healthcare", label: "Healthcare" },
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

        <motion.div
          ref={containerRef}
          className="projects-container mt-12 flex flex-col md:flex-row gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {masonryColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex-1 flex flex-col gap-6">
              {column.map((box: any) => (
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
      </div>
    </div>
  );
}
