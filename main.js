let n1 = parseFloat(prompt("Note 1 :")), c1 = parseFloat(prompt("Coef 1 :"));
let n2 = parseFloat(prompt("Note 2 :")), c2 = parseFloat(prompt("Coef 2 :"));
let n3 = parseFloat(prompt("Note 3 :")), c3 = parseFloat(prompt("Coef 3 :"));

let moyenne = (n1 * c1 + n2 * c2 + n3 * c3) / (c1 + c2 + c3);
console.log("Moyenne pondérée : " + moyenne.toFixed(2));