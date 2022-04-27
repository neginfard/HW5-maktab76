function countSum(array) {
  let sum = 0;
  for (let item of array) {
    sum += item.budget;
  }
  return sum;
}
let getBudgets1 = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
]; // ➞ 65700
let getBudgets2 = [
  { name: "John", age: 21, budget: 29000 },
  { name: "Steve", age: 32, budget: 32000 },
  { name: "Martin", age: 16, budget: 1600 },
];
console.log(countSum(getBudgets1));
