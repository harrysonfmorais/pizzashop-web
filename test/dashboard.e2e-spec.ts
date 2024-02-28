import { expect, test } from '@playwright/test'

test('display day orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('15', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% em relação a ontem')).toBeVisible()
})

test('display month orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('200', { exact: true })).toBeVisible()
  await expect(page.getByText('+7% em relação ao mês passado')).toBeVisible()
})

test('display month canceled orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('5', { exact: true })).toBeVisible()
  await expect(page.getByText('-3% em relação ao mês pasado')).toBeVisible()
})

test('display month revenue metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('R$ 3.500,00')).toBeVisible()
  await expect(page.getByText('+10% em relação ao mês passado')).toBeVisible()
})