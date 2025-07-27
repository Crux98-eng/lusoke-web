import React from 'react';
import styles from './onepercent.module.css';
import auban from '../assets/images/auban.jpg';
import future1 from '../assets/images/future1.jpg';
import future2 from '../assets/images/future2.jpg';
import one_percent_logo from '../assets/images/one_percent_logo.jpg';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const services = [
  { title: 'Auban Finance', image: auban,contact:'+260774047431?text=Hi, I came across your brand through Christopher Lusoke`s website. I`d like to know more about your services and how we can work together',name:'Inquire' ,desc:'We partnered with Auban Finance, a financial services brand specializing in solutions like loans and access to capital. Through this partnership, we introduced the notion of investments into their model — a shift that has elevated the company’s impact and created more opportunities for growth. Together, we’ve helped many individuals improve their financial position by giving them the opportunity to invest and and yield massive ROIs.'},
  { title: 'Graphics designing', image: future1,contact:'+260970801919?text=Hi, I came across your brand through Christopher Lusokes`s website. I`d like to know more about your services and how we can work together' , name: 'Consult',desc:'We work closely with Future Brands, a creative agency that plays a key role in bringing our vision to life visually. From designing professional YouTube thumbnails that strengthen our online presence, to creating clean graphics and impactful websites, their expertise allows us to focus on our mission while they ensure everything we present to the world looks polished and aligned with our brand. This partnership reflects our belief in combining talents to build something greater.' },
  { title: 'Growth Planning', image: future2, contact:'+260970801919?text=Hi, I came across your brand through Christopher Lusoke`s website. I`d like to know more about your services and how we can work together',name: 'Enroll',desc: 'Together with Future Brands, we’ve expanded beyond creative projects into education and skill development. We now offer lessons in Computer Science courses such as C++ programming, Digital Electronics, and Circuit Design. These are conducted through engaging group sessions and personalized one‑on‑one physical classes. Building on this success, we are now scaling into online learning, giving students and enthusiasts from around the world the opportunity to gain practical skills and grow their technical expertise, no matter where they are.'  },
  { title: 'One Percent Community', image: one_percent_logo  ,contact:'+260777639624?text=Hi, I came across your community through Christopher Lusoke`s website. I`d like to know more about your services and how we can work together',name: 'Join Community', desc: 'Through the One Percent Community, we’ve created a powerful hub that brings together everything we stand for — mindset, confidence, and financial growth. This community is built through partnerships with entrepreneurs and investors who share a vision of raising individuals to their highest potential. Inside the One Percent Community, members gain access to mindset coaching, personal growth sessions, financial literacy guidance, and a supportive environment that helps them build self-belief and clarity. Through group discussions, one-on-one mentorship, and curated events, we are creating a space where individuals can unlock their full potential and step confidently into their goals.'},
];

const whatsappLink = 'https://wa.me';

const Onepercent = () => {
  return (
    <div className={styles.container}>
      <Link to='/' className={styles.home_link}><HomeIcon  />  Home</Link>
      <h1 className={styles.title}>Partnerships</h1>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={ styles.card}>
            <img src={service.image} alt={service.title} className={styles.image} />
            <h2 className={styles.cardTitle}>{service.title}</h2>
            <details className={styles.description}>
                <summary>Partnership Details</summary>
              {service.desc}</details>
            <a
              href={`${whatsappLink}/${service.contact}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <WhatsAppIcon  style={{width:30,height:30}}/> {' '}
              {service.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onepercent;
