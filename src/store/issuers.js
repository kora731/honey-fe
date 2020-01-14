module.exports = {
  state: {
    data: {
      bitdeer: {
        guaranteedUptime: '-',
        deliveryTime: 'after 1 day',
        acceptedPayment: 'BTC/BCH/ETH/LTC\nUSDT/TETHER/USDT(OMNI)',
        payout: '$coin'
      },
      btccom: {
        guaranteedUptime: '100%',
        deliveryTime: 'after 1 day',
        acceptedPayment: '-',
        payout: '$coin'
      },
      genesis_mining: {
        guaranteedUptime: '100%',
        deliveryTime: 'immediately',
        acceptedPayment: 'CreditCard(USD)\nBTC/LTC/DOGE/DASH/ZCASH/BCH',
        payout: 'Default: $coin\nCan choose to swap:\nBTC/DASH/DOGE/ZEC/BCH/BTG'
      },
      oxbtc: {
        guaranteedUptime: '-',
        deliveryTime: 'after 2 days',
        acceptedPayment: 'BTC/ETH/LTC\nUSDT/Credit Card',
        payout: '$coin'
      },
      viabtc: {
        guaranteedUptime: '100%',
        deliveryTime: 'immediately',
        acceptedPayment: 'BTC',
        payout: '$coin'
      },
      wayi: {
        guaranteedUptime: '100%',
        deliveryTime: 'after 1 day',
        acceptedPayment: 'CNY/USDT',
        payout: '$coin/CNY'
      },
      iqmining: {
        guaranteedUptime: '-',
        deliveryTime: 'after 1 day',
        acceptedPayment: 'Visa/Perfect money\nBTC/Altcoins',
        payout: '$coin'
      },
      miningzoo: {
        guaranteedUptime: '100%',
        deliveryTime: 'after 1 day',
        deliveryTimeFutures: 'after 30 days',
        acceptedPayment: '-',
        payout: '$coin'
      }
    }
  }
};