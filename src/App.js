import React from "react";
import Header from "./components/Header/Header";
import Subheader from "./components/Subheader/Subheader";
import ExchangeList from "./components/ExchangeList/ExchangeList";
import SortedDividendStockList from "./components/SortedDividendStockList/SortedDividendStockList";
import InfoCard from "./components/InfoCard/InfoCard";

import styles from "./App.module.css";

import { getTopFiveDividendStocks, 
         getInfoStockCardData,
          } from "./helpers";
import data from './data.js';


function App() {
  // console.log(calculateDividendHistory(data.stocks));

  return (
    <div className="App">
     
      <Header />

      <Subheader>
        <div className={styles.infoCardContainer}>
        <ExchangeList exchanges={data.exchanges}/>
        <SortedDividendStockList 
          stocks={getTopFiveDividendStocks(data.stocks)}
        />
        </div>

        {/* <div className={styles.infoCardContainer3}> */}
            <div className={styles.infoCardContainer2}>
              <InfoCard title="Highest dividend yield in current year" 
                stock={getInfoStockCardData("yieldCurrent", data.stocks)}>
              </InfoCard>
              <InfoCard title="Highest dividend yield in the past 3 years" 
                stock={getInfoStockCardData("growth", data.stocks)}>
              </InfoCard>
            {/* </div> */}

            <InfoCard title="Highest dividend yield all time" 
              stock={getInfoStockCardData("yieldHistory", data.stocks)}
              highlightMode>
            </InfoCard>
          </div>

      </Subheader>
      </div>
  ); 
}

export default App;
