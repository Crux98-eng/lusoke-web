import React from 'react'
import styles from './services.module.css'
import business from '../assets/images/business.jpeg'
const Services = () => {
    return (
        <div className={styles.outer}>
        <div className={styles.main_container}>

            {/* text side right */}
            <div className={styles.firstContainer}>
                <h4>  Consultant</h4>
                <p>

                    Working closely with individuals to help
                    them gain clarity, I set intentional goals and
                    create practical strategies for personal and
                    professional growth Through one-on-one
                    guidance, empower people to overcome
                    challenges build confidence and take bold
                    steps toward their purpose
                </p>
            </div>
            {/* image side left */}
            <div className={styles.secondContainer}>
                <img src={business} alt='business' className={styles.image} />
            </div>
        </div>
        </div>
    )
}
export default Services
