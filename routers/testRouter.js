const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

// ************
//   TEST DB CONNECTION
// ************
router.get("/", async (req, res) => {
  try {
    const test = await pool.query(`SELECT * FROM test`);
    res.send(test.rows);
  } catch (err) {
    res.send("Did Not Work");
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
    const firstInstitute = req.body.firstInstitute;
    const secondInstitue = req.body.secondInstitute;

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

      const newInstitutes = await pool.query(
        "INSERT INTO pending (id, institute, semester, poc_name, poc_email, app_open, app_deadline, description, user_id) VALUES (uuid_generate_V4(), $1, $2, $3, $4, $5, $6, $7, $8), (uuid_generate_V4(), $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *",
        [
          firstInstitute.institute,
          firstInstitute.semester,
          firstInstitute.poc_name,
          firstInstitute.poc_email,
          firstInstitute.app_open,
          firstInstitute.app_deadline,
          firstInstitute.description,
          newUserID,
          secondInstitue.institute,
          secondInstitue.semester,
          secondInstitue.poc_name,
          secondInstitue.poc_email,
          secondInstitue.app_open,
          secondInstitue.app_deadline,
          secondInstitue.description,
          newUserID,
        ]
      );

      res.send(newInstitutes);
    }
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

module.exports = router;
