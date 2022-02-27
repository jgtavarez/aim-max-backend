const Exercise = require('../models/database/exercise')

const validateExercise = async(exercise = '') => {
    const exerciseExist = await Exercise.findOne({exercise})
    if(!exerciseExist){
        throw new Error(`The exercise ${exercise} is not valid`)
    }
}

module.exports = {
    validateExercise,
}