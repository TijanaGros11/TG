describe("Mouse Hover Example", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('on hover button and click the Top option, page should scroll to top', () => {
        cy.get('#mousehover')
            .realHover('mouse')

        cy.get('.mouse-hover-content')
            .should('be.visible')

        cy.window()
            .its('scrollY')
            .should('not.equal', 0);

        cy.contains("Top").click()

        cy.window()
            .its('scrollY')
            .should('equal', 0);
    })

    it('on hover button and click the Reload option, page should reload', () => {
        cy.get('#mousehover')
            .realHover('mouse')

        cy.get('.mouse-hover-content')
            .should('be.visible')

        cy.contains("Reload").click()
        
        cy.url().should('eq', "https://rahulshettyacademy.com/AutomationPractice/")
    })
})