import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import one_percent from '../assets/images/one_percent.png';
import future_brands from '../assets/images/future_brands.png';

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* One Percent Link */}
      <Link to="/onePercent" className={styles.oneP}>
        <img
          src={one_percent}
          alt="One Percent"
          style={{ width: 100, height: 100 }}
        />
        <div className={styles.btnf}>
          Know more about One Percent
        </div>
      </Link>

      {/* Future Brands Link */}
      <Link to="/onePercent" className={styles.oneP}>
        <img
          src={future_brands}
          alt="Future Brands"
          style={{ width: 60, height: 60 }}
        />
        <div className={styles.btnf}>
          Know more about Future Brands
        </div>
      </Link>
    </div>
  );
};

export default Footer;
