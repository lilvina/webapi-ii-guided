const express = require('express')

const Hubs = require('./Hubs/hubs-model.js')
const hubsRouter = require('./hubs/hubs-router.js')

const server = express()

server.use(express.json())

server.get('/'), (req, res) => {

})

server.use('/api/hubs', hubsRouter)

module.exports = server
