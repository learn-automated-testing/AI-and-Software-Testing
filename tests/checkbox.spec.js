const { test, expect } = require('@playwright/test');

test('Checkbox test', async ({ page }) => {
  await page.goto('https://practiceautomatedtesting.com/webelements/Checkboxes');

  const checkbox1 = await page.waitForSelector('#checkbox1');
  await checkbox1.click();

  const checkbox1Smiley = await checkbox1.evaluate(el => el.nextSibling.textContent);
  expect(checkbox1Smiley).toBe('😀');

  const checkbox2 = await page.waitForSelector('#checkbox2');
  await checkbox2.click();

  const checkbox2Smiley = await checkbox2.evaluate(el => el.nextSibling.textContent);
  expect(checkbox2Smiley).toBe('😀');
});