import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChartArea } from '@fortawesome/free-solid-svg-icons'


import {getCurrentYear} from '../../helpers.js'
import styles from './StockList.module.css';

export const StockList = ({stocks}) => {

  const renderListItems = () => {
    return stocks.map(stock => {
      return (
        <li className={styles.stockLisstItem} key={stocks.ticker}>
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
    });
  };

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
    <div className={styles.stockListContainer}>

      <div className={styles.header}>
        <h5>Frankfurt Exchange</h5>
      </div>

      <div className={styles.listHeader}>
        <div className={styles.nameHeader}>Name</div>
        <div className={styles.tickerHeader}>Ticker</div>
        <div className={styles.askHeader}>Ask</div>
        <div className={styles.bidHeader}>Bid</div>
        <div className={styles.dpsHeader}>Dividend p/s</div>
        <div className={styles.dpsspentHeader}>Dividend per 1000 spent</div>
        <div className={styles.peHeader}>P/E</div>
      </div>
      <div>
        <ul className={styles.stockList}>
          {renderListItems()}
        </ul>
      </div>
    </div>
  );
};

export default StockList;
