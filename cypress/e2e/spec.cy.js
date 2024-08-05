describe('template spec', () => {
  
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/'); 
  });

  it('Successful login with valid credentials', () => {
    cy.get('#user-name').type('standard_user');
    cy.wait(1000)
    cy.get('#password').type('secret_sauce');
    cy.wait(1000)
    cy.get('#login-button').click();
    
  });


  it('Failed login with invalid credentials', () => {
    cy.get('#user-name').type('standard_user');
    cy.wait(1000)
    cy.get('#password').type('secr_sauce');
    cy.wait(1000)
    cy.get('#login-button').click();
    cy.wait(1000)
    cy.get("h3[data-test='error']").should('be.visible');
    cy.wait(1000)
    cy.get('[data-test="error"]').should('be.visible')
    .and('contain', 'Epic sadface: Username and password do not match any user in this service');
});
  });


