const { expect } = require("chai")

///<references types="cypress"/>
describe('', () => {

  before(() => {
      cy.visit('https://wcaquino.me/cypress/componentes.html')
  })
  it('Alert', () => {
      cy.get('#alert').click()
      cy.on('window:alert', msg => {
      expect(msg).to.be.eq('Alert Simples')
    })
  })
  it('Alert with mock', () => {
      const stub = cy.stub().as('alerta')
      cy.on('window:alert', stub)
      cy.get('#alert').click().then(() => {
        //expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        //expect(stub).to.have.been.calledWith('Alert Simples')
        expect(stub.firstCall.args[0]).to.eq('Alert Simples')
      })
  })
  it('Confirm', () => {
      cy.on('window:confirm', msg => {
        expect(msg).to.be.eq('Confirm Simples')
      })
      cy.on('window:alert', msg => {
        expect(msg).to.be.eq('Confirmado')
      })
      cy.get('#confirm').click()
  })
  
  it('Deny', () => {
      cy.on('window:confirm', msg => {
        expect(msg).to.be.eq('Confirm Simples')
        return false;
      })
      cy.on('window:alert', msg => {
        expect(msg).to.be.eq('Negado')
      })
      cy.get('#confirm').click()
  })
  it.only('Prompt', () => {
      cy.window().then((win) => {
        cy.stub(win, 'prompt').as('Stub').returns('42')
      })
      cy.on('window:confirm', msg => {
        expect(msg).to.be.eq('Era 42?')
      })
      cy.on('window:alert', msg => {
        expect(msg).to.be.eq(':D')
      }) 
      cy.get('#prompt').click()
  })

})