import path from 'path'

const raw_products = import.meta.globEager('./_data/*.json')
const products = Object.entries(raw_products).map(([file_path, value]) => {
  const slug = path.basename(file_path, path.extname(file_path))
  return {
    ...value.default,
    slug
  }
})

// Exposing products directly would be simpler.
// This allows us to swap out the data storage easier.
export async function getProducts () {
  return products
}

export async function getProductById (slug) {
  return products.find(product => product.slug === slug)
}
