const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

const { users } = require("./data");

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});


app.use(cors());


app.get("/api/users", (req, res) => {
    res.end(JSON.stringify(users));
});