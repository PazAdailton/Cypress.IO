 ///<references types="cypress" />

describe('', () => {

    before(() => {

    })

    it('Should create an account', () => {
        cy.request({
            method: 'POST',
            URL: 'https://bus2.services/editor/login',
            body: {
                email: "adailton.lima@bus2.me",
                senha: ""
            }
        }).then(res => console.log(res));
    })





})