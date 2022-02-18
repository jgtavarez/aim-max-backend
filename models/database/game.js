const { Schema, model } = require('mongoose')

const GameSchema = Schema({
    name:{
        type: String,
        require: [true, 'name is required'],
    },
    description:{
        type: String,
        require: [true, 'description is required'],
    },
})

module.exports = model('games', GameSchema)