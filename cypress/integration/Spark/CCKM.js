import sparkpage from "../../Pages/sparkpage"

describe('CCKM', function () {
    it('Verify user is able to ask a question using Ask me anything box', function () {
        sparkpage.loginSpark()
        sparkpage.askQuestion('What is account assure')
        sparkpage.isMessageVisible()
        sparkpage.compareQuestion('What is account assure')
    })
    it('Verify user is able to provide General Feedback of the application', function () {
        sparkpage.loginSpark();
        sparkpage.generalFeedbackButton().click()
        cy.get('lib-feedback-modal lib-dropdown').click()
        cy.get('mat-dialog-container lib-feedback-modal lib-dropdown div div:nth-child(3)').click()
        cy.get('lib-feedback-modal div textarea').type('test')
        cy.get('mat-dialog-container lib-feedback-modal lib-dropdown div div div[id="menu-button"]').then(function (dropText) {
            const dropDownSelectedText = dropText.text().replace('&nbsp;', '').trim()
            cy.wrap(dropDownSelectedText).should('eq', 'I have feedback about Spark')
        })
        cy.get('lib-feedback-modal div div div:nth-child(2) div:nth-child(4) button:nth-child(2)').click()
        sparkpage.isSnackBarVisible().and('contain', 'Successfully Submitted')

    })
    it('Verify user is able to provide Negative feedback on the AI Response', function () {
        sparkpage.loginSpark();
        sparkpage.askQuestion('What is account assure')
        sparkpage.isMessageVisible()
        sparkpage.thumbDown().click()
        cy.get('lib-feedback-card div textarea').type('test')
        cy.get('lib-feedback-card div div div:nth-child(4) button:nth-child(2)').click()
        sparkpage.messageFeedbackSuccess().contains('Thank you for your feedback.')
    })
    it('Verify user is able to provide Positive feedback on the AI Response', function () {
        sparkpage.loginSpark();
        sparkpage.askQuestion('What is account assure')
        sparkpage.thumbUp().click()
        sparkpage.messageFeedbackSuccess().contains('Thank you for your feedback.')
    })
    it('Verify user is able to do a search and find necessary thread', function () {
        sparkpage.loginSpark();
        cy.get('#search-text').type('account')
        cy.get(':nth-child(1) > .ng-tns-c3864069602-0 > .py-3 > .session-item')
        cy.get("lib-recent-question-sidebar div div div div div:nth-child(3) div:nth-child(1) lib-session-list-item").then(function (searchText) {
            const foundtext = searchText.text().replace('&nbsp;', '').trim()
            cy.wrap(foundtext).should('eq', 'What is account assure')
        })
    })
    it('Verify clicking on vector show/hide Recent Question Panel', function () {
        sparkpage.loginSpark();
        sparkpage.vector().click()
        sparkpage.isRecentQuestionPanelHidden()
        sparkpage.vector().click().click()
        sparkpage.isRecentQuestionPanelVisible()
    })
    it('Verify user is able to initiate a new thread using "Initiate New Thread" link', function () {
        sparkpage.loginSpark();
        sparkpage.askQuestion('What is account assure')
        sparkpage.isMessageVisible()
        sparkpage.initiateNewThread().click()
        sparkpage.askQuestion('What is Easy Pay')
        sparkpage.isMessageVisible()
        sparkpage.compareQuestion('What is Easy Pay');
    })
    it('Verify user is able to see caring response for responses', function () {
        sparkpage.loginSpark();
        sparkpage.askQuestion('What is Account center')
        sparkpage.isCaringMessageVisible()
    })
    it('Verify user is see referenced articles for responses', function () {
        sparkpage.loginSpark();
        sparkpage.askQuestion('What is Account center')
        sparkpage.isReferencedArticleVisible()
    })
    it('Verify user is able to delete a thread', function () {
        //cy.intercept('POST', '/portal/controller/view/faq/').as('pageLoad')
        //cy.visit('https://breadfinancialstg.rightanswers.com/portal/sa/?&sl=&linw=')
        //cy.wait('@pageLoad').its('response.statusCode').should('eq',200)
        //cy.wait('@pageLoad').its('response.statusCode').should('eq',200)
        //cy.wait(30000)
        sparkpage.loginSpark();
        cy.get('lib-recent-question-sidebar .scrollbar-custom').find('div[role="button"]').eq(0).trigger('mouseenter')
        cy.get('lib-options', { timeout: 2000 }).click()
        cy.get("lib-options div div:nth-child(2)").click()
        cy.get('lib-button[ng-reflect-label="Delete"]').click()
        sparkpage.isSnackBarVisible().and('contain', 'Thread successfully deleted')
    })
    it('Verify Delete All Threads button is deleting all thread from recent questions panel', function () {
        sparkpage.loginSpark();
        cy.get('lib-recent-question-sidebar button[ng-reflect-ng-class="cursor-pointer hover:bg-feedba"]').click()
        cy.get('lib-button[ng-reflect-label="Delete"]').click()
        sparkpage.isSnackBarVisible().and('contain', 'All threads successfully deleted')

    })
})