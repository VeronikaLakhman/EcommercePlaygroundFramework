import { Page, expect } from "@playwright/test"
import RegisterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import PhoneTabletsIpodPage from '../pages/phoneTabletsIpodPage';
import AccountSuccess from "./accountSuccess";
import ForgotPassword from "./forgotPasswordPage";
import MyAccountPage from "./myAccountPage";
import AccountLogout from "./accountLogoutPage";


export class PageManager {

    private readonly page: Page
    private readonly registerPage: RegisterPage
    private readonly loginPage: LoginPage
    private readonly homePage: HomePage
    private readonly phoneTabletsIpodPage: PhoneTabletsIpodPage
    private readonly accountSuccessPage: AccountSuccess
    private readonly forgotPasswordPage: ForgotPassword
    private readonly myAccountPage: MyAccountPage
    private readonly accountLogoutPage: AccountLogout

    constructor(page: Page) {
        this.page = page
        this.registerPage = new RegisterPage(this.page)
        this.loginPage = new LoginPage(this.page)
        this.homePage = new HomePage(this.page)
        this.phoneTabletsIpodPage = new PhoneTabletsIpodPage(this.page)
        this.accountSuccessPage = new AccountSuccess(this.page)
        this.forgotPasswordPage = new ForgotPassword(this.page)
        this.myAccountPage = new MyAccountPage(this.page)
        this.accountLogoutPage = new AccountLogout(this.page)
    }

    onRegisterPage() {
        return this.registerPage
    }
    onLoginPage() {
        return this.loginPage
    }
    onHomePage() {
        return this.homePage
    }
    onPhoneTabletsIpodPage() {
        return this.phoneTabletsIpodPage
    }
    onAccountSuccessPage() {
        return this.accountSuccessPage
    }
    onForgotPasswordPage() {
        return this.forgotPasswordPage
    }
    onMyAccountPage() {
        return this.myAccountPage
    }
    onAccountLogoutPage() {
        return this.accountLogoutPage
    }

}