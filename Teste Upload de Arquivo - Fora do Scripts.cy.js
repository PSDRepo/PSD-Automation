/// <reference types="Cypress" />

describe ('Realizar Login no Ambiente DEV', function() {
    it('Realizar login com sucesso - Perfil Operador', function () {
        cy.visit('https://demoqa.com')
        cy.get('.category-cards > :nth-child(1)').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-7').click()
        cy.get('input[type=file]').selectFile({
            contents: Cypress.Buffer.from('file contents'),
            fileName: 'Fundo_Teams_(branco).png',
            //mimeType: 'text/plain',
            lastModified: Date.now(),
          })
    })
})