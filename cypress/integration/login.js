/// < reference types="cypress" />
describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    it('Login with incorrect email', ()=>{
        cy.fixture('login').then((login)=>{
            cy.login('something', 'other')
            cy.fixture('login').then((login)=>{
            cy.get(login.incorrecLoginBanner).should('contain','Invalid email address');
        })
    })
})
})

