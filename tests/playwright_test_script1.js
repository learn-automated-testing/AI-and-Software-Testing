const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://practiceautomatedtesting.com/webelements/Checkboxes');

  const checkboxIds = ['checkbox1', 'checkbox2'];
  for (const id of checkboxIds) {
    const checkbox = await page.$(`#${id}`);
    await checkbox.click();
    await page.waitForTimeout(500); // Wait for the result to update

    const result = await page.textContent('#result');
    console.assert(['😀','😞'].includes(result), `unexpected result: ${result}`);
  }

  await browser.close();
})();