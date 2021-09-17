// SORTING
export const sortStocksByDY = (stocks) => {
  const stockCopy = [...stocks]; 
  const year = getCurrentYear();

  const sorted = stockCopy.sort((stockA, stockB) => {
    return stockB.dividends[year] - stockA.dividends[year];
  });

  return sorted;
};

export const getCurrentYear = () => {
  const date = new Date();
  const year = date.getFullYear();

  return year;
}

const sortStocks = (stocks, sortingValueFunc) => {
  const stocksCopy = [...stocks];

  const sortedByValue = stocksCopy.sort((stockA, stockB) => {
    const stockASortingValue = sortingValueFunc(stockA);
    const stockBSortingValue = sortingValueFunc(stockB);

    if (stockBSortingValue > stockASortingValue) {
      return 1;
    } else if (stockBSortingValue < stockASortingValue) {
      return -1;
    }

    return 0;
  });

  return sortedByValue;
};


export const sortStocksByOverallDY = (stocks) => {
  return sortStocks(stocks, calcTotalDividends);
}

export const sortStocksByYieldGrowth = (stocks) => {
  return sortStocks(stocks, calcGrowth);

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




