import { SignInLocators, SignInConstants, EditDataLocators, PersonalDetailsLocators, PersonalDetailsConstants, SuccessToast } from "./Consts";

export class OrangeLoginPage {
    visit() {
        cy.visit(SignInConstants.URL);
    }

    SignIn() {
        cy.get(SignInLocators.Username).type(SignInConstants.Username);
        cy.get(SignInLocators.Password).type(SignInConstants.Password);
        cy.get(SignInLocators.LogInButton).click();
    }
    CloseAlert() {
        cy.on('window:alert', () => true);
    }

    AssertLoginSuccessful() {
        cy.get(SignInLocators.UserData).should("be.visible");
    }
}

export class OrangeEditData {
    ClickMyInfo() {
        cy.get(EditDataLocators.MyInfo).click();
    }
}

export class EditData {
    EditFirstName() {
        cy.get(PersonalDetailsLocators.FirstNameInput).clear().type(PersonalDetailsConstants.FirstName);
    }

    EditMiddleName() {
        cy.get(PersonalDetailsLocators.MiddleNameInput).clear().type(PersonalDetailsConstants.MiddleName);
    }

    Save() {
        cy.get(PersonalDetailsLocators.SaveButton).eq(0).click();
    }

    verifySuccessToast() {
        cy.get(SuccessToast).should('be.visible').and('contain', 'Successfully Updated');
    }

    AssertNewData() {
        cy.wait(3000);  // Only use waits when necessary.
        cy.get(PersonalDetailsLocators.FirstNameInput).should('have.value', PersonalDetailsConstants.FirstName);
        cy.get(PersonalDetailsLocators.MiddleNameInput).should('have.value', PersonalDetailsConstants.MiddleName);
    }
}