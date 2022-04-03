const Router = require('express');
const router = new Router();
const offerController = require('../controllers/offerController');

router.get('', offerController.getOffers);

module.exports = router;