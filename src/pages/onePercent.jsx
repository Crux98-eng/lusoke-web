import React from 'react';
import styles from './onepercent.module.css';
import auban from '../assets/images/auban.jpg';
import future1 from '../assets/images/future1.jpg';
import future2 from '../assets/images/future2.jpg';
import book from '../assets/images/book.jpg';
import rich1 from '../assets/images/rich1.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
const services = [
  { title: 'Auban Strategy', image: auban },
  { title: 'Future Coaching', image: future1 },
  { title: 'Growth Planning', image: future2 },
  { title: 'Personal Book Guide', image: book },
  { title: 'Wealth Mindset', image: rich1 },
];

const whatsappLink = `https://wa.me/+260764347454?text=Hi! I'm interested in your service`;

const Onepercent = () => {
  return (
    <div className={styles.container}>
      <Link to='/' className={styles.home_link}><HomeIcon  />  Home</Link>
      <h1 className={styles.title}>Our Services</h1>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <img src={service.image} alt={service.title} className={styles.image} />
            <h2 className={styles.cardTitle}>{service.title}</h2>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <WhatsAppIcon  style={{width:30,height:30}}/> {' '}
               WhatsApp us
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onepercent;
