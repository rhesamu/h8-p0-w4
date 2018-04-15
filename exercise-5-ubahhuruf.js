var abc = "abcdef";
var after = abc[1].charCodeAt(0) + 1;
// ascii 'b' = 98. ascii 98 + 1 = 99 -> 'c'

console.log(after); // 99
console.log(String.fromCharCode(after)); // 'c'

function ubahHuruf(kata) {
  var word = kata.split('');

  for (var i = 0; i < kata.length; i++) {
    if (word[i] === 'z') {
      word[i] = 'a';
    }
    else {
      word[i] = String.fromCharCode(word[i].charCodeAt(0) + 1);
    }
  }

  return word.join('');
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
