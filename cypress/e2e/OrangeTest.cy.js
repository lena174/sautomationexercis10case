import { OrangeLoginPage, OrangeEditData, EditData } from "./action";

describe('Log in and edit data', () => {
    it('logs in and edits data via POM', () => {
        const orangeLoginPage = new OrangeLoginPage();
        const orangeEditData = new OrangeEditData();
        const editData = new EditData();

        orangeLoginPage.visit();
        orangeLoginPage.SignIn();
        orangeLoginPage.CloseAlert();
        orangeLoginPage.AssertLoginSuccessful();

        orangeEditData.ClickMyInfo();
        editData.EditFirstName();
        editData.EditMiddleName();
        editData.Save();
        editData.verifySuccessToast(); // Verify success toast
        editData.AssertNewData();
    });
});