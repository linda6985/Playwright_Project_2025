import { Page, test } from '@playwright/test';

test('capture workshop schedules for 3 different zip codes', async ({ page }) => {

    //declare an array of zip codes
    let zip : string[] = []
    zip.push('11218');
    zip.push('11219');
    zip.push('11220');

    //loop through the array to enter each zip code an capture workshop schedules
    for (let i = 0 ; i < zip.length; i++) {
        //navigate to weightwatchers website 
        await page.goto('https://www.weightwatchers.com/us/');

        //click on find a workshop link
        await page.locator('[data-e2e-name="find_a workshop"]').click();

        //await for 2 seconds
        await page.waitForTimeout(2000);

        //enter zip code in the search field 
        await page.locator('[id="location-search"]').fill(zip[i]);

        //click on the search arrow botton 
        await page.locator('[id="location-search-cta"]').click();

        //await for 2 seconds
        await page.waitForTimeout(2000);

        //scroll down the first studio result
        await page.locator('[class="wrapperLink-rmsRn"]').nth(0).scrollIntoViewIfNeeded();

        //click on the first studio link
        await page.locator('[class="wrapperLink-rmsRn"]').nth(0).click();

        //await for 2 seconds
        await page.waitForTimeout(2000);

        //capture the entire address and print it 
        let address = await page.locator('[class="address-FnT8k"]').nth(0).textContent();
        console.log('studio in ' + zip[i] + ' : ' + address);
        //print an extra blank line 
        console.log('\n ')

        //await for 3 seconds
        await page.waitForTimeout(3000);

        //scroll into view using contains text for "Upcoming In-Person Workshops "
        await page.locator('[class="title-UbUc9"]').scrollIntoViewIfNeeded();
        //await for 3 seconds
        await page.waitForTimeout(3000);

        //capture the workshop schedule and print it
        let schedule = await page.locator('[class="scheduleContainerMobile-ps6Rm"]').nth(0).textContent();
        console.log('The upcoming schedule in ' + zip[i] + ' : ' + schedule);

        //print an extra blank line
        console.log('\n ')
        console.log('--------------------------------------------------');
        console.log('\n ')
    }//end of for loop
});//end of test
