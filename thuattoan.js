function miniMaxSum(a,b,c,d,e) {
    let suma = b + c + d + e;
    let sumb = a + c + d + e;
    let sumc = a + b + d + e;
    let sumd = a + b + c + e;
    let sume = a + b + c + d;
    let arr = [suma, sumb, sumc, sumd, sume];
    let max = suma;
    let min = suma;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      else if (arr[i] < min) {
        min = arr[i];
      }
    }
    let result = min + " " + max;
    return result ;
  }
