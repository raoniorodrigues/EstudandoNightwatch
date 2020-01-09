import pg from '../../lib/db'

let movieData = {}

module.exports = {
    '@tags': ['cadastro', 'regressivo'],
    before: function (browser) {
        movieData = {
            title: 'Resident Evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: ['Milla Jovovich', 'Ali Larter', 'Ian Glen', 'Shawn Roberts'],
            cover: 'resident-evil-2002.jpg',
            plot: 'A missão do esquadrão e da Alice é desligar a Rainha Vermelha e coletar dados sobre o incidente.'
        }

        pg.removeByTitle(movieData.title)

        let login = browser.page.login()
        login.with('raoni@praxio.com.br', 'pwd123')
    },
    'quando eu faço o cadastro do filme': function (browser) {
        let cadastro = browser.page.cadastro()
        cadastro
            .createForm()
            .setValue('@titleInput', movieData.title)
            .selectStatus(movieData.status)
            .setValue('@yearInput', movieData.year)
            .setValue('@dateInput', movieData.releaseDate)
            .insertCast(movieData.cast)
            .setValue('@plotInput', movieData.plot)
            .uploadCover(movieData.cover)
            .click('@createButton')
            .pause(5000)
    },
    'então devo ver o filme na lista': function (browser) {
        let cadastro = browser.page.cadastro()        
        cadastro
            .waitForElementPresent('@movieLists', 10000)
            .assert.containsText('@movieLists', movieData.title)


    }

}