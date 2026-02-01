import MyButton from "./my.button";
import downloadIcon from "../assets/download.svg";
import ProfileImage from "./profile-image";
import { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import cv from "../assets/cv/CV_MAJ.pdf";
import Space from "./space";

const arr = "< ";
const arrClose = "/ >";

export default function Hero() {
  const [t] = useTranslation("global");

  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Use the useInView hook to trigger animations when elements come into view
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  // Start animations when the container comes into view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Use hardware acceleration for all animations
  useEffect(() => {
    // Apply will-change to improve animation performance
    const elements = document.querySelectorAll('.animate-element');
    elements.forEach(el => {
      el.style.willChange = 'transform, opacity';
    });

    // Cleanup function
    return () => {
      elements.forEach(el => {
        el.style.willChange = 'auto';
      });
    };
  }, []);

  // Animation variants for different elements
  const floatingShapeVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: i * 0.15,
        ease: [0.34, 1.25, 0.64, 1], // Reduced elasticity for smoother motion
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    })
  };

  const textVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.95,
      rotateX: 20 // Reduced rotation for smoother animation
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8, // Reduced duration for snappier response
        staggerChildren: 0.1, // Faster staggering
        ease: [0.25, 0.8, 0.25, 1], // Smoother easing
        when: "beforeChildren" // Ensure parent animates before children
      }
    }
  };

  const imageVariants = {
    hidden: {
      x: 80, // Reduced distance
      opacity: 0,
      scale: 0.85, // Less scaling for smoother transition
      rotateY: 15, // Less rotation
      perspective: 1000
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring", // Spring physics for smoother motion
        stiffness: 100,
        damping: 15,
        mass: 1,
        delay: 0.4, // Reduced delay
      }
    }
  };

  const arrowVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5, // Start from a larger scale for smoother animation
      rotate: 180, // Reduced rotation
      originX: 0.5,
      originY: 0.5
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7, // Faster animation
        delay: 0.8, // Reduced delay
        ease: "backOut" // Using named ease for better performance
      }
    },
    floating: {
      y: [-6, 0, -6], // Reduced movement range
      transition: {
        duration: 2.5, // Faster cycle
        repeat: Infinity,
        repeatType: "mirror", // Smoother looping
        ease: "easeInOut"
      }
    }
  };

  const scrollIndicatorVariants = {
    hidden: {
      y: 30, // Reduced distance
      opacity: 0,
      scale: 0.9 // Less scaling
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6, // Faster animation
        delay: 1.2, // Reduced delay
        ease: "easeOut" // Simpler easing function
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4, // Faster fade-in
        staggerChildren: 0.1, // Faster staggering
        delayChildren: 0.1, // Slight delay before starting children animations
        ease: "linear" // Simple easing for opacity
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring", // Spring physics for smoother motion
        stiffness: 260,
        damping: 20,
        duration: 0.4,
      },
    },
  };

  return (
    <div id={t("headers.menu.1")} className="flex pt-28 md:pt-8 overflow-hidden">
      <Space />
      <motion.div
        ref={containerRef}
        className="w-6/8 relative min-h-screen flex items-center justify-center overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-20 h-20 border border-primary/20 rounded-full animate-element"
            variants={floatingShapeVariants}
            custom={0}
            initial="hidden"
            animate="visible"
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-lg animate-element"
            variants={floatingShapeVariants}
            custom={1}
            initial="hidden"
            animate="visible"
          />
          <motion.div
            className="absolute bottom-40 left-40 w-12 h-12 border-2 border-primary/30 rotate-45 animate-element"
            variants={floatingShapeVariants}
            custom={2}
            initial="hidden"
            animate="visible"
          />
          <motion.div
            className="absolute top-60 right-40 w-8 h-8 bg-primary/15 rounded animate-element"
            variants={floatingShapeVariants}
            custom={3}
            initial="hidden"
            animate="visible"
          />
          <motion.div
            className="absolute bottom-20 right-60 w-6 h-6 border border-primary/25 rounded-full animate-element"
            variants={floatingShapeVariants}
            custom={4}
            initial="hidden"
            animate="visible"
          />
        </div>

        <div className="w-full relative z-10">
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-12 items-center min-h-[80vh]">
            {/* Text Content */}
            <motion.div
              className="flex flex-row items-center justify-center gap-8"
              variants={itemVariants}
            >
              <motion.div
                ref={textRef}
                className="w-full flex-col flex items-start justify-center space-y-6"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="text-sm font-medium text-primary/80 tracking-wider uppercase"
                  variants={itemVariants}
                >
                  {t("body.pres")}
                </motion.div>

                <motion.div
                  className="font-bold text-5xl xl:text-6xl leading-tight"
                  variants={itemVariants}
                >
                  <div className="overflow-hidden">
                    <motion.span
                      className="inline-block"
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                    >
                      {t("info.fname1")} {t("info.fname2")}
                    </motion.span>
                  </div>
                  <div className="overflow-hidden">
                    <motion.span
                      className="inline-block text-primary"
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                    >
                      {t("info.lname")}
                    </motion.span>
                  </div>
                </motion.div>

                <motion.div
                  className="font-semibold text-lg text-primary bg-primary/10 px-4 py-2 rounded-lg border border-primary/20"
                  variants={itemVariants}
                >
                  <span className="text-primary/60">{arr}</span>
                  <span className="mx-1">{t("info.job")}</span>
                  <span className="text-primary/60">{arrClose}</span>
                </motion.div>

                <motion.div
                  className="text-secondary text-lg leading-relaxed max-w-md"
                  variants={itemVariants}
                >
                  <p className="mb-2">{t("body.desc1")}</p>
                  <p>{t("body.desc2")}</p>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-4 pt-4"
                  variants={itemVariants}
                >
                  <motion.a
                    href={`#${t("headers.menu.5")}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MyButton
                      borderColor="primary"
                      bg="background"
                      textColor="foreground"
                      text={t("btn.contact_me")}
                    />
                  </motion.a>
                  <motion.a
                    href={cv}
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MyButton
                      borderColor="primary"
                      bg="primary"
                      textColor="background"
                      text={t("btn.download_cv")}
                      img={downloadIcon}
                    />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Decorative Arrow */}
              <motion.div
                className="hidden xl:block"
                ref={arrowRef}
                variants={arrowVariants}
                initial="hidden"
                animate={["visible", "floating"]}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {item}
              </motion.div>
            </motion.div>

            {/* Image/Card Section */}
            <motion.div
              className="w-full flex flex-row items-center xl:justify-end justify-center"
              ref={imgRef}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <ProfileImage />
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center hidden md:flex"
          variants={scrollIndicatorVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-sm text-primary/70 mb-2 font-medium tracking-wider animate-pulse">
            SCROLL
          </p>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
          <svg
            className="w-4 h-4 mt-2 text-primary/70 animate-bounce"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

const item = (
  <motion.svg
    width="79"
    height="235"
    viewBox="0 0 79 235"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2, ease: "easeInOut" }}
  >
    <motion.path
      d="M75.7998 3.19806C50.1843 3.91647 54.9044 2.94458 34.1801 22.898C29.4468 27.4551 22.2901 32.9978 20.6682 41.0942C18.2748 53.042 32.9256 89.1888 42.5174 75.8854C48.7163 67.2878 47.5223 52.5204 38.0924 48.6148C22.6279 42.2098 10.1944 61.1468 5.38686 77.5103C0.0940138 95.5256 4.53909 115.234 17.0132 127.263C22.7118 132.758 31.9039 130.27 26.8618 118.599C16.4911 94.596 4.49663 123.714 6.12058 139.661C9.04561 168.385 33.7168 206.119 56.799 200.135C64.0159 198.264 61.657 194.09 58.6284 191.002C55.5553 187.869 47.8279 176.427 49.9025 180.772C53.5294 188.367 58.1307 191.423 63.2708 195.883C69.9006 201.635 55.68 214.205 51.5604 218.692C49.3978 221.047 46.2555 226.322 45.6706 230.164C44.5155 237.748 52.8538 217.931 54.346 210.482"
      stroke="#00ADB5"
      strokeOpacity="0.4"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.4 }}
      transition={{ duration: 3, ease: "easeInOut" }}
    />
  </motion.svg>
);