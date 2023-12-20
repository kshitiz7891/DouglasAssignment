import { Page, expect } from "@playwright/test";

export default class homePage{

    constructor(public page: Page) {  }

    readonly homePageLogo = this.page.locator("div.login_logo")
    readonly acceptCookiesButton = this.page.locator("button.button.button__primary.uc-list-button__accept-all")
    readonly profileIcon = this.page.locator("button.button.button__with-icon--transparent.account-flyout__button--main")

    async navigateToURL(url: string) : Promise<void> {
        this.page.goto(url)
    }

    async acceptAllCookies() {
        await this.acceptCookiesButton.click()
    }

    async validateLoginScreenIsDisplayed() {
       await  expect(this.homePageLogo).toBeVisible()
    }

    async clickOnProfileIcon() {
        await this.profileIcon.click()
    }


}