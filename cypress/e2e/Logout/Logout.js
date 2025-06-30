const logout = require('../../POM/logout');
const homeSaucePage = require('../../POM/homeSaucePage');
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('a user is logged in', () => {
    cy.visit('/');
    homeSaucePage.typeUsername('standard_user');
    homeSaucePage.typePassword('secret_sauce');
    homeSaucePage.clickLogin();
})

When('when the user clicks on the hamburger', () => {
    logout.clickHamburger();
})

When('user clicks on logout button', () => {
    logout.clickLogout();
})

Then('user should be redirected to login page', () => {
    cy.url().should('contain', 'saucedemo')
})