import {url, username,password,wrongpassword,wrongusername,loginpageerormessage} from '../support/authentication.constant'

require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add('login',()=>{

    cy.visit('https://www.google.com')

})

Cypress.Commands.add('login_Positive_Scenarios', () => { 
    cy.visit(url)
    cy.get('html').then((html)=>{
        if(html.find('[title="Erforderliche und optionale Cookies erlauben"]').length > 0){
            cy.get('[title="Erforderliche und optionale Cookies erlauben"]').click()
        }
    })
    cy.get('#email').clear().type(username)
    cy.get('#pass').clear().type(password)
    cy.get('[data-testid="royal_login_button"]').click()
 })

 Cypress.Commands.add('Negative_Password_Testing', () => { 
    cy.visit(url)
    cy.get('html').then((html)=>{
        if(html.find('[title="Erforderliche und optionale Cookies erlauben"]').length > 0){
            cy.get('[title="Erforderliche und optionale Cookies erlauben"]').click()
        }
    })
    cy.get('#email').clear().type(username)
    cy.get('#pass').clear().type(wrongpassword)
    cy.wait(1000)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeaderTitle').should('be.visible')
 })

 Cypress.Commands.add('Negative_Username_Testing', () => { 

    cy.visit(url)
    cy.get('html').then((html)=>{
        if(html.find('[title="Erforderliche und optionale Cookies erlauben"]').length > 0){
            cy.get('[title="Erforderliche und optionale Cookies erlauben"]').click()
        }
    })
    cy.get('#email').clear().type(wrongusername)
    cy.get('#pass').clear().type(password)
    cy.wait(1000)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeaderTitle').should('be.visible')


 })

 Cypress.Commands.add('Negative_Username_Password_Testing', () => { 

    cy.visit(url)
    cy.get('html').then((html)=>{
        if(html.find('[title="Erforderliche und optionale Cookies erlauben"]').length > 0){
            cy.get('[title="Erforderliche und optionale Cookies erlauben"]').click()
        }
    })
    cy.get('#email').clear().type(wrongusername)
    cy.get('#pass').clear().type(wrongpassword)
    cy.wait(1000)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeaderTitle').should('be.visible')


 })