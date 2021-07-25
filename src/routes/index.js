const express = require('express');

const auth           = require('./auth');
const TestController = require('../app/controllers/TestController');
const ConfessionController = require('../app/controllers/ConfessionController');
const AuthMiddleware = require('../app/middleware/AuthMiddleware');

const router = express.Router();

// router.use(auth);

router.get('/test', AuthMiddleware, TestController.index);

router.get('/confessions', ConfessionController.index);
router.post('/confessions', ConfessionController.store);
router.post('/confessions/:id', ConfessionController.reply);
module.exports = router;
