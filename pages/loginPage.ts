import { Locator, Page, expect } from "@playwright/test"
export default class LoginPage {

   readonly emailAddressInput: Locator
   readonly loginPasswordInput: Locator
   readonly loginButton: Locator
   readonly continueButton: Locator
   readonly forgottenPasswordLink: Locator
   readonly registerLink: Locator
   readonly actualWarningMessage: Locator


   constructor(public page: Page) {
      this.page = page
      this.emailAddressInput = page.locator("#input-email")
      this.loginPasswordInput = page.locator("#input-password")
      this.loginButton = page.getByRole('button', { name: 'Login' })
      this.continueButton = page.getByRole('link', { name: 'Continue' })
      this.registerLink = page.getByRole('link', { name: 'Register' })
      this.actualWarningMessage = page.getByText('Warning: No match for E-Mail Address and/or Password.')
      this.forgottenPasswordLink = page.getByRole('link', { name: 'Forgotten Password', exact: true })
   }

   async enterEmail(emailAddress) {
      await this.emailAddressInput.fill(emailAddress)
   }

   async enterLoginPassword(loginPassword) {
      await this.loginPasswordInput.fill(loginPassword)
   }

   async clickLoginButton() {
      await this.loginButton.click()
   }

   async clickContinueButton() {
      await this.continueButton.click()
   }

   async clickRegisterLink() {
      await this.registerLink.click()
   }

   async clickForgottenPasswordLink() {
      await this.forgottenPasswordLink.click()
   }

   async login(email, password) {
      await this.enterEmail(email);
      await this.enterLoginPassword(password);
      await this.clickLoginButton();
   }

   async checkLoginWarningMessage() {
      const expectedWarningMessage = 'Warning: No match for E-Mail Address and/or Password.'
      await expect(this.actualWarningMessage).toHaveText(expectedWarningMessage)
   }

}