const { test, expect } = require('@playwright/test');

test('Test Checkbox Functionality', async ({ page }) => {
    // Navigate to the webpage
    await page.goto('https://practiceautomatedtesting.com/webelements/Checkboxes');
    
    // Select and verify each checkbox
    for (let i = 1; i <= 2; i++) {
        const checkbox = await page.waitForSelector(`#checkbox${i}`);
        const result = await page.waitForSelector('#result');

        // Click on the checkbox and wait for the result to load
        await checkbox.check();
        await page.waitForTimeout(1000);

        // Get the attribute of the result
        const resultSmiley = await result.getAttribute('class');
        
        // Validate the result
        if (resultSmiley === 'smiley') {
            expect(await checkbox.isChecked()).toBe(true);
        } else if (resultSmiley === 'bad-smiley') {
            expect(await checkbox.isChecked()).toBe(false);
        }
        
        // Uncheck the checkbox before the next iteration
        await checkbox.uncheck();
    }
});