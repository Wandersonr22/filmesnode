const charactersRepository = require('../repository/character')

const getCharactersByName = async (req, res, next) => {
    const { name } = req.params
    const character = await charactersRepository.getCharactersByName(name)
    console.log(character)
    res.status(200).send(character)
}

module.exports = { getCharactersByName }