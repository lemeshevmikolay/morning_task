/// <reference types='cypress' />

const username = 'Lemeshev';
const password = 'pass1234';

describe('Logg in with already exist User', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Should Sign In', () => {
        cy.get('#login2').click();

        cy.get('#loginusername')
            .clear()
            .should('be.visible')
            .type(username, { delay: 100 });

        cy.get('#loginpassword')
            .clear()
            .should('be.visible')
            .type(password, { delay: 100 });

        cy.get('button[onclick="logIn()"]')
            .should('be.visible')
            .click();

        cy.get('#nameofuser')
            .should('contain', username)
            .and('be.visible');
    });
});
