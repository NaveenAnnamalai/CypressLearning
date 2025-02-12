describe('New Thread',function(){
    it('Verify user is able to initiate a new thread using "Initiate New Thread" link',function(){
        cy.visit('https://breadfinancialstg.rightanswers.com/portal/sa/?&sl=&linw=')
        cy.wait(30000)
        cy.get('#aiTab').click()
        cy.get("textarea[placeholder='Ask me anything']").type('What is Account center')
        cy.get("lib-chat-input svg[class='ng-star-inserted']").click()
        cy.get('lib-chat-input div:nth-child(2) button',{timeout:15000}).click()
        cy.get("textarea[placeholder='Ask me anything']").type('What is EasyPay')
        cy.get("lib-chat-input svg[class='ng-star-inserted']").click()
        cy.wait(17000)
        cy.get("lib-recent-question-sidebar div div div div:nth-child(3) div[role='button']:nth-child(1)",{timeout:15000}).then(function(myText){
           const qnText = myText.text().replace('&nbsp;','').trim()
           cy.wrap(qnText).should('eq','What is EasyPay')
        })
        })
    })