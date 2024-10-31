<script>
  const products = [
    {
      id: "product1",
      image: "images/hazelnut.jpg",
      name: "Hazelnut Coffee",
      price: 150,
      slug: "hazelnut",
    },
    {
      id: "product2",
      image: "images/cortado.jpg",
      name: "Cortado Coffee",
      price: 150,
      slug: "cortado",
    },
    {
      id: "product3",
      image: "images/caramel macchiato.jpg",
      name: "Machiatto Coffee",
      price: 150,
      slug: "machiatto",
    },
    {
      id: "product4",
      image: "images/flat white.jpg",
      name: "Flat White Coffee",
      price: 150,
      slug: "flat-white",
    },
    {
      id: "product5",
      image: "images/affogato.jpg",
      name: "Affogato Coffee",
      price: 150,
      slug: "affogato",
    },
    {
      id: "product6",
      image: "images/cappuccino.jpg",
      name: "Cauppuccino Coffee",
      price: 150,
      slug: "cappuccino",
    },
    {
      id: "product7",
      image: "images/Americano.jpg",
      name: "Americano Coffee",
      price: 150,
      slug: "americano",
    },
    {
      id: "product8",
      image: "images/Cinnamon-Mocha.jpg",
      name: "Cinnamon Mocha Coffee",
      price: 150,
      slug: "cinnamon",
    },
    {
      id: "product9",
      image: "images/OatMilkLatte.jpg",
      name: "Oat Milk  Latte",
      price: 150,
      slug: "oat-milk",
    },
    {
      id: "product10",
      image: "images/matcha-coffee-1.jpg",
      name: "Matcha Coffee",
      price: 150,
      slug: "matcha",
    },
  ];

  function addToCart(product) {
    function addItemToCart(product, name, price, imgSrc) {
      if (cartSidebar.classList.toggle("hidden")) {
        cartSidebar.classList.toggle("active");
      } else {
        cartSidebar.classList.toggle("hidden");
      }
      if (cart[product]) {
        cart[product].quantity++;
      } else {
        cart[product] = { name, price, imgSrc, quantity: 1 };
      }
      renderCartItems();
      updateCartTotal();
    }
  }
</script>

<section class="products" id="products">
  <div class="heading">
    <h2>Our popular products</h2>
  </div>
  <div class="products-container">
    {#each products as product}
      <div class="box" id={product.id}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <div class="content">
          <span>₱{product.price}</span>
          <a
            href="#"
            class="add-to-cart-btn"
            data-product={product.slug}
            data-price={product.price}
            on:click|preventDefault={() => addToCart(product)}
          >
            Add to cart
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .heading {
    text-align: center;
  }
  .heading h2 {
    font-size: 1.8rem;
    text-transform: uppercase;
  }
  .products-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, auto));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .products-container .box {
    position: relative;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
  }
  .products-container img {
    width: 100%;
    height: 250px;
    object-fit: contain;
    object-position: center;
    padding: 20px;
    background: #f1f1f1;
    border-radius: 0.5rem;
  }
  .products-container .box h3 {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0.5rem 0 0.5rem;
  }
  .products-container .box .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .products-container .box .content span {
    padding: 0 1rem;
    color: var(--bg-color);
    background: var(--text-color);
    border-radius: 4px;
    font-weight: 500;
  }
  .products-container .box .content a {
    padding: 0 1rem;
    color: var(--text-color);
    border: 2px solid var(--text-color);
    border-radius: 4px;
    text-transform: uppercase;
  }
  .products-container .box .content a:hover {
    background: var(--main-color);
    color: var(--bg-color);
    transition: 0.2s all linear;
  }
</style>
