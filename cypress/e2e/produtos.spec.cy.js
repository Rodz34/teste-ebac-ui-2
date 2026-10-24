/// <reference types="cypress" />

describe('Funcionalidade Produtos', () => {
    
    beforeEach(() => {
        cy.visit('https://automationteststore.com/index.php?rt=product/category&path=68_70')
    });
    
    it('Deve selecionar produtos da lista', () => {
        cy.get('[class="fixed_wrapper"]').contains('Casual 3/4 Sleeve Baseball T-Shirt').click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {

        var quantidade = 3

        cy.get('[class="fixed_wrapper"]').contains('Casual 3/4 Sleeve Baseball T-Shirt').click()
        cy.get('[name="option[353]"]').select('XXL / Blue $2.00 (2147483641 In Stock)')
        cy.get('[name="quantity"]').clear().type(quantidade)
        cy.get('.cart').click()

        cy.get('.dropdown-toggle > .label').should('contain', quantidade)
    });

});