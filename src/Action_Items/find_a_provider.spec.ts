import { Page, test } from '@playwright/test'
import { click, clickByIndex, getText, getTextByIndex, scrollToElement } from '../Day4_120825/Reusable_Action'

test('find a provider @ai', async ({page}) => {

    // navigate to emblem health website 
    await page.goto('https://www.emblemhealth.com/')

    //click on our plans
    await clickByIndex(page, "//*[text()='Our Plans']", 1, "our plans")

    //wait for 2 seconds
    await page.waitForTimeout(2000)

    //click on individual and family plans
    await clickByIndex(page, "//*[contains(text(),'Individuals')]", 1, "individual and family")

    //wait for 2 seconds
    await page.waitForTimeout(2000)

    //scroll by element to choose the right plan
    await scrollToElement(page, "//*[contains(text(),'Choose')]", "scroll to choose the right plan")

    //click view plans 
    await clickByIndex(page, "//*[contains(text(),'View Plans')]", 0, "view plans" )

    //capture essential plan info banner text
    let infoBanner = await getTextByIndex(page, "//*[@class='summary']", 0, "info banner")
    console.log("here are your plan details: " + infoBanner)



})//end of test