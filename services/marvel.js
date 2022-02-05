const marvelApi = require('marvel-api')

const marvelClient = marvelApi.createClient({
    publicKey: 'c4ddc3f1ba45eb1d872750b8a37ddffd',
    privateKey: 'a3f988d21b2e57ed357c7851c7f74981ed7ea166'
})

module.exports = marvelClient