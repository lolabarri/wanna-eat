const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Bet = require("../models/Bet");
const Results = require("../models/Results");

router.post("/points", next => {
  Results.findOne({}, {}, { sort: { updated_at: -1 } }, (error, results) => {
    if (error) {
      next(error);
    } else {
      let realResults = results.resultados.slice(0, -1);
      let matchday = results.matchday;

      Bet.find({ matchday: matchday }, (error, bets) => {
        if (error) {
          next(error);
        } else {
          let usersArr = [];
          bets.forEach(({ user }) => {
            usersArr.push(user);
          });
          let apuestasArr = [];
          bets.forEach(({ apuestas }) => {
            apuestasArr.push(apuestas);
          });
          let pointsArr = [];
          apuestasArr.forEach(e => {
            let length = Math.min(e.length, realResults.length);
            let correctResults = 0;
            for (var index = 0; index < length; index++) {
              if (e[index] == realResults[index]) {
                correctResults++;
              }
            }
            pointsArr.push(correctResults);
          });
          usersArr.forEach(e => {
            User.findById(e, (error, user) => {
              let j = usersArr.indexOf(e);
              let currentPoints = user.points;
              let newPoints = pointsArr[j];
              let totalPoints = currentPoints + newPoints;
              if (error) {
                next(error);
              } else {
                user.points = totalPoints;
                user.save();
              }
            });
          });
        }
      });
    }
  });
});

module.exports = router;
