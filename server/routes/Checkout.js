const express = require('express');
const { Service } = require('../models/service');
const serviceRouter = express.Router();


serviceRouter.get('/checkout/:slug', async (req, res) => {
    const { slug } = req.params;
    try {
        const service = await Service.findOne({slug});
        if (!service)
            throw new Error("Service Not Found");
        res.json(service);
    } catch (err) {
        res.status(404).json(err)
    }
});

module.exports = serviceRouter;