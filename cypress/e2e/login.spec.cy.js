/// <reference types="cypress" />

describe('Funcionalidade Login', () => {
  it('Deve fazer cadastro com sucesso', () => {
    cy.visit('https://www.automationexercise.com/login')

    cy.get('.login-form > h2').should('contain', 'Login to your account')
    cy.get('.signup-form > h2').should('contain', 'New User Signup!')
    
  })

  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.visit('https://www.automationexercise.com/login')
    cy.get('[data-qa="login-email"]').type('rods@ebac.com')
    cy.get('[data-qa="login-password"]').type('teste@teste')
    cy.get('[data-qa="login-button"]').click()

    cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!')
    })

  it.only('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.visit('https://www.automationexercise.com/login')
    cy.get('[data-qa="login-email"]').type('aluno_ebac@ebac.com')
    cy.get('[data-qa="login-password"]').type('master@teste')
    cy.get('[data-qa="login-button"]').click()

    cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!')
    })
    
})