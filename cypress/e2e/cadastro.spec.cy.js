/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Cadastro', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/login')
    });
    
    it('Deve completar o cadastro com sucesso', () => {
        cy.get('[data-qa="signup-name"]').type(faker.person.firstName())
        cy.get('[data-qa="signup-email"]').type(faker.internet.email())
        cy.get('[data-qa="signup-button"]').click()

        cy.get('[data-qa="password"]').type('teste@teste')
        cy.get('[data-qa="first_name"]').type('Teste')
        cy.get('[data-qa="last_name"]').type('Vinte')
        cy.get('[data-qa="address"]').type('Rua das Flores, 878')
        cy.get('[data-qa="state"]').type('Mumbai')
        cy.get('[data-qa="city"]').type('Mumbai')
        cy.get('[data-qa="zipcode"]').type('8888888888')
        cy.get('[data-qa="mobile_number"]').type('777777777')
        cy.get('[data-qa="create-account"]').click()

        cy.get('b').should('contain', 'Account Created!')
        cy.get('[data-qa="continue-button"]').click()


    });


});