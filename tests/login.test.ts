import { test } from "../base/basePage";
import { testConfig } from "../testConfig"
import { getDecryptedValue } from "../base//utils";

test("Login Success test", async ({ page, homePage, loginPage, landingPage }) => {
    await homePage.navigateToURL(testConfig.url)
    await homePage.acceptAllCookies()
    await homePage.clickOnProfileIcon()
    await loginPage.login(testConfig.username, getDecryptedValue(testConfig.password))
    await landingPage.validateLoggedInSuccessfullyTickIsDisplayed()
});

test("Incorrect Password Login Failure Test", async ({ page, homePage, loginPage }) => {
    await homePage.navigateToURL(testConfig.url)
    await homePage.acceptAllCookies()
    await homePage.clickOnProfileIcon()
    await loginPage.login(testConfig.username, testConfig.incorrectPassword)
    await loginPage.validateLoginFailureMessageIsDisplayed()
});

