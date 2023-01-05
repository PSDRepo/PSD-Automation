/// <reference types="Cypress" />

describe ('Realizar Login no Ambiente DEV', function() {
    it('Realizar login com sucesso - Perfil Clínica', function () {
        cy.visit('https://idpapp-psd.azurewebsites.net/amgen/rastrear/app/login')
        cy.get('#txtUser').type('rian.clinica@mailinator.com')
        cy.get('#password').type('Ecs@123456')
        cy.contains('Entrar').click().wait(13000)
        //cy.get('.mat-simple-snackbar-action > .ng-tns-c4-12').click()
    })
})