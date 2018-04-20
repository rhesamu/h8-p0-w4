// 5 + 12
// 1 + 2
// 2 --> return 2

function totalDigitRekursif(angka) {
  var arr = String(angka).split('');
  //console.log(arr);

  if (arr.length === 1) {
    return angka;
  }
  else {
    var first = Number(arr[0]);
    var newArr = arr.slice(1);
    var num = newArr.join('');
    num = Number(num);
  }
  return (first + totalDigitRekursif(num))
}

/*
//CARA LEBIH NGGA RIBET
  var str = String(angka);

  if (str.length === 1) {
    return angka;
  } else {
    return Number(str[0]) + totalDigitRekursif(Number(str.slice(1)))
  }
*/

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
