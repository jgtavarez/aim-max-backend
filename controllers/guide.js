const { request, response } = require('express');
const Game = require('../models/database/game');
const Feature = require('../models/database/feature');

const getGuideById = async (req = request, res = response) => {
    const { game } = req.params;

    try {
        const gameFound = await Game.findOne({ name: game });
        if (!gameFound) {
            return res.status(404).json({
                msg: 'Game not found.'
            })
        }

        res.json(gameFound);
    } catch (error) {
        return res.status(500).json({
            msg: 'Internal Server Error.'
        })
    }
}

module.exports = {
    getGuideById
}