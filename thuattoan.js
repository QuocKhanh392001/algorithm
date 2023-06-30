function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  }
  function findMin() {
    let min = Infinity;
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  }
  function miniMaxSum(a,b,c,d,e) {
    let suma = b + c + d + e;
    let sumb = a + c + d + e;
    let sumc = a + b + d + e;
    let sumd = a + b + c + e;
    let sume = a + b + c + d;
    let result = findMax(suma, sumb, sumc, sumd, sume) + " " + findMin(suma, sumb, sumc, sumd, sume);
    return result ;
  }