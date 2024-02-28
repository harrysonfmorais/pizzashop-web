import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 2229 },
    { date: '02/01/2024', receipt: 1417 },
    { date: '03/01/2024', receipt: 1898 },
    { date: '04/01/2024', receipt: 3157 },
    { date: '05/01/2024', receipt: 912 },
    { date: '06/01/2024', receipt: 4199 },
    { date: '07/01/2024', receipt: 999 },
  ])
})
