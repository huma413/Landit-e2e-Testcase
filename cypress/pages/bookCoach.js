class bookCoach
{

    COACHING = '.Text-root.Text-body2.MuiBox-root.MuiBox-root.css-k9cm5y'
    
    
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
export default bookCoach;