class LoginPage {
    visitPage(){
        cy.visit('https://demoblaze.com/')
    }

    clickLoginbutton() {
        cy.get('#login2').click()
    }
      typeUsername(){  cy.wait(1000)
        cy.get('#loginusername'). type('User123321')
    }
    typePassword(){
        cy.wait(1000)
        cy.get('#loginpassword'). type ("User123321")
    }
    Loginbutton(){
        cy.get('.modal-footer').contains('Log in').click()
    }
    assertLoginOptionsvisible(){
        cy.get("#narvbarx").contains('Welcome User123321').should("be.visible")
        cy.get("#logout2").should("be.visible")
    }
    LogInmodalClosed(){
        cy.get("#logInModal").should ("not.be.visible")
    }
}

export default LoginPage
