import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const GetOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '22123456789',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 4000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Calabresa' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 1500,
        product: { name: 'Pizza Frango Catupiry' },
        quantity: 2,
      },
    ],
  })
})
