import LoginPage from "../../POM/Login";
describe('Sing in functionally in the demoblaze.com', () => {
    it('input valid data and sign in', () => {
        const loginPage = new LoginPage()
        loginPage.visitPage()
        loginPage.clickLoginbutton()
        loginPage.typeUsername()
        loginPage.typePassword()
        loginPage.Loginbutton()
        loginPage.assertLoginOptionsvisible()
        loginPage.LogInmodalClosed()
    })
})
