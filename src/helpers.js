// stocks: array of objects in the stocks array
export const sortStocksByDividendYield = (stocks) => { 
  const date = new Date();
  const year = date.getFullYear();
  console.log('stocks', stocks);
  console.log(year);

  const sorted = stocks.sort((stockA, stockB) => {
    return stockB.dividends[year] - stockA.dividends[year];
  });

  console.log('sorted', sorted.slice(0,5) );
  return sorted.slice(0,5); //only 5 stocks
}


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

export const getInfoStockCardData = (descriptor, stocks) => {
  if (descriptor === "growth") {
    return calculateDividendGrowthStock(stocks)
  } else if ( descriptor === "yieldCurrent") {
    return calculateDividendCurrent(stocks)
  } else if ( descriptor === "yieldHistory") {
    return calculateDividendStockCompounded(stocks)
  }
}

export const calculateDividendGrowthStock = (stocks) =>{
  const sortedByGrowth = stocks
  .map(stock => {
    return calculateDividendGrowth(stock)
  })
  .sort((stockA, stockB) => {
    return stockB.growth - stockA.growth
  })
  return {
    ticker: sortedByGrowth[0].ticker,
    amount: sortedByGrowth[0].growth
  }
}
  
  export const calculateDividendCurrent = (stocks) => {
  
  const sorted = sortStocksByDividendYield(stocks);
  const year = getCurrentYear();
  return  {
    ticker: sorted[0].ticker,
    amount: sorted[0].dividends[year]
  };
} 

export const calculateDividendStockCompounded = (stocks) =>{
  const sortedByCompoundedYield = stocks
  .map(stock => {
    return calculateTotalDividend(stock)
  })
  .sort((stockA, stockB) => {
    return stockB.total - stockA.total
  })

  return {
    ticker: sortedByCompoundedYield[0].ticker,
    amount: sortedByCompoundedYield[0].total
  }
} 

export const calculateTotalDividend = (stock) => {
  let total = 0;
  Object.keys(stock.dividends).forEach((key) => {
    total += stock.dividends[key]
  })
  stock.total = total
  return stock;
}

export const calculateDividendGrowth = (stock) => {
  const year = getCurrentYear();
  const comparisonYear = year - 3;
  const total = stock.dividends[year] - stock.dividends[comparisonYear];
  stock.growth = total;
  return stock;
}
