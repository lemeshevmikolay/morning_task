/// <reference types='cypress' />
import { faker } from '@faker-js/faker';
import { generateUser } from '../support/user_generate.js';

const { username, password } = generateUser();

describe('Sign Up', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Should Sign Up', () => {
        cy.get('#signin2').click();

        cy.get('#sign-username')
            .should('be.visible')
            .type(username)
            .focus();

        cy.get('#sign-password')
            .should('be.visible')
            .type(password, { delay: 100 });

        cy.get('button[onclick="register()"]').click()

        cy.on('window:alert', (text) => {
            expect(text).to.equal('Sign up successful.');
    });
});
});
