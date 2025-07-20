import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div
      style={{
        width: '100%',
        height: '300px',
        marginTop: 60,
        zIndex: 1,
      }}
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

      <p style={{ fontSize: '34pt', scrollBehavior: 'inherit' }}>
        We help individuals unlock their potential
        Build strong rich mindsets, improve their financial performance
        and most importantly hitting
        <span style={{ color: '#1E90FF', fontSize: '34pt', fontWeight: 600 }}>
          {' '}90%
        </span> of their long-term goals
      </p>
    </div>
  );
};

export default Home;
