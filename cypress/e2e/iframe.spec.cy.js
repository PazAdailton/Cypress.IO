///<references types="cypress"/>
describe('', () => {
  before(() => {
      cy.visit('https://wcaquino.me/cypress/componentes.html')
  })


  it('Work with iframes', () => {
    cy.get('#frame1').then(iframe => {
        const body = iframe.contents().find('body')
        cy.wrap(body).find('#tfield')
        .type('Funciona?')
        .should('have.value', 'Funciona?')
    })
  })
  
})