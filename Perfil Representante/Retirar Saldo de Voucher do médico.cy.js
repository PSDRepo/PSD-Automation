/// <reference types="Cypress" />

describe ('Adicionar saldo +10 para o Representante', function() {
    it('Adicionar saldo +10 para o Representante', function () {
        
        // Realizar Login no Ambiente
        cy.visit('https://idpapp-psd.azurewebsites.net/amgen/rastrear/app/login')
        cy.get('#txtUser').type('rian.representante@mailinator.com')
        cy.get('#password').type('Ecs@123456')
        cy.contains('Entrar').click().wait(7000)
        //cy.get('.mat-simple-snackbar-action > .ng-tns-c4-12').click()
        cy.contains('Configuração').click()
        cy.contains('Voucher').click()
        cy.contains('Transações').click()
        cy.get('[class="tdLabel tdButtons"]').click()
        //cy.get('[id="release"]').check()
        cy.get('[id="cancel"]').check()
        cy.get('[formcontrolname="practitioner"]').select("RIAN.MEDICO1@MAILINATOR.COM")
        cy.get('[id="i_Amount"]').type('5')
        cy.get('[name="make"]').click()
    })
})