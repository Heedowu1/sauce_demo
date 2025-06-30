class logOut {
    elements = {
        hamburger: () => cy.get('#react-burger-menu-btn'),
        logout: () => cy.get('#logout_sidebar_link')
    }

    clickHamburger() {
        this.elements.hamburger().click();
    }
    clickLogout() {
        this.elements.logout().click();
    }
}

module.exports = new logOut();