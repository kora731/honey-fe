const coins = { USD: '$', BTC: 'Ƀ', ETH: 'Ξ', BCH: ''};

export function unit(v, coin) {
  return v && (coin === 'ETH' || coin === 'ETC' ? '/M/Day' : '/T/Day');
}

export function price(v, coin, d = 4) {
  return v && `${coins[coin]}${(v * 1).toFixed(d)}`;
}

export function percent(v, d = 0) {
  return v && (v * 100).toFixed(d) + '%';
}
