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
        .get('input[name = "firstName"]')
        // or use the target option
        //.get(':nth-child(1) > label > input')
        .type("Lisa")
        .get('input[name = "lastName"]')
        // or use the target option
        //.get(':nth-child(2) > label > input')
        .type('jefferson')
        .get('input[name = "email"]')
        // or use the target option
        //.get(':nth-child(3) > label > input')
        .type("lisa.jefferson@gmail.com")
        .get('input[name = "username"]')
        // or use target option
        //.get(':nth-child(4) > label > input')
        .type("lisaJ")
        .get('input[name = "password"]')
        // or use target option
        //.get(':nth-child(5) > label > input')
        .type("lisa123")
        .get('[type="submit"]')
        .click()
    })

    it('Testing signup submit with empty input fields', () => {
        cy.get('.mx-lg-3')
        .click()
        .get('[type="submit"]')
        .click()
        .wait(1000)
        // It should stay at the same page when you submit 
        // with empty imput fields
        .url().should('include', '/registe')
    })
});