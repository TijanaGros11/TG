describe("Broken Link in Footer", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should have broken link', () => {
        cy.contains('Broken Link')
            .should('have.attr', 'href')
            .and('eq', 'https://rahulshettyacademy.com/brokenlink')

        cy.contains('Broken Link')
            .click()

        cy.url().should('eq', 'https://rahulshettyacademy.com/brokenlink')

        cy.get('.px-4').should('contain', '404')
    })
})