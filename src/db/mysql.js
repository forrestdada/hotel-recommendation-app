const sqlite3 = require("sqlite3").verbose();

// 连接本地数据库文件（如 hotel.db）
const db = new sqlite3.Database("./hotel.db", (err) => {
  if (err) {
    console.error("Error connecting to the SQLite database:", err);
    return;
  }
  console.log("Connected to the SQLite database.");
});

module.exports = db;
