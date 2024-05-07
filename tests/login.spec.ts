import { Page, test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import { faker } from '@faker-js/faker'

test.beforeEach(async({page, baseURL}) =>{
    await page.goto(`${baseURL}route=account/login`);
})

test('Login with a valid email and password', async ({ page, baseURL }) => {
    const pm = new PageManager(page)
    await pm.onLoginPage().enterEmail(process.env.EMAIL);
    await pm.onLoginPage().enterLoginPassword(process.env.PASSWORD);
    await pm.onLoginPage().clickLoginButton();
    expect(await page.title()).toBe("My Account");
})

test('Login with a valid email and an empty password', async ({ page, baseURL }) => {
    const pm = new PageManager(page)
    await pm.onLoginPage().enterEmail(process.env.EMAIL);
    await pm.onLoginPage().clickLoginButton();
    //await expect(page.getByText('Warning: No match for E-Mail Address and/or Password.')).toBeVisible();
    await pm.onLoginPage().checkLoginWarningMessage()
})

test('Check the Forgotten Password link', async ({ page, baseURL }) => {
    const pm = new PageManager(page)
    await pm.onLoginPage().clickForgottenPasswordLink();
    await pm.onForgotPasswordPage().forgotPasswordMessage();
})

