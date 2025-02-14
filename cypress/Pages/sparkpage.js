class sparkpage {
  elements =
    {
      Login: () => cy.visit('https://breadfinancialstg.rightanswers.com/portal/sa/?&sl=&linw=')
        .then(function (SparkHomePage) {
          cy.get('#aiTab', { timeout: 100000 }).should('be.visible')
          cy.wait(4000)
          cy.get('#aiTab', { timeout: 100000 }).should('be.visible')
          cy.get('#aiTab').click()
        }),
      newThreadButton: ()=> cy.get('lib-svg-icon[title="New Thread"]'),  
      askAQuestion: () => cy.get('lib-chat-input[ng-reflect-placeholder="Ask me anything"]',{timeout:5000}),
      askAfollowupQuestion: () => cy.get('lib-chat-input[ng-reflect-placeholder="Ask me a follow up question"] textarea'),
      compareRecentQuestion: () => cy.get('lib-recent-question-sidebar .scrollbar-custom')
        .find('div[role="button"]').eq(0),
      messageVisible: () => cy.get('lib-llm-message', { timeout: 30000 }).should('be.visible'),
      followUpMessageVisible: () => cy.get('#chatMessages lib-chat-message:nth-child(4)', { timeout: 30000 }).should('be.visible'),
      secondFollowupMessageVisible: () => cy.get('#chatMessages lib-chat-message:nth-child(6)', { timeout: 30000 }).should('be.visible'),
      //chatExceedMessage: () => cy.get('div lib-chat-exceeded div:nth-child(2) div div div:nth-child(1)'),
      chatExceedMessage: () => cy.get('.flex.flex-col.gap-3.mt-2.mb-4').scrollIntoView(),
      caringMessage: () => cy.get('lib-caring-callout', { timeout: 20000 }).should('be.visible'),
      referencedArticles: () => cy.get('lib-citation-card', { timeout: 20000 }).should('be.visible'),
      snackBar: () => cy.get('.mat-mdc-snack-bar-label', { timeout: 5000 }).should('be.visible'),
      recentQuestionPanel: () => cy.get('lib-recent-question-sidebar'),
      vectorButton: () => cy.get('lib-stacked-layout stacked-layout-header lib-svg-icon svg'),
      initiateNewThreadLink: () => cy.get('lib-chat-input div:nth-child(2) button', { timeout: 15000 }),
      genFeedback: () => cy.get('lib-feedback-button button'),
      messageFeedback: () => cy.get("lib-llm-message div div:nth-child(2)"),
      messageThumbUp: () => cy.get('.thumb_up_btn', { timeout: 15000 }),
      messageThumbDown: () => cy.get('.thumb_down_btn', { timeout: 15000 }),
      provideGenFeed: () => cy.get('lib-feedback-modal lib-dropdown').click().then(function () {
        cy.get('mat-dialog-container lib-feedback-modal lib-dropdown div div:nth-child(3)').click()
        cy.get('lib-feedback-modal div textarea').type('test')
        cy.get('mat-dialog-container lib-feedback-modal lib-dropdown div div div[id="menu-button"]').then(function (dropText) {
          const dropDownSelectedText = dropText.text().replace('&nbsp;', '').trim()
          cy.wrap(dropDownSelectedText).should('eq', 'I have feedback about Spark')
        })
      }),
      genFeedSubmitBut: () => cy.get('lib-feedback-modal div div div:nth-child(2) div:nth-child(4) button:nth-child(2)'),
      messageNegFeedTextArea: () => cy.get('lib-feedback-card div textarea'),
      messageNegFeedSubmitBut: () => cy.get('lib-feedback-card div div div:nth-child(4) button:nth-child(2)'),
      recentQnsSearchBox: () => cy.get('#search-text'),
      threadRecentPanel: () => cy.get('lib-recent-question-sidebar .scrollbar-custom'),
      threadDelete: () => cy.get('lib-options', { timeout: 2000 }).click().then(() => {
        cy.get("lib-options div div:nth-child(2)").click()
        cy.get('lib-button[ng-reflect-label="Delete"]').click()
      }),
      threadAllDelete: () => cy.get('lib-recent-question-sidebar button[ng-reflect-ng-class="cursor-pointer hover:bg-feedba"]').click().then(() => {
        cy.get('lib-button[ng-reflect-label="Delete"]').click()
      }),
      recentQns: ()=> cy.get('lib-recent-question-sidebar div div div div div:nth-child(3) div lib-session-list-item')



    }



  //Calling Login method
  loginSpark() {
    return this.elements.Login()
  }
  newThread(){
    return this.elements.newThreadButton()
  }
  compareQuestion(question) {
    return this.elements.compareRecentQuestion().then(function (myText) {
      const qnText = myText.text().replace('&nbsp;', '').trim()
      cy.wrap(qnText).should('eq', question)
    })
  }
  askQuestion(question) {
    return this.elements.askAQuestion().type(question)
      .then(function () {
        cy.get("lib-chat-input svg[class='ng-star-inserted']").click()
      })
  }
  askFollowupQuestion(question) {
    return this.elements.askAfollowupQuestion().type(question)
      .then(function () {
        cy.get("lib-chat-input svg[class='ng-star-inserted']").click()
      })
  }
  isMessageVisible() {
    return this.elements.messageVisible()
  }
  isFollowUpMessageVisible() {
    return this.elements.followUpMessageVisible()
  }
  isSecondFollowUpMessageVisible() {
    return this.elements.secondFollowupMessageVisible()
  }
  maximumLimitsReached() {
    return this.elements.chatExceedMessage()
  }
  isCaringMessageVisible() {
    return this.elements.caringMessage()
  }
  isReferencedArticleVisible() {
    return this.elements.referencedArticles()
  }
  isSnackBarVisible() {
    return this.elements.snackBar()
  }
  isRecentQuestionPanelVisible() {
    return this.elements.recentQuestionPanel().should('not.be.hidden')
  }
  isRecentQuestionPanelHidden() {
    return this.elements.recentQuestionPanel().should('be.hidden')
  }
  vector() {
    return this.elements.vectorButton()
  }
  initiateNewThread() {
    return this.elements.initiateNewThreadLink()
  }
  generalFeedbackButton() {
    return this.elements.genFeedback()
  }
  messageFeedbackSuccess() {
    return this.elements.messageFeedback()
  }
  thumbUp() {
    return this.elements.messageThumbUp()
  }
  thumbDown() {
    return this.elements.messageThumbDown()
  }
  provideGeneralFeedback() {
    return this.elements.provideGenFeed()
  }
  genFeedbackSubmitButton() {
    return this.elements.genFeedSubmitBut()
  }
  messageNegativeFeedbackTextArea() {
    return this.elements.messageNegFeedTextArea()
  }
  submitMessageNegativeFeedback() {
    return this.elements.messageNegFeedSubmitBut()
  }
  recentQuestionsSearchBox() {
    return this.elements.recentQnsSearchBox()
  }
  selectThreadInRecentQnsPanel(threadNumber) {
    return this.elements.threadRecentPanel().find('div[role="button"]').eq(threadNumber)
  }
  deleteThread() {
    return this.elements.threadDelete()
  }
  deleteAllThreads() {
    return this.elements.threadAllDelete()
  }
  recentQuestions(){
    return this.elements.recentQns()
  }

}
module.exports = new sparkpage();

