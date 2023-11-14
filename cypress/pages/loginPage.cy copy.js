export class loginPage{
    weblocators= {
        gmail:"#email",
        password:"#login-password",
        button:"#login",



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
          
        
      
}

