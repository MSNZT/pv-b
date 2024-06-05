import { test, expect } from '@playwright/test';

test('course list test', async ({ page }) => {
	await page.locator("body").click();
	await page.goto('/');
	await page.getByPlaceholder('Заголовок').click();
	await page.getByPlaceholder('Заголовок').fill('Первый');
	await page.getByPlaceholder('Описание').click();
	await page.getByPlaceholder('Описание').fill('Второй');
	await page.getByRole('button', { name: 'Добавить' }).click();
	const item = page.getByText('ПервыйВторойУдалить').last()
	await expect(item
	).toBeVisible();
});
