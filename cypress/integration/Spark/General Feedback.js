describe('General Feedback',function(){
    it('Verify user is able to provide General Feedback of the application',function(){
        cy.visit('https://breadfinancialstg.rightanswers.com/portal/sa/?&sl=&linw=')
        cy.wait(30000)
        cy.get('#aiTab').click()
        cy.get('lib-feedback-button button').click()
        cy.get('lib-feedback-modal lib-dropdown').click()
        cy.get('mat-dialog-container lib-feedback-modal lib-dropdown div div:nth-child(3)').click()
        cy.get('lib-feedback-modal div textarea').type('test')
        cy.get('mat-dialog-container lib-feedback-modal lib-dropdown div div div[id="menu-button"]').then(function(dropText){
            const dropDownSelectedText = dropText.text().replace('&nbsp;','').trim()
            cy.wrap(dropDownSelectedText).should('eq','I have feedback about the AI Assistant')
        })
        cy.get('lib-feedback-modal div div div:nth-child(2) div:nth-child(4) button:nth-child(2)').click()
        cy.get('.mat-mdc-snack-bar-label').should('be.visible').and('contain','Successfully Submitted')

    })
})