import sparkpage from "../../Pages/sparkpage"

describe('CCKM', function () {
    it('Verify user is able to ask a question using Ask me anything box', function () {
        sparkpage.loginSpark()
        sparkpage.askQuestion('What is account assure')
        sparkpage.isMessageVisible()
        sparkpage.compareQuestion('What is account assure')
    })
    it('Verify user is able to ask a follow up question', function () {
        sparkpage.loginSpark()
        sparkpage.askQuestion('What is Auto Pay?')
        sparkpage.isMessageVisible()
        sparkpage.askFollowupQuestion('How to enrol in Auto Pay?')
        sparkpage.isFollowUpMessageVisible()
    })
    it('Verify user is seeing Maximum Limits Reached message after second follow up question', function () {
        sparkpage.loginSpark()
        sparkpage.askQuestion('What is Auto Pay?')
        sparkpage.isMessageVisible()
        sparkpage.askFollowupQuestion('How to enrol in Auto Pay?')
        sparkpage.isFollowUpMessageVisible()
        sparkpage.askFollowupQuestion('How to Unenroll from Autopay?')
        sparkpage.isSecondFollowUpMessageVisible()
        sparkpage.maximumLimitsReached().should('be.visible')
    })
    it('Verify Ask me a follow up question is disabled after Maximum Limits Reached message', function () {
        sparkpage.loginSpark()
        sparkpage.askQuestion('What is Auto Pay?')
        sparkpage.isMessageVisible()
        sparkpage.askFollowupQuestion('How to enrol in Auto Pay?')
        sparkpage.isFollowUpMessageVisible()
        sparkpage.askFollowupQuestion('How to Unenroll from Autopay?')
        sparkpage.isSecondFollowUpMessageVisible()
        sparkpage.maximumLimitsReached().should('be.visible')
        sparkpage.askFollowupQuestion().should('be.disabled')
    })
    it('Verify Recent Questions Panel Contain only a maximum of 15 questions at any point of time', function () {
        const questions = [
            'How do I get on a promotional plan?',
            'I have a late fee that I want you to remove from my account, please',
            'Will be notified when the payment is made?',
            'How do I assist a customer to log into account center?',
            'What is Account Assure?',
            'What steps can a customer take to reset their password in account center',
            'What is the CFPB?',
            'I want to close my account',
            'How do I credit a Paper Statement Fee for a customer?',
            'Why are these restrictions in place?',
            'What do you mean print rate?',
            'How do I explain to a customer why their APR increased?',
            'How can I view my transaction history online?',
            'How can I qualify for a credit limit increase?',
            'How do I setup account alerts?',
            'How to update the email address?',
        ]
        sparkpage.loginSpark()
        questions.forEach((question)=>{
            sparkpage.askQuestion(question)
            //cy.get("textarea[placeholder='Ask me anything']").type(question)
            sparkpage.isMessageVisible()
            sparkpage.initiateNewThread().click()
        })
        //Ensuring the last asked question is the first recent question in the panel
        sparkpage.compareQuestion('How to update the email address?')
        //Ensuring there is only a maximum of 15 questions in the panel
        sparkpage.recentQuestions().should('have.length.lte', 15)
    })
    it('Verify user is able to provide General Feedback of the application', function () {
        sparkpage.loginSpark()
        sparkpage.generalFeedbackButton().click()
        sparkpage.provideGeneralFeedback()
        sparkpage.genFeedbackSubmitButton().click()
        sparkpage.isSnackBarVisible().and('contain', 'Successfully Submitted')

    })
    it('Verify user is able to provide Negative feedback on the AI Response', function () {
        sparkpage.loginSpark()
        sparkpage.askQuestion('What is account assure')
        sparkpage.isMessageVisible()
        sparkpage.thumbDown().click()
        sparkpage.messageNegativeFeedbackTextArea().type('test')
        sparkpage.submitMessageNegativeFeedback().click()
        sparkpage.messageFeedbackSuccess().contains('Thank you for your feedback.')
    })
    it('Verify user is able to provide Positive feedback on the AI Response', function () {
        sparkpage.loginSpark()
        sparkpage.askQuestion('What is account assure')
        sparkpage.thumbUp().click()
        sparkpage.messageFeedbackSuccess().contains('Thank you for your feedback.')
    })
    it('Verify user is able to do a search and find necessary thread', function () {
        sparkpage.loginSpark()
        sparkpage.recentQuestionsSearchBox().type('account')
        sparkpage.compareQuestion('What is account assure')
    })
    it('Verify clicking on vector show/hide Recent Question Panel', function () {
        sparkpage.loginSpark()
        sparkpage.vector().click()
        sparkpage.isRecentQuestionPanelHidden()
        sparkpage.vector().click().click()
        sparkpage.isRecentQuestionPanelVisible()
    })
    it('Verify user is able to initiate a new thread using "Initiate New Thread" link', function () {
        sparkpage.loginSpark()
        sparkpage.askQuestion('What is account assure')
        sparkpage.isMessageVisible()
        sparkpage.initiateNewThread().click()
        sparkpage.askQuestion('What is Easy Pay')
        sparkpage.isMessageVisible()
        sparkpage.compareQuestion('What is Easy Pay')
    })
    it('Verify user is able to see caring response for responses', function () {
        sparkpage.loginSpark()
        sparkpage.askQuestion('What is Account center')
        sparkpage.isCaringMessageVisible()
    })
    it('Verify user is see referenced articles for responses', function () {
        sparkpage.loginSpark()
        sparkpage.askQuestion('What is Account center')
        sparkpage.isReferencedArticleVisible()
    })
    it('Verify user is able to delete a thread', function () {
        sparkpage.loginSpark()
        sparkpage.selectThreadInRecentQnsPanel(0).trigger('mouseenter')
        sparkpage.deleteThread()
        sparkpage.isSnackBarVisible().and('contain', 'Thread successfully deleted')
    })
    it('Verify Delete All Threads button is deleting all thread from recent questions panel', function () {
        sparkpage.loginSpark()
        sparkpage.deleteAllThreads()
        sparkpage.isSnackBarVisible().and('contain', 'All threads successfully deleted')

    })
})