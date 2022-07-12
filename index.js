//         ************************
//                  DEPENDENCIES
//         ************************

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();
const pool = require("./db");
const path = require("path");

const authRouter = require("./routers/authRouter");
const todoRouter = require("./routers/todoRouter");
const modRouter = require("./routers/modRouter");

//         ************************
//                  ENV
//         ************************

const PORT = process.env.PORT || 5000;

//         ************************
//                  MIDDLEWARE
//         ************************

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());

<<<<<<< HEAD
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

=======
>>>>>>> sessionV2
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

//         ************************
//                  ROUTES
//         ************************

// **** AUTHENTICATION ****
app.use("/auth", authRouter);

<<<<<<< HEAD
// Create a New User
app.post("/signup", async (req, res) => {
  try {
    //  Password Hash
    const hashedPassword = await bcrypt.hash(req.body.user_password, 10);

    // Sign Up Info
    const name = req.body.user_name;
    const fname = req.body.user_fname;
    const lname = req.body.user_lname;
    const email = req.body.user_email;
    const password = hashedPassword;
    const approved = false;
    const mod = false;

    // Check if Username is Taken
    const userCheck = await pool.query(
      `SELECT * FROM users WHERE user_name = $1`,
      [name]
    );

    if (userCheck.rows.length > 0) {
      res.send("User Name Already Taken");
    } else {
      // Add User to DB
      const newUser = await pool.query(
        "INSERT INTO users (user_name, user_fname, user_lname, user_email, user_password, user_approved,  user_mod) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [name, fname, lname, email, password, approved, mod]
      );
      res.send("User Created");
    }
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

// Log In
// app.post("/userlogin", async (req, res) => {
//   const name = req.body.user_name;
//   const password = req.body.user_password;

//   const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [
//     name,
//   ]);

//   if (user.rows.length > 0) {
//     try {
//       if (await bcrypt.compare(password, user.rows[0].user_password)) {
//         res.send("Logged In");
//       } else {
//         res.send("Wrong Username/Password");
//       }
//     } catch (err) {
//       res.sendStatus(500);
//       console.log(err);
//     }
//   } else {
//     res.send("Not a user");
//   }
// });

app.post("/userlogin", async (req, res, next) => {
  const name = req.body.user_name;
  const password = req.body.user_password;

  passport.authenticate("local", (err, user, info) => {
    // console.log(user);
    // Coming back as "false";
    if (err) {
      console.log(err);
      res.send(err);
    }
    if (!user) {
      res.send(user);
    } else {
      req.login(user, (err) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send("Successfully Authenticated");
          console.log(req.user);
        }
      });
    }
  })(req, res, next);
});
=======
// **** TODOS ****
app.use("/todo", todoRouter);
>>>>>>> sessionV2

// **** MODERATION ****
app.use("/user", modRouter);

// **** CATCH ALL ****
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

//         ************************
//                  SERVER
//         ************************

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
