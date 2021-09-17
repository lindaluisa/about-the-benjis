import React, { useEffect } from "react";

import Select from "../Select/Select.jsx";
import StockListItem from "./StockListItem/StockListItem.jsx";
import { 
  sortStocksByDY,
  sortStocksByOverallDY
} from "../../helpers";

// Styles
import styles from './StockList.module.css';

export const StockList = ({ stocks, setStocks }) => {
  // default when app boots up; array empty when booting; we need stocks when rendering
  useEffect(() => {
    setStocksByDividendYieldCurrentYear();
  }, []);

  const renderListItems = () => {
    return stocks.map((stock) => (
      <StockListItem stock={stock} key={stock.ticker} />
    ));
  };

  const getSelectOptions = () => {
    return [
      {
        displayValue: "Highest dividend yield 2021",
        value: "dividendYieldCurrentYear"
      },
      {
        displayValue: "Highest dividend yield overall",
        value: "dividendYieldOverall"
      },
    ];
  };

  const onSelectChange = (e) => {
    const selectionValueDisplayed = e.target.value; 

    if (selectionValueDisplayed === "dividendYieldOverall") {
      setStocksByDividendYieldOverall();
    } else if (selectionValueDisplayed === "dividendYieldCurrentYear") {
      setStocksByDividendYieldCurrentYear();
    };
  };


  const setStocksByDividendYieldOverall = () => {
    const sorted = sortStocksByOverallDY(stocks);
    setStocks(sorted);
  }
  
  const setStocksByDividendYieldCurrentYear = () => {
    const sorted = sortStocksByDY(stocks);
    setStocks(sorted); 
  }


  return (
    <div className={styles.stockListContainer}>

      <div className={styles.header}>
          <h5>Frankfurt Exchange</h5>
          <Select 
            options={getSelectOptions()} 
            onChange={onSelectChange}>
          </Select>
      </div>

      <div className={styles.listHeader}>
        <div className={styles.nameHeader}>Name</div>
        <div className={styles.tickerHeader}>Ticker</div>
        <div className={styles.askHeader}>Ask</div>
        <div className={styles.bidHeader}>Bid</div>
        <div className={styles.dpsHeader}>Dividend per 1000 spent</div>
        <div className={styles.dpsspentHeader}>Dividend per 1000 spent</div>
        <div className={styles.peHeader}>P/E</div>
      </div>

      <div>
        <ul className={styles.stockList}>{renderListItems()}</ul>
      </div>

    </div>
  );
};

export default StockList;
