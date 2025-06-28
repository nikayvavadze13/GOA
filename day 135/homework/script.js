const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Headphones", price: 200 }
];

function getProductById(id) {
    return products.find(product => product.id === id) || null;
}

function renderProducts() {
    const container = document.getElementById("product-list");
    if (!container) return;
    
    container.innerHTML = "";
    products.forEach(product => {
        const item = document.createElement("div");
        item.textContent = `${product.name} - $${product.price}`;
        container.appendChild(item);
    });
}