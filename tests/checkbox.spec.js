const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://practiceautomatedtesting.com/webelements/Checkboxes');

  const checkbox1 = await page.$('#checkbox1');
  const checkbox2 = await page.$('#checkbox2');
  
  await checkbox1.check();
  // assuming an attribute or text changes to smiley or bad smiley when selected
  let checkbox1Status = await page.$eval('#checkbox1', el => el.getAttribute('some-attribute-or-text'));
  if(checkbox1Status == 'data-related-to-smiley') {
      console.log("Checkbox 1 selected successfully with smiley status");
  } else {
      console.log("Checkbox 1 selected unsuccessfully with bad smiley status");
  }

  await checkbox2.check();
  let checkbox2Status = await page.$eval('#checkbox2', el => el.getAttribute('some-attribute-or-text'));
  if(checkbox2Status == 'data-related-to-smiley') {
      console.log("Checkbox 2 selected successfully with smiley status");
  } else {
      console.log("Checkbox 2 selected unsuccessfully with bad smiley status");
  }
  await browser.close();
})();