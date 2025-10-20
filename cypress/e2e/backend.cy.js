 ///<references types="cypress" />

describe('', () => {

    before(() => {

    })

    it('Should create an account', () => {
        cy.request({
            method: 'POST',
            url: 'https://painel.mobilibus.com/v2/api/auth/login',
            body: {
                username: "adailton.lima@bus2.me",
                password: ""
            }, 
            headers: {
                'Content-Type': 'application/json',
                'origin': 'https://bus2.services',
                'referer': 'https://bus2.services/',
            },
             failOnStatusCode: false
        }).then((res) => {
                const tokenLogin = res.body.data;
                expect(tokenLogin).to.exist;
                Cypress.env('authToken', tokenLogin)
                cy.log('TokenCriptografado', tokenLogin)
                
                cy.request({
                method: 'POST',
                url: 'https://painel.mobilibus.com/v2/api/projects/save-project',
                headers: {
                  Authorization: tokenLogin,
                  'Content-Type': 'application/json',
                  'origin': 'https://bus2.services',
                  'referer': 'https://bus2.services/'
                },
                body: {
                  project: "Teste API"
                }

              }).then((res2) => {
                cy.log('Resposta da criação:', JSON.stringify(res2.body));
                expect(res2.status).to.eq(201);
              })
    
        })
  
     
    
    
    
    
    
    })





})