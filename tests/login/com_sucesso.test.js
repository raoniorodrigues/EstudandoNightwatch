

module.exports = {

    'Login com sucesso': (browser) => {
        let login = browser.page.login()
            login
                .with('raoni@praxio.com.br', 'pwd123')
                .waitForElementVisible('@loginOk', 3000)
                .assert.containsText('@loginOk', 'Raoni', 'Teste de Login com sucesso passou')
    }
}