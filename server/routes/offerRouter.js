const Router = require('express');
const router = new Router();
const offerController = require('../controllers/offerController');

router.get('/', offerController.getOffers);
router.get('/login/', offerController.getOfferById); //todo сделать вызов функции по агрументу

module.exports = router;