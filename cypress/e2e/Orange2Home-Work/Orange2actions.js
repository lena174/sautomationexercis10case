import {
    SignIn2Constants,
    SignIn2Locators,
    DashboardLocators,
    DashbaordConsts,
    DashbaordConsts as dashbaordConsts
} from "./Orange2Consts";
import {SuccessToast} from "../Consts";

export class OrangeLogin2Page {
    visit() {
        cy.visit(SignIn2Constants.URL);
    }

    SignIn() {
        cy.get(SignIn2Locators.Username).type(SignIn2Constants.Username);
        cy.get(SignIn2Locators.Password).type(SignIn2Constants.Password);
        cy.get(SignIn2Locators.LogInButton).click();
    }

    CloseAlert() {
        cy.on('window:alert', () => true);
    }}
export class Dashboard {
        Admin(){
            cy.wait(2000)
        cy.get(DashboardLocators.AdminButton).click();
    }
    clickAddButton() {
            cy.get(DashboardLocators.AddButton).contains(DashbaordConsts.AddButton).click()
    }
    SelectRole(){
            cy.get(DashboardLocators.UserRoleStatus).eq(0).click()
        cy. get(DashboardLocators.SelectDropDown).contains(DashbaordConsts.Role).click()
    }
    SelectStatus(){
            cy.get(DashboardLocators.UserRoleStatus).eq(1).click()
        cy.get(DashboardLocators.SelectDropDown).contains(dashbaordConsts.Status).click()
    }
    EmployeeName(){
            cy.get(DashboardLocators.EmployeeName).type(dashbaordConsts.EmployeeNameValue)
        cy.wait(4000)
        cy.get(DashboardLocators.EmployeeNameDropdown).click()
    }
    Username(){
            cy.get(DashboardLocators.InputUserName).eq(1).type(dashbaordConsts.USerName)
    }
Password(){
            cy.get(DashboardLocators.Password).eq(0).type(dashbaordConsts.Password)
}
    ConfirmPassword(){
        cy.get(DashboardLocators.Password).eq(1).type(dashbaordConsts.Password)
    }
    SaveData(){cy.get(DashboardLocators.SaveButton).click();
        }
   SuccessText(){cy.get(SuccessToast).should('be.visible').and('contain', 'Successfully Saved');
}
CheckData() {
            cy.wait(3000);
            cy.get(DashboardLocators.Table).contains( dashbaordConsts.EmployeeNameValue).should('be.visible')
}
}

