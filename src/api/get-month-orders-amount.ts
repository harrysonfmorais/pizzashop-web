import { api } from '@/lib/axios'

export interface GetMountOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMountOrdersAmount() {
  const response = await api.get<GetMountOrdersAmountResponse>(
    '/metrics/month-orders-amount',
  )

  return response.data
}
