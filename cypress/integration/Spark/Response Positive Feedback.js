describe('Response Positive feedback',function(){
    it('Verify user is able to provide Positive feedback on the AI Response',function(){
        cy.visit('https://breadfinancialstg.rightanswers.com/portal/sa/?&sl=&linw=')
        cy.wait(30000)
        cy.get('#aiTab').click()
        cy.get("textarea[placeholder='Ask me anything']").type('What is account assure')
        cy.get("lib-chat-input svg[class='ng-star-inserted']").click()
        //cy.wait(15000)
        cy.get('.thumb_up_btn',{timeout:15000}).click()
        cy.get("lib-llm-message div div:nth-child(2)").contains('Thank you for your feedback.')
        })
    })