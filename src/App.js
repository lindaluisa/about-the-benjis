import React from "react";
import Header from "./components/Header/Header";
import Subheader from "./components/Subheader/Subheader";
import ExchangeList from "./components/ExchangeList/ExchangeList";
import SortedDividendStockList from "./components/SortedDividendStockList/SortedDividendStockList";


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
      </Subheader>
    </div>
  );
}

export default App;
