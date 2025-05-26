import AboutMe from "./about-me";
import Contacts from "./contacts";
import Footer from "./footer";
import Home from "./home";
import NavBar from "./nav.bar";
import Skills from "./skills";
import SocialMedia from "./social.media";
import Works from "./works";
import ScrollToTop from "./scroll-to-top";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function MainContainer() {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced navigation */}
      <NavBar />
      
      {/* Social media sidebar */}
      <SocialMedia />
      
      {/* Main content with improved transitions */}
      <div className="bg-background min-h-screen overflow-hidden">
        {/* Sections with scroll-triggered animations */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Home />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative py-8 md:py-12"
        >
          <AboutMe />
        </motion.section>

        <section className="relative py-8 md:py-12">
          <Skills />
        </section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative py-8 md:py-12"
        >
          <Works />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative py-8 md:py-12"
        >
          <Contacts />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Footer />
        </motion.section>
      </div>

      {/* Scroll to top button */}
      <ScrollToTop />


    </motion.div>
  );
}