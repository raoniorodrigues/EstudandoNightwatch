var loginActions = {
    with: function (email, pass){
        return this
            .navigate()
                .waitForElementVisible('@formLogin', 10000)
                .setValue('@emailInput', email)
                .setValue('@passInput', pass)
                .click('@loginButton')
    }
}

module.exports = {
    url: 'http://zombie-web:5000',
    commands:[loginActions],
    elements:{
        formLogin: '.login-page',
        formWrongId:'.alert-danger',
        formNoId: '.alert-info',
        loginOk: '.user .info span',
        emailInput: '#emailId',
        passInput: '#passId',
        loginButton: '.login-button'

    }
}