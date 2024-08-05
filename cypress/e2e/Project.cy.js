describe('template spec', () => {
  
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/'); 
    });
  
    it('Successful login with valid credentials', () => {
      cy.get('#user-name').type('standard_user');
      cy.wait(6000)
      cy.get('#password').type('secret_sauce');
      cy.wait(6000)
      cy.get('#login-button').click();
      
  });
})