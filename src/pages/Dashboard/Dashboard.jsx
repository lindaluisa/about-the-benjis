import React from "react";
import { ConditionallyRender } from 'react-util-kit';  

// import Header from "../../components/Header/Header";
import Subheader from "../../components/Subheader/Subheader";
import ExchangeList from "../../components/ExchangeList/ExchangeList";
import SortedDividendStockList from "../../components/SortedDividendStockList/SortedDividendStockList";
import InfoCard from "../../components/InfoCard/InfoCard";
import StockList from "../../components/StockList/StockList";

import { getTopFiveDividendStocks, 
         getInfoStockCardData,
          } from "./dashboardHelpers";

import styles from "./Dashboard.module.css";

const Dashboard = ({ exchanges, stocks, setStocks }) => {

  return (
    <>
      <Subheader>

        <div className={styles.infoCardContainer}>
        <ExchangeList exchanges={exchanges}/>
        <InfoCard title="Highest dividend yield in current year" 
                stock={getInfoStockCardData("yieldCurrent", stocks)}>
          </InfoCard>
        </div>

          <div className={styles.infoCardContainer1}>

            <SortedDividendStockList 
              stocks={getTopFiveDividendStocks(stocks)}
            />

              <InfoCard title="Highest dividend yield in the past 3 years" 
                stock={getInfoStockCardData("growth", stocks)}>
              </InfoCard>

          </div>

            <div className={styles.infoCardContainer2}>

              <InfoCard title="Highest dividend yield all time" 
                stock={getInfoStockCardData("yieldOverall", stocks)}
                highlightMode>
              </InfoCard>

            </div>

          <div className={styles.infoCardContainer3}>

            <ConditionallyRender // react-util-kit
              ifTrue={stocks.length}
              show={<StockList stocks={stocks} setStocks={setStocks}/> }
            />

          </div>

      </Subheader>

    </>
  )
}

export default Dashboard;