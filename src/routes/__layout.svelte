<script>
import './global.css'
</script>

<svelte:head>
  <meta name="description" content="A demo e-commerce storefront built with SvelteKit and JamCart" />
</svelte:head>

<nav class="nav">
  <h1 class="logo">
    <a href="/" sveltekit:prefetch>Jewels <!-- Our Demo Website's Title --></a>
  </h1>
  <jamcart-open class="open" />
</nav>

<slot />

<footer class="demo">
  <p>
    Demo E-commerce website built with <a href="https://svelte.dev/">Svelte</a>, <a href="https://kit.svelte.dev/">SvelteKit</a>, and <a href="https://jamcart.io">JamCart</a>
  </p>
  <p>
    Source available on <a href="https://github.com/JamCart/sveltekit-demo">GitHub</a>
  </p>
  <p>
    Photos by <a href="https://unsplash.com/@sabrinnaringquist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sabrinna Ringquist</a> on <a href="https://unsplash.com/@sabrinnaringquist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p>
</footer>

<style>
@font-face {
  font-family: 'Cinzel';
  font-style: normal;
  font-weight: 500;
  src: url(./Cinzel-SemiBold.woff2) format('woff2');
}

.demo {
  color: #666;
  margin: 3em 0;
  text-align: center;
}
.demo a {
  color: #222;
  text-decoration: underline;
}
.demo p {
  margin: .5em 0;
}

.nav {
  align-items: center;
  display: grid;
  grid-template: "logo cart" "categories categories";
  margin: 2em 0;
}
@media (min-width: 45em) {
  .demo {
    text-align: right;
  }
  .demo p {
    margin: 0;
  }
  .nav {
    grid-template: "logo categories cart" / min-content 1fr min-content;
  }
}

.logo {
  font-family: Cinzel;
  font-size: 250%;
  font-weight: 500;
  grid-area: logo;
  grid-gap: 1em;
  margin: 0 1em 0 0;
}

.open {
  grid-area: cart;
  margin-left: auto;
}
</style>
