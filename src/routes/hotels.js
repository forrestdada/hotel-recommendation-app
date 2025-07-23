const express = require('express');
const router = express.Router();
const HotelsController = require('../controllers/hotelsController');

const hotelsController = new HotelsController();

router.get('/recommendations', (req, res) => {
    const keyword = req.query.keyword;
    hotelsController.getRecommendedHotels(keyword)
        .then(hotels => res.json(hotels))
        .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;