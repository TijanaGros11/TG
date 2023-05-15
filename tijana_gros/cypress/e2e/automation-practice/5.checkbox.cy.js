describe("Checkbox Example", () => {
    beforeEach(() => {
        cy.visit('/')
        
        cy.get("#checkbox-example [type='checkbox']")
            .not('[disabled]')
            .as("checkboxes")
    })

    it('should check all options', () => {
        cy.get("@checkboxes")
            .check()
            .should('be.checked')
    })

    it('should check all options matching given values', () => {
        cy.get("@checkboxes")
            .check(['option1', 'option2', 'option3'])
            .should('be.checked')
    })

    it('should check option with matching value (Option 1)', () => {
        cy.get("@checkboxes")
            .check('option1')
            .should('be.checked')
    })

    it('should check option with matching value (Option 2)', () => {
        cy.get("@checkboxes")
            .check('option2')
            .should('be.checked')
    })

    it('should check option with matching value (Option 3)', () => {
        cy.get("@checkboxes")
            .check('option3')
            .should('be.checked')
    })

    describe("testing unchecking", () => {
        it('should uncheck all options', () => {
            cy.get("@checkboxes")
                .check()
                .should('be.checked')
                .uncheck()
                .should('not.be.checked')
        })

        it('should uncheck first checkbox', () => {
            cy.get("@checkboxes")
                .check('option1')
                .should('be.checked')
                .uncheck('option1')
                .should('not.be.checked')
        })
    })
})