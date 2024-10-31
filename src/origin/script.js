let search = document.querySelector('.search-box');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');
let cartSidebar = document.getElementById('cart-sidebar');
let cartItemsContainer = document.getElementById('cart-items');
let cartTotal = document.getElementById('cart-total');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cartSidebar.classList.remove('active');
}

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cartSidebar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
    cartSidebar.classList.remove('active');
}

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

document.querySelector('.bx-cart-alt').onclick = () => {
    cartSidebar.classList.toggle('active');
}

document.getElementById('close-cart').onclick = () => {
    cartSidebar.classList.remove('active');
}

let cart = {};

function updateCartTotal() {
    let total = 0;
    Object.values(cart).forEach(item => {
        total += item.price * item.quantity;
    });
    cartTotal.textContent = total.toFixed(2);
}

function addItemToCart(product, name, price, imgSrc) {
    if (cartSidebar.classList.toggle('hidden')){
        cartSidebar.classList.toggle('active');
    } else{
        cartSidebar.classList.toggle('hidden');
    }
    if (cart[product]) {
        cart[product].quantity++;
    } else {
        cart[product] = { name, price, imgSrc, quantity: 1 };
    }
    renderCartItems();
    updateCartTotal();
}

function removeItemFromCart(product) {
    delete cart[product];
    renderCartItems();
    updateCartTotal();
}

function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    Object.keys(cart).forEach(product => {
        const item = cart[product];
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.name}">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₱${item.price}</div>
            </div>
            <span class="remove-cart-item" data-product="${product}">&times;</span>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    document.querySelectorAll('.remove-cart-item').forEach(btn => {
        btn.onclick = () => {
            const product = btn.dataset.product;
            removeItemFromCart(product);
        }
    });
}

document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.onclick = (e) => {
        e.preventDefault();
        const product = btn.dataset.product;
        const name = btn.closest('.box').querySelector('h3').textContent;
        const price = parseFloat(btn.closest('.box').querySelector('span').textContent.replace('₱', ''));
        const imgSrc = btn.closest('.box').querySelector('img').src;
        addItemToCart(product, name, price, imgSrc);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');
        let cart = {};
    
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const product = button.dataset.product;
                const price = parseFloat(button.dataset.price);
                if (!cart[product]) {
                    cart[product] = { price, quantity: 1 };
                } else {
                    cart[product].quantity++;
                }
                updateCart();
            });
        });
    
        function updateCart() {
            cartItemsContainer.innerHTML = '';
            let total = 0;
    
            Object.keys(cart).forEach(product => {
                const { price, quantity } = cart[product];
                total += price * quantity;
    
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-name">${product}</div>
                    <div class="cart-item-quantity">
                        <button class="decrease" data-product="${product}">-</button>
                        <span>${quantity}</span>
                        <button class="increase" data-product="${product}">+</button>
                    </div>
                    <div class="cart-item-price">₱${(price * quantity).toFixed(2)}</div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
    
            cartTotalElement.innerText = total.toFixed(2);
    
            const increaseButtons = cartItemsContainer.querySelectorAll('.increase');
            const decreaseButtons = cartItemsContainer.querySelectorAll('.decrease');
    
            increaseButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const product = button.dataset.product;
                    cart[product].quantity++;
                    updateCart();
                });
            });
    
            decreaseButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const product = button.dataset.product;
                    if (cart[product].quantity > 1) {
                        cart[product].quantity--;
                    } else {
                        delete cart[product];
                    }
                    updateCart();
                });
            });
        }
    });
    

});

