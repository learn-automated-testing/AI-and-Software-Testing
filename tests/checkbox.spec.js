const { test, expect } = require('@playwright/test');

test('Checkbox Test', async ({ page }) => {
    await page.goto('https://practiceautomatedtesting.com/webelements/Checkboxes');

    const checkbox1 = await page.$('#checkbox1');
    const checkbox2 = await page.$('#checkbox2');

    await checkbox1.click();
    let checkbox1State = await page.evaluate(el => el.checked, checkbox1);
    expect(checkbox1State).toBe(true);

    await checkbox2.click();
    let checkbox2State = await page.evaluate(el => el.checked, checkbox2);
    expect(checkbox2State).toBe(true);

    let feedback1 = await page.$('.smiley');
    expect(feedback1).toBeTruthy();

    let feedback2 = await page.$('.badsmiley');
    expect(feedback2).toBeTruthy();
});