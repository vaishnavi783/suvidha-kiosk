const express = require("express");
const cors = require("cors");
require("dotenv").config();

const complaintsRoutes = require("./routes/complaints");
const paymentsRoutes = require("./routes/payments");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/complaints", complaintsRoutes);
app.use("/api/payments", paymentsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SUVIDHA Backend running on port ${PORT}`);
});
