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
      askAQuestion: () => cy.get("textarea[placeholder='Ask me anything']"),
      compareRecentQuestion: () => cy.get('lib-recent-question-sidebar .scrollbar-custom')
        .find('div[role="button"]').eq(0),
      messageVisible: () => cy.get('lib-llm-message', { timeout: 20000 }).should('be.visible'),
      caringMessage: () => cy.get('lib-caring-callout', { timeout: 15000 }).should('be.visible'),
      referencedArticles: () => cy.get('lib-citation-card', { timeout: 20000 }).should('be.visible'),
      snackBar: () => cy.get('.mat-mdc-snack-bar-label').should('be.visible'),
      recentQuestionPanel: () => cy.get('lib-recent-question-sidebar'),
      vectorButton: () => cy.get('lib-stacked-layout stacked-layout-header lib-svg-icon svg'),
      initiateNewThreadLink: () => cy.get('lib-chat-input div:nth-child(2) button', { timeout: 15000 }),
      genFeedback: () => cy.get('lib-feedback-button button'),
      messageFeedback: () => cy.get("lib-llm-message div div:nth-child(2)"),
      messageThumbUp: () => cy.get('.thumb_up_btn', { timeout: 15000 }),
      messageThumbDown: ()=> cy.get('.thumb_down_btn', { timeout: 15000 })
    }



  //Calling Login method
  loginSpark() {
    return this.elements.Login()
  }
  compareQuestion(typeText) {
    return this.elements.compareRecentQuestion().then(function (myText) {
      const qnText = myText.text().replace('&nbsp;', '').trim()
      cy.wrap(qnText).should('eq', typeText)
    })
  }
  askQuestion(typeText) {
    return this.elements.askAQuestion().type(typeText)
      .then(function () {
        cy.get("lib-chat-input svg[class='ng-star-inserted']").click()
      })
  }
  isMessageVisible() {
    return this.elements.messageVisible()
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
  thumbUp(){
    return this.elements.messageThumbUp()
  }
  thumbDown(){
    return this.elements.messageThumbDown()
  }
  

}
module.exports = new sparkpage();

