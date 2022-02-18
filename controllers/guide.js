const { request, response } = require('express');
const Game = require('../models/database/game');

const getGuideByGame = async (req = request, res = response) => {
    const { game } = req.params;

    try {
        const gameFound = await Game.aggregate([
            {
                $lookup:
                {
                    from: 'guides',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'game_guide'
                }
            },
            { $unwind: '$game_guide' },
            { $match: { name: game } }
        ])

        if (!gameFound.length) {
            return res.status(404).json({
                msg: 'Game not found.'
            })
        }

        res.json(gameFound[0]);
    } catch (error) {
        return res.status(500).json({
            msg: 'Internal Server Error.'
        })
    }
}

module.exports = {
    getGuideByGame
}