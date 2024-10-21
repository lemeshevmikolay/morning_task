/// <reference types='cypress' />
import { faker } from '@faker-js/faker';

const username = 'Lemeshev';
const password = 'pass1234';

describe('Add item to cart', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Should be add item to cart ', () => {
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

        cy.get('a').contains('Samsung galaxy s6').click();

        cy.get('.btn').contains('Add to cart').click();

        cy.on('window:alert', (text) => {
            expect(text).to.equal('Product added.');
        });

        cy.get('#cartur').click();

        cy.get('button[onclick="logIn()"]');

        cy.get('#tbodyid')
            .contains('Samsung galaxy s6')
            .should('be.visible');
    });
});
