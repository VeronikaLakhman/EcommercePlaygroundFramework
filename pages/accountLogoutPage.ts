import { Locator, Page, expect } from "@playwright/test"

export default class AccountLogout {

    readonly logoutHeadingElement: Locator

    constructor(public page: Page) {
        this.page = page
        this.logoutHeadingElement = page.getByRole('heading', { name: 'Account Logout' })
    }

    async logoutHeadingTitle() {
        const expectedHeading = 'Account Logout'
        await expect(this.logoutHeadingElement).toHaveText(expectedHeading);
    }


}