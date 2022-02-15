context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://staging.tiered-planet.net/werk-it')

    })

    it('Email typing verification', () => {
        cy.get('[href="/"]').click()

        cy.get('#username').click()
            .type('Fake').should('have.value', 'Fake')


    })

    it('Password typing verification', () => {

        cy.get('[href="/"]').click()
        cy.get('#password')
            .type('password').should('have.text', '')

        /*cy.get('#password').type('password')
          cy.get('#password').should(($password) => {
            const text = $password.text()

            expect(text).to.match(/''/)
        })*/


    })
    it('Submit with a blank fields', () => {

        cy.get('[href="/"]').click()
        cy.get('[type="submit"]').click()

        cy.get('.error').should(($fail) => {
            const text = $fail.text()

            expect(text).to.match(/Login Failed/)

        })


    })
    it('Sign up verification', () => {

        cy.get('.mx-lg-3 > svg').click()
        cy.get(':nth-child(1) > label > input').click().type('Alain')
        cy.get(':nth-child(2) > label > input').click().type('FlouClaire')
        cy.get(':nth-child(3) > label > input').click().type('flouclaire@monsite.com')
        cy.get(':nth-child(4) > label > input').click().type('AlainFlou')
        cy.get(':nth-child(5) > label > input').click().type('12sz')
        cy.get('[type="submit"]').click()
        cy.get('#username').click().type('AlainFlou')
        cy.get('#password').click().type('12sz')
        cy.get('[type="submit"]').click()

        cy.get('#root > div > div > div.Exercises > table > thead > tr > td:nth-child(1)').should(($div) => {
            const text = $div.text()

            expect(text).to.match(/Date/)

        })
    })



})