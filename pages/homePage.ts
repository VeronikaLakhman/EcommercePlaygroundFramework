import { Locator, Page } from "@playwright/test"
export default class HomePage {

    readonly shopByCategoryDropdown: Locator
    readonly phoneTabletsIpodMenuItem: Locator
    readonly myAccountDropMenu: Locator
    readonly registerOptionLink: Locator
    readonly loginOptionLink: Locator

    constructor(public page: Page) {
        this.page = page
        this.shopByCategoryDropdown = page.getByRole('button', { name: 'Shop by Category' })
        this.phoneTabletsIpodMenuItem = page.getByRole('link', { name: 'Phone, Tablets & Ipod' })
        this.myAccountDropMenu = page.getByRole('button', { name: 'My account' })
        this.registerOptionLink = page.getByRole('link', { name: 'Register', exact: true })
        this.loginOptionLink = page.getByRole('link', { name: 'Login' })
    }

    async clickOnShopByCategoryDropdown() {
        await this.shopByCategoryDropdown.click();
    }

    async clickOnPhoneTabletsIpodLink() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            await this.phoneTabletsIpodMenuItem.click()
        ]);
    }

    async hoverOnMyAccountDropMenu() {
        await this.myAccountDropMenu.hover()
    }

    async clickOnRegisterOptionLink() {
        await this.registerOptionLink.click()
    }

    async clickOnLoginOptionLink() {
        await this.loginOptionLink.click()
    }

    async clickOnMyAccountDropMenu() {
        await this.myAccountDropMenu.click()
    }
}