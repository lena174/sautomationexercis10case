describe('DemoQA Automation Practice Form', () => {
    it('should verify that the URL contains "demoqa"', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.url().should('include', 'demoqa')
        cy.get('#firstName').type("Lena")
        cy.get('#lastName').type("Khrkhryan")
        cy.get('#userEmail').type("khrkhryanl@gmail.com")
        cy.get('#gender-radio-2').check({force: true})
        cy.get('#userNumber').type("3744122933")
        cy.get('#hobbies-checkbox-3').check({force: true})
        cy.get('#currentAddress').type("Armenia, Gyumri, Rustaveli 53")
        cy.get('#submit').click()
        cy.contains("Thanks for submitting the form").should('be.visible')
        cy.get('#closeLargeModal').click({force:true})
    });
});
