const coins = { USD: '$', BTC: 'Ƀ', ETH: 'Ξ', BCH: ''};

export function unit(v, coin) {
  return v && (coin === 'ETH' || coin === 'ETC' ? '/M/Day' : '/T/Day');
}

export function price(v, coin = 'USD', d = 4) {
  const i = Math.floor(v);
  const ip = i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const pp = (v - i).toFixed(d).replace('0.', '');
  return v && `${coins[coin]}${ip}.${pp}`;
}

export function percent(v, d = 0) {
  return v && (v * 100).toFixed(d) + '%';
}
