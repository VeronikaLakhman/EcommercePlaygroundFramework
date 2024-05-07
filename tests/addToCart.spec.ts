import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import { faker } from '@faker-js/faker'

const randomEmail = faker.internet.email()



test('Add to cart', async ({ page, baseURL }) => {
    const pm = new PageManager(page)
    await page.goto(`${baseURL}route=account/login`);
    await pm.onLoginPage().login(process.env.EMAIL, process.env.PASSWORD);
    await pm.onHomePage().clickOnShopByCategoryDropdown();
    await pm.onHomePage().clickOnPhoneTabletsIpodLink();
    await pm.onPhoneTabletsIpodPage().addFirstProductToTheCart();
    const isCArtVisible = await pm.onPhoneTabletsIpodPage().isToastVisible();
    await expect(isCArtVisible).toBeVisible();
})
