const express = require("express");
const router = express.Router();
const axios = require("axios");
const Bpi = require("../../models/Bpi");


const coindeskApiURL = 'http://api.coindesk.com/v1/bpi/historical/close.json'


/* GET route to Bitcoin data */
router.get('/', (req, res, next) => {
    axios
        .get(`${coindeskApiURL}`)
        .then(bitcoinData => {
            console.log({
                bitcoinData
            })
            // res.render('coindesk/coindesk-data', {
            //     bitcoinData
            // });
        })
        .catch(err => next(err));
});

module.exports = router;