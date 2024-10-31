<script>
  import Header from "./components/Header.svelte";
  import CartSidebar from "./components/CartSidebar.svelte";
  import Home from "./components/Home.svelte";
  import About from "./components/About.svelte";
  import Products from "./components/Products.svelte";
  import Customers from "./components/Customers.svelte";
  import Footer from "./components/Footer.svelte";
  import "./styles/global.css";
  import "./styles/variables.css";
  import "boxicons/css/boxicons.min.css";
</script>

<Header />
<CartSidebar />
<main>
  <Home />
  <About />
  <Products />
  <Customers />
</main>
<Footer />
