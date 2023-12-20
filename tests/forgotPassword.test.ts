import { test } from "../base/basePage";
import { testConfig } from "../testConfig"

test("Forgot Password test", async ({ page, homePage, loginPage}) => {
    await homePage.navigateToURL(testConfig.url)
    await homePage.acceptAllCookies()
    await homePage.clickOnProfileIcon()
    await loginPage.sendPasswordRecoveryEmail(testConfig.username)
    await loginPage.validatePasswordRecoveryEmailIsSent()
});