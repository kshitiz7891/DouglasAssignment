import { Page , expect} from "@playwright/test";

export default class loginPage {

    constructor(public page: Page) {

    }

    readonly emailTextbox = this.page.getByTestId('grid').locator("input[type='email']")
    readonly passwordTextbox = this.page.locator('#loginForm').getByPlaceholder("Passwort*")
    readonly loginButton = this.page.getByTestId('grid').getByRole('button', { name: 'Anmelden' })
    readonly incorrectLoginDetailsText = this.page.locator("xpath = //span[text()='Falsche Zugangsdaten']")
    readonly forgotPasswordLink = this.page.getByText("asswort vergessen?")
    readonly passwordRecoveryEmailTextbox = this.page.getByRole('textbox', { name: 'E-Mail-Adresse*' })
    readonly sendEmailButton = this.page.getByRole('button', { name: 'E-Mail absenden' })
    readonly emailSentSuccessMessage = this.page.getByRole('heading', { name: 'E-Mail verschickt' })
    readonly closeButton = this.page.getByRole('button', { name: 'Schliessen' })

    async login(email: string, password : string) {
        await this.emailTextbox.click()
        await this.enterUsername(email)
        await this.enterPassword(password)
        await this.loginButton.click()
    }

    async sendPasswordRecoveryEmail(email: string) {
       await this.forgotPasswordLink.click()
       await this.enterPasswordRecoveryEmail(email)
       await this.sendEmailButton.click()
     }

    async validatePasswordRecoveryEmailIsSent() {
        await  expect(this.emailSentSuccessMessage).toBeVisible()
     }

    private async enterUsername(email: string) {
       await this.emailTextbox.fill(email)
    }

    private async enterPasswordRecoveryEmail(email: string) {
        await this.passwordRecoveryEmailTextbox.fill(email)
     }
 
    private async enterPassword(password: string) {
        await this.passwordTextbox.fill(password)
    }

    async validateLoginFailureMessageIsDisplayed() {
        await  expect(this.incorrectLoginDetailsText).toBeVisible()
     }
}