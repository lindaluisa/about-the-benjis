import React, { useEffect, useState} from "react";
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

import Header from "./components/Header/Header";
import Dashboard from './pages/Dashboard/Dashboard';
import HomeView from "./pages/HomeView/HomeView";

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
      <Header />

      <Router>

            <Switch>

              <Route
                path="/"
                render={() => 
                  
                <HomeView />
                }
                  exact
              />

              <Route
                path="/stocks"
                render={(props) => (
                  <Dashboard 
                    exchanges={exchanges} 
                    stocks={stocks} 
                    setStocks={setStocks}
                    {...props}
                    exact
                  />
                )}
              />

            </Switch>

      </Router>
    </div>

  ); 
}

export default App;
