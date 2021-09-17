import {
  getCurrentYear,
  sortStocksByDY,
  sortStocksByOverallDY,
  sortStocksByYieldGrowth,
  calcTotalDividends,
  calcGrowth,
} from "../../helpers";

export const getTopFiveDividendStocks = (stocks) => {
  const sorted = sortStocksByDY(stocks);
  const year = getCurrentYear();

  if (sorted.length === 0) return [];

  return sorted.slice(0,5).map((stock) => {
    return {
      ticker: stock.ticker,
      name: stock.name,
      amount: stock.dividends[year]
    }
  });
};

export const getInfoStockCardData = (infoCardIdentifier, stocks) => {
  if (infoCardIdentifier === "growth") {
    return calcDividendGrowthStock(stocks);
  } else if ( infoCardIdentifier === "yieldCurrent") {
    return calcDividendStockCurrentYear(stocks);
  } else if ( infoCardIdentifier === "yieldOverall") {
    return calcDividendStockOverall(stocks);
  }
}

// Calculations 
export const calcDividendStockCurrentYear = (stocks) => {
  const sorted = sortStocksByDY(stocks);
  const year = getCurrentYear();

  if (sorted.length === 0) return {};

  return  {
    ticker: sorted[0].ticker,
    amount: sorted[0].dividends[year]
  };
};
  
export const calcDividendStockOverall = (stocks) =>{
  const sortedByOverallYield = sortStocksByOverallDY(stocks);

  if (sortedByOverallYield.length === 0) return {};

  return {
    ticker: sortedByOverallYield[0].ticker,
    amount: calcTotalDividends(sortedByOverallYield[0])
  };
};

export const calcDividendGrowthStock = (stocks) => {
  const sortedByGrowth = sortStocksByYieldGrowth(stocks);

  if (sortedByGrowth.length === 0) return {}; // when the app boots up the array is empty

  return {
    ticker: sortedByGrowth[0].ticker,
    amount: calcGrowth(sortedByGrowth[0])
  };
};

