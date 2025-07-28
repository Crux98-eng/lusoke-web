import React from "react";
import styles from './about.module.css'
import aboutbg from '../assets/images/aboutbg.jpg'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
const About = () => {
    const [ref, inView] = useInView({ triggerOnce: true })
    return (
        <div className={styles.outer}>
            <h1 className={styles.header}>ABOUT</h1>
            <div className={styles.container} >


                <div className={styles.imageContainer}>
                    <img src={aboutbg} alt=" about-image" />
                </div>
                <motion.div className={styles.aboutSide}
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: .3 }}
                >

                    <h4 className={styles.subheader}>CHRISTOPHER LUSOKE</h4>
                    <p className={styles.small_text}>
                        

                        Christopher Lusoke is a Strong Rich Mindset builder, collaborative entrepreneur, investor, marketing strategist, speaker, and author. He is passionate about helping people and brands unlock their potential through mindset growth, financial literacy, and actionable strategies.

                        Building a community (One Percent Community) for growth-minded individuals to think bigger, build confidence, and achieve meaningful goals. His work blends entrepreneurship, collaboration, and marketing expertise with a mission to awaken the inner potential in others and drive real impact.

                    </p>

                </motion.div>
            </div>
        </div>
    )
}
export default About