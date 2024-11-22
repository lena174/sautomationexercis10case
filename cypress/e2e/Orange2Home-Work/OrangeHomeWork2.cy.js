import {EditData, OrangeEditData, OrangeLoginPage} from "../action";
import {Dashboard, OrangeLogin2Page} from "./Orange2actions";


    describe('Testing Orange website', () => {
        it('Adding a New User in the Admin Section', () => {
           const orangeLogin2Page= new OrangeLogin2Page() // Login with valid admin credentials.
            const dashboard= new Dashboard()
            orangeLogin2Page.visit()
            orangeLogin2Page.SignIn()
            orangeLogin2Page.CloseAlert();
            dashboard.Admin()
            dashboard.clickAddButton()
            dashboard.SelectRole()
            dashboard.SelectStatus()
            dashboard.EmployeeName()
            dashboard.Username()
            dashboard.Password()
            dashboard.ConfirmPassword()
            dashboard.SaveData()
             dashboard.SuccessText()
             dashboard.CheckData()
         })
    })


// Open the Admin section from the left sidebar.
// Navigate to the "User Management" tab and click "Add User."
// Fill in required fields (e.g., Employee Name, Username, Role, Password).
// Click the "Save" button.
// Verify the new user appears in the user list.

//     it('Editing an Existing User’s Role', () => {},
//     //     Login with valid admin credentials.
//         // Open the Admin section from the left sidebar.
//         // Navigate to the "User Management" tab.
//         // Search for the specific user by username.
//         // Click the "Edit" button next to the user.
//         // Change the user’s role (e.g., from "ESS" to "Admin").
//         // Click the "Save" button.
//         // Verify the user’s role is updated.
//
//
//     it('Editing an Existing User’s Role', () =>{},
//         // Login with valid admin credentials.
//         //     Open the Admin section from the left sidebar.
//         //     Navigate to the "User Management" tab.
//         //     Search for the specific user by username.
//         //     Select the checkbox next to the user’s name.
//         //     Click the "Delete" button.
//         //     Confirm the deletion.
//         //     Verify the user no longer appears in the user list.
//
// it ('Searching for Users by Role',()=>{},
//     // Login with valid admin credentials.
//     //     Open the Admin section from the left sidebar.
//     //     Navigate to the "User Management" tab.
//     //     Use the filter option to select a specific role (e.g., "Admin" or "ESS").
//     // Click the "Search" button.
//     //     Verify that all displayed users match the selected role.
//
//   it('Resetting User Password',()=>{},
//
//         // Login with valid admin credentials.
//         // Open the Admin section from the left sidebar.
//         // Navigate to the "User Management" tab.
//         // Search for the specific user by username.
//         // Click the "Edit" button next to the user.
//         // Enter a new password in the password field.
//         // Click the "Save" button.
//         // Verify the password reset success message.
//    it ('Updating System User Status',()=>{},
//
//     //     Login with valid admin credentials.
//     //     Open the Admin section from the left sidebar.
//     //     Navigate to the "User Management" tab.
//     //     Search for a specific user.
//     //     Click the "Edit" button next to the user.
//     //     Change the user’s status (e.g., from "Enabled" to "Disabled").
//     // Click the "Save" button.
//     //     Verify the user’s status has been updated.
//    it ('Validating User Role Permissions',()=>{},
//     // Login with an Admin account.
//     //     Open the Admin section from the sidebar.
//     //     Create a new user with the role "ESS" (Employee Self Service) and limited permissions.
//     //     Logout and login with the new user’s credentials.
//     //     Attempt to access the Admin section.
//     //     Verify that the "Admin" section is not visible or accessible for this user.
//     //     Attempt to access other restricted areas, like Job Titles or User Management.
//     //     Verify that access is denied with appropriate messages.
//   it ('Verifying Mandatory Fields and Validation Messages',()=>{},
//     // Login with an Admin account.
//     //     Open the Admin section and navigate to "User Management."
//     // Click "Add User" and leave all mandatory fields (like Username, Password, Role) empty.
//     //     Click "Save" and verify that error messages appear for each missing field.
//     //     Enter invalid data in fields (e.g., special characters in the username).
//     // Attempt to save again and verify that error messages appear for invalid data.
//     //     Correct all data and save successfully to verify form accepts valid inputs.
//     it('Bulk User Creation and Validation',()=>{},
//     // Login with an Admin account.
//     //     Open the Admin section and go to "User Management."
//     // Prepare test data for multiple users (e.g., employee names, usernames, passwords).
//     // Programmatically add each user in a loop, using Cypress each() to add user details and save.
//     //     After adding all users, go back to the "User Management" list.
//     //     Search and verify each new user to ensure they are created correctly.
//     //     Validate the role, status, and other fields for each user.
//         it( 'Adding and Verifying a Duplicate User',() =>
//
//     // Login with an Admin account.
//     //     Open the Admin section from the sidebar.
//     //     Navigate to "User Management" and click "Add User."
//     // Enter details for a new user (e.g., employee name, username, password).
//     // Save the user and verify the success message.
//     //     Repeat the process to add a user with the same username.
//     //     Verify that an error message appears indicating that the username already exists.
// }),
// })
