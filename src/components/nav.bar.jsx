import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { NyAinaLogo } from "./nyaina.logo";
import SelectLang from "./select.lang";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const [t] = useTranslation("global");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    t("headers.menu.1"),
    t("headers.menu.2"),
    t("headers.menu.3"),
    t("headers.menu.4"),
    t("headers.menu.5"),
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = menuItems.map((item) => document.getElementById(item));
      const currentSection = sections.find((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  const navigateTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50"
    >
      <Navbar
        maxWidth="full"
        position="static"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className={`transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-sm border-b border-primary/20 shadow-lg"
            : ""
        }`}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-primary p-2 hover:bg-primary/10 transition-colors duration-200"
          />
        </NavbarContent>

        <NavbarContent justify="start">
          <motion.div
            className="flex flex-row items-center group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <NyAinaLogo />
              <motion.div
                className="absolute -inset-1 bg-primary/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div
              className="ml-3 flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.p
                className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Kadmiel
              </motion.p>
              <motion.span
                className="text-xs text-primary/70 font-medium tracking-wider uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                Developer
              </motion.span>
            </motion.div>
          </motion.div>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <motion.div
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link className="cursor-pointer group">
                  <motion.span
                    className="text-primary font-bold"
                    whileHover={{ scale: 1.2 }}
                  >
                    #
                  </motion.span>
                  <motion.span
                    className={`ml-1 transition-all duration-300 ${
                      activeSection === item
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => navigateTo(item)}
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.span>
                  <motion.div
                    className={`h-0.5 mt-1 transition-all duration-300 ${
                      activeSection === item
                        ? "bg-primary w-full"
                        : "bg-primary w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </motion.div>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <SelectLang />
          </motion.div>
        </NavbarContent>

        <AnimatePresence>
          {isMenuOpen && (
            <NavbarMenu className="bg-background/95 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-6 pt-8 px-4"
              >
                {menuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ x: 10, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        className="w-full cursor-pointer group flex items-center p-3 rounded-lg hover:bg-primary/5 transition-all duration-300"
                        size="lg"
                        onClick={() => navigateTo(item)}
                      >
                        <motion.span
                          className="text-primary font-bold text-2xl"
                          whileHover={{ scale: 1.2 }}
                        >
                          #
                        </motion.span>
                        <motion.span className="text-foreground ml-3 text-xl group-hover:text-primary transition-colors duration-300">
                          {item}
                        </motion.span>
                      </Link>
                    </motion.div>
                  </NavbarMenuItem>
                ))}
              </motion.div>
            </NavbarMenu>
          )}
        </AnimatePresence>
      </Navbar>
    </motion.div>
  );
}
