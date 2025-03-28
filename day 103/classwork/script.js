const items = ['apple', 'banana', 'cherry'];
const indexedObject = {};

items.forEach((item, index) => {
    indexedObject[index] = item;
});

console.log(indexedObject);

