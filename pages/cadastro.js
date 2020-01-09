var createActions = {
    selectStatus: function (status) {
        return this
            .click('@statusSelect')
            .useXpath()
            .waitForElementVisible(`//span[contains(text(),'${status}')]`, 10000)
            .click(`//span[contains(text(),'${status}')]`)
            .useCss()
    },
    createForm: function () {
        return this
            .click('@addButton')
            .waitForElementVisible('@movieForm', 10000)
    },
    insertCast: function (cast) {
        const browser = this

        cast.forEach(function(actor) {
            browser
                .setValue('@castInput', actor)
                .api.keys(browser.api.Keys.TAB)
        })
        return this
          
    },

    uploadCover: function(fileName){
       let fullPath = require('path').resolve(__dirname, '../images/' + fileName)
       
       console.log(fullPath)

        return this.setValue('@uploadInput', fullPath)
        .pause(1000)
        .assert.attributeContains('.picture-src', 'src', 'blob')
    }
}

module.exports = {
    commands: [createActions],
    elements: {
        movieForm: '#movie-form',
        addButton: '.movie-add',
        titleInput: 'input[name=title]',
        statusSelect: 'input[placeholder=Status]',
        yearInput: 'input[name=year]',
        dateInput: 'input[name=release_date]',
        castInput: '.cast',
        plotInput: 'textarea[name=overview]',
        createButton: '#create-movie',
        movieLists: 'table tbody',
        uploadInput: '#upcover'

    }
}