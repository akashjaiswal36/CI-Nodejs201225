const router = require('express').Router();
const mysql = require('mysql2');

// DB connection using env vars from Kubernetes
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
});

db.connect(err => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

// POST /save
router.post('/', (req, res) => {
  const name = req.body.name;

  if (!name) {
    return res.status(400).send("Name is required");
  }

  db.query(
    "INSERT INTO users (name) VALUES (?)",
    [name],
    err => {
      if (err) {
        console.error("❌ DB insert error:", err);
        return res.status(500).send("Database error");
      }
      res.send("✅ Data saved to database");
    }
  );
});

module.exports = router;
