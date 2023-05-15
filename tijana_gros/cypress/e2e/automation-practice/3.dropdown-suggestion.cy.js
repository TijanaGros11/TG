const countries = require('../../fixtures/countries.json')

describe("Suggession Class Example", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should select exact country from the suggestion list', () => {
        const countryName = countries.test_country

        cy.get('#autocomplete')
            .clear()
            .type(countryName)
            .should('have.value', countryName)
            .as("search-field")

        cy.get('#ui-id-1')
            .should('be.visible')
            .contains(countryName)
            .click();

        cy.get("@search-field")
            .should('have.value', countryName)
    })

    it('should select first country from the suggestion list', () => {
        const partialCountryName = countries.partial_country_name

        cy.get('#autocomplete')
            .clear()
            .type(partialCountryName)
            .should('have.value', partialCountryName)

        cy.get('#ui-id-1')
            .should('be.visible')

        cy.get("#ui-id-2")
            .contains(partialCountryName)
            .click();
    })
})