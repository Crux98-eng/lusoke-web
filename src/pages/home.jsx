import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './home.module.css'
const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Function to handle show/hide cycle
    const toggleText = () => {
      setShowText(true);
      setTimeout(() => setShowText(false), 10000); // hide after 60 seconds
    };

    toggleText(); // initial show

    const interval = setInterval(toggleText, 10000); // run every 30 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className={styles.container}
     
    >
      <AnimatePresence>
        {showText && (
          <motion.h1
            key="animated-text"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ fontSize: '30pt', marginBottom: 20 }}
          >
            welcome home now
          </motion.h1>
        )}
      </AnimatePresence>

      <p>
        We help individuals unlock their potential Build strong rich mindsets, improve their financial performance
        and most importantly hitting  
        <span>
          {' '}  90%
        </span> of their long-term goals
      </p>
    </div>
  );
};

export default Home;
