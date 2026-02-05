const express = require("express");
const router = express.Router();

// Mock Payment API
router.post("/pay", (req, res) => {
  const transactionId =
    "TXN" + Math.floor(100000 + Math.random() * 900000);

  res.json({
    status: "SUCCESS",
    transactionId
  });
});

module.exports = router;
