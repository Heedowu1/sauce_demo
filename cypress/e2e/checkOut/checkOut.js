const checkOutPage = require('../../POM/checkOutPage');
const homeSaucePage = require('../../POM/homeSaucePage');
const cartManagement = require('../../POM/cartManagement');
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('A user is logged in', () => {
    cy.visit('/');
    homeSaucePage.typeUsername('standard_user');
    homeSaucePage.typePassword('secret_sauce');
    homeSaucePage.clickLogin();
})

Given('the user adds item to cart', () => {
    cartManagement.addFirstItem();
    cartManagement.addSecondItem();
})

Given('the user clicks on Cart button', () => {
    checkOutPage.clickCartBtn();
})

When('the user proceeds to check out', () => {
    checkOutPage.clickCheckOut();
})

When('enters firstname {string}, lastname {string}, and postalcode {string}', (firstname, lastname, postalcode) => {
    checkOutPage.enterCheckOutInfo(firstname, lastname, postalcode);
})

When('clicks continue', () => {
    checkOutPage.clickContinue();
})

When('checkout description page should be visible', () => {
    checkOutPage.detailPage().should('have.text', 'Description');
})

When('user clicks finish', () => {
    checkOutPage.clickFinish();
})

Then('a success page should be displayed', () => {
    checkOutPage.successMessage().should('contain.text', 'Thank you for your order!')
})

Given('A user has items in cart', () => {
    cy.visit('/');
    homeSaucePage.typeUsername('standard_user');
    homeSaucePage.typePassword('secret_sauce');
    homeSaucePage.clickLogin();
    cartManagement.addFirstItem();
    cartManagement.addSecondItem();
})

When('clicks on cart', () => {
    checkOutPage.clickCartBtn();
})

Then('the user clicks on cancel button to continue shopping', () => {
    checkOutPage.clickContinueShopping();
})

Given('A user has clicked checkout button', () => {
    cy.visit('/');
    homeSaucePage.typeUsername('standard_user');
    homeSaucePage.typePassword('secret_sauce');
    homeSaucePage.clickLogin();
    cartManagement.addFirstItem();
    cartManagement.addSecondItem();
    checkOutPage.clickCartBtn();
    checkOutPage.clickCheckOut();
})

When('user enters firstname {string} and lastname {string} and postalcode {string}', (firstname, lastname, postalcode) => {
    checkOutPage.enterCheckOutInfo(firstname, lastname, postalcode);
})

When('user clicks continue', () => {
    checkOutPage.clickContinue();
})

Then('an error message should be displayed', () => {
    checkOutPage.errorMessage().should('have.text', 'Error: Postal Code is required')
})