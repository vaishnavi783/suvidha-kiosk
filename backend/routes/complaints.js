const express = require("express");
const router = express.Router();
const db = require("../db");

// Register Complaint
router.post("/register", (req, res) => {
  const { department, description } = req.body;

  if (!department || !description) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const complaintId = "CMP" + Math.floor(100000 + Math.random() * 900000);

  const sql =
    "INSERT INTO complaints (complaint_id, department, description, status) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [complaintId, department, description, "Pending"],
    err => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "DB Error" });
      }

      res.json({ complaintId });
    }
  );
});

module.exports = router;
