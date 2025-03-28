function firstNonRepeatingElement(inputData) {
    const count = {};

    for (let item of inputData) {
        count[item] = (count[item] || 0) + 1;
    }

    for (let item of inputData) {
        if (count[item] === 1) {
            return item;
        }
    }

    return null;
}

const stringExample = "abacabad";
console.log(firstNonRepeatingElement(stringExample));

const arrayExample = [2, 3, 4, 2, 3, 5, 4];
console.log(firstNonRepeatingElement(arrayExample));
