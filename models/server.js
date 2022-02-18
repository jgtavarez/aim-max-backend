const express = require('express')
const cors = require('cors')

const { dbConnection } = require('../database/config')

class Server {
    constructor() {
        this.app = express()

        this.paths = {
            guide: '/api/guide'
        }

        // Connect to database
        this.connectDB()

        // Middlewares
        this.middlewares()

        // Routes
        this.routes()
    }

    async connectDB() {
        await dbConnection()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.paths.guide, require('../routes/guide'))
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server running on PORT: ${process.env.PORT}`)
        })
    }
}

module.exports = Server;