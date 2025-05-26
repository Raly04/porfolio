import Arrow from "../assets/arrow";
import DoodleItems from "../assets/doodle-items";
import Sleep from "../assets/sleep";
import Space from "./space";
import Title from "./title";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const [t] = useTranslation("global");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  
  // Start animations when the container comes into view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
    
    // Apply will-change for better performance
    const elements = document.querySelectorAll('.about-animate');
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
        duration: 0.4,
        staggerChildren: 0.1,
        when: "beforeChildren",
        ease: "linear"
      }
    }
  };
  
  const imageVariants = {
    hidden: { x: 100, opacity: 0, scale: 0.9 }, // Reduced distance for smoother animation
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring", // Using spring physics for more natural motion
        stiffness: 100,
        damping: 15,
        mass: 1,
        duration: 0.7 // Slightly faster
      }
    }
  };
  
  const textVariants = {
    hidden: { x: -100, opacity: 0, scale: 0.95 }, // Reduced distance for smoother animation
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.2, // Reduced delay
      }
    }
  };
  
  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.5 }, // Start from larger scale for smoother animation
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6, // Faster animation
        delay: 0.5, // Reduced delay
        ease: "backOut" // Using named ease for better performance
      }
    }
  };
  return (
    <div id={t("headers.menu.2")} className="flex pt-28">
      <Space />
      <motion.div 
        ref={containerRef}
        className="w-6/8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <Title text={t("headers.menu.2")} lineWidth="3/6" />
        <div className="grid xl:grid-cols-2 w-full mt-12 gap-12">
          <div className="text-secondary flex flex-col justify-center items-center gap-8">
            <motion.div variants={textVariants} className="about-animate relative">
              {/* Animated decorative elements */}
              <motion.div 
                className="absolute -left-6 -top-6 w-4 h-4 border border-primary/30 rounded-full about-animate"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute -right-4 bottom-1/4 w-3 h-3 bg-primary/10 rounded-sm about-animate"
                animate={{
                  x: [0, 8, 0],
                  rotate: [0, 45, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              {t("info.about")}
            </motion.div>
            <motion.div variants={arrowVariants} className="about-animate">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Arrow />
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            variants={imageVariants}
            className="flex flex-col justify-center items-center w-ull relative about-animate"
          >
            <div className="w-full">
              <DoodleItems />
            </div>
            <div className="absolute top-2/4 w-1/2">
              <Sleep />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
