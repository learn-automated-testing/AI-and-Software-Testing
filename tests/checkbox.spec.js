const { test, expect } = require('@playwright/test');

test('Checkboxes', async ({ page }) => {
  await page.goto('https://practiceautomatedtesting.com/webelements/Checkboxes');

  const checkbox1 = await page.$('#checkbox1');
  await checkbox1.check();
  let smiley1 = await page.$('#smiley1');
  expect(await smiley1.isVisible()).toBe(true);

  
  const checkbox2 = await page.$('#checkbox2');
  await checkbox2.check();
  let smiley2 = await page.$('#smiley2');
  expect(await smiley2.isVisible()).toBe(true);
});