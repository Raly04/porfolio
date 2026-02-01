import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        type: "spring",
        damping: 8,
        stiffness: 100,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-background flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="w-20 h-20 border-4 border-primary rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-primary">K</span>
          </div>
        </motion.div>

        <motion.div variants={textVariants} initial="hidden" animate="visible">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Loading Portfolio
          </h2>
          <div className="w-64 h-2 bg-background border border-primary/30 rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-primary/70"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-primary mt-2 font-mono">{progress}%</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
