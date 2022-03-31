const data = require('../data/data');

class offerController {
    //todo сделать фильтр выводимых обьектов в зависимости от агрументов
    async getOffers(request, response) {
        response.json({ info: data[0] });
    }

    async getOfferById(request, response) {
        const query = request.query;
        response.json(query)
    }
}

module.exports = new offerController();