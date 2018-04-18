function changeMe(arr) {
  // you can only write your code here!
  var arrayPeople = [];
  var peopleObject = {};

  var currentYear = 2018;

  for (var i = 0; i < arr.length; i++) {
    var people = {}
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

    arrayPeople.push(people)
    peopleObject[(i+1) + '. ' + people.firstName + ' ' + people.lastName + ':'] = people;
  }
  // console.log(peopleObject)
  // console.log(arrayPeople)
  // console.log(arrayPeople[0])
  return arrayPeople;
}

console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]))
