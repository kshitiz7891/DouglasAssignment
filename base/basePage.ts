import { test as baseTest } from "@playwright/test"
import HomePage from "../pages/homePage"
import LoginPage from "../pages/loginPage"
import LandingPage from "../pages/landingPage"

type Pages = {

    homePage: HomePage;
    loginPage: LoginPage;
    landingPage : LandingPage;

}

const testPages = baseTest.extend<Pages>(
    {
        homePage: async ({ page }, use) => {
            await use(new HomePage(page))
        },
        loginPage: async ({ page }, use) => {
            await use(new LoginPage(page))
        },
        landingPage: async ({ page }, use) => {
            await use(new LandingPage(page))
        }
    }


)

export const test = testPages;