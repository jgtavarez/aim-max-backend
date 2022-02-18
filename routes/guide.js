const { Router } = require('express');
const { getGuideByGame } = require('../controllers/guide');

// API path: /api/guide
const router = Router()

router.get('/:game', getGuideByGame)

module.exports = router;