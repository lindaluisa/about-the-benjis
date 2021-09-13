import React from "react";

import styles from './InfoCard.module.css';
import classNames from "classnames";

const InfoCard = ({ title, stock, highlightMode}) => {

  const classes = classNames(styles.infoContainer, {
    [styles.highlightMode]: highlightMode
  });

  return (
    <div className={classes}>
      <h4 className={styles.infoTitle}>{title}</h4>
        <div>
          <p className={styles.infoText}>{stock.ticker}</p>
          <p className={styles.infoText}>{stock.amount}</p>
        </div>
    </div>
  )
}

export default InfoCard;


