//In Javascript technology any test file is called as Spec file

describe('Login Account Center', function(){
    it('Open Account Center', function(){
        cy.visit('https://duat.comenity.net/ac/breadcashback/public/home');
        cy.get('#existing-cardmember-sign-in-button-link',{timeout:20000}).click()
        cy.get('#username-data-field').type('adsdemo0')
        cy.get('input[type="password"]').type('Tropical@321')
        cy.get('button[type="submit"]').click()

    })
})