/*
==================================
Array Mastery: Group Odd Evens
==================================
Nama:________
[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:
"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"
aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!

[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"

input: [1, 1, 1]
output: "ODDS: 1, 1, 1"

input: [2, 8, 10]
output: "EVENS: 2, 8, 10"

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
  dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
*/

/*PSEUDOCODE

  READ students
  IF length of students is 0 THEN
    DISPLAY empty string
  ENDIF

  READ groupOdd
  READ groupEven

  FOR each student in students
    IF student % 2 === 0 THEN
      ADD student to groupEven
    ELSE
      ADD student to groupOdd
    ENDIF
  ENDFOR

  READ print AS "ODD:" + groupOdd + "EVEN: " + groupEven
  DISPLAY print
*/

function groupOddEven(students) {
  // Code here
  if (students.length === 0) {
    return '""'
  }

  var groupOdd = [];
  var groupEven = [];

  for(var i = 0; i < students.length; i++) {
    if(students[i] % 2 === 0) {
      groupEven.push(students[i])
    }
    else {
      groupOdd.push(students[i])
    }
  }

  // var print = "ODD: " + groupOdd.toString() + " EVENS:" + groupEven.toString();
  // return print;

  if(groupOdd.length > 0 && groupEven.length > 0) {
    return 'ODDS: ' + groupOdd.join(', ') + ' EVENS: ' + groupEven.join(', ')
  }
  else {
    if (groupOdd.length > 0) {
      return 'ODDS: ' + groupOdd.join(', ')
    }

    if (groupEven.length > 0) {
      return 'EVEN: ' + groupEven.join(', ')
    }
  }
}

// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
console.log(groupOddEven([])); // ""
