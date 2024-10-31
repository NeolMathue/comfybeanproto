<script>
  const reviews = [
    {
      rating: 4.5,
      text: "Just had Brewtopia's Matcha Coffee and it's a match-a made in heaven! The earthy matcha flavor combined with creamy milk is both refreshing and energizing. A must-try for matcha lovers! 🍵✨",
      author: "@sad_cat",
      image: "images/m1.jpg",
    },
    {
      rating: 4.5,
      text: "Caramel Macchiato from Brewtopia is pure bliss! The creamy caramel swirls perfectly complement the bold espresso, making every sip a delight. It's like dessert in a cup! 🍮☕",
      author: "@Edmar Pantoja",
      image: "images/Edmar.jpg",
    },
    {
      rating: 4.5,
      text: "Cortado Coffee from Brewtopia is an absolute game-changer! The perfect balance of espresso and steamed milk creates a smooth, indulgent experience that I can't get enough of. 10/10 recommend!",
      author: "@Beluga_mwehehe",
      image: "images/m2.jpg",
    },
    {
      rating: 4.5,
      text: "Just tried Brewtopia's Hazelnut Coffee and I'm hooked! The rich, nutty flavor is like a warm hug in a cup. Definitely my new favorite morning ritual! ☕🌰",
      author: "@opopopopopop",
      image: "images/m3.jpg",
    },
  ];
</script>

<section class="customers" id="customers">
  <link
    rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
  />
  <div class="heading">
    <h2>Our Customer's</h2>
  </div>
  <div class="customers-container">
    {#each reviews as review}
      <div class="box">
        <div class="stars">
          {#each Array(Math.floor(review.rating)) as _}
            <i class="bx bxs-star"></i>
          {/each}
          {#if review.rating % 1 !== 0}
            <i class="bx bxs-star-half"></i>
          {/if}
        </div>
        <p>{review.text}</p>
        <h2>{review.author}</h2>
        <img src={review.image} alt="Customer" />
      </div>
    {/each}
  </div>
</section>

<style>
  .customers-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, auto));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .customers-container .box {
    padding: 20px;
    box-shadow: var(--box-shadow);
    border-radius: 0.5rem;
    background-color: black;
    text-align: center;
    color: #fff;
  }
  .stars .bx {
    color: var(--str-color);
  }
  .customers-container .box p {
    font-size: 0.938rem;
  }
  .customers-container h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0.5rem 0 0.5rem;
  }
  .customers-container .box img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }
  .customers-container .box:hover {
    background: #777373;
    transition: 0.2s all linear;
  }
</style>
