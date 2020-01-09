

module.exports = {
    '@tags': ['comsucesso', 'login', 'regressivo'],
    'Login com sucesso': (browser) => {
        let login = browser.page.login()
            login
                .maximizeWindow()
                .with('raoni@praxio.com.br', 'pwd123')
                .waitForElementVisible('@loginOk', 10000)
                .assert.containsText('@loginOk', 'Raoni', 'Teste de Login com sucesso passou')
    }
}