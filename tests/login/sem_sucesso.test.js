module.exports = {
    // '@disabled': true,
    '@tags': ['semsucesso', '404'],

    'Login sem sucesso': (browser) => {
        let login = browser.page.login()
            login
            .with('raoni@praxio.com', 'pwd123')
                .waitForElementVisible('@formWrongId', 3000)
                .assert.containsText('@formWrongId', 'Usuário e/ou senha inválidos', 'Teste de Login sem sucesso Passou')
        },
        'Login não informado': (browser) => {
            let login = browser.page.login()
                login.navigate()
                    .waitForElementVisible('@formLogin', 5000)
                    .click('@loginButton')
                    .assert.containsText('@formNoId', 'Opps. Cadê o email?', 'Teste de Login não informado Passou')
        }
}