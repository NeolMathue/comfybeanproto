<script>
  import CartSidebar from "./CartSidebar.svelte";
  let isSearchVisible = false;
  let isCartVisible = false;

  function toggleSearch() {
    isSearchVisible = !isSearchVisible;
  }
  function toggleCart() {
    isCartVisible = !isCartVisible;
  }
</script>

<header>
  <link
    rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
  />
  <a href="#" class="logo">P49</a>
  <i class="bx bx-menu" id="menu-icon"></i>

  <ul class="navbar">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About Us</a></li>
    <li><a href="#products">Products</a></li>
    <li><a href="#customers">Customers</a></li>
  </ul>

  <div class="header-icon">
    <i class="bx bx-cart-alt" on:click={toggleCart}></i>
    <i class="bx bx-search" id="search-icon" on:click={toggleSearch}></i>
  </div>

  {#if isSearchVisible}
    <div class="search-box">
      <input type="search" placeholder="Search" />
    </div>
  {/if}
  {#if isCartVisible}
    <CartSidebar />
  {/if}
  <style>
    header {
      position: fixed;
      width: 100%;
      top: 0;
      right: 0;
      z-index: 1000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 100px;
      transition: 0.5s linear;
    }
    header.shadow {
      background: var(--text-color);
      box-shadow: var(--box-shadow);
    }

    .logo {
      font-size: 32px;
      font-family: "Poppins", serif;
      color: #d39763;
      text-decoration: none;
      font-weight: 700;
    }
    .navbar {
      display: flex;
    }
    .navbar a {
      padding: 8px 17px;
      color: var(--bg-color);
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 500;
    }
    .navbar a:hover {
      background: var(--main-color);
      border-radius: 0.2rem;
      transition: 0.2s all linear;
    }
    .header-icon {
      font-size: 22px;
      cursor: pointer;
      z-index: 10000;
      display: flex;
      column-gap: 0.8rem;
    }
    .header-icon .bx {
      color: var(--bg-color);
    }
    .header-icon .bx:hover {
      color: var(--main-color);
    }

    #menu-icon {
      color: var(--bg-color);
      font-size: 24px;
      z-index: 100001;
      cursor: pointer;
      display: none;
    }
    .search-box {
      position: absolute;
      top: -100%;
      left: 50%;
      transform: translate(-50%);
      background: var(--bg-color);
      width: 100%;
    }
    .search-box.active {
      top: 110%;
      box-shadow: var(--box-shadow);
      transition: 0.2s all linear;
    }
    .search-box input {
      padding: 20px;
      border: none;
      outline: none;
      width: 100%;
      font-size: 1rem;
      color: var(--main-color);
    }
    .search-box input::placeholder {
      font-size: 1rem;
      font-weight: 500;
    }
  </style>
</header>
