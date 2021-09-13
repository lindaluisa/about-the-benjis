import React from "react";
import Header from "./components/Header/Header";
import Subheader from "./components/Subheader/Subheader";
import ExchangeList from "./components/ExchangeList/ExchangeList";
import SortedDividendStockList from "./components/SortedDividendStockList/SortedDividendStockList";
import InfoCard from "./components/InfoCard/InfoCard";

import styles from "./App.module.css";

import { getTopFiveDividendStocks } from "./helpers";
import data from './data.js';


function App() {
  
  return (
    <div className="App">
      <Header />

      <Subheader>
        <ExchangeList exchanges={data.exchanges}/>
        <SortedDividendStockList 
          stocks={getTopFiveDividendStocks(data.stocks)}
        />
        <div className={styles.infoCardContainer}>
          <InfoCard title="Highest dividend yield in current year" stock={{ticker:'VEI', amount: 23}}>
          </InfoCard>
          <InfoCard title="Highest dividend yield in the past 3 years" stock={{ticker:'VEI', amount: 23}} highlightMode>
          </InfoCard>
        </div>
      </Subheader>
    </div>
  );
}

export default App;
