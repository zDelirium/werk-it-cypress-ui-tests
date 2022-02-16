describe('Testing the login', () => {
    beforeEach(() => {
        cy.visit('https://staging.tiered-planet.net/werk-it')
      })
    it('Checking for a sign in button', () => {
         cy.get('input[type=submit]')
        .click()
    })

    it('Checking for a sign up link', () => {
        cy.get('a[class=\'mt-2 mx-lg-3 btn btn-outline-success\']')
       .click()
   })
});