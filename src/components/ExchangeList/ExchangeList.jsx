import React from "react";

import styles from './ExchangeList.module.css';

const ExchangeList = (props) => {


  const renderListItems = () => {
    return props.exchanges.map((exchange) => {
        return (
          <li className={styles.exchangeItem}>
            <div className={styles.exchangeDot}></div>
            <div className={styles.exchangeName}>{exchange.name}</div>
            <div className={styles.exchangeIndex}>{exchange.index}</div>
            <div className={styles.exchangePercentage}>{exchange.change}</div>
          </li>
        );
      });
    };

  return (
    <div className={styles.exchangeContainer}>
      <h4 className={styles.exchangeTitle}>Exchanges</h4>
      <ul className={styles.exchangeList}>{renderListItems()}</ul>
    </div>
  );
};

export default ExchangeList;

