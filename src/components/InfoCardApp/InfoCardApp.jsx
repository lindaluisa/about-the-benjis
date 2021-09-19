import React from "react";

import styles from './InfoCardApp.module.css';
import stockImg from './stockmarket.png'


export const InfoCardApp = () => {

  return (
    <div className={styles.infoCardContainer}>
        <h2 className={styles.infoTitle}>Easy to learn. Easy to use.</h2>

        <div className={styles.infoCard}>
            <div className={styles.infoContainer}>
              Trade on a platform trusted by millions of users. Invest in stocks, options, and funds with <span className={styles.brand}>ALL ABOUT THE BENJIS</span>.
            </div>
          </div>
        <div className={styles.infoCard2}>
            <div className={styles.infoContainer}>
              How are stocks traded? Every trade has two sides - a buyer and a seller. The price of a stock can change throughout the day.
            </div>
          </div>




          <div className={styles.cta}>
            Learn more
          </div>
          <img className={styles.stockImg} src={stockImg} alt="Stock Market" />

      
    </div>
  )
}

export default InfoCardApp;