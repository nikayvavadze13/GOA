function generate() {
    const animals = [];
    if (document.getElementById('cat').checked) animals.push('cat');
    if (document.getElementById('dog').checked) animals.push('dog');
    if (document.getElementById('fox').checked) animals.push('fox');
    
    if (animals.length > 0) {
        const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        const images = {
            'cat': ['cat1.jpg', 'cat2.jpg', 'cat3.jpg'],
            'dog': ['dog1.jpg', 'dog2.jpg', 'dog3.jpg'],
            'fox': ['fox1.jpg', 'fox2.jpg', 'fox3.jpg']
        };
        document.getElementById('image').src = images[randomAnimal][Math.floor(Math.random() * 3)];
    }
}