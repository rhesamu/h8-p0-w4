function changeMe(arr) {
  // you can only write your code here!
  if (arr.length === 0) {
    console.log('""');
  }
  else {
    var currentYear = 2018;

    for (var i = 0; i < arr.length; i++) {
      var people = {};

      for (var j = 0; j < arr[0].length; j++) {
        if (j === 0) {
          people.firstName = arr[i][j];
        } else if (j === 1) {
          people.lastName = arr[i][j];
        } else if (j === 2) {
          people.gender = arr[i][j];
        } else if (j === 3) {
          var birth = arr[i][j];

          if (birth === undefined) {
            people.age = 'Invalid Birth Year';
          } else {
            people.age = currentYear - birth;
          }
        }
      }

      console.log((i+1) + '. ' + people.firstName + ' ' + people.lastName + ':');
      console.log(people)
    }
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
