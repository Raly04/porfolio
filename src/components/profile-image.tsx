import { useRef, useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/sary.jpg";

export default function ProfileImage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        ref={containerRef}
        className="relative w-full max-w-md aspect-square overflow-visible"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePosition({ x: 0, y: 0 });
        }}
      >
        {/* Background elements */}
        <motion.div
          className="absolute inset-0 bg-primary/5 rounded-full -z-10"
          animate={{
            scale: isHovered ? 1.1 : 1,
            x: isHovered ? mousePosition.x * -20 : 0,
            y: isHovered ? mousePosition.y * -20 : 0,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />

        <motion.div
          className="absolute inset-0 border-2 border-primary/20 rounded-full -z-10"
          animate={{
            scale: isHovered ? 1.15 : 1.05,
            x: isHovered ? mousePosition.x * -30 : 0,
            y: isHovered ? mousePosition.y * -30 : 0,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        />

        {/* Main image container */}
        <motion.div
          className="relative w-full h-full rounded-2xl overflow-hidden"
          animate={{
            x: isHovered ? mousePosition.x * 20 : 0,
            y: isHovered ? mousePosition.y * 20 : 0,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {/* Image */}
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover object-center"
            />

            {/* Overlay gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0"
              animate={{ opacity: isHovered ? 0.6 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-12 h-12 border-2 border-primary/40 rounded-full"
          animate={{
            x: isHovered ? mousePosition.x * 40 : 0,
            y: isHovered ? mousePosition.y * 40 : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />

        <motion.div
          className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-full"
          animate={{
            x: isHovered ? mousePosition.x * 50 : 0,
            y: isHovered ? mousePosition.y * 50 : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />

        <motion.div
          className="absolute top-1/2 -right-8 w-6 h-6 bg-primary/20 rounded-md rotate-45"
          animate={{
            x: isHovered ? mousePosition.x * 60 : 0,
            y: isHovered ? mousePosition.y * 60 : 0,
            rotate: isHovered ? 45 + mousePosition.x * 20 : 45,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />
      </div>
    </motion.div>
  );
}
