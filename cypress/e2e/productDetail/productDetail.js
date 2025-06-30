const productDetails = require('../../POM/productDetails')
const homeSaucePage = require('../../POM/homeSaucePage')
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('A user is logged in', () => {
    cy.visit('/');
    homeSaucePage.typeUsername('standard_user');
    homeSaucePage.typePassword('secret_sauce');
    homeSaucePage.clickLogin();
})

When('the user clicks on a item {string}', () => {
    productDetails.clickProduct();
})

Then('the user should be redirected to the product detail page', () => {
    productDetails.confirmDetail().should('have.text', 'Sauce Labs Backpack');
    cy.url().should('contain', 'inventory-item')
})

Given('User is logged in', () => {
    cy.visit('/');
    homeSaucePage.typeUsername('standard_user');
    homeSaucePage.typePassword('secret_sauce');
    homeSaucePage.clickLogin();
})

When('the user clicks on filter button and select {string}', () => {
    productDetails.clickFilter().select('Price (low to high)')
})

Then('filter result should have the product list form the lowest Price', () => {
    productDetails.filterResult().should('contain', '$7.99')
})