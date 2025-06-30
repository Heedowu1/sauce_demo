const homeSaucePage = require('../../POM/homeSaucePage');
const cartManagement = require('../../POM/cartManagement');
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');


Given('A user is logged in', () => {
    cy.visit('/');
    homeSaucePage.typeUsername('standard_user');
    homeSaucePage.typePassword('secret_sauce');
    homeSaucePage.clickLogin();
    cy.url().should('contain', 'inventory.html');
})

When('The user adds first item to cart {string}', () => {
    cartManagement.addFirstItem();
})

When('The user adds {string} to the Cart', () => {
    cartManagement.addSecondItem();
})

Then('The cart badge should show {string}', (count) => {
    cartManagement.getCartBadge().should('have.text', count)
})


Given('A user has added items to cart', () => {
    cy.visit('/');
    homeSaucePage.typeUsername('standard_user');
    homeSaucePage.typePassword('secret_sauce');
    homeSaucePage.clickLogin();
    cartManagement.addFirstItem();
    cartManagement.addSecondItem();
})

When('A user removes first item from cart {string}', () => {
    cartManagement.removeFirstItem();
})

When('A user removes second item from cart {string}', () => {
    cartManagement.removeSecondItem();
})

Then('Cart badge should not be visible', () => {
    cartManagement.getCartBadge().should('not.exist')
})