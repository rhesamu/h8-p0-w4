function changeVocals (str) {
  //code di sini
  // console.log(str);
  var arr = str.split('');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      arr[i] = ' ';
    }
    else if(arr[i] === 'a' || arr[i] === 'i' || arr[i] === 'u' ||
            arr[i] === 'e' || arr[i] === 'o' || arr[i] === 'A' ||
            arr[i] === 'I' || arr[i] === 'U' || arr[i] === 'E' ||
            arr[i] === 'O')
    {
      arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1);
    }
  }

  var string = arr.join('');

  // console.log(string);
  return string;
}

function reverseWord (str) {
  //code di sini
  var reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  // console.log(reversed);
  return reversed;
}

function setLowerUpperCase (str) {
  //code di sini
  var arr = str.split('');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toLowerCase()) {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }

  var string = arr.join('');

  // console.log(string);
  return string;
}

function removeSpaces (str) {
  //code di sini
  var string = str.split(' ').join('');

  // console.log(string)
  return string;
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }

  var vocals = changeVocals(name);
  var rev = reverseWord(vocals);
  var changeCase = setLowerUpperCase(rev);
  var password = removeSpaces(changeCase);

  return password;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
