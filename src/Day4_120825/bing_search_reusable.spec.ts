import { Page , test } from "@playwright/test";
import { getText, type } from "./Reusable_Action";



let page: Page;//initializing page variable for browser since we are calling multiple test 

test.beforeAll(async ({browser})=>{
    page = await browser.newPage();
});//end of beforeEach


test('search for playwright keyword on bing', async ({})=>{
    await page.goto("https://www.bing.com/");
    await page.waitForTimeout(3000);//wait a few sec
    await type(page, '[name="q"]','playwright','Search Box');
    await page.keyboard.press('Enter')//hitting enter key after typing 


});//end of test

test('capture the search number on bing plawright keyword', async ({})=>{
    let searchResult = await getText(page,'[class="sb_count"]', 'search result text');
    console.log("Search result is: " + searchResult);
    let searchNumber = (await searchResult).split(' ');
    console.log("Search number is: " + searchNumber[1]);

});//end of test
