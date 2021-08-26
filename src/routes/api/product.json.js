import { getProducts } from './product/_data.js'

export async function get () {
  const products = await getProducts()

  return {
    body: products
  }
}
