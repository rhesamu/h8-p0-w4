// Recursive -> function yg memanggil dirinya sendiri.
// utamanya digunakan untuk perulangan.

// Example: factorial

function factorial(num) {
  if (num === 1) {
    return 1;
  } // limit condition (when to stop)
  else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5)) // 120
/*
break down:
  5 * fact(4)
        4 * fact(3)
              3 * fact(2)
                    2 * fact(1)
                          (if num = 1, return 1) // STOP.

*/

function balikKata(kata) {
  if (kata.length === 1) {
    return kata;
  }
  else {
    return kata[kata.length-1] +
           balikKata(kata.slice(0, kata.length - 1));
  }
}

console.log(balikKata('rhesautomo'))
