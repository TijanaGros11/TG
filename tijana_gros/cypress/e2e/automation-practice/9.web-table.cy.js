describe("Web Table Example", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('field next to given text should have value 35', () => {
        cy.get('#product')
            .contains('td', 'WebServices / REST API Testing with SoapUI')
            .next()
            .should('have.text', "35")
    })
})