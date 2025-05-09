const vec = [1, 2, 3, 4, 5, 6];
let soma = 0;
let somaimpar = 0;
let product = 1;

vec.forEach((x) => soma += x);
console.log(soma);

vec.filter((x) => x%2 != 0).forEach((x) => somaimpar+=x);
console.log(somaimpar);

vec.forEach((x) => product *= x);
console.log(product);
