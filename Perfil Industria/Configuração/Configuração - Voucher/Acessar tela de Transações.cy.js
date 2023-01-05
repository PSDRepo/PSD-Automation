/// <reference types="Cypress" />

describe ('Acessar tela de Transações', function() {
    it('Acessar tela de Transações', function () {
        
        // Realizar Login no Ambiente
        cy.visit('https://idpapp-psd.azurewebsites.net/amgen/rastrear/app/login')
        cy.get('#txtUser').type('rian.industria@mailinator.com')
        cy.get('#password').type('Ecs@123456')
        cy.contains('Entrar').click().wait(17000)
        //cy.get('.mat-simple-snackbar-action > .ng-tns-c4-12').click()
        cy.contains('Configuração').click()
        cy.contains('Voucher').click()
        cy.contains('Transações').click()

    })
})