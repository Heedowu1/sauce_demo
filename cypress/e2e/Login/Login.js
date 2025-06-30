const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const homeSaucePage = require('../../POM/homeSaucePage')

Given('A user open the login page', () => {
    cy.visit('/')
})
When('A user input the username {string}', (username) => {
    homeSaucePage.typeUsername(username);
})

When('A user enter the password {string}', (password)=>{
    homeSaucePage.typePassword(password);
})
When('A user clicks on the login button', () => {
    homeSaucePage.clickLogin();
})
Then('A user will be logged in', () => {
    cy.url().should('contain', 'inventory.html')
})

Then('User will get an error message', () => {
    homeSaucePage.checkErrMessage('Epic sadface: Sorry, this user has been locked out.')
})