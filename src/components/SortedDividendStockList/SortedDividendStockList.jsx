import React from "react";

import styles from './SortedDividendStockList.module.css'

const SortedDividendStockList = (props) => {

  const renderListItems = () => {
    return props.stocks.map((stock) => {
        return ( 
          <li className={styles.stockItem} key={stock.ticker}>
            <div>{stock.name}</div>
            <div>{stock.amount} NOK</div>
          </li>
        );
      });
    };

  return (
    <div className={styles.stockContainer}>
      <h4 className={styles.stockTitle}>Top 5 dividend yield stocks</h4>
      <ul className={styles.stockList}>{renderListItems()}</ul>
    </div>
  );
}

export default SortedDividendStockList;