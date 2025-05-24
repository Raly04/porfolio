import { motion } from "framer-motion";

export default function SocialMedia() {

  const openTab = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Raly04",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6">
          <path
            d="M16 3a13 13 0 0 0-3.46 25.53 1 1 0 1 0 .53-1.92 11 11 0 1 1 7-.4 15.85 15.85 0 0 0-.3-3.92A6.27 6.27 0 0 0 24.68 16a6.42 6.42 0 0 0-1.05-3.87 7.09 7.09 0 0 0-.4-3.36 1 1 0 0 0-1.1-.67 8 8 0 0 0-3.37 1.28A11.35 11.35 0 0 0 16 9a13.09 13.09 0 0 0-3 .43 5.74 5.74 0 0 0-3.38-1.18 1 1 0 0 0-1 .66 7.06 7.06 0 0 0-.37 3.19A7.15 7.15 0 0 0 7.2 16a6.66 6.66 0 0 0 5 6.28 7.43 7.43 0 0 0-.15.79c-1 .06-1.58-.55-2.32-1.48a3.45 3.45 0 0 0-1.94-1.53 1 1 0 0 0-1.15.76A1 1 0 0 0 7.35 22c.16 0 .55.52.77.81a4.74 4.74 0 0 0 3.75 2.25 4.83 4.83 0 0 0 1.3-.18 1 1 0 0 0 .29-.14.72.72 0 0 0 .18-.21.34.34 0 0 0 .08-.09.85.85 0 0 0 .06-.17 1.52 1.52 0 0 0 .06-.2 4.11 4.11 0 0 1 .46-1.91 1 1 0 0 0-.76-1.65A4.6 4.6 0 0 1 9.2 16a4.84 4.84 0 0 1 .87-3 1 1 0 0 0 .24-.83 5 5 0 0 1 0-1.85 3.59 3.59 0 0 1 1.74.92 1 1 0 0 0 1 .23A12.49 12.49 0 0 1 16 11a9.91 9.91 0 0 1 2.65.43 1 1 0 0 0 1-.18 5 5 0 0 1 2-1 4.11 4.11 0 0 1 0 1.91 1.05 1.05 0 0 0 .32 1 4 4 0 0 1 .71 2.84 4.29 4.29 0 0 1-4.41 4.46 1 1 0 0 0-.94.65 1 1 0 0 0 .28 1.11c.59.51.5 4 .47 5.36a1 1 0 0 0 .38.81 1 1 0 0 0 .62.21 1.07 1.07 0 0 0 .25 0A13 13 0 0 0 16 3Z"
            fill="currentColor"
          />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/raly-andry-ny-aina-kadmiel-1768aa280/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6">
          <path
            d="M6.5 3A3.5 3.5 0 1 0 10 6.5 3.5 3.5 0 0 0 6.5 3zm0 5A1.5 1.5 0 1 1 8 6.5 1.5 1.5 0 0 1 6.5 8zM9 11H4a1 1 0 0 0 0 2h4v14H5V16a1 1 0 0 0-2 0v12a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1zm18.34 1.68A5.94 5.94 0 0 0 23 11h-1a7.84 7.84 0 0 0-4 .89 1 1 0 0 0-1-.89h-5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-9a2 2 0 0 1 4 0v9a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V17a5.9 5.9 0 0 0-1.66-4.32zM27 27h-3v-8a4 4 0 0 0-8 0v8h-3V13h3v1a1 1 0 0 0 .62.92 1 1 0 0 0 1.09-.21c.95-1 1.7-1.71 4.29-1.71h1a4 4 0 0 1 2.92 1.09A4 4 0 0 1 27 17z"
            fill="currentColor"
          />
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/nyaina.raly/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6">
          <path
            d="M24 3H8a5 5 0 0 0-5 5v16a5 5 0 0 0 5 5h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1v-2h1a1 1 0 0 0 1-1v-3.5a2.5 2.5 0 0 1 2.5-2.5H22v2h-1a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h1.72l-.5 2H20a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-3h1a1 1 0 0 0 1-.76l1-4a1 1 0 0 0-.18-.86A1 1 0 0 0 23 15h-2v-1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-3.5a4.51 4.51 0 0 0-4.5 4.5V15h-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v6H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3h-4a1 1 0 0 0 0 2h4a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z"
            fill="currentColor"
          />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="fixed left-6 top-1/3 transform -translate-y-1/3 z-40 hidden xl:flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top line */}
      <motion.div
        className="w-px h-16 bg-gradient-to-b from-transparent to-primary/30"
        initial={{ height: 0 }}
        animate={{ height: 64 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

      {/* Social links */}
      <div className="flex flex-col items-center space-y-4 py-4">
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.2,
              y: -3,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.button
              onClick={() => openTab(link.url)}
              className="group relative p-3 text-secondary hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/10 backdrop-blur-sm border border-transparent hover:border-primary/30"
              whileHover={{
                boxShadow: "0 8px 25px rgba(0, 173, 181, 0.3)",
              }}
              aria-label={`Visit ${link.name}`}
            >
              {link.icon}
              
              {/* Tooltip */}
              <motion.div
                className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-primary text-background text-sm rounded-lg font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-primary" />
              </motion.div>
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Bottom line */}
      <motion.div
        className="w-px h-16 bg-gradient-to-t from-transparent to-primary/30"
        initial={{ height: 0 }}
        animate={{ height: 64 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      />

      {/* Floating dots animation */}
      <motion.div
        className="absolute -right-2 top-1/2 w-1 h-1 bg-primary rounded-full"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
