// const fruits = ["apple", "orange", "banana"];
// console.log(fruits[0]); // Output: apple
// fruits.push("grape");
// fruits.pop();
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const person = { name: "John", age: 30, city: "New York" };
// console.log(person.name); // Output: John
// person.age = 31;
// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

const uniqueNumbers = new Set([1, 2, 3]);
uniqueNumbers.add(4);
uniqueNumbers.delete(2);
for (const num of uniqueNumbers) {
  console.log(num);
}
