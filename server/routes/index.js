const Router = require('express');
const router = new Router();
const offerRouter = require('./offerRouter');

router.use('/offers', offerRouter);

module.exports = router;