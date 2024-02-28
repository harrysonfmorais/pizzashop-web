import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 8 },
    { product: 'Pizza 02', amount: 11 },
    { product: 'Pizza 03', amount: 17 },
    { product: 'Pizza 04', amount: 5 },
    { product: 'Pizza 05', amount: 12 },
  ])
})
