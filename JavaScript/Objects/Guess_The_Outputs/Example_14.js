function changeAgeAndReference(person) {
  person.age = 35;
  person = {
    name: "AK",
    age: 25,
  };
  return person;
}

const personObj1 = { name: "Alex", age: 30 };

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1);
console.log(personObj2);
