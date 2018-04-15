/**
Reverse All
Implementasikan function reverseAll untuk membalikkan `arr` DAN setiap elemen string yang ada di
dalamnya.
Contoh:
- input: ['devil jin', 'geese', 'akuma']
  output: ['amuka', 'eseeg', 'nij lived']

- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['ilil', 'anin', 'uyoaix', 'asila']

- input: []
  output: []

RULES:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()
*/

function reverseAll (arr) {
  // Code disini
  if(arr.length === 0) {
    return []
  }

  var reverse = [];

  for(var i=0; i < arr.length; i++) {
    reverse.push(arr[arr.length-1-i])
  }

  for(var i=0; i < reverse.length; i++) {
    var index = reverse[i].length - 1
    var reverseTemp = ''

    console.log(reverse)
    while(index >= 0) {
      reverseTemp = reverseTemp + reverse[i][index]
      index = index - 1
    }
    reverse[i] = reverseTemp;
  }
  return reverse;
}

// ALTERNATIVE
/*
for (var i = arr.length - 1; i >= 0; i--) {
  var reverseString = ''
  
}
*/

console.log(reverseAll(['dimitri', 'sergei', 'alexei']));
// ['iexela', 'iegres', 'irtimid']

console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(reverseAll([]));
// []
