/// <reference types="Cypress" />

describe ('Realizar Login no Ambiente DEV', function() {
    it('Realizar Login no Ambiente DEV - Perfil Médico', function () {
        cy.visit('https://idpapp-psd.azurewebsites.net/amgen/rastrear/app/login')
        cy.get('#txtUser').type('rian.medico@mailinator.com')
        cy.get('#password').type('Ecs@123456')
        cy.contains('Entrar').click().wait(15000)
    })
})