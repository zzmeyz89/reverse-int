module.exports = function reverse (n) {
    let straight = String(Math.abs(n)).split('');
    let rev  = '';
    for (let i = straight.length-1; i>=0; i--) {
      rev += straight[i];
    }
  return +rev;
}

