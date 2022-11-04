const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express();
app.use(express.json())

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to port ${port}`))

app.get("/", (req, res) => {
  res.send("Redirect to /xyz")
})