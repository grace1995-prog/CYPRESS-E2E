export class signup{
    weblocators= {
        email:"#user-name",
        passworduser:"#password",
        button:"#login-button",



        }

        openURL(){
        cy.visit(Cypress.env("URL"))
        }
        enteremailtest(email) {
        
             cy.get(this.weblocators.email).type(email)

        }

        enterpasswordtest(passworduser) {
            cy.get(this.weblocators.passworduser).type(passworduser)
          

        }
            
        button(){

            cy.get(this.weblocators.button).click()


          
        }
    }

