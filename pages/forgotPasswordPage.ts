import { Locator, Page, expect } from "@playwright/test"

export default class ForgotPassword {

    readonly headingElement: Locator

    constructor(public page: Page) {
        this.page = page
        this.headingElement = page.getByText('Forgot Your Password?')
    }

    async forgotPasswordMessage() {
        const expectedHeading = 'Forgot Your Password?'
        await expect(this.headingElement).toHaveText(expectedHeading);
    }



}