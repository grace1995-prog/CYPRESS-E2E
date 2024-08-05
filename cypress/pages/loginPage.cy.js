export class loginPage{
    weblocators= {
        gmail:"#email",
        password:"#login-password",
        button:"#login",
        wrongpassword:"#login-password",
        error:"#incorrectdetails"

        



    }
    openURL(){
    
    cy.visit(Cypress.env('URL'))

    }
    enteremail(gmail) {
        
          cy.get(this.weblocators.gmail).type(gmail)

          
    }
    enterpassword(password) {

        cy.get(this.weblocators.password).type(password)


    }    
    clickbutton(){

        cy.get(this.weblocators.button).click()


    }
    checkerror(){
        cy.get(this.weblocators.error).click()
    }      
        
      
    openURL(){
    
    cy.visit(Cypress.env('URL'))

    }
    enteremail(gmail) {
        
          cy.get(this.weblocators.gmail).type(gmail)

          
    }
    enterpassword(wrongpassword) {

        cy.get(this.weblocators.wrongpassword).type(wrongpassword)


    }    
    clickbutton(){

        cy.get(this.weblocators.button).click()


    }
  
        
    }      
        
      


