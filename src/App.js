import React, { useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';

import data from './data';

function App() {

  const [exchanges, setExchanges] = useState([]);
  const [stocks, setStocks] = useState([]);

    const getData = () => {
      const exchanges = data.exchanges;
      const stocks = data.stocks;

      return {
        exchanges,
        stocks
      };
    };


  useEffect(() => {
    const { exchanges, stocks } = getData();

    setExchanges(exchanges);
    setStocks(stocks);;
  }, [])

  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          render={(props) => (
            <Dashboard 
              exchanges={exchanges} 
              stocks={stocks} 
              setStocks={setStocks}
              {...props}
            />
          )}
        />
        {/* <Route
          path="/stock/:ticker"
          render={(props) => (

          )}
        /> */}
       </Router>
      </div>
  ); 
}

export default App;
