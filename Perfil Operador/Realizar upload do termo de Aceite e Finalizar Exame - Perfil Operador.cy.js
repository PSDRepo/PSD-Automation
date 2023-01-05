/// <reference types="Cypress" />

describe ('Realizar Login no Ambiente DEV', function() {
    it('Realizar login com sucesso - Perfil Operador', function () {
        cy.visit('https://idpapp-psd.azurewebsites.net/amgen/rastrear/app/login')
        cy.get('#txtUser').type('rian.operador@mailinator.com')
        cy.get('#password').type('Ecs@123456')
        cy.contains('Entrar').click().wait(7000)
        //cy.get('.mat-simple-snackbar-action > .ng-tns-c4-12').click()


        // Coleta - Aguardando Realização da Coleta
        cy.contains('Coleta na instituição em curso').click()
        cy.get('[data-tooltip="Atribuir a mim"]').click()
        cy.get('[data-tooltip="Editar"]').click()
        cy.get('[class="fa fa-calendar fa-xl"]').click() // selecionar calendário
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="30 de março de 2023"]').click()
        cy.get('[id="code"]').type('987654')
        cy.get('[id="documentsYes"]').check() // Marcar documentos do disponíveis
        cy.get('[id="packageYes"]').check() // Marcar embalgem como adequada
        //cy.get('[placeholder="Digite uma anotação..."]').type('Teste realizado via automação')
        cy.get('[formcontrolname="obs"]').type('Teste realizado via automação')
        cy.get('[name="confirmar"]').click().wait(2000)


        // Coleta - Aguardando entrega do laboratório
        cy.get('[data-tooltip="Atribuir a mim"]').click()
        cy.get('[data-tooltip="Editar"]').click()
        cy.get('[class="fa fa-calendar fa-xl"]').click() // selecionar calendário
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="30 de março de 2023"]').click()
        cy.get('input[type=file]').selectFile({
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'Fundo_Teams_(branco).png',
            //mimeType: 'text/plain',
            lastModified: Date.now(),
        })
        cy.get('[formcontrolname="obs"]').type('Teste realizado via automação')
        cy.get('[name="confirmar"]').click()


        // Análise - Confirmar condições da Amostra
        cy.get('[data-tooltip="Atribuir a mim"]').click().wait(2000)
        cy.get('[data-tooltip="Editar"]').click().wait(2000)
        cy.get('[formcontrolname="obs"]').type('Teste realizado via automação')
        cy.get('[name="confirmar"]').click().wait(2000)


        // Análise - Termo de Aceite do Paciente
        cy.get('[data-tooltip="Atribuir a mim"]').click().wait(1000)
        cy.get('[data-tooltip="Editar"]').click().wait(1000)
        cy.get('input[type=file]').selectFile({
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'Termo de Aceite - 500 páginas.pdf',
            //mimeType: 'text/plain',
            lastModified: Date.now(),
        })
        cy.get('[formcontrolname="obs"]').type('Upload do termo realizado via automação')
        cy.get('[name="confirmar"]').click()


        // Resultado - Laudo Original
        cy.get('[data-tooltip="Atribuir a mim"]').click().wait(1000)
        cy.get('[data-tooltip="Editar"]').click().wait(1000)
        cy.get('input[type=file]').selectFile({
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'interplayers.png',
            //mimeType: 'text/plain',
            lastModified: Date.now(),
        })
        cy.get('[formcontrolname="analysis"]').select("NGS")
        cy.get('[formcontrolname="kras"]').select("Mutado")
        cy.get('[formcontrolname="nras"]').select("Mutado")
        cy.get('[formcontrolname="braf"]').select("Mutado")
        cy.get('[formcontrolname="obs"]').type('Teste realizado via automação')
        cy.get('[name="carregar"]').click().wait(5000)


        // Logistica Reversa - Aguardando Agendamento da Logística Reversa
        cy.get('[data-tooltip="Atribuir a mim"]').click().wait(1000)
        cy.get('[data-tooltip="Editar"]').click().wait(1000)
        cy.get('[class="fa fa-calendar fa-xl"]').click() // selecionar calendário
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="30 de março de 2023"]').click()
        cy.get('[formcontrolname="sample"]').check()
        cy.get('[formcontrolname="document"]').check()
        cy.get('[name="agendar"]').click().wait(3000)

        
        // Logistica Reversa - Aguardando Coleta da Logística Reversa
        cy.get('[data-tooltip="Atribuir a mim"]').click().wait(1000)
        cy.get('[data-tooltip="Editar"]').click().wait(1000)
        cy.get('[class="fa fa-calendar fa-xl"]').click()
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="30 de março de 2023"]').click()
        cy.get('[id="code"]').type('987654')
        cy.get('[id="documentsYes"]').check()
        cy.get('[id="packageYes"]').check()
        cy.get('[formcontrolname="obs"]').type('Teste realizado via automação')
        cy.get('[name="confirmar"]').click()


        // Logística Reversa - Aguardando Entrega da Logística Reversa
        cy.get('[data-tooltip="Atribuir a mim"]').click().wait(1000)
        cy.get('[data-tooltip="Editar"]').click().wait(1000)
        cy.get('[class="fa fa-calendar fa-xl"]').click()
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="Next month"]').click()
        cy.get('[aria-label="30 de março de 2023"]').click()
        //cy.get('input[type=file]').selectFile({
            //contents: Cypress.Buffer.from('file contents'),
            //fileName: 'interplayers.png',
            //mimeType: 'text/plain',
            //lastModified: Date.now(),
        //})
        //cy.get('[formcontrolname="obs"]').type('Teste realizado via automação')
        cy.get('[name="confirmar"]').click().wait(2000)

    })
})