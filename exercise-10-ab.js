function checkAB(str) {
  // you can only write your code here!
  var string = str.split('');

  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'b') {

      for (var j = i+1; j < string.length; j++) {

        if (j - i === 4) {

          if (string[i] === 'a' && string[j] === 'b') {
            return true;
          }
          else if (string[i] === 'b' && string[j] === 'a') {
            return true;
          }
        }
      }
    }
  }

  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
