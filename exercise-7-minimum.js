function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var numbers = []

  for (var i = 1; i <= angka; i++) {
    var temp = [];
    if (angka % i === 0) {
      temp.push(i);
      numbers.push(temp);
    }
  }

  var factor = [];
  var len = 0;

  for (var i = 0; i < (numbers.length / 2); i++) {
    factor[i] = numbers[i].concat(numbers[numbers.length - 1 - i]).join();
    String(factor[i].concat());
  }

  return factor[0].length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
