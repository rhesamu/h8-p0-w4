function hitungHuruf(kata) {
  // you can only write your code here!
  var wordArray = kata.split(' ');
  //console.log(wordArray);
  var display = [];

  for (var i = 0; i < wordArray.length; i++) {
    var count = 0;

    for (var j = 0; j < wordArray[i].length; j++) {

      for (var k = j+1; k < wordArray[i].length; k++) {
        if (wordArray[i][j] === wordArray[i][k]) {
          count++;
        }
      }
    }
    if (count > 0) {
      display.push(wordArray[i]);
    }
  }
  // console.log(display);

  if (display.length === 0) {
    return -1
  }

  return display[0];
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
console.log(hitungHuruf(''));

// hitungHuruf('Today, is the greatest day ever');
