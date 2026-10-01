const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello! CI/CD Pipeline is working successfully.");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        message: "Application is running"
    });
});

module.exports = app;