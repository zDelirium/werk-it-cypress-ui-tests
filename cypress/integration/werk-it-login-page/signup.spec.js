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

    // finds element and type information into feild
    cy.get('[name = "firstName"]').type('Fidel')
    //.should('have.value', 'fake@email.com')

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