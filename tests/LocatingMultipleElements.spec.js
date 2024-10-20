const {test, expect} = require('@playwright/test');

test('Locating Multiple Elements', async({page}) => {
    test.setTimeout(120000)
    await page.goto('https://www.demoblaze.com/')
    //await page.goto('https://www.demoblaze.com/')
    test.setTimeout(120000);

    /*
    const links = await page.$$('a');

    for(const link of links){
        const linktext = await link.textContent();
        console.log(linktext);
    }
    */  

    //Locate all the products displayed on home page
    //page.waitForSelector("//div[@id='tbodyid']/div//h4/a");

    const products = await page.$$("//div[@id='tbodyid']/div//h4/a")

    for(const product of products){
        const productName = await product.textContent();
        console.log(productName)
    }

})