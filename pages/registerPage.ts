import { Locator, Page, expect } from "@playwright/test"
export default class RegisterPage {

   readonly firstName: Locator
   readonly lastName: Locator
   readonly email: Locator
   readonly telephone: Locator
   readonly password: Locator
   readonly confirmPassword: Locator
   readonly subscribeRadioBtnNo: Locator
   readonly termAndConditionCheckbox: Locator
   readonly continueBtn: Locator
   readonly actualFirstNameWarningMessage: Locator
   readonly actualLastNameWarningMessage: Locator
   readonly actualEmailWarningMessage: Locator
   readonly actualTelephoneWarningMessage: Locator
   readonly actualPasswordWarningMessage: Locator
   readonly actualPrivacyPolicyWarningMessage: Locator
   readonly actualPasswordConfirmationWarningMessage: Locator
   readonly actualExistingEmailWarningMessage: Locator



   constructor(public page: Page) {
      this.page = page
      this.firstName = page.locator("#input-firstname")
      this.lastName = page.locator("#input-lastname")
      this.email = page.locator("#input-email")
      this.telephone = page.locator("#input-telephone")
      this.password = page.locator("#input-password")
      this.confirmPassword = page.locator("#input-confirm")
      this.subscribeRadioBtnNo = page.locator("#input-newsletter-no")
      this.termAndConditionCheckbox = page.getByText('I have read and agree to the')
      this.continueBtn = page.getByRole('button', { name: 'Continue' })
      this.actualFirstNameWarningMessage = page.getByText('First Name must be between 1 and 32 characters!')
      this.actualLastNameWarningMessage = page.getByText('Last Name must be between 1 and 32 characters!')
      this.actualEmailWarningMessage = page.getByText('E-Mail Address does not appear to be valid!')
      this.actualTelephoneWarningMessage = page.getByText('Telephone must be between 3 and 32 characters!')
      this.actualPasswordWarningMessage = page.getByText('Password must be between 4 and 20 characters!')
      this.actualPrivacyPolicyWarningMessage = page.getByText('Warning: You must agree to the Privacy Policy!')
      this.actualPasswordConfirmationWarningMessage = page.getByText('Password confirmation does not match password!')
      this.actualExistingEmailWarningMessage = page.getByText('Warning: E-Mail Address is already registered!')

   }

   async enterFirstName(firstName) {
      await this.firstName.fill(firstName)
   }
   async enterLastName(lastName) {
      await this.lastName.fill(lastName)
   }
   async enterEmail(email: string) {
      await this.email.fill(email)
   }
   async enterTelephone(telephone) {
      await this.telephone.fill(telephone)
   }
   async enterPassword(password) {
      await this.password.fill(password)
   }
   async enterConfirmPassword(password) {
      await this.confirmPassword.fill(password)
   }
   isSubscribeChecked() {
      return this.subscribeRadioBtnNo
   }
   async clickTermAndCondition() {
      await this.termAndConditionCheckbox.click()
   }
   async clickContinueToRegister() {
      await this.continueBtn.click()
   }
   async checkRegisterFirstNameWarningMessage() {
      const expectedFirstNameWarningMessage = 'First Name must be between 1 and 32 characters!'
      await expect(this.actualFirstNameWarningMessage).toHaveText(expectedFirstNameWarningMessage)
   }
   async checkRegisterLastNameWarningMessage() {
      const expectedLastNameWarningMessage = 'Last Name must be between 1 and 32 characters!'
      await expect(this.actualLastNameWarningMessage).toHaveText(expectedLastNameWarningMessage)
   }
   async checkRegisterEmailWarningMessage() {
      const expectedEmailWarningMessage = 'E-Mail Address does not appear to be valid!'
      await expect(this.actualEmailWarningMessage).toHaveText(expectedEmailWarningMessage)
   }
   async checkRegisterTelephoneWarningMessage() {
      const expectedTelephoneWarningMessage = 'Telephone must be between 3 and 32 characters!'
      await expect(this.actualTelephoneWarningMessage).toHaveText(expectedTelephoneWarningMessage)
   }
   async checkRegisterPasswordWarningMessage() {
      const expectedPasswordWarningMessage = 'Password must be between 4 and 20 characters!'
      await expect(this.actualPasswordWarningMessage).toHaveText(expectedPasswordWarningMessage)
   }
   async checkRegisterPrivacyPolicyWarningMessage() {
      const expectedPrivacyPolicyWarningMessage = 'Warning: You must agree to the Privacy Policy!'
      await expect(this.actualPrivacyPolicyWarningMessage).toHaveText(expectedPrivacyPolicyWarningMessage)
   }
   async checkRegisterPasswordConfirmationWarningMessage() {
      const expectedPasswordConfirmationWarningMessage = 'Password confirmation does not match password!'
      await expect(this.actualPasswordConfirmationWarningMessage).toHaveText(expectedPasswordConfirmationWarningMessage)
   }
   async checkExistingEmailWarningMessage() {
      const expectedExistingEmailWarningMessage = 'Warning: E-Mail Address is already registered!'
      await expect(this.actualExistingEmailWarningMessage).toHaveText(expectedExistingEmailWarningMessage)
   }

}