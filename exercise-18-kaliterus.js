function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var number = String(angka);
  var temp = 1;

  if (number.length === 1) {
    return angka;
  }
  else {
    for(var i = 0; i < number.length; i++) {
      temp = temp * Number(number[i]);
    }
    return kaliTerusRekursif(temp);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
