import PropTypes from "prop-types";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MyButton({
  img,
  borderColor = "primary",
  textColor = "foreground",
  bg = "background",
  text,
  action = () => {},
  className = "",
  disabled = false,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonVariants = {
    idle: {
      scale: 1,
      boxShadow: "0 0 0 0 rgba(0, 173, 181, 0)",
    },
    hovered: {
      scale: 1.05,
      boxShadow: "0 8px 25px -8px rgba(0, 173, 181, 0.3)",
    },
    tapped: {
      scale: 0.95,
    },
  };

  const iconVariants = {
    idle: { x: 0, rotate: 0 },
    hovered: { x: 3, rotate: 5 },
  };

  const textVariants = {
    idle: { x: 0 },
    hovered: { x: img ? -2 : 0 },
  };

  return (
    <motion.button
      type="submit"
      variants={buttonVariants}
      initial="idle"
      whileHover={!disabled ? "hovered" : "idle"}
      whileTap={!disabled ? "tapped" : "idle"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={clsx(
        "relative overflow-hidden group",
        "border-2 transition-all duration-300",
        "flex flex-row items-center justify-center",
        "py-3 px-6 font-semibold rounded-lg",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        {
          [`border-${borderColor}`]: borderColor,
          [`bg-${bg}`]: bg,
          [`text-${textColor}`]: textColor,
          "opacity-50 cursor-not-allowed": disabled,
          "cursor-pointer": !disabled,
        },
        className
      )}
      onClick={!disabled ? action : undefined}
      disabled={disabled}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-primary/10"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Ripple effect overlay */}
      <motion.div
        className="absolute inset-0 bg-primary/20 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1.5 : 0,
          opacity: isHovered ? 0.1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Button content */}
      <div className="relative z-10 flex items-center space-x-2">
        <motion.span
          variants={textVariants}
          className="font-medium tracking-wide"
        >
          {text}
        </motion.span>
        
        {img && (
          <motion.img
            src={img}
            alt=""
            className={`w-4 h-4 text-${textColor} fill-current`}
            variants={iconVariants}
          />
        )}
      </div>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "200%" : "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.button>
  );
}

MyButton.propTypes = {
  img: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  bg: PropTypes.string,
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
