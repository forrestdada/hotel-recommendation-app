class HotelsController {
    constructor(db) {
        this.db = db;
    }

    getRecommendedHotels(req, res) {
        const keyword = req.query.keyword;
        const query = 'SELECT * FROM hotels WHERE name LIKE ?';
        const values = [`%${keyword}%`];

        this.db.query(query, values, (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Database query failed' });
            }
            res.json(results);
        });
    }
}

module.exports = HotelsController;