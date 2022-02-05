const marvelClient = require('../services/marvel')

const getCharactersByName = name =>
    marvelClient.characters.findNameStartsWith(name)
        .then(res => res.data)
        .fail(err => console.log(err))
        .done()

module.exports = { getCharactersByName }