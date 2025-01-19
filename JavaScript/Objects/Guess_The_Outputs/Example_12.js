let person = { name: "Ak", age: 25 };
const members = [person];

person.age = null;

console.log(members); //[ { name: 'Ak', age: null } ]

/*
let person = { name: "Ak", age: 25 };
const members = [person];
person = null;
person.age = null;

console.log(members);
// For this getting output as 
 Cannot set properties of null (setting 'age')
    at Object.<anonymous> (D:\Daily_Coding_Practices_2025\JavaScript\Objects\Guess_The_Outputs\Example_12.js:4:12)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49
*/
