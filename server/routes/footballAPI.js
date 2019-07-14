require("dotenv").config();

const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/matches/:matchday", (req, res) => {
  axios(`https://api.football-data.org/v2/competitions/PD/matches?matchday=${req.params.matchday}`,
    {headers: {
      "X-Auth-Token": `${process.env.API_TOKEN}`
    }}
  ).then(r => res.json({data:r.data.matches}))
  .catch(error => {
    console.log(error)
      res.json(500,error);
    });
});

module.exports = router;