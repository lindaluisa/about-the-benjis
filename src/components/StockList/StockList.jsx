import React from "react";

import styles from './StockList.module.css';

export const StockList = ({stocks}) => {

  const renderListItems = () => {
    return stocks.map(stock => {
      return (
        <li className={styles.stockLisstItem} key={stocks.ticker}>
          <div className={styles.listItemName}>{stock.name}</div>
          <div className={styles.listItemTicker}>{stock.ticker}</div>
          <div className={styles.listItemAsk}>{stock.ask}</div>
          <div className={styles.listItemBid}>{stock.bid}</div>
          <div className={styles.listItemDps}>
            {getDividendPerShare(stock)}
          </div>
          <div className={styles.listItemDpsSpent}>
            {getDividendPer1000Spent(stock)}
          </div>
          <div className={styles.listItemPe}>
            {getStockPe(stock)}
          </div>
          <div className={styles.listItemSector}>{stock.sector}</div>
        </li>
      );
    });
  };

  const getDividendPerShare = (stock) => {
    return 22;
  };

  const getDividendPer1000Spent = (stock) => {
    return 200;
  };

  const getStockPe = (stock) => {
    return  15;
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
        <div className={styles.dpsHeader}>Dividend per share</div>
        <div className={styles.dpsspentHeader}>Dividend per 1000 spent</div>
        <div className={styles.peHeader}>P/E</div>
        <div className={styles.sectorHeader}>Sector</div>
      </div>
        <ul className={styles.StockList}>
          {renderListItems()}
        </ul>
    </div>
  );
};

export default StockList;
