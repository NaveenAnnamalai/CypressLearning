describe('Caring Response',function(){
    it('Verify user is able to see caring response for responses',function(){
        cy.visit('https://breadfinancialstg.rightanswers.com/portal/sa/?&sl=&linw=')
        cy.wait(30000)
        cy.get('#aiTab').click()
        cy.get("textarea[placeholder='Ask me anything']").type('What is Account center')
        cy.get("lib-chat-input svg[class='ng-star-inserted']").click()
        cy.get('lib-caring-callout',{timeout:15000}).should('be.visible')
        })
})
