import { Locator, Page, expect } from "@playwright/test"
export default class AccountSuccess {

    readonly headingElement: Locator


    constructor(public page: Page) {
        this.page = page
        this.headingElement = page.getByText(' Your Account Has Been Created!')
    }

    async registerSuccessMessage() {
        const expectedHeading = 'Your Account Has Been Created!'
        await expect(this.headingElement).toHaveText(expectedHeading);
    }

}