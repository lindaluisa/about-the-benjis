import React from "react";

import { getCurrentYear } from "../../../helpers";

import styles from "../StockList.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChartArea } from '@fortawesome/free-solid-svg-icons'

const StockListItem = ({ stock }) => {

  const getDividendPerShare = (stock) => {
    const year = getCurrentYear();
    return stock.dividends[year];
  };

  const getDividendPer1000Spent = (stock) => {
    const dividendPerShare = getDividendPerShare(stock)
    const amountOfStocks= 1000/ stock.ask;

    const total = amountOfStocks * dividendPerShare;
    return total.toFixed(2);
  };

  return (
      <li className={styles.stockListItem} key={stock.ticker}>
        <div className={styles.listIcon}>
          <FontAwesomeIcon icon={faChartArea} />
        </div>
        <div className={styles.listItemName}>{stock.name}</div>
        <div className={styles.listItemTicker}>{stock.ticker}</div>
        <div className={styles.listItemAsk}>{stock.ask}</div>
        <div className={styles.listItemBid}>{stock.bid}</div>
        <div className={styles.listItemDps}>
          {getDividendPerShare(stock)} NOK
        </div>
        <div className={styles.listItemDpsSpent}>
          {getDividendPer1000Spent(stock)} NOK
        </div>
        <div className={styles.listItemPe}>{stock.pe} </div>
      </li>
  );
}

export default StockListItem;