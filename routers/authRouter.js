const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const passport = require("passport");

// ************
//   LOG IN
// ************
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log("LOGIN PASSPORT AUTHENTICATION ERROR [STAGE 1]:");
      console.log(err);
    }
    if (!user) {
      // If User Is not Found
      res.sendStatus(401);
    } else {
      // If User Is Found
      req.logIn(user, (err) => {
        if (err) {
          console.log("LOGIN PASSPORT AUTHENTICATION ERROR [STAGE 2]:");
          console.log(err);
        } else {
          // Send User Data
          res.send(req.user);
        }
      });
    }
  })(req, res, next);
});

// ************
//   LOG OUT
// ************

router.post("/logout", (req, res, next) => {
  if (req.user) {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.send("logged out");
    });
  }
});

// ************
//   SIGN UP
// ************
router.post("/register", async (req, res) => {
  try {
    //  Password Hash
    const hashedPassword = await bcrypt.hash(req.body.userData.password, 10);

    // Data
    const userData = req.body.userData;
    const instituteData = req.body.institute;

    // Check if Username is Taken
    const userCheck = await pool.query(
      `SELECT * FROM users WHERE username = $1`,
      [userData.username]
    );

    if (userCheck.rows.length > 0) {
      res.send("User Name Already Taken");
    } else {
      // Add User to DB
      const newUser = await pool.query(
        "INSERT INTO users (id, username, f_name, l_name, email, password, approved, mod) VALUES(uuid_generate_V4(), $1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [
          userData.username,
          userData.f_name,
          userData.l_name,
          userData.email,
          hashedPassword,
          false,
          false,
        ]
      );
      // Retrivew New User Id
      const newUserID = newUser.rows[0].id;
      // Add Institute Data to DB
      const newInstitutes = await pool.query(
        "INSERT INTO pending (id, name, semester, position, type, poc_name, poc_email, app_open, app_deadline, description, user_id) VALUES (uuid_generate_V4(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
        [
          instituteData.name,
          instituteData.semester,
          instituteData.position,
          instituteData.type,
          instituteData.poc_name,
          instituteData.poc_email,
          instituteData.app_open,
          instituteData.app_deadline,
          instituteData.description,
          newUserID,
        ]
      );
      // Send Back Response
      res.send(newInstitutes);
    }
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

// ************
//   GET USER
// ************
router.get("/user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
