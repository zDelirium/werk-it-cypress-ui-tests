describe('Testing Sign Up', () => {

  it('Visits Werk-it regestration page', () => {

    //visit the webpage
    cy.visit('https://staging.tiered-planet.net/werk-it')

    //go to link and click
    cy.contains('Create a profile').click()

    // Should be on a new URL which includes 'register'
    cy.url().should('include', '/register')

  })
  it('Enters Sign up information', () => {
    cy.get('.mx-lg-3').click()
    // finds element and type information into feild
    cy.get('[name = "firstName"]').type('Fidel')
  

    cy.get('[name = "lastName"]').type('Nap')

    cy.get('[name = "email"]').type('test@email.com')

    cy.get('[name = "username"]').type('Fidel57')

    cy.get('[name = "password"]').type('12345')
  })
  it('Submits the form', () => {

    //find submit button then click it
    cy.get('[value = "Submit"]').click()

  })

})

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
