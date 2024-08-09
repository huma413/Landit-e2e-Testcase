class bookCoach
{

    COACHING = '.Text-root.Text-body2.MuiBox-root.MuiBox-root.css-k9cm5y'
    ALL_COACHES = '[data-tab="coaches"]'
    //COACH_NAME = ':nth-child(4) > .css-137ex2q > .css-14biz9c > :nth-child(2) > .Button-root'
    COACH_NAME = ':nth-child(3) > .css-137ex2q > .css-14biz9c > :nth-child(2) > .Button-root'
    OBJECTIVES_CONTINUE_BUTTON = '.Button-root.Button-medium.Button-primary.MuiBox-root.css-11cg4rk'
    YES_FOR_RATINGS = '#yes'
    YES_FOR_TEXT_GOALS = '#yes'
    CONFIRM_BOOKING = '[data-testid="confirm-coach-booking"]'
    SUBMIT = '.MuiGrid-root.MuiGrid-item.css-1wxaqej'
    

    clickCoaching()
    {
         return cy.get(this.COACHING).eq(6)
    }
    
     clickAllCoaches()
    {
        return  cy.get(this.ALL_COACHES)
     
     }
     cLickCoachName()
     {
        return  cy.get(this.COACH_NAME)
     }
     clickObjectivesContinueButton()
     {
        return cy.get(this.OBJECTIVES_CONTINUE_BUTTON)
     }
     clickYesforRtaings()
     {
        return cy.get(this.YES_FOR_RATINGS)
     }
     clickYESforTextGoals()
     {
        return cy.get(this.YES_FOR_TEXT_GOALS)
     }
     
     findAppointmentSlots()
     {
        cy.request('GET', 'https://accept.dev.landit.com/api/v2/coaching/booking/coach/206/dates?days_range=3&timezone=Asia%2FKarachi')
      .then((response) => 
        { console.log('API response:', response);
        // Step 2: Ensure the API response is successful (status code 200)
        expect(response.status).to.eq(200);
        const data = response.body.data;
        const firstAvailableSlot = data[0].times.find(slot => slot.slotsAvailable > 0);
        if (firstAvailableSlot) 
            {
                cy.get(this.YES_FOR_TEXT_GOALS).click()
                const timeFormatted = firstAvailableSlot.time
                // Step 8: Find the corresponding slot element on the frontend and click it
                cy.get(`[datetime="${timeFormatted}"]`).click()
                //cy.get(`[data-id="${firstAvailableSlot}"]`).click()
            }  
            else 
                {
                    throw new Error('No available slots found in API response')
                }
    })}
    confirmbooking()
    {
        return cy.get(this.CONFIRM_BOOKING)
    }

clickSubmit()
{
    return cy.get(this.SUBMIT)
}
}


export default bookCoach;