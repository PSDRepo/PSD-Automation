/// <reference types="Cypress" />

describe ('Realizar solicitação de Exame médico - Ambiente DEV', function() {
    it('Realizar solicitação de Exame médico - Perfil Médico', function () {
        
        // Realizar Login no Ambiente
        cy.visit('https://idpapp-psd.azurewebsites.net/amgen/rastrear/app/login')
        cy.get('#txtUser').type('rian.medico1@mailinator.com')
        cy.get('#password').type('Ecs@123456')
        cy.contains('Entrar').click().wait(7000)
        //cy.get('.mat-simple-snackbar-action > .ng-tns-c4-12').click()
        
        // Realizar solicitação de Exame - Paciente
        cy.contains('Nova Solicitação').click().wait(3000)
        cy.get('[name="next"]').click()
        cy.get('[autofocus=""]').type('EXAME SOLICITADO POR AUTOMAÇÃO')
        cy.get('#patientBirthdate').type('08/09/1994')
        cy.get('[appcpf=""]').type('71135702080')
        cy.get('#patientGenderMale').check() // Selecionar Sexo Masculino
        cy.get('#patientInsuranceYes').check() // Convênio = Sim
        cy.get('[name="next"]').click()

        // Realizar solicitação de Exame - Amostra
        cy.get('#sampleDepletionYes').check()
        cy.get('[name="next"]').click()

        // Realizar solicitação de Exame - Coleta
        cy.get('[id="clinic"]').select("A.C. CAMARGO CANCER CENTER")
        cy.get('[name="next"]').click()

        // Realizar solicitação de Exame - Agendamento
        cy.get('#sampleYes').check()
        cy.get('#documentsYes').check()
        cy.get('span > .fa').click()
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="30 de junho de 2023"]').click()
        cy.get('[name="next"]').click()

        //Realizar solicitação de Exame - De acordo
        cy.get('[formcontrolname="agreed"]').check()
        cy.get('[name="create"]').click().wait(5000)
        cy.get('[name="close"]').click()
    })
})