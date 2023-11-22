
import { addtocart } from '../../loginPage/addtocart.cy'

const addcartObj = new addtocart()
import cartData from'../fixtures/cartData.json'
describe('test automation', () => {

    it('passes', () => {
        addcartObj.openURL()
        addcartObj.enteremail(cartData.gmail)
        addcartObj.enterpassword(cartData.password)
        addcartObj.clickbutton()
        addcartObj.addcartitem()
        addcartObj.clickoncart()
        addcartObj.checkoutitem()
        addcartObj.enterfirstname(cartData.firstname)
        addcartObj.enterlastname(cartData.Lastname)
        addcartObj.enterpostalcode(cartData.Postalcode)
        addcartObj.continuebutton()
        addcartObj.finish()

        


      
    })
  })