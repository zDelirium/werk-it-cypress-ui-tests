describe('Testing login', () => {
    
    it('Visits Werk-it login page', () => {

      //visit the webpage
      cy.visit('https://staging.tiered-planet.net/werk-it')
      
      //go to profie link and click
      cy.contains('Home').click()
  
      // Should be on a new URL which includes 'login'
     // cy.url().should('include', '/login')
  
    })
    it('Enters Login information', () => {

      // finds element and type information into feild
      cy.get('[name = "username"]').type('Fidel57')
      cy.get('[name = "password"]').type('12345')
      cy.get('[value = "Submit"]').click()
        
      
    })
   

  })

describe('Testing the login', () => {
    beforeEach(() => {
        cy.visit('https://staging.tiered-planet.net/werk-it')
      })
    it('Checking for a sign in button', () => {
         cy.get('.bg-white > .items-center > .px-4')
        .click()
    })

    it('Checking for a sign up link', () => {
        cy.get('.bg-white2 > .items-center > .px-4')
       .click()
   })
});
