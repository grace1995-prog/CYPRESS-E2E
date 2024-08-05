describe('Sign Up Page Tests', () => {
    beforeEach(() => {
        cy.visit('https://merchant-portal-dev.tgipay.com/signup');
    });
    it('should allow filling out the form and submitting', () => {
        cy.get('input[name=firstName]').type('John');
        
        cy.get('input[name=lastName]').type('Doe');
        cy.wait(1000)
        cy.get('input[name=businessName]').type('Xon');
        cy.wait(1000)
        cy.get('input[name=email]').type('john.doe@example.com');
        cy.wait(1000)
        cy.get('#react-select-3-placeholder').click()
        cy.get('#react-select-3-listbox>div>div:nth-child(1)').click()
        
        cy.get('input[name=password]').type('Password123');
        cy.wait(1000)
        cy.get('input[name=repeatPassword]').type('Password123');

    });
})