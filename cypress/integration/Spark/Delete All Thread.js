describe('Delete all thread', function(){
    it('Verify Delete All Threads button is deleting all thread from recent questions panel',function()
    {
        //cy.intercept('GET', '/portal/controller/view/solution/compliance?action=getComplianceIds').as('pageLoad')
        cy.visit('https://breadfinancialstg.rightanswers.com/portal/sa/?&sl=&linw=')
        //cy.wait('@pageLoad').its('response.statusCode').should('eq',200)
        cy.wait(30000)
        cy.get('#aiTab').click()
        cy.get('lib-recent-question-sidebar button[ng-reflect-ng-class="cursor-pointer hover:bg-feedba"]').click()
        cy.get('lib-button[ng-reflect-label="Delete"]').click()
        cy.get('.mat-mdc-snack-bar-label').should('be.visible').and('contain','All threads successfully deleted')

    })
    it('Verify user is able to delete a thread',function()
    {
        //cy.intercept('POST', '/portal/controller/view/faq/').as('pageLoad')
        cy.visit('https://breadfinancialstg.rightanswers.com/portal/sa/?&sl=&linw=')
        //cy.wait('@pageLoad').its('response.statusCode').should('eq',200)
        //cy.wait('@pageLoad').its('response.statusCode').should('eq',200)
        cy.wait(30000)
        cy.get('#aiTab').click()
        cy.get("lib-recent-question-sidebar div div div div:nth-child(3) div[role='button']:nth-child(1)").trigger('mouseenter')
        cy.get('lib-options').click()
        cy.get("lib-options div div:nth-child(2)").click() 
        cy.get('lib-button[ng-reflect-label="Delete"]').click()
        cy.get('.mat-mdc-snack-bar-label').should('be.visible').and('contain','Thread successfully deleted')
    })
       
})