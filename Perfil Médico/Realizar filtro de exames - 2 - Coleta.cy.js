/// <reference types="Cypress" />

describe ('Realizar filtro de exames - Ambiente DEV', function() {
    it('Realizar filtro de exames - Perfil Médico', function () {
        
        // Realizar Login no Ambiente
        cy.visit('https://idpapp-psd.azurewebsites.net/amgen/rastrear/app/login')
        cy.get('#txtUser').type('rian.medico1@mailinator.com')
        cy.get('#password').type('Ecs@123456')
        cy.contains('Entrar').click().wait(9000)
        
        
        // Realizar filtro de exame por etapas - Coleta
        cy.get('[data-tooltip="Filtros Avançados"]').click()
        cy.get('[formcontrolname="step"]').select("2. Coleta")
        cy.get('[name="apply"]').click()
    })
})