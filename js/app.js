'use strict';
function updateExchangeRates(update) {
    const date = document.getElementById('date');
    date.textContent = update.date;

    const usdSellRate = document.getElementById('usd-sell-rate');
    usdSellRate.textContent = update.usd.sellRate;
    const usdBuyRate = document.getElementById('usd-buy-rate');
    usdBuyRate.textContent = update.usd.buyRate;

    const eurSellRate = document.getElementById('eur-sell-rate');
    eurSellRate.textContent = update.eur.sellRate;
    const eurBuyRate = document.getElementById('eur-buy-rate');
    eurBuyRate.textContent = update.eur.buyRate;
}
