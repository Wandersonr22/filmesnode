const marvelClient = require('../services/marvel')

const getCharactersByName = async name =>
    marvelClient.characters.findNameStartsWith(name)
        .then(res => res.data)
        .catch(err => console.log(err))

module.exports = { getCharactersByName }