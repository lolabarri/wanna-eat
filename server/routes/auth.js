const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

let loginPromise = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, e => (e ? reject(e) : resolve(user)));
  });
};

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    if (!theUser) return res.status(401).json(failureDetails);
    loginPromise(req, theUser)
      .then(() => res.status(200).json(req.user))
      .catch(e => res.status(500).json({ message: e.message }));
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  if (name === "" || email === "" || password === "") {
    res.json({ message: "Indicate name, email and password" });
    return;
  }

  User.findOne({ email }, "email", (err, user) => {
    if (user !== null) {
      res.json({ message: "The email already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashPass,
      points: 0,
      cup: false,
      nextDay: true
    });

    newUser
      .save()
      .then(user => loginPromise(req, user))
      .then(user => {
        res.json({ user });
      })
      .catch(err => {
        res.json({ message: "Something went wrong" });
      });
  });
});

router.get("/currentuser", (req, res) => {
  const { user } = req;
  if (user) {
    res.json({ succes: "OK", user });
  } else {
    res.status(401).json({ succes: "NO USER LOGGED IN" });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ succes: "OK" });
});


// Buscar todos los usuarios para el ranking
router.get("/allUsers", (req, res) => {
  User.find({}, null, {sort: '-points'}, (err, users) => {
    if (err) {
      console.log("error query");
    } else {
      res.json({users: users});
    }
  })
});

module.exports = router;
