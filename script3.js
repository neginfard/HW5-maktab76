function upper(array) {
  let result = {};
  array.map((item) => {
    result[item] = item.toUpperCase();
  });

  // array.forEach((element) => {
  //   result[element] = element.toUpperCase();
  // });
  return result;
}

let arr1 = ["p", "s"];

console.log(upper(arr1));
