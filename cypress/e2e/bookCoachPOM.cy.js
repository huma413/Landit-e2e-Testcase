
import Login from "../pages/login"
import BookCoach from "../pages/bookCoach"
const LOGIN_PAGE = Cypress.env('login_url')


describe('POM', () => {
    const login = new Login ()
    const bookCoach = new BookCoach()
    it('I want to book a coach from All coaches with already selected goals and ratings', () => 
    { 
      
        cy.visit(LOGIN_PAGE)
        cy.wait(4000)
        login.setUserName("huma.tabassum@arbisoft.com")
        login.setPassword("Security@458")
        login.clickLogin().click()
        bookCoach.clickCoaching().click()
        bookCoach.clickAllCoaches().click()
        bookCoach.cLickCoachName().click()
        bookCoach.clickObjectivesContinueButton().click()
        bookCoach.clickYesforRtaings().click()
        bookCoach.findAppointmentSlots()
        bookCoach.confirmbooking().click()
    }
)})


