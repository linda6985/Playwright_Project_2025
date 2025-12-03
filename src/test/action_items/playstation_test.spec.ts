import { Page, test } from '@playwright/test';

//initialize page variable for browser
let page: Page

test.beforeAll(async ({ browser }) => {
    //create a new page instance
    page = await browser.newPage()
})//end of before all


test('Play the trailer for a PS5 game', async () => {
    // Navigate to the PlayStation website
    await page.goto('https://www.playstation.com/en-us/');
    //click on games tab
    await page.locator('[id="menu-button-primary--msg-games"]').click();
    // click on PS5 games link
    await page.locator('[id="link-secondary--msg-games-msg-ps5"]').click();
    await page.waitForTimeout(5000); // wait for few seconds
    // click on play button for a game trailer
    await page.locator('[alt="It Happens on PS5 - Unmissable Games | PS5"]').click({force: true});
    await page.waitForTimeout(5000); // wait for few seconds
    // click on play button from the youtube video
    const iframe = page.frameLocator('iframe[sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-popups-to-escape-sandbox"]').nth(0);
    await iframe.locator('[title="Play"]').click({force: true});

    await page.waitForTimeout(10000); // wait for few seconds
}) //end of test 