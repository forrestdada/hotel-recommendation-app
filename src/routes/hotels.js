const express = require("express");
const router = express.Router();
const db = require("../db/mysql.js");

router.get("/recommendations", (req, res) => {
  const keyword = req.query.keyword || "";
  db.all(
    "SELECT name, city, address, stars, phone FROM hotels WHERE name LIKE ?",
    [`%${keyword}%`],
    (err, rows) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error" });
      }
      res.json(rows);
    }
  );
});

module.exports = router;
