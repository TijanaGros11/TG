describe("Element Displayed Example", () => {
    beforeEach(() => {
        cy.visit('/')

        cy.get('#displayed-text')
            .should('be.visible')
    })

    it('on Hide button click input field should hide', () => {
        cy.get('#hide-textbox')
            .click()

        cy.get('#displayed-text')
            .should('not.be.visible')
    })

    it('on Show button click input field should display', () => {
        cy.get('#hide-textbox')
            .click()

        cy.get('#displayed-text')
            .should('not.be.visible')

        cy.get('#show-textbox')
            .click()

        cy.get('#displayed-text')
            .should('be.visible')
    })
})