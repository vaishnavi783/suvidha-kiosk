const express = require("express");
const { v4: uuidv4 } = require("uuid");
const db = require("../db");

const router = express.Router();

/* Register Complaint */
router.post("/register", (req, res) => {
  const { department, description } = req.body;

  if (!department || !description) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const complaintId = "CMP-" + uuidv4().slice(0, 8).toUpperCase();
  const status = "Pending";
  const createdAt = new Date().toISOString();

  db.run(
    `INSERT INTO complaints VALUES (?, ?, ?, ?, ?)`,
    [complaintId, department, description, status, createdAt],
    err => {
      if (err) {
        return res.status(500).json({ message: "Database error" });
      }
      res.json({
        message: "Complaint registered successfully",
        complaintId
      });
    }
  );
});

/* Track Complaint */
router.get("/status/:id", (req, res) => {
  db.get(
    `SELECT * FROM complaints WHERE id = ?`,
    [req.params.id],
    (err, row) => {
      if (!row) {
        return res.status(404).json({ message: "Complaint not found" });
      }
      res.json(row);
    }
  );
});

module.exports = router;
