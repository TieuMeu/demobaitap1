import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});


