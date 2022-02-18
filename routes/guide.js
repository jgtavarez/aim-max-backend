const { Router } = require('express');
const { getGuideById } = require('../controllers/guide');

// API path: /api/guide
const router = Router()

router.get('/:game', getGuideById)

module.exports = router;