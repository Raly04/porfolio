import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContainer from "./components/main.container";
import Loading from "./components/loading";
import AllProjects from "./components/all-projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
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
              <Routes>
                <Route path="/" element={<MainContainer />} />
                <Route path="/all-projects" element={<AllProjects />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
