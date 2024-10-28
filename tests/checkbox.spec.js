const { test, expect } = require('@playwright/test');

test('Check smiley outputs', async ({ page }) => {

  await page.goto('https://practiceautomatedtesting.com/webelements/Checkboxes');

  for (let i = 1; i <= 2; i++) {
    const checkbox = await page.waitForSelector(`#checkbox${i}`);
    await checkbox.click();
    const smiley = await page.$('.smileyClass'); // Assuming the smiley CSS class name is smileyClass
    expect(smiley).toBeTruthy();

    // Validating whether a 'good' smiley or 'bad' smiley is displayed.
    const smileyText = await page.$eval('.smileyClass', element => element.innerText);
    expect(smileyText).toMatch(/good|bad/);
  }
});