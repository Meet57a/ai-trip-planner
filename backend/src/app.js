const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json())


app.use('/api', require('./routes'));
app.use("*", (req, res) => {
    res.status(404).send({ message: "Not Foundddddddddddd" });
})


module.exports = app;