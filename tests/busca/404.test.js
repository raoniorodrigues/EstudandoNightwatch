module.exports = {
    '@tags': ['buscafail', 'regressivo'],
    before: function (browser) {
        let login = browser.page.login()
        login.with('raoni@praxio.com.br', 'pwd123')

    },

    'Quando busco um título não cadastrado': function (browser) {
        let searchMovie = browser.page.busca()
        searchMovie
                .setValue('@searchInput', 'Não é mais um besteirol americano')
                .click('@searchIcon')
                   
    },
    'Então devo ver uma mensagem de alerta': function (browser) {
        let searchMovie = browser.page.busca()
        searchMovie
            .assert.containsText('@alertNoMovie', 'Puxa! não encontramos nada aqui', 'Teste de filme não localizado passou com sucesso')
                   
    }
}