const dropdown = require('../../fixtures/dropdown.json')
const option1 = dropdown.options[0]
const option2 = dropdown.options[1]
const option3 = dropdown.options[2]

describe("Dropdown Example", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should select option with matching text content (Option 1)', () => {
        cy.get('#dropdown-class-example')
            .select(option1.name)
            .should('have.value', option1.value)
    })

    it('should select option with matching value (Option 1)', () => {
        cy.get('#dropdown-class-example')
            .select(option1.value)
            .should('have.value', option1.value)
    })

    it('should select option with matching text content (Option 2)', () => {
        cy.get('#dropdown-class-example')
            .select(option2.name)
            .should('have.value', option2.value)
    })

    it('should select option with matching value (Option 2)', () => {
        cy.get('#dropdown-class-example')
            .select(option2.value)
            .should('have.value', option2.value)
    })

    it('should select option with matching text content (Option 3)', () => {
        cy.get('#dropdown-class-example')
            .select(option3.name)
            .should('have.value', option3.value)
    })

    it('should select option with matching value (Option 3)', () => {
        cy.get('#dropdown-class-example')
            .select(option3.value)
            .should('have.value', option3.value)
    })
})

