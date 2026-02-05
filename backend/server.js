const express = require("express");
const cors = require("cors");

const complaintRoutes = require("./routes/complaints");
const paymentRoutes = require("./routes/payments");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/complaints", complaintRoutes);
app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => {
  res.send("SUVIDHA Backend Running");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
