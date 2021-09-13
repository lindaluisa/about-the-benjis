import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChartBar, faCoins } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.css';
import avatar from './benji-avatar.jpg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>


          <div className={styles.navContainer}>
            <div className={styles.logoContainer}>
              <h4>All about the benji's</h4>
            </div>
            <ul className={styles.iconList}>
              <li className={styles.iconItem}>
                <a href="/"> 
                  <div className={styles.icon}>
                  <FontAwesomeIcon icon={faChartBar} />
                  </div>
                </a>
              </li>

              <li className={styles.iconItem}>
                <a href="/"> 
                  <div className={styles.icon}>
                  <FontAwesomeIcon icon={faCoins} />
                  </div>
                </a>
              </li>
            </ul>
            <img src={avatar} alt="User Avatar" className={styles.avatar}/>
            <span className={styles.userName}>Linda</span>
        </div>
        
      </div>
      
    </header>
  )
};

export default Header;