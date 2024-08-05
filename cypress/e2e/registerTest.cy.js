import {loginPage} from'../pages/loginPage.cy'
const loginObj = new loginPage()
import registerData from'../fixtures/registerData.json'

describe('test automation', () => {

    it('passes', () => {
        loginObj.openURL()
        loginObj.enteremail(registerData.username)
        loginObj.enterpassword(registerData.password)
        loginObj.clickbutton()
       

        


      
    })
  })

  describe('test automation', () => {

    it('fails', () => {
        loginObj.openURL()
        loginObj.enteremail(registerData.username)
        loginObj.checkerror(registerData.wrongpassword)
        loginObj.clickbutton()
        loginObj.checkerror()

        


      
    })
  })