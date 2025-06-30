class homeSaucePage{
    elements = {
        userName: () => cy.get('#user-name'),
        passWord: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errMessage: () => cy.get('h3[data-test="error"]')
    }

    typeUsername(username){
        this.elements.userName().type(username);
    }

    typePassword(password){
        this.elements.passWord().type(password);
    }

    clickLogin(){
        this.elements.loginButton().click();
    }

    checkErrMessage(){
        this.elements.errMessage().click();
    }
}

module.exports = new homeSaucePage();