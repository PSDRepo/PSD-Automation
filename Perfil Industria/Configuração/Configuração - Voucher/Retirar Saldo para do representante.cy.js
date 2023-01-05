/// <reference types="Cypress" />

describe ('Retirar saldo do Representante', function() {
    it('Retirar saldo do Representante', function () {
        
        // Realizar Login no Ambiente
        cy.visit('https://idpapp-psd.azurewebsites.net/amgen/rastrear/app/login')
        cy.get('#txtUser').type('rian.industria@mailinator.com')
        cy.get('#password').type('Ecs@123456')
        cy.contains('Entrar').click().wait(7000)
        //cy.get('.mat-simple-snackbar-action > .ng-tns-c4-12').click()
        cy.contains('Configuração').click()
        cy.contains('Voucher').click()
        cy.contains('Cotas').click()
        cy.get('[formcontrolname="pageSize"]').select("100")
        //cy.contains('rian.representante@mailinator.com').click()
        cy.get(':nth-child(44) > .tdButtons > .defaultBarButton').click().wait(3000)
        cy.get('[formcontrolname="operationType"]').select("Débito")
        cy.get('[id="quantityVouchers"]').type('10')
        cy.get('[name="edit"]').click()
    })
})