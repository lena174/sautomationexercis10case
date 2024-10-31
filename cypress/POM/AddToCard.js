class AddToCard {
    clickonProduct(){
        cy.get(".card").contains("Samsung galaxy s6").click()
    }
    addProduct(){
        cy.get("#tbodyid").contains("Add to cart").click()
    }
   checkAlertMessage(){ cy.on('window:alert', (str) => {
    expect(str).to.equal('Product added');
})
    }
       openShoppingCard(){
        cy.get("#cartur").click()
   }
   checkProductInCard(){
        cy.get("#tbodyid").contains("Samsung galaxy s6").should("be.visible")
   }
}
export default AddToCard
