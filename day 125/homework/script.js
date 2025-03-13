document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const shop = document.getElementById('shop');
    const usernameDisplay = document.getElementById('username-display');
    const productsContainer = document.getElementById('products');
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    let products = [];
    let cart = [];
    
    function checkAuth() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            registrationForm.style.display = 'none';
            shop.style.display = 'block';
            usernameDisplay.textContent = user.username;
            fetchProducts();
        } else {
            registrationForm.style.display = 'block';
            shop.style.display = 'none';
        }
    }
    
    async function fetchProducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            products = await response.json();
            renderProducts();
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }
    
    function renderProducts() {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productEl = document.createElement('div');
            productEl.className = 'product';
            productEl.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            productsContainer.appendChild(productEl);
        });
        
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
            });
        });
    }
    
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({...product, quantity: 1});
            }
            updateCartCount();
            saveCart();
        }
    }
    
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
    }
    
    function renderCart() {
        cartItems.innerHTML = '';
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Cart is empty</p>';
            cartTotal.textContent = '0.00';
            return;
        }
        
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div>
                    <h3>${item.title}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Total: $${itemTotal.toFixed(2)}</p>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        cartTotal.textContent = total.toFixed(2);
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
    }
    
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartCount();
        renderCart();
        saveCart();
    }
    
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    function loadCart() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartCount();
        }
    }
    
    document.getElementById('register-btn').addEventListener('click', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!username || !email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        const user = { username, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        
        checkAuth();
    });
    
    document.getElementById('logout-btn').addEventListener('click', function() {
        localStorage.removeItem('user');
        cart = [];
        updateCartCount();
        saveCart();
        checkAuth();
    });
    
    document.getElementById('cart-icon').addEventListener('click', function() {
        renderCart();
        cartModal.style.display = 'block';
    });
    
    document.getElementById('close-cart').addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    document.getElementById('clear-cart').addEventListener('click', function() {
        cart = [];
        updateCartCount();
        renderCart();
        saveCart();
    });
    
    document.getElementById('buy-all').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Cart is empty');
            return;
        }
        
        alert('All products purchased successfully');
        cart = [];
        updateCartCount();
        renderCart();
        saveCart();
        cartModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    checkAuth();
    loadCart();
});