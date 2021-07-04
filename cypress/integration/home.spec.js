/// <reference types="cypress" />

context('Home Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should find heading home page', () => {
        cy.get('h1').contains('Welcome to Next.js!');
    });
});
