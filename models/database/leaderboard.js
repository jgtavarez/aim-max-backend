const { Schema, model } = require('mongoose')

const LeaderboardSchema = Schema({
    exercise:{
        type: String,
        require: [true, 'exercise is required'],
        emun: ['reaction-time', 'search-number', 'find-impostor', 'search-color', 'color-text', 'capture-color', 'shape-change', 'sound-reaction', 'schulte-table', 'visual-memory', 'traffic-lights', 'press-key', 'target-shoot', 'longest-line', 'click-limit', 'typing-test']
    },
    username:{
        type: String,
        require: [true, 'username is required'],
    },
    score:{
        type: Number,
        require: [true, 'score is required'],
    },
})

module.exports = model('leaderboard', LeaderboardSchema)