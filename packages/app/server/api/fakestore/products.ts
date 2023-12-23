import { FakestoreProduct } from "~/composables/useTypes"

export default defineEventHandler(async (event) => {
  const res = await fetch('https://fakestoreapi.com/products')
  return await res.json()
})
