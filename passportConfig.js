const bcrypt = require("bcrypt");
const pool = require("./db");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  // Define Local Strategy
  passport.use(
    new localStrategy(async (username, password, done) => {
      // Look up user in DB by username
      try {
        const user = await pool.query(
          "SELECT * FROM users WHERE user_name = $1",
          [username]
        );
        // If User is Found
        if (user.rows.length > 0) {
          // Compare hashed password in DB to submitted password
          bcrypt.compare(
            password,
            user.rows[0].user_password,
            (err, result) => {
              if (err) {
                // If Error
                console.log("BCRYPT COMPARE ERROR");
                console.log(err);
              }
              if (result) {
                // If Password Matches
                return done(null, user.rows[0]);
              } else {
                // If Password does not match
                return done(null, false);
              }
            }
          );
        } else {
          // If no User is Found
          return done(null, false);
        }
      } catch (err) {
        consle.log("LOCAL STRATEGY ERROR:");
        console.log(err);
        return done(null, false);
      }
    })
  );

  // Serialize User
  passport.serializeUser((user, cb) => {
    // Stores a cookie inside browser with user_id
    cb(null, user.user_id);
  });

  // Deserialize User
  passport.deserializeUser(async (id, cb) => {
    // Find user in DB with user_id matching cookie id
    try {
      const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
        id,
      ]);
      // If user was found
      if (user.rows.length > 0) {
        cb(null, user.rows[0]);
      } else {
        // If User was not found
        cb("User not Found", null);
      }
    } catch (err) {
      console.log("DESERIALIZE USER ERROR:");
      console.log(err);
    }
  });
};
