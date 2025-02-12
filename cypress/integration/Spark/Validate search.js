describe('Search', function(){
    it('Verify user is able to do a search and find necessary thread',function(){
        cy.visit('https://breadfinancialstg.rightanswers.com/portal/sa/?&sl=&linw=')
        cy.Loading()
        cy.get('#aiTab').click()
        cy.get('#search-text').type('account')
        cy.get(':nth-child(1) > .ng-tns-c3864069602-0 > .py-3 > .session-item')
        cy.compareRecentQuestion()
    })
})