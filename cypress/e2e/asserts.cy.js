
     
   /// <references types="cypress" />

   
   
   
   describe('Cypress basic', ()=> {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    
        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contains', 'Campo'); 


        cy.title().should('be.equal', 'Campo de Treinamento')
        .should('contains', 'Campo');

    })
})





describe('Strings', () => {
  it('String', () => {
    
      const str = 'String de teste';

      expect(str).to.match(/.{15}/);
      expect(str).to.match(/\w+/); // verifica se existe apenas letras
      expect(str).to.match(/\D+/); //verifica que não contém números
  })
  
  it('Numbers', () => {
    const number = 4;
    const floatNumber = 5.2123;

    expect(number).to.be.equal(4);
    expect(number).to.be.above(3) //acima
    expect(number).to.be.below(7) //abaixo
    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1); //aproximado

  })
})