const data = require('../data/data');

class offerController {
    //todo сделать фильтр выводимых обьектов в зависимости от агрументов

    async getOffers(request, response) {
        let { limit } = request.query;
        if (limit) {
            return response.json(data.slice(0, parseInt(limit)))
        }
        return response.json(data)

    }
}

module.exports = new offerController();