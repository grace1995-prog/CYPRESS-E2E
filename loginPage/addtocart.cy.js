export class addtocart{
    weblocators={

    gmail:"#user-name",
    password:"#password",
    clickbutton:"#login-button",
    addcartitem:"#add-to-cart-sauce-labs-backpack",
    clickoncart:".shopping_cart_link",
    checkoutitem:"#checkout",
    firstname:" #first-name",
    Lastname:"#last-name",
    Postalcode:"#postal-code",
    continuebutton:"#continue",
    finish:"#finish"
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

    cy.get(this.weblocators.clickbutton).click()



}
addcartitem(){
    cy.get(this.weblocators.addcartitem).click()


}

clickoncart(){
     
    cy.get(this.weblocators.clickoncart).click()

}
checkoutitem(){
  
    cy.get(this.weblocators.checkoutitem).click()



}
enterfirstname(firstname) {
    cy.get(this.weblocators.firstname).type(firstname)



}

enterlastname(Lastname) {
    cy.get(this.weblocators.Lastname).type(Lastname)

}

enterpostalcode(Postalcode) {
    cy.get(this.weblocators.Postalcode).type(Postalcode)
}
continuebutton(){
    cy.get(this.weblocators.continuebutton).click()

}
finish(){
    cy.get(this.weblocators.finish).click()

}
}
