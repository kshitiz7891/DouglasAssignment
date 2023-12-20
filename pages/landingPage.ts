import { Page, expect } from "@playwright/test";

export default class homePage{

    constructor(public page: Page) {  }

    readonly loggedInSuccessfullyTick = this.page.locator("button.button.button__with-icon--transparent.account-flyout__button--main")

    async validateLoggedInSuccessfullyTickIsDisplayed() {
       await  expect(this.loggedInSuccessfullyTick).toBeVisible()
    }

}