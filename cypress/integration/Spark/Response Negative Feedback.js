describe('Response Negative feedback',function(){
    it('Verify user is able to provide Negative feedback on the AI Response',function(){
        cy.visit('https://breadfinancialstg.rightanswers.com/portal/sa/?&sl=&linw=')
        cy.wait(30000)
        cy.get('#aiTab').click()
        cy.get("textarea[placeholder='Ask me anything']").type('What is account assure')
        cy.get("lib-chat-input svg[class='ng-star-inserted']").click()
        //cy.wait(15000)
        cy.get('.thumb_down_btn',{timeout:15000}).click()
        cy.get('lib-feedback-card div textarea').type('test')
        cy.get('lib-feedback-card div div div:nth-child(4) button:nth-child(2)').click()
        cy.get("lib-llm-message div div:nth-child(2)").contains('Thank you for your feedback.')
        })
    })