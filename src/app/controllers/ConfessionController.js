const Confession = require('../models/Confession');

exports.index = async (req, res, next) => {
    const { page = 0 } = req.query;
    const { results } = await Confession.query().orderBy('id', 'desc').page(page, 10);
    return res.json(results)
}

exports.store = async (req, res, next) => {
    try {
        const confession = await Confession.query().insert({
            ...req.body
        })

        return res.json(await Confession.query().findById(confession.id));
    } catch(e) {
        res.status(400).json(e)
    }
}
