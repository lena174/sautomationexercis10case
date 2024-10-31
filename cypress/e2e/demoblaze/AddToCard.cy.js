import LoginPage from "../../POM/Login";
import AddToCard from "../../POM/AddToCard";
import addToCard from "../../POM/AddToCard";

describe('add to card product demoblaze.com', () => {
    it('add to card product', () => {
        const loginPage = new LoginPage()
        const addToCard1 = new AddToCard()
        loginPage.visitPage()
     addToCard1.clickonProduct()
        addToCard1.addProduct()
        addToCard1.checkAlertMessage()
        addToCard1.openShoppingCard()
        addToCard1.checkProductInCard()
    })
})