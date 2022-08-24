const express = require('express');
const cors = require('cors');
const { createApp, deleteApp, printApps } = require('./queries.js')
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get("/api/apps", async (req, res) => {
    printApps(req, res)
});

app.post("/api/app", async (req, res) => {
    createApp(req, res)
});


app.delete("/api/app/:id", async (req, res) => {
    deleteApp(req, res)
});

app.listen(PORT, function (err) {
    if (err) {
        console.log("Error in server setup");
    }
    console.log("Server listening on Port", PORT);
});