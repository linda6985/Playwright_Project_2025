import { Page, test } from '@playwright/test';
import { click, clickByIndex, getText, hoverByIndex, scrollByPixels, type } from '../Day4_120825/Reusable_Action';
import { text } from 'stream/consumers';




test('usps capture cart @ai', async ({page}) => {
    
    // Navigate to the USPS website
    await page.goto('https://www.usps.com/')

    //hover over shop module 
    await hoverByIndex(page,'//*[text()="Shop"]',0,'shop module')

    //wait for 2 second
    await page.waitForTimeout(2000)

    //click on stamps
    await clickByIndex(page,"//*[text()='Stamps']",0,'stamps')
        
    //wait for 2 second
    await page.waitForTimeout(2000)

    //click on chekbox for stamps under catagory secrion
    await clickByIndex(page,"//*[@class='checkbox-label']",0,'stamps checkbox')

    //wait for 2 second
    await page.waitForTimeout(2000)

    //click on additional postage under product type 
    await clickByIndex(page,"//*[@class='checkbox-label']",4,'additional postage')

    //scroll down by 300 pixels
    await scrollByPixels(page,0,300)

    //wait for 2 second
    await page.waitForTimeout(2000)

    //click on the first product 
    await clickByIndex(page,"//*[@class='result-product-img']",0,"first product")

    //wait for 2 second
    await page.waitForTimeout(2000)

    //click on add cart button
    await click(page,"//*[@id='addToCartVisBtn122104']",'add to cart button')

    //wait for 2 second
    await page.waitForTimeout(2000)

    //click on view cart 
    await click(page,"//*[text()='View Cart']",'view cart button')

    //wait for 2 second
    await page.waitForTimeout(2000)

    //update the quantity to 2 
    await type(page,"//*[@class='col-8 form-control']","2","quantity field")

    //wait for 2 second
    await page.waitForTimeout(2000)

    //click on update link
    await  click(page,"//*[@value='Update']","update link")

    //wait for 2 second
    await page.waitForTimeout(2000)

    //capture the stamp informtion under the item section and print it 
    let stampInfo = await getText(page,"//*[@class='item-wrapper']","stamp title")
    console.log("stamp information is : "+stampInfo)


})//end of test case