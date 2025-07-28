import React from 'react'
import styles from './services.module.css'
import business from '../assets/images/business.jpeg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Services = () => {
        const [ref, inView] = useInView({ triggerOnce: true })
    return (
        <div className={styles.outer}>
        <div className={styles.main_container}>

            {/* text side right */}
            <motion.div className={styles.firstContainer}
             ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: .3 }}
            >
                <h4 style={{fontSize:16}}>  CONSULTING</h4>
                <p>

                    Working closely with individuals to help
                    them gain clarity, I set intentional goals and
                    create practical strategies for personal and
                    professional growth Through one-on-one
                    guidance, empower people to overcome
                    challenges build confidence and take bold
                    steps toward their purpose
                </p>
            </motion.div>
            {/* image side left */}
            <div className={styles.secondContainer}>
                <img src={business} alt='business' className={styles.image} />
            </div>
        </div>
         <Link to="/moreAbout" className={styles.btn}>MORE SERVICES</Link>
        </div>
    )
}
export default Services
