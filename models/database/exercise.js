const { Schema, model } = require('mongoose')

const ExerciseSchema = Schema({
    exercise:{
        type: String,
        require: [true, 'Exercise is required'],
    }
})

module.exports = model('exercises', ExerciseSchema)