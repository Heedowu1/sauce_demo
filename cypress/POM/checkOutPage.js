class checkOutPage{
    elements = {
        clickCart: () => cy.get('[data-test="shopping-cart-link"]'),
        checkOutBtn: () => cy.get('.btn_action.checkout_button'),
        firstName: () => cy.get('#first-name'),
        lastName: () => cy.get('#last-name'),
        postalCode: () => cy.get('#postal-code'),
        continueShopping: () => cy.get('[data-test="continue-shopping"]'),
        continueBtn: () => cy.get('[data-test="continue"]'),
        descriptionLabel: () => cy.get('.cart_desc_label'),
        finishBtn: () => cy.get('.btn_action.cart_button'),
        successPage: () => cy.get('[data-test="complete-header"]'),
        errMessage: () => cy.get('h3[data-test="error"]')
    }
    clickCartBtn() {
        this.elements.clickCart().click();
    }

    clickCheckOut() {
        this.elements.checkOutBtn().click();
    }
    enterCheckOutInfo(firstname, lastname, postalcode) {
        if (firstname) {
            this.elements.firstName().type(firstname);
        }
        if (lastname) {
            this.elements.lastName().type(lastname);
        }
        if (postalcode) {
            this.elements.postalCode().type(postalcode)
        } 
    }

    clickContinueShopping() {
        this.elements.continueShopping().click();
    }

    clickContinue() {
       this.elements.continueBtn().click();
    }

    detailPage() {
        return this.elements.descriptionLabel();
    }

    clickFinish() {
        this.elements.finishBtn().click();
    }

    successMessage() {
        return this.elements.successPage();
    }

    errorMessage() {
        return this.elements.errMessage();
    }

}

module.exports = new checkOutPage();