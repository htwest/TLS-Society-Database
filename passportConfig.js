const pool = require("./db");
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

const strategy = async function (name, password, done) {
  const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [
    name,
  ]);
  if (user.rows.length > 0) {
    try {
      if (await bcrypt.compare(password, user.rows[0].user_password)) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    return done(null, false);
  }
};

module.exports = function (passport) {
  passport.use(new localStrategy(strategy));

  passport.serializeUser((user, cb) => {
    console.log(user);
    cb(null, user.user_id);
  });
  passport.deserializeUser(async (id, cb) => {
    const userId = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);
    console.log(userId);
    try {
      cb(null, userId);
    } catch (err) {
      console.log(err);
      cb(err, null);
    }
  });
};
