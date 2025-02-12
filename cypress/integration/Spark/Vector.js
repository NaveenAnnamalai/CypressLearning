describe('Vector', function(){
    it('Verify clicking on vector show/hide Recent Question Panel',function(){
        cy.visit('https://breadfinancialstg.rightanswers.com/portal/sa/?&sl=&linw=')
        cy.wait(30000)
        cy.get('#aiTab').click()
        cy.get('lib-stacked-layout stacked-layout-header lib-svg-icon svg').click()
        cy.get('lib-recent-question-sidebar').should('be.hidden')
        cy.get('lib-stacked-layout stacked-layout-header lib-svg-icon svg').click()
        cy.get('lib-recent-question-sidebar').should('not.be.hidden')
        })
    })