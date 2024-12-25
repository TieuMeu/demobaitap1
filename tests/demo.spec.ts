import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.google.com/maps/@21.0428761,105.7707659,16.25z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D/');
  await expect(page).toHaveTitle(/Google Maps/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
