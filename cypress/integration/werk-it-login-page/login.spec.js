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