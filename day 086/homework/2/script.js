const input = prompt("შეიყვანეთ N და N ცალი რიცხვი (გამოყავით ცარიელი სივრცით):").split(" ");
const N = parseInt(input[0]);
const numbers = input.slice(1, N + 1).map(Number);
const oddIndexElements = [];
for (let i = 1; i < numbers.length; i += 2) {
    oddIndexElements.push(numbers[i]);
}

console.log("კენტ ინდექსზე მყოფი ელემენტები:", oddIndexElements.join(", "));
