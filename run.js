const vec = [1, 2, 3, 4, 5];

console.log(
  vec.reduce((sum, x) => sum + x, 0)
);

console.log(
  vec.filter((x) => x % 2 != 0).reduce((sum, x) => sum + x, 0)
);

console.log(
  vec.reduce((product, x) => product * x, 1)
);

