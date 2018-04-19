function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var numbers = []

  for (var i = 1; i <= angka; i++) {
    var temp = [];
    if (angka % i === 0) {
      var pembagi = 0;
      temp.push(i);
      pembagi = angka / i;
      //i = 1, pembagi 24

      var str = i + '' + pembagi;

      //numbers.push(str);
      numbers.push(str.length)
    }
  }

  // console.log(numbers);

  for (var i = 0; i < numbers.length; i++) {
    for (var j = i+1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        var temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }

  // console.log(numbers);

  return numbers[0];
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
