import React from "react";
import styles from './about.module.css'
import aboutbg from '../assets/images/aboutbg.png'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const About = () => {
    const [ref, inView] = useInView({ triggerOnce: true })
    return (
        <div className={styles.outer}>
            <h1 className={styles.header}>ABOUT LUSOKE MINDSET</h1>
        <div className={styles.container} >
        

            <div className={styles.imageContainer}>
                <img src={aboutbg} alt=" about image" />
            </div>
            <motion.div className={styles.aboutSide}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: .3 }}
            >
                
                <h4 className={styles.subheader}>COLLABORATIVE ENTREPRENEUR</h4>
                <p className={styles.small_text}>
                    Results-driven Entrepreneur with hands-on experience in loaunching,scalig and managing successive ventures. 
                    Passionate about colaborating with like-minded individuals who build impactiful projects and drive long-term success.

                </p>
                <button className={styles.btn}>Collaborate </button>
            </motion.div>
        </div>
       </div>
    )
}
export default About