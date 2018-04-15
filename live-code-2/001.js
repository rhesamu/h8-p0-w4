/**
Graduates Count
Implementasikan function graduatesCount untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan (`scores`) dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.
Contoh:
- input: [0, 20, 40, 55, 70] = 5 data
  output: tidak ada yang lulus

- input: [70, 85, 65, 90]
  output: 2 orang lulus

- input: [0, 65, 30, 74]
  output: Tidak ada yang lulus

- input: [90, 100, 76, 85]
  output: Semua lulus

- input: []
  output: Data kosong



RULES:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()

*/

/* PSEUDOCODE:

  READ scores
  
  IF length of scores is 0 THEN
    DISPLAY "Data Kosong"
  ENDIF

  READ counter = 0

  FOR each score is scores
    IF score >= 75 THEN
      ADD counter by 1
    ENDIF
  ENDFOR

  IF scores is empty THEN
    DISPLAY "Data kosong"
  ELSE IF counter === 0 THEN
    DISPLAY "Tidak ada yang lulus"
  ELSE IF counter === length of scores THEN
    DISPLAY "Semua orang lulus"
  ELSE
    DISPLAY counter + "orang lulus"
  ENDIF

*/

function graduatesCount (scores) {
  // your code here
  if (scores.length === 0) {
    return "Data kosong";
  }

  var counter = 0;

  for (var i = 0; i < scores.length; i++) {
    if(scores[i] >= 75) {
      counter++;
    }
  }

  if(counter === 0) {
    return "Tidak ada yang lulus";
  }
  else if (counter === scores.length) {
    return "Semua orang lulus";
  }
  else {
    return (counter + " orang lulus");
  }
}


// Test cases

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 80, 74, 60, 87])); // 4 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong
