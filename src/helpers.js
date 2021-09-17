export const getCurrentYear = () => {
  const date = new Date();
  const year = date.getFullYear();

  return year;
}

// SORTING
export const sortStocksByDY = (stocks) => {
  const stockCopy = [...stocks]; 
  const year = getCurrentYear();

  const sorted = stockCopy.sort((stockA, stockB) => {
    return stockB.dividends[year] - stockA.dividends[year];
  });

  return sorted;
};


export const sortStocksByOverallDY = (stocks) => {
  const stockCopy = [...stocks];

  const sortedByOverallYield = stockCopy.sort((stockA, stockB) => {
    const stockATotalDividends = calcTotalDividends(stockA);
    const stockBTotalDividends = calcTotalDividends(stockB);

    if ( stockBTotalDividends > stockATotalDividends ) {
      return 1;
    } else if ( stockBTotalDividends > stockATotalDividends ) {
      return -1;
    }
      return 0;
    });
  
  return sortedByOverallYield;
}

export const sortStocksByYieldGrowth = (stocks) => {
  // return sortStocks(stocks, calcGrowth);
  const stocksCopy = [...stocks];

  const sortedByGrowth = stocksCopy.sort((stockA, stockB) => {
    const stockASortingGrowth = calcGrowth(stockA);
    const stockBSortingGrowth = calcGrowth(stockB);

    if (stockBSortingGrowth > stockASortingGrowth) {
      return 1;
    } else if (stockBSortingGrowth < stockASortingGrowth) {
      return -1;
    }

    return 0;
  });

  return sortedByGrowth;

};

// Calculate
export const calcTotalDividends = (stock) => {
  let total = 0;
  Object.keys(stock.dividends).forEach((key) => {
    total += stock.dividends[key]
  });

  return total;
}

export const calcGrowth = (stock) => {
  const year = getCurrentYear();
  const comparisonYear = year - 3;

  const total = stock.dividends[year] - stock.dividends[comparisonYear];

  return total;
};




