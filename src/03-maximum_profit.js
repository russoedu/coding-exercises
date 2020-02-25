/**
 * Find the biggest possible profit from a stock price list
 * (buy on low, sell on high)
 * Ex:
 * stock_prices = [3, 12, 2, 8, 3, 8, 5, 12]
 *                        ^              ^
 *                        Buy            Sell = Profit = 10
 *                 0  1   2  3  4  5  6  7
 */

/**
 * Get the maximum possible profit from a list of sequential prices of
 * a stock.
 * @param {array} prices
 */
function getBiggerProfit(prices) {
  const result = {
    maxProfit: 0,
    buyAt: 0,
    sellAt: 0
  };
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let newProfit = Math.max(prices[j] - prices[i], result.maxProfit);
      if (newProfit > result.maxProfit) {
        result.maxProfit = newProfit;
        result.buyAt = i;
        result.sellAt = j;
      }
    }
  }
  console.log(result);
  return result;
}

const stockPrices = [3, 12, 2, 8, 3, 8, 5, 12];
getBiggerProfit(stockPrices);
