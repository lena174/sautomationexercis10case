
describe('Find the broccoli product and buy it', () => {
    it('Search "Brocolli" and assert "Brocolli" product is visible in results with count 1', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type("brocolli");
        cy.get('.products .product')
            .filter(':contains("Brocolli")');
        cy.get(".stepper-input").should('have.length', 1)
            .should('be.visible');
        cy.get("a.increment").as('incrementBtn').click();
        cy.get('@incrementBtn').click();
        cy.get(".quantity").should('have.value', '3');
        cy.get('button[type="button"]').contains('ADD TO CART').click();
        cy.get('button[type="button"]').contains('ADDED').should('be.visible')
        cy.get('.cart-icon').click()
        cy.get('.cart-item').contains('Brocolli').should('be.visible');
        cy.get('button[type="button"]').contains("PROCEED TO CHECKOUT").click()
        cy.get('#productCartTables').find('.product-name').contains('Brocolli').should('be.visible');
        cy.get(".promoCode").type("test")
        cy.get(".promoBtn").click()
        cy.wait(6000);
        cy.get(".promoInfo").contains('Invalid code ..!').should('be.visible')
        cy.get('.products button').contains('Place Order').click()
        cy.get('div.wrapperTwo select').select('Armenia')
        cy.get(".chkAgree").check()
        cy.get("button").contains("Proceed").click()
        cy.contains('Thank you').should('be.visible');
    })
})
