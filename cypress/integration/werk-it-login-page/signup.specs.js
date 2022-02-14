describe('Testing the signup', () => {
    beforeEach(() => {
        cy.visit('https://staging.tiered-planet.net/werk-it')
      })
    it('Checking for the creating profile button', () => {
        cy.get('.mx-lg-3')
        .click()
    })
    it('Filling all input fields in the signup form', () => {
        cy.get('.mx-lg-3')
        .click()
        .get(':nth-child(1) > label > input')
        .type("Lisa")
        .get(':nth-child(2) > label > input')
        .type('jefferson')
        .get(':nth-child(3) > label > input')
        .type("lisa.jefferson@gmail.com")
        .get(':nth-child(4) > label > input')
        .type("lisaJ")
        .get(':nth-child(5) > label > input')
        .type("lisa123")
        .get('[type="submit"]')
        .click()
    })
});