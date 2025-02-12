// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Loading',()=>{
    cy.get('#aiTab',{timeout:100000}).should('be.visible')
    cy.wait(3000)
    cy.get('#aiTab',{timeout:100000}).should('be.visible')
})

Cypress.Commands.add('compareRecentQuestion',()=>{
    cy.get('lib-recent-question-sidebar .scrollbar-custom').find('div[role="button"]').eq(0).then(function (myText)
    {
    const qnText = myText.text().replace('&nbsp;', '').trim()
    cy.wrap(qnText).should('eq', 'What is account assure')
    })
})
