<script context="module">
export async function load ({ page, fetch }) {
  const res = await fetch(`/api/product/${ page.params.slug }.json`)
  const product = await res.json()
  return {
    props: { product }
  }
}
</script>

<script>
export let product
</script>


<svelte:head>
  <title>{ product.name }</title>
</svelte:head>

<div class="product">
  <div class="image">
    <img alt="" height="427" width="640" src={ product.image } />
  </div>

  <div class="header">
    <h2>{ product.name }</h2>
    <p class="price">{ product.price }</p>
  </div>

  <p>
    <jamcart-add
      id={ product.id }
      image={ product.image }
      name={ product.name }
      price={ product.price }
      open-cart
      >
      Add to shopping bag
    </jamcart-add>
  </p>
</div>


<style>
jamcart-add {
  background: #222;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  display: block;
  font-weight: 500;
  padding: .3em 1em .4em;
  text-align: center;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.price {
  color: #525252;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 125%;
  margin-top: 0;
}
.price::before {
  content: "$"
}

.product {
  display: grid;
  grid-gap: 1em 2em;
}
.product :first-child {
  margin-top: 0;
}
.image {
  text-align: center;
}
.image img {
  border: 3px solid #d4d7de;
  border-radius: 5px;
  height: auto;
  overflow: hidden;
  width: 100%;
}

@media (min-width: 800px) {
  .product {
    grid-template: 'head img' 'body img' / 1fr 1fr;
  }
  .image {
    grid-area: img;
  }
}
</style>
