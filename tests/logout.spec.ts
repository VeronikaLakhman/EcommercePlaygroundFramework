import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';

test('Logout by selecting the Logout link from Right Column options', async ({ page, baseURL }) => {
    const pm = new PageManager(page)
    //go to loginPage and login user with valid credential
    await page.goto(`${baseURL}route=account/login`);
    await pm.onLoginPage().login(process.env.EMAIL, process.env.PASSWORD);
    //check that user on myAccount page
    await pm.onMyAccountPage().myAccountHeadingTitle();
    //logout
    await pm.onMyAccountPage().logout();
    //check that user logged out
    await pm.onAccountLogoutPage().logoutHeadingTitle();
})