// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

  if (currency <= 0) {
  	return {};
  } else if (currency > 10000) {
  	return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }

  var coins = {
    "H": 50,
    "Q": 25,
    "D": 10,
    "N": 5,
    "P": 1
  };
    
  var coinsSum = {};

  for (var key in coins) {
    if (currency >= coins[key]) {
      coinsSum[key] = Math.floor(currency / coins[key]);
      currency -= coins[key] * coinsSum[key];
    }
  }

  return coinsSum;
}
