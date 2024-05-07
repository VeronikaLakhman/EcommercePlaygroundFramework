import { Locator, Page, expect } from "@playwright/test"
export default class MyAccountPage {

    readonly myAccountHeadingElement: Locator
    readonly logoutBtn: Locator

    constructor(public page: Page) {
        this.page = page
        this.myAccountHeadingElement = page.getByRole('heading', { name: 'My Account' })
        this.logoutBtn = page.getByRole('link', { name: 'Logout' })
    }

    async myAccountHeadingTitle() {
        const expectedHeading = 'My Account'
        await expect(this.myAccountHeadingElement).toHaveText(expectedHeading);
    }

    async logout() {
        await this.logoutBtn.click()
    }

}