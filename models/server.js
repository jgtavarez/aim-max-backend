const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express()

        // Middlewares
        this.middlewares()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server running on PORT: ${process.env.PORT}`)
        })
    }
}

module.exports = Server;