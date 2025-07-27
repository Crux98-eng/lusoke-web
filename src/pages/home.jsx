import React from 'react';

import styles from './home.module.css'
import intro from '../assets/videos/intro.mp4';

const Home = () => {


  return (
    <div className={styles.container} >
    <h1>Shape Your Mind. Shape Your Life</h1>     

      <p>
        We help individuals unlock their potential Build strong rich mindsets, improve their financial performance
        and most importantly hitting  
        <span>
          {' '}  90%
        </span> of their long-term goals
      </p>
    </div>
  );
};

export default Home;
