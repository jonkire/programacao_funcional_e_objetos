const vec = [1, 2, 3, 4, 5];

console.log(
  vec.reduce((addition, x) => addition += x)
);

console.log(
  vec.filter((x) => x%2 != 0).reduce((addition, x) => addition+=x)
);

console.log(
  vec.reduce((product, x) => product *= x)
);

