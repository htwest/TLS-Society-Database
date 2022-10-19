const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

// ************
//   GET USER BY ID
// ************
router.get("/applicant/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query(
      "SELECT * FROM users WHERE id = $1",
      [id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.send(result.rows[0].f_name + " " + result.rows[0].l_name);
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// ************
//   APPROVE USER
// ************
router.put("/approve/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const updateUser = await pool.query(
      "UPDATE users SET approved = $1 WHERE username = $2",
      [true, username],
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      }
    );
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
});

// ************
//   DELETE USER
// ************
router.delete("/delete/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const deleteUser = await pool.query(
      "DELETE FROM users WHERE username = $1",
      [username],
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.send("User was Deleted");
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// ************************************
//   GET PENDING INTERNSHIPS
// ************************************
router.get("/pending", async (req, res) => {
  try {
    const pending = await pool.query("SELECT * FROM pending");
    res.send(pending.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// ************************************
//   UPDATE INTERNSHIP
// ************************************
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const info = req.body;

    const updateInternship = await pool.query(
      "UPDATE internships SET name = $1, semester = $2, position = $3, type = $4, poc_name = $5, poc_email = $6, app_open = $7, app_deadline = $8, description = $9 WHERE id = $10",
      [
        info.name,
        info.semester,
        info.position,
        info.type,
        info.poc_name,
        info.poc_email,
        info.app_open,
        info.app_deadline,
        info.description,
        id,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// ************************************
//   UPDATE PENDING NTERNSHIP
// ************************************
router.put("/pending/update:id", async (req, res) => {
  const { id } = req.params;
  try {
    const info = req.body;

    const updateInternship = await pool.query(
      "UPDATE pending SET name = $1, semester = $2, position = $3, type = $4, poc_name = $5, poc_email = $6, app_open = $7, app_deadline = $8, description = $9 WHERE id = $10",
      [
        info.name,
        info.semester,
        info.position,
        info.type,
        info.poc_name,
        info.poc_email,
        info.app_open,
        info.app_deadline,
        info.description,
        id,
      ],
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
