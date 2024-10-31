<script>
  let isVisible = false;
  let cartItems = [];
  let total = 0;

  function toggleCart() {
    isVisible = !isVisible;
  }
  function updateCartTotal() {
    let total = 0;
    Object.values(cart).forEach((item) => {
      total += item.price * item.quantity;
    });
    total = total.toFixed(2);
    return total;
  }

  function addItemToCart(product, name, price, imgSrc) {
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
    cartItems = Object.values(cart);
  }
</script>

<div class="cart-sidebar" class:visible={isVisible}>
  <div class="cart-header">
    <h2>Your Cart</h2>
    <span class="close-cart" on:click={toggleCart}>&times;</span>
  </div>
  <div class="cart-items">
    {#each cartItems as item}
      <div class="cart-item">
        <h3>{item.name}</h3>
        <p>₱{item.price}</p>
      </div>
    {/each}
  </div>
  <div class="cart-footer">
    <h3>Total: ₱{total}</h3>
    <button class="btn checkout-btn">Checkout</button>
  </div>
</div>

<style>
  .cart-sidebar {
    position: fixed;
    right: -100%;
    top: 0;
    width: 300px;
    height: 100%;
    background: var(--second-color);
    box-shadow: var(--box-shadow);
    transition: 0.3s ease;
    z-index: 1001;
    display: flex;
    flex-direction: column;
  }

  .cart-sidebar.active {
    right: 0;
  }

  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: var(--text-color);
    color: var(--bg-color);
  }

  .cart-header h2 {
    margin: 0;
  }

  .close-cart {
    font-size: 24px;
    cursor: pointer;
  }

  .cart-items {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
  }

  .cart-footer {
    padding: 20px;
    background: var(--text-color);
    color: var(--bg-color);
    text-align: center;
  }

  .cart-footer h3 {
    margin: 0 0 10px;
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .cart-item img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 0.3rem;
  }

  .cart-item-details {
    flex: 1;
    margin-left: 10px;
  }

  .cart-item-name {
    font-size: 1rem;
    font-weight: 600;
  }

  .cart-item-price {
    font-size: 0.875rem;
    color: var(--main-color);
  }

  .remove-cart-item {
    cursor: pointer;
    color: var(--main-color);
    font-size: 20px;
  }

  .cart-item-name {
    flex: 1;
  }

  .cart-item-quantity {
    display: flex;
    align-items: center;
  }

  .cart-item-quantity button {
    background-color: var(--main-color);
    border: none;
    color: white;
    padding: 5px 10px;
    cursor: pointer;
  }

  .cart-item-quantity span {
    margin: 0 10px;
  }
</style>
