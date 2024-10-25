
describe('Find the broccoli product and buy it', () => {
    it('Search "Brocolli" and assert "Brocolli" product is visible in results with count 1', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type("brocolli");
        cy.get('.products .product')
            .filter(':contains("Brocolli")');
        cy.get(".stepper-input").should('have.length', 1)
            .should('be.visible');
    });

    it('Click on the + icon twice and assert count is 3', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type("brocolli");
        cy.get('.products .product')
            .filter(':contains("Brocolli")');
        cy.get(".increment").as('incrementBtn').click();
        cy.get('@incrementBtn').click();
        cy.get(".quantity").should('have.value', '3');
    });

    it('Add to cart and assert "Added" is visible on the button', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type("brocolli");
        cy.get('.products .product')
            .filter(':contains("Brocolli")');
        cy.get(".increment").as('incrementBtn').click();
        cy.get('@incrementBtn').click();
        cy.get('button[type="button"]').contains('ADD TO CART').click();
        cy.get('button[type="button"]').contains('ADDED').should('be.visible')
    });
    it('Click on the cart icon and Assert that Broccoli is visible on the opened overlay', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type("brocolli");
        cy.get('.products .product')
            .filter(':contains("Brocolli")');
        cy.get(".increment").as('incrementBtn').click();
        cy.get('@incrementBtn').click();
        cy.get('button[type="button"]').contains('ADD TO CART').click();
        cy.get('.cart-icon').click()
        cy.get('.cart-item').contains('Brocolli').should('be.visible');
    });
    it('Check out product and Assert that Brocolli is visible', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type("brocolli");
        cy.get('.products .product')
            .filter(':contains("Brocolli")');
        cy.get(".increment").as('incrementBtn').click();
        cy.get('@incrementBtn').click();
        cy.get('button[type="button"]').contains('ADD TO CART').click();
        cy.get('.cart-icon').click()
        cy.get('button[type="button"]').contains("PROCEED TO CHECKOUT").click()
        cy.get('#productCartTables').find('.product-name').contains('Brocolli').should('be.visible');
    });
    it('check promocode', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type("brocolli");
        cy.get('.products .product')
            .filter(':contains("Brocolli")');
        cy.get(".increment").as('incrementBtn').click();
        cy.get('@incrementBtn').click();
        cy.get('button[type="button"]').contains('ADD TO CART').click();
        cy.get('.cart-icon').click()
        cy.get('button[type="button"]').contains("PROCEED TO CHECKOUT").click()
        cy.get(".promoCode").type("test")
        cy.get(".promoBtn").click()
        cy.wait(6000);
        cy.get(".promoInfo").contains('Invalid code ..!').should('be.visible')
    });
    it(' Click on the "Place Order"', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type("brocolli");
        cy.get('.products .product')
            .filter(':contains("Brocolli")');
        cy.get(".increment").as('incrementBtn').click();
        cy.get('@incrementBtn').click();
        cy.get('button[type="button"]').contains('ADD TO CART').click();
        cy.get('.cart-icon').click()
        cy.get('button[type="button"]').contains("PROCEED TO CHECKOUT").click()
        cy.get(".promoCode").type("test")
        cy.get(".promoBtn").click()
        cy.wait(6000);
       cy.get('.products button').contains('Place Order').click()
    });
    it.only('select country, check terms and condition and Proceed ', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type("brocolli");
        cy.get('.products .product')
            .filter(':contains("Brocolli")');
        cy.get(".increment").as('incrementBtn').click();
        cy.get('@incrementBtn').click();
        cy.get('button[type="button"]').contains('ADD TO CART').click();
        cy.get('.cart-icon').click()
        cy.get('button[type="button"]').contains("PROCEED TO CHECKOUT").click()
        cy.get(".promoCode").type("test")
        cy.get(".promoBtn").click()
        cy.wait(6000);
        cy.get('.products button').contains('Place Order').click()
        cy.get('.select').select('Armenia')
        cy.get(".chkAgree").check()
        cy.get("button").contains("Proceed").click()
        cy.contains('Thank you').should('be.visible');
});
});
