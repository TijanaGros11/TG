describe("Radio Button Example", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it("should select all radio buttons", () => {
    cy.get('#radio-btn-example [type="radio"]')
      .check(['radio1', 'radio2', 'radio3'])
      .should('be.checked')
  })

  it("should select the first radio button", () => {
    cy.get('#radio-btn-example [type="radio"]')
      .not('[disabled]')
      .check('radio1')
      .should('be.checked')
  })

  it("should select the second radio button", () => {
    cy.get('#radio-btn-example [type="radio"]')
      .not('[disabled]')
      .check('radio2')
      .should('be.checked')
  })

  it("should select the third radio button", () => {
    cy.get('#radio-btn-example [type="radio"]')
      .not('[disabled]')
      .check('radio3')
      .should('be.checked')
  })
})