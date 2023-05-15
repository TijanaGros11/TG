const testName = "Tijana"

describe("Switch To Alert Example", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should click alert button', () => {
        cy.get('#name')
            .clear()
            .type(testName)

        cy.get('#alertbtn').click()

        cy.on('window:alert', (message) => {
            expect(message).to.contains("Hello " + testName + ", share this practice page and share your knowledge");
        })
    })

    it('should click confirm button', () => {
        cy.get('#name')
            .clear()
            .type(testName)

        cy.get('#confirmbtn').click()

        cy.on('window:confirm', (message) => {
            expect(message).to.contains("Hello " + testName + ", Are you sure you want to confirm?");
        })
    })
})