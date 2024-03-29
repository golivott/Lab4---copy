const express = require('express');
const Joi = require('joi');

const db = require('../DBConnect.js');

const openListRouter = express.Router();

// Get all lists
openListRouter.get('', (req, res) => {
    db.query("SELECT * FROM playlists WHERE public=1;", (err, data) => {
        if (err) {
            res.status(500).json(err);
        }
        else if (data.length === 0) {
            res.status(404).json("No Lists Found");
        }
        else {
            res.json(data);
        }
    });
});

module.exports = openListRouter;