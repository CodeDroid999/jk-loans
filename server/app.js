const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const loanRoutes = require("./routes/loanRoutes");
app.use(bodyParser.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/loans", loanRoutes);
app.get("/", (req, res) => res.send(""));

mongoose
  .connect("mongodb+srv://airtaska:ZPMemx7R0JX11QV7@jkloans.l5l3cst.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
