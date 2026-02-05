const express = require("express");
const router = express.Router();

router.post("/pay", (req, res) => {
  const { service, amount } = req.body;

  if (!service || !amount) {
    return res.status(400).json({ message: "Invalid payment data" });
  }

  res.json({
    message: "Payment successful (demo)",
    transactionId: "TXN" + Math.floor(Math.random() * 1000000)
  });
});

module.exports = router;
