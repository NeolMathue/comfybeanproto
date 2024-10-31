<section class="home" id="home">
  <div class="home-text">
    <h1>Fast Delivery <br />to Your Doorstep</h1>
    <p style="font-family:'Poppins', sans-serif;">
      Join us in our cozy haven where stories are shared and friendships bloom.
      Brewtopia isn't just a coffee shop—it's your home away from home.
    </p>
    <a href="#products" class="btn">Order Now</a>
  </div>
  <div class="home-img">
    <img src="/images/lol.png" alt="lol" />
  </div>
</section>

<style>
  .home {
    position: relative;
    z-index: 1;
    width: 100%;
    min-height: 100vh;
    background: url(/images/real.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
    align-items: center;
    gap: 1.5rem;
  }

  .home::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay with 0.5 opacity */
    z-index: 2;
  }

  .home-text,
  .home-img {
    position: relative;
    z-index: 3;
  }

  .home-text h1 {
    font-size: 3.4rem;
    color: var(--bg-color);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .home-text p {
    font-size: 0.938rem;
    color: var(--bg-color);
    margin: 0.5rem 0 1.4rem;
  }
  .btn {
    padding: 10px 40px;
    border-radius: 0.3rem;
    background: var(--main-color);
    color: var(--bg-color);
    font-weight: 500;
  }
</style>
