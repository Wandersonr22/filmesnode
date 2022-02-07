const express = require('express')
const router = express.Router()
const app = express()
const bodyParser = require('body-parser')
const characterController = require('./controllers/character')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)
router.get('/teste', (req, res, next) => {
    res.status(200).send({ Mensagem: 'exec' })
})
router.get('/personagem/:name', characterController.getCharactersByName)

app.listen(3000, () => console.log('api rodando'))