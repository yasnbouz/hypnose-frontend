/// <reference types="cypress"/>

describe('Test', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('works', () => {
        cy.get('p').contains('hypnose');
    });
});
