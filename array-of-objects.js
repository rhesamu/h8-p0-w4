// Array of Objects of Array of Object Literals

var people = [
  { id: '0001', name: 'Dimitri', email: 'dimitri@email.com' }, // index: 0
  { name: 'Rhesa Utomo', email: 'abc@email.com', id: '0002' }, // 1
  { name: 'Budi', id: '0003'},
  { name: 'Budi', id: '0004'} // 2
]

for (var i = 0; i < people.length; i++) {
  console.log('ID: ' + people[i].id);
  console.log('Name: ' + people[i].name);
  console.log('Email: ' + people[i].email);
}

console.log('')

for (var i = 0; i < people.length; i++) {
  if(people[i].name === 'Budi') {
    console.log(people[i]);
    // output all matched data on that object (all matched index)
  }
}

console.log('')

for (var i = 0; i < people.length; i++) {
  for (var key in people[i]) {
    console.log(people[i][key]);
  }
}

console.log('')

var person = {
  name: 'Rhesa',
  address: 'Namek',
  email: 'loremipsum@email.com'
}

person.gender = undefined;
// make new 'gender' key with value 'undefined'

person.hobbies = ['eat', 'play'];
person['favorite food'] = 'indomie';

console.log(Object.keys(person))
console.log('')
console.log(person)
