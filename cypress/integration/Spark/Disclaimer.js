describe('Disclaimer',function(){
    it('Verify user is able to see Disclaimer in responses',function(){
        cy.visit('https://breadfinancialstg.rightanswers.com/portal/sa/?&sl=&linw=')
        cy.wait(30000)
        cy.get('#aiTab').click()
        cy.get("textarea[placeholder='Ask me anything']").type('What is Account center')
        cy.get("lib-chat-input svg[class='ng-star-inserted']").click()
        cy.get('lib-verbatim-callout lib-callout[ng-reflect-icon-name="alert"]',{timeout:15000}).should('be.visible')
        })
})
