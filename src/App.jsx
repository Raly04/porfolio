import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainContainer from "./components/main.container";
import Loading from "./components/loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="bg-background min-h-screen w-full relative">
      <AnimatePresence>
        {isLoading && (
          <Loading key="loading" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <MainContainer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;