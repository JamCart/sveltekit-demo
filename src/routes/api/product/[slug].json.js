import { getProductById } from './_data.js'

export async function get ({ params }) {
  const product = await getProductById(params.slug)

  return {
    body: product
  }
}
