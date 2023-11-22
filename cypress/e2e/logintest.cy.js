import { signup } from '../../loginPage/signup.cy'
const signupObj = new signup()
import loginData from'../fixtures/loginData.json'
describe('test automation', () => {

    it('passes', () => {
        signupObj.openURL()
        signupObj.enteremailtest(loginData.email)
        signupObj.enterpasswordtest(loginData.passworduser)
        signupObj.button()

        


        
      
    })
  })