const { test, expect } = require('@playwright/test');

test('testing checkboxes', async ({ page }) => {
  await page.goto('https://practiceautomatedtesting.com/webelements/Checkboxes');

  const checkboxIDs = ['checkbox1', 'checkbox2'];
  
  for (let id of checkboxIDs) {
    const checkbox = await page.waitForSelector(`#${id}`);
    await checkbox.click();

    let smiley = await page.$('.smiley');
    let badSmiley = await page.$('.bad-smiley');
    
    expect(smiley || badSmiley).toBeTruthy();

    if(smiley) {
        console.log("Checkbox displayed a smiley");
    }
    if(badSmiley) {
        console.log("Checkbox displayed a bad smiley");
    }
  }
});