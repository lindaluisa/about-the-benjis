import React from 'react';

import styles from './Header.module.css';
import avatar from './benji-avatar.jpg';

const Header = () => {
  return (
    <header className={styles.header}>

      <div className={styles.logoContainer}>
        <div className={styles.user}> 
        <h4>All about the benji's</h4>
        </div>
      </div>

        <div className={styles.userContainer}>
        <ul className={styles.iconList}>
          <li className={styles.iconItem}>
            <a href="/"> 
              <div className={styles.icon}>
                L
              </div>
            </a>
          </li>
          <li className={styles.iconItem}>
            <a href="/"> 
              <div className={styles.icon}>
              H
              </div>
            </a>
          </li>
        </ul>
          <img src={avatar} alt="User Avatar" className={styles.avatar}/>
        <span className={styles.userName}>Linda</span>
      </div>
      
    </header>
  )
};

export default Header;