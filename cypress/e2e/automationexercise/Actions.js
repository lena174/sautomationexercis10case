import {
    GlobalLocators, GlobalData, AccountData, SignUpPagelocator,
    ContactUsLocators, ContactUsData, ProductsLocators, ProductsData, SubscriptionData, SubscriptionLocators
} from "./Consts";

export class SignUp {
  visit() {
      cy.visit(GlobalData.URL)
}


OpenSignInPage(){
      cy.get(GlobalLocators.NavigationBar).contains(GlobalData.SignInButton).click();
    cy.get(GlobalLocators.SingUpblock).contains(GlobalData.SignUpText).should("be.visible")
  }
  InputValidData(){
      cy.get(GlobalLocators.SignUPName).type(AccountData.SignUPName)
      cy.get(GlobalLocators.SignUpEmail).type(AccountData.SignUpEmail)
  }
  SignUp(){
      cy.get(GlobalLocators.SignUpSubmit).click()
      cy.get(SignUpPagelocator.text).contains(AccountData.SignupText).should("be.visible")
  }
  Gender(){
      cy.get(SignUpPagelocator.Title).click()
  }
  Password(){
      cy.get(SignUpPagelocator.Password).type(AccountData.Password)
  }
  Date(){
      cy.get(SignUpPagelocator.Day).select(AccountData.Day)
      cy.get(SignUpPagelocator.Months).select(AccountData.Months)
      cy.get(SignUpPagelocator.Year).select(AccountData.Year)
  }
  checkBox(){
      cy.get(SignUpPagelocator.NewsletterCheckBox).check()
      cy.get(SignUpPagelocator.OptinCheckBox).check()
  }
  AditionalInformation(){
      cy.get(SignUpPagelocator.FirstName).type(AccountData.FirstName)
      cy.get(SignUpPagelocator.LastName).type(AccountData.LastName)
      cy.get(SignUpPagelocator.Company).type(AccountData.Company)
      cy.get(SignUpPagelocator.Address).type(AccountData.Address)
      cy.get(SignUpPagelocator.Address2).type(AccountData.Address2)
      cy.get(SignUpPagelocator.Country).select(AccountData.Country)
      cy.get(SignUpPagelocator.State).type(AccountData.State)
      cy.get(SignUpPagelocator.City).type(AccountData.City)
      cy.get(SignUpPagelocator.Zipcode).type(AccountData.Zipcode)
      cy.get(SignUpPagelocator.MobileNumber).type(AccountData.MobileNumber)
  }
  createAccount(){
      cy.get(SignUpPagelocator.CreateButton).contains(AccountData.CreateButton).click();
  }
  AccountCreated(){
      cy.get(SignUpPagelocator.AccountText).contains(AccountData.AccountCreatedText).should("be.visible")
  }
    Continue(){
      cy.get(SignUpPagelocator.ContinueButton).contains(AccountData.ContinueButton).click();
    }
    NavigationBardUsername(){
      cy.get(GlobalLocators.NavigationBar).contains(GlobalData.UsernameNavigationBar).should("be.visible")
    }
    DeleteAccount(){
      cy.get(GlobalLocators.NavigationBar).contains(GlobalData.DeleteAccount).click()
        cy.get(SignUpPagelocator.AccountText).contains(GlobalData.DeletedText).should("be.visible")
        cy.get(SignUpPagelocator.ContinueButton).contains(AccountData.ContinueButton).click();
    }
    SignUPError(){
        cy.get(GlobalLocators.SingUpErrorText).contains(GlobalData.UsedEmailText).should("be.visible")
    }
    IncorrectSignUp(){

        cy.get(GlobalLocators.SignUPName).type(AccountData.SignUPName)
        cy.get(GlobalLocators.SignUpEmail).type(AccountData.SignUpEmail)
        cy.get(GlobalLocators.SignUpSubmit).click()
    }
}
export class SignIn{
    SignInData(){
        cy.get(GlobalLocators.SignInEmail).type(GlobalData.Email)
        cy.get(GlobalLocators.SignInPassword).type(GlobalData.Password)
    }
    SignInButton(){
        cy.get(GlobalLocators.SignInButton).click()
    }
    SignInText(){
        cy.get(GlobalLocators.SignInText).contains(GlobalData.SignInText).should("be.visible")
    }
    IncorectSignin(){
        cy.get(GlobalLocators.SignInEmail).type(GlobalData.IncorrectEmail)
        cy.get(GlobalLocators.SignInPassword).type(GlobalData.IncorrectPassword)
    }

    ErrorMessage(){
        cy.get(GlobalLocators.SignInText).contains(GlobalData.ErrorValidation).should("be.visible")
    }
}
export class ContactUs{
ContactUSButton(){cy.get(GlobalLocators.NavigationBar).contains(ContactUsData.ContactUsButton).click()
}
verifyText(){
    cy.get(SignUpPagelocator.AccountText).contains(ContactUsData.VerifyText).should("be.visible")
}
TypeData(){
    cy.get(ContactUsLocators.NameInput).type(ContactUsData.NameData)
    cy.get(ContactUsLocators.EmailInput).type(ContactUsData.EmailData)
    cy.get(ContactUsLocators.SubjectInput).type(ContactUsData.SubjectData)
    cy.get(ContactUsLocators.MessageInput).type(ContactUsData.MessageData)
}
    AttachFile() {
        const filePath = 'testFile.txt';
        cy.get(ContactUsLocators.FileUpload).attachFile(filePath);
    }
    Submit(){
    cy.get(ContactUsLocators.SubmitButton).click()
    }
    Alert(){
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal(ContactUsData.alertText);
        });
    }
SuccessText(){
    cy.get(ContactUsLocators.SuccessText).contains(ContactUsData.SuccessText).should("be.visible")
}
}
export class Products{
ProductPage(){
    cy.get(GlobalLocators.NavigationBar).contains(ProductsData.ProductsButton).click()
}
Title(){
    cy.get(SignUpPagelocator.AccountText).contains(ProductsData.ProductPageTitle).should("be.visible");
}
ProductList(){
    cy.get(ProductsLocators.ProductList).should("be.visible");
}
ViewProduct(){
    cy.get(ProductsLocators.ViewProduct1).click()
}
ProductData(){
    cy.get(ProductsLocators.ProductInfo)
        .should('contain', ProductsData.ProductName)
        .and('contain', ProductsData.ProductCategory)
        .and('contain', ProductsData.ProductPrice)
        .and('contain', ProductsData.ProductAvailability)
        .and('contain', ProductsData.ProductCondition)
        .and('contain', ProductsData.ProductBrand);
}
Search(){
    cy.get(ProductsLocators.SearchInput).type(ProductsData.SearchData)
    cy.get(ProductsLocators.SearchButton).click()
}
SearchProductList(){
    cy.get(ProductsLocators.ProductList).should('be.visible')
        .and("contain",ProductsData.SearchData)
}
ProductAddToCard1(){
    cy.get(ProductsLocators.Product).first().trigger(ProductsData.hover);
    cy.get(ProductsLocators.AddToCardButton).first().click()
}
ProductAddToCard2(){
    cy.get(ProductsLocators.Product).contains("Men Tshirt").trigger(ProductsData.hover);
    cy.get(ProductsLocators.AddToCardButton).eq(2).click()
}
ViewCart(){
cy.get(ProductsLocators.AddedModalBody).contains(ProductsData.ViewCart).click()
}
ContinueShopping(){
    cy.get(ProductsLocators.AddedModalFooter).contains(ProductsData.ModalButtonText).click()
}
  ShoppingCardProducts(){
    cy.get(ProductsLocators.AddCardProduct1).should('be.visible')
      cy.get(ProductsLocators.AddCardProduct2).should('be.visible')
}
ShoppingCardDetails(){
    cy.get(ProductsLocators.AddCardProduct1).should("contain",ProductsData.FirstProductPrice)
        .and('contain', ProductsData.FirstProductQuantity)
        .and('contain',ProductsData.FirstProductTotal)
    cy.get(ProductsLocators.AddCardProduct2).should('contain',ProductsData.SecondProductPrice)
        .and('contain',ProductsData.SecondProductQuantity)
        .and('contain',ProductsData.SecondProductTotal)
}
}
export class Subscription{
    ScrollDown(){
        cy.scrollTo(SubscriptionData.Bottom);
        cy.get(SubscriptionLocators.SubscribeBlock).contains(SubscriptionData.SubscribeTitle).should("be.visible")
    }
    Subscribe(){
        cy.get(SubscriptionLocators.SubscribeEmailInput).type(GlobalData.Email)
        cy.get(SubscriptionLocators.SubscribeButton).click()
        cy.contains(SubscriptionData.SuccessMessage).should("be.visible")
    }
    OpenCartPage(){
        cy.get(GlobalLocators.NavigationBar).contains(SubscriptionLocators.CartButton).click()
    }

}

