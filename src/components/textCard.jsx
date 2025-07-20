
import { motion } from 'framer-motion';

const AnimatedLine = ({ text, delay }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      style={{ marginBottom: 12 }}
    >
      {text}
    </motion.p>
  );
};

export default AnimatedLine;
