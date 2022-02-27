const { request, response } = require('express');
const Leaderboard = require('../models/database/leaderboard');

const postScore = async (req = request, res = response) => {
    const { exercise, username, score } = req.body
    const leaderboard = new Leaderboard({ exercise, username, score })

    try {
        await leaderboard.save()

        res.json({
            msg: 'score saved successfully'
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Internal Server Error.'
        })
    }
}

module.exports = {
    postScore
}