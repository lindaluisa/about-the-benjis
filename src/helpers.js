// stocks: array of objects in the stocks array

export const sortStocksByDividendYield = (stocks) => { 
  const date = new Date()
  const year = date.getFullYear()
  console.log(stocks);
  console.log(year);

  const sorted = stocks.sort((stockA, stockB) => {
    return stockB.dividends[year] - stockA.dividends[year];
  });

  console.log('sorted', sorted);

  return sorted.slice(0,5) //only 5 stocks
;}


export const getTopFiveDividendStocks = (stocks) => {
  const sorted = sortStocksByDividendYield(stocks)
  const year = getCurrentYear();

  return sorted.slice(0,5).map (stock => {
    return {
      ticker: stock.ticker,
      name: stock.name,
      amount: stock.dividends[year]
    }
  })
}

export const getCurrentYear = () => {
  const date = new Date();
  const year = date.getFullYear();

  return year
}