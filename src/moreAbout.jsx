import React from 'react';
import styles from './moreabout.module.css';
import HOME from './assets/images/HOME.jpg'
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';

const WhatsAppButton = ({ message }) => (
  <a
    href={`https://wa.me/+260777639624?text=${encodeURIComponent(message)}`}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.whatsappButton}
  >
    <WhatsAppIcon style={{ marginRight: 8 }} />
    Chat on WhatsApp
  </a>
);

const Section = ({ title, description, showButton }) => (
  <div className={styles.section}>
    <h2>{title}</h2>
    <p>{description}</p>
    {showButton && <WhatsAppButton message={`Hello, I'm interested in your ${title} service.`} />}
  </div>
);

const MoreAbout = () => {
  return (
    <div className={styles.moreAboutPage}>
      {/* Hero Section */}
      <div
        className={styles.heroSection}
        style={{ backgroundImage: `url(${HOME})` }}
      >

        <div className={styles.overlay}>
          <Link to='/' className={styles.home_link}><HomeIcon /> {' '} Home</Link>
          <h1 style={{textAlign:'center'}}>More Services</h1>
        </div>
      </div>

      {/* Info Sections */}
      <div className={styles.contentSections}>
        {/* <Section
          title="Author"
          description="Writer of One Percent—a powerful book focused on goal setting, discipline, and taking consistent action toward success. Writing content that equips readers with practical tools and mindset strategies to break limitations, stay focused, and become part of the top 1% who execute on their goals. (Set to release this October)"
         
        /> */}
        {/* <Section
          title="Coach"
          description="Dedicated to guiding individuals through mindset transformation, goal setting, and personal clarity. Offering personalized support to overcome self-doubt, stay consistent, and take intentional steps toward self-improvement."
         
        /> */}
        {/* <Section
          title="Collaborative Entrepreneur"
          description="Results-driven entrepreneur with experience in launching, scaling, and managing ventures. Passionate about partnering with like-minded individuals to build impactful, sustainable projects."
        /> */}
        {/* <Section
          title="Investor"
          description="Strategic investor supporting small businesses with capital and mentorship. Helping entrepreneurs grow sustainably and achieve long-term success."
        /> */}
        <Section
          title="Marketing Strategist"
          description="Specializing in developing marketing strategies that define the brand message, attract the right audience, and generate measurable growth."
          showButton
        />
        <Section
          title="Speaking"
          description="Delivering inspiring talks on personal development and entrepreneurship—blending real stories with practical tools to ignite action and purpose."
          showButton
        />
        <Section
          title="Consulting"
          description="One-on-one or small group sessions designed to bring clarity, remove roadblocks, and drive personal/professional growth. Actionable plans tailored to your journey."
         showButton
        />
        <Section
          title="Scaling"
          description="Helping startups grow from survival to success by optimizing systems, improving brand presence, and expanding reach without losing focus or identity."
          showButton
        />
      
        <Section
          title="Financial Clarity & Growth"
          description="Providing step-by-step guidance on budgeting, income growth, and financial confidence—so you can build wealth and gain freedom."
          showButton
        />
      </div>
    </div>
  );
};

export default MoreAbout;
