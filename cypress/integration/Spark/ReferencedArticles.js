describe('Referenced Articles',function(){
    it('Verify user is see referenced articles for responses',function(){
        cy.visit('https://breadfinancialstg.rightanswers.com/portal/sa/?&sl=&linw=')
        cy.wait(30000)
        cy.get('#aiTab').click()
        cy.get("textarea[placeholder='Ask me anything']").type('What is Account center')
        cy.get("lib-chat-input svg[class='ng-star-inserted']").click()
        cy.get('lib-citation-card',{timeout:20000}).should('be.visible')
        })
})
