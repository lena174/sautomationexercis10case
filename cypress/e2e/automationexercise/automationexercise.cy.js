import {ContactUs, Products, SignIn, SignUp, Subscription} from "./Actions";
const signUp= new SignUp()
const signIn= new SignIn()
const contactUs=new ContactUs()
const products = new Products()
const subscription= new Subscription()
describe('test Automationexercise page', () => {
    beforeEach(() => {

        signUp.visit();

    });

    it(' Register User', () => {

        signUp.OpenSignInPage();
        signUp.InputValidData()
        signUp.SignUp()
        signUp.Gender()
        signUp.Password()
        signUp.Date()
        signUp.checkBox()
        signUp.AditionalInformation()
        signUp.createAccount()
        signUp.AccountCreated()
        signUp. Continue()
        signUp. NavigationBardUsername()
        // signUp.DeleteAccount()
    });

    it(' Login User with correct email and password', () => {

        signUp.OpenSignInPage()
        signIn.SignInData()
        signIn.SignInButton()
        signUp. NavigationBardUsername()
        // signUp.DeleteAccount()
    });

    it('Login User with incorrect email and password', () => {
        signUp.OpenSignInPage()
        signIn.SignInText()
        signIn. IncorectSignin()
        signIn.SignInButton()
        signIn.ErrorMessage()
    });

    it('Register User with existing email', () => {
        signUp.OpenSignInPage();
        signUp.IncorrectSignUp()
        signUp.SignUPError()
    });

    it(' Contact Us Form', () => {
        contactUs.ContactUSButton()
        contactUs.verifyText()
        contactUs.TypeData()
        contactUs.AttachFile()
        contactUs.Submit()
        contactUs.Alert()
        contactUs.SuccessText()
        });

    it(' Verify All Products and product detail page', () => {
        products.ProductPage()
    products.Title()
        products.ProductList()
        products.ViewProduct()
        products.ProductData()
    });

    it(' Search Product', () => {
        products.ProductPage()
    products.Title()
        products.Search()
        products.SearchProductList()
    });

    it('Verify Subscription in home page', () => {
        subscription.ScrollDown()
        subscription.Subscribe()
    });

    it('Verify Subscription in home page', () => {
        subscription.OpenCartPage()
        subscription.ScrollDown()
        subscription.Subscribe()
    });

    it(' Verify All Products and product detail page', () => {
        products.ProductPage()
        products.ProductAddToCard1()
        products.ContinueShopping()
        products.ProductAddToCard2()
        products.ViewCart()
        products.ShoppingCardProducts()
        products.ShoppingCardDetails()
    });
})


