
   /// <references types="cypress" />
   describe('Cypress basic', ()=> {
        it('Should visit a page and assert title', () => {
            cy.visit('https://wcaquino.me/cypress/componentes.html');
        
            cy.title().should('be.equal', 'Campo de Treinamento');
            cy.title().should('contains', 'Campo'); 

            cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');

            
            cy.title().should('be.equal', 'Campo de Treinamento')
            .should('contains', 'Campo');

        })
    })

