const mongoose = require('mongoose')

const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Successful connection to the database')
    }catch(error){
        throw new Error('Error establishing connection to database')
    }
}

module.exports = {
    dbConnection
}