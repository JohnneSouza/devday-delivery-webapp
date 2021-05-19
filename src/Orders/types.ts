export type Product = {
  id: number
  name: string
  price: number
  description: string
  image_Uri: string
}

type ProductId = {
  id: number;
}

export type OrderPayload = {
  products: ProductId[];
}