import { test, expect } from '@playwright/test';

test('homepage has title and screenshot', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Internação Involuntária e Resgate 24h/);

  // Take a screenshot of the page.
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});
