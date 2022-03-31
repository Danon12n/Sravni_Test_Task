const Router = require('express');
const router = new Router();
const offerRouter = require('./offerRouter');

router.use('/offer', offerRouter);

module.exports = router;