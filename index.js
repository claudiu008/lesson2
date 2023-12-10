//Temă pentru acasă - ARRAY & LOOPS

//1. Tipăriți toate numerele pare de la 0 la 10
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

//2. Calculați suma numerelor dintr-un șir de numere
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

//3. Creați o funcție care inversează un șir de numere
function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);

//4. Returnează numărul de vocale dintr-un șir de caractere (string)
function reverseString(str) {
  return str.split("").reverse().join("");
}
const originalString = "Hello, world!";
const reversedString = reverseString(originalString);
console.log(reversedString);
