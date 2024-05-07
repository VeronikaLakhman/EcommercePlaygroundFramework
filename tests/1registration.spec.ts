import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import { faker } from '@faker-js/faker'

const randomEmail = faker.internet.email()

test('Register Account with Mandatory fields', async ({ page, baseURL }) => {
    const pm = new PageManager(page)
    await page.goto(`${baseURL}route=account/register`);
    await pm.onRegisterPage().enterFirstName(process.env.USER_FIRST_NAME);
    await pm.onRegisterPage().enterLastName(process.env.USER_LAST_NAME);
    await pm.onRegisterPage().enterEmail(randomEmail);
    await pm.onRegisterPage().enterTelephone(process.env.TELEPHONE);
    await pm.onRegisterPage().enterPassword(process.env.PASSWORD);
    await pm.onRegisterPage().enterConfirmPassword(process.env.PASSWORD);
    expect(pm.onRegisterPage().isSubscribeChecked()).toBeChecked();
    await pm.onRegisterPage().clickTermAndCondition();
    await pm.onRegisterPage().clickContinueToRegister();
    await pm.onAccountSuccessPage().registerSuccessMessage();
})

test('Register without providing any fields ', async ({ page, baseURL }) => {
    const pm = new PageManager(page)
    await page.goto(`${baseURL}route=account/register`);
    await pm.onRegisterPage().clickContinueToRegister();
    await pm.onRegisterPage().checkRegisterFirstNameWarningMessage();
    await pm.onRegisterPage().checkRegisterLastNameWarningMessage();
    await pm.onRegisterPage().checkRegisterEmailWarningMessage();
    await pm.onRegisterPage().checkRegisterTelephoneWarningMessage();
    await pm.onRegisterPage().checkRegisterPasswordWarningMessage();
    await pm.onRegisterPage().checkRegisterPrivacyPolicyWarningMessage();
})

test.describe('RegisterAccount page navigations', () => {

    test('method_1', async ({ page, baseURL }) => {
        const pm = new PageManager(page)
        await page.goto(`${baseURL}`);
        await pm.onHomePage().hoverOnMyAccountDropMenu();
        await pm.onHomePage().clickOnRegisterOptionLink();
        await expect(page).toHaveTitle('Register Account');
    })

    test('method_2', async ({ page, baseURL }) => {
        const pm = new PageManager(page)
        await page.goto(`${baseURL}`);
        await pm.onHomePage().hoverOnMyAccountDropMenu();
        await pm.onHomePage().clickOnLoginOptionLink();
        await pm.onLoginPage().clickContinueButton();
        await expect(page).toHaveTitle('Register Account');
    })

    test('method_3', async ({ page, baseURL }) => {
        const pm = new PageManager(page)
        await page.goto(`${baseURL}`);
        await pm.onHomePage().hoverOnMyAccountDropMenu();
        await pm.onHomePage().clickOnLoginOptionLink();
        await pm.onLoginPage().clickRegisterLink();
        await expect(page).toHaveTitle('Register Account');
    })
})

test('Register account by providing mismatching passwords', async ({ page, baseURL }) => {
    const pm = new PageManager(page)
    await page.goto(`${baseURL}route=account/register`);
    await pm.onRegisterPage().enterFirstName(process.env.USER_FIRST_NAME);
    await pm.onRegisterPage().enterLastName(process.env.USER_LAST_NAME);
    await pm.onRegisterPage().enterEmail(randomEmail);
    await pm.onRegisterPage().enterTelephone(process.env.TELEPHONE);
    await pm.onRegisterPage().enterPassword(process.env.PASSWORD);
    await pm.onRegisterPage().enterConfirmPassword('12345');
    expect(pm.onRegisterPage().isSubscribeChecked()).toBeChecked();
    await pm.onRegisterPage().clickTermAndCondition();
    await pm.onRegisterPage().clickContinueToRegister();
    await pm.onRegisterPage().checkRegisterPasswordConfirmationWarningMessage();
})

test('Register account by providing existing email', async ({ page, baseURL }) => {
    const pm = new PageManager(page)
    await page.goto(`${baseURL}route=account/register`);
    await pm.onRegisterPage().enterFirstName(process.env.USER_FIRST_NAME);
    await pm.onRegisterPage().enterLastName(process.env.USER_LAST_NAME);
    await pm.onRegisterPage().enterEmail('test9@test.com');
    await pm.onRegisterPage().enterTelephone(process.env.TELEPHONE);
    await pm.onRegisterPage().enterPassword(process.env.PASSWORD);
    await pm.onRegisterPage().enterConfirmPassword(process.env.PASSWORD);
    expect(pm.onRegisterPage().isSubscribeChecked()).toBeChecked();
    await pm.onRegisterPage().clickTermAndCondition();
    await pm.onRegisterPage().clickContinueToRegister();
    await pm.onRegisterPage().checkExistingEmailWarningMessage();
})


