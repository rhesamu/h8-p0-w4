function urutkanAbjad(str) {
  // you can only write your code here!
  var string = str.split('');

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < string.length; j++) {
      if (string[i] < string[j]) {
        var temp = string[i];
        string[i] = string[j];
        string[j] = temp;
      }
    }
  }

  return string.join('')
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
