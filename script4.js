let costExpensive = {
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650,
}; //➞ "The most expensive one is the Pearl Necklace"

function mostExpensive(pieceName, obj) {
  let objectValues = Object.values(obj);
  let maxPrice = Math.max(...objectValues);

  if (costExpensive[pieceName] === maxPrice) {
    return `The most expensive one is the ${pieceName}`;
  } else return `${pieceName} is not the expensive one`;
}

let findHighPrice = mostExpensive("Pearl Necklace", costExpensive);
console.log(findHighPrice);
