class cartManagement{
    elements = {
        firstAddBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        secondAddBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
        cartNo: () => cy.get('[data-test="shopping-cart-badge"]'),
        firstRemoveBtn: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        secondRemoveBtn: () => cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]')
    }

    addFirstItem() {
        this.elements.firstAddBtn().click();
    }
    addSecondItem () {
        this.elements.secondAddBtn().click();
    }
    getCartBadge() {
        return this.elements.cartNo();
    }
    removeFirstItem() {
        this.elements.firstRemoveBtn().click();
    }
    removeSecondItem() {
        this.elements.secondRemoveBtn().click();
    }

}

module.exports = new cartManagement();