import sparkpage from "../../Pages/sparkpage"

describe('CCKM', function () {
    it('Verify user is able to ask a question using Ask me anything box', function () {
        let typeText
        sparkpage.loginSpark()
        sparkpage.askQuestion('What is account assure')
        cy.get('lib-llm-message', { timeout: 20000 }).should('be.visible')
        sparkpage.compareQuestion('What is account assure')
    })
})