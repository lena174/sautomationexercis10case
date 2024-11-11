export const SignInLocators = {
    Username: "input[name=username]",
    Password: "input[name=password]",
    UserData: ".oxd-userdropdown-tab",
    LogInButton: "button[type=submit]"
};

export const SignInConstants = {
    URL: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    Username: "Admin",
    Password: "admin123"
};

export const EditDataLocators = {
    MyInfo: '[href="/web/index.php/pim/viewMyDetails"]'
};

export const PersonalDetailsLocators = {
    FirstNameInput: "[placeholder='First Name']",
    MiddleNameInput: "[placeholder='Middle Name']",
    SaveButton: "[type='submit']",
    SuccessText: ".oxd-toast"
};

export const PersonalDetailsConstants = {
    FirstName: "Test123",
    MiddleName: "TestTest"
};

export const SuccessToast = ".oxd-toast"; // Success toast selector added