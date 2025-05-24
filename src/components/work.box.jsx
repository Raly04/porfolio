import MyButton from "./my.button";
import openIcon from "../assets/component.svg";
import secretIcon from "../assets/lock.svg";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function WorkBox({ link, image, description, title, technologies, isSecret, featured }) {

  const gotToGithub = () => {
    window.open(link);
  };

  return (
    <motion.div 
      className={`group relative bg-background border border-secondary/30 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 ${featured ? 'ring-2 ring-primary/20' : ''}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-primary text-background px-3 py-1 rounded-full text-xs font-semibold">
          Featured
        </div>
      )}

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        {/* Image container with better aspect ratio */}
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Technologies tags */}
        <div className="p-4 border-b border-secondary/20">
          <div className="flex flex-wrap gap-2">
            {technologies?.split(' ').map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-secondary leading-relaxed mb-6">
            {description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {!isSecret ? (
              <MyButton
                borderColor="primary"
                bg="primary"
                textColor="background"
                text="View Code"
                action={gotToGithub}
                img={openIcon}
                className="flex-1 min-w-0"
              />
            ) : (
              <MyButton
                borderColor="secondary"
                bg="background"
                textColor="secondary"
                text="Private Repo"
                action={() => console.log("This repo is private")}
                img={secretIcon}
                className="flex-1 min-w-0"
                disabled={true}
              />
            )}
          </div>
        </div>

        {/* Hover effect indicator */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export default WorkBox;
