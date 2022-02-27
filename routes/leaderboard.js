const { Router } = require('express');
const { check } = require('express-validator');
const { postScore } = require('../controllers/leaderboard');
const { validateExercise } = require('../helpers/validate-database');
const { validateFields } = require('../middlewares/validate-fields');

// API path: /api/leaderboard
const router = Router()

router.post('/',
[
    check('exercise', 'exercise is required').not().isEmpty(),
    check('exercise').custom(validateExercise),
    check('username', 'username is required').not().isEmpty(),
    check('score', 'score is required').not().isEmpty(),
    check('score', 'score is not valid').isNumeric(),
    validateFields
],
postScore)

module.exports = router;