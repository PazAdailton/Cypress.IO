const { expect } = require("chai")

///<references types="cypress"/>
describe('', () => {
  before(() => {
      cy.visit('https://wcaquino.me/cypress/componentes.html')
  })
  
  it('Validators with stub', () => {
    const stub = cy.stub().as('alerta')
    cy.on('window:alert', stub)
      cy.get('#formCadastrar').click().then(() => {
          expect(stub.firstCall.args[0]).to.eq('Nome eh obrigatorio')
      })

    cy.get('#formNome').type('Sandro')
    cy.get('#formCadastrar').click().then(() => {
          expect(stub.secondCall.args[0]).to.eq('Sobrenome eh obrigatorio')
    })

    cy.get('[data-cy="dataSobrenome"]')
    .type('Julio')
    cy.get('#formCadastrar').click().then(() => {
          expect(stub.thirdCall.args[0]).to.eq('Sexo eh obrigatorio')
    })

    cy.get('#formSexoMasc')
    .click()
    cy.get('#formCadastrar').click()

    cy.get('#resultado > :nth-child(1)')
    .should('have.text', 'Cadastrado!')

  })

})

