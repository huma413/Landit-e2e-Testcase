class Login
{

    EMAIL_FIELD = '#email'
    PASSWORD_FIELD = '#password'
    LOGIN_BUTTON = '.MuiGrid-container > .Button-root'
    ERROR_MESSAGE = '.Text-root > .css-0'

    setUserName(userName)

    {
        cy.get(this.EMAIL_FIELD).type(userName)
    }
    
    setPassword(password)
    {
        cy.get(this.PASSWORD_FIELD).type(password)
    }
    clickLogin()
    {
         return cy.get(this.LOGIN_BUTTON)
    }
    
     verifyErrorMessage()
    {
        return  cy.get(this.ERROR_MESSAGE)
     
     }
}
export default Login;

