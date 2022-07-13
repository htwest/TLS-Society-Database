//         ************************
//                  DEPENDENCIES
//         ************************

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();
const pool = require("./db");
const path = require("path");

const authRouter = require("./routers/authRouter");
const todoRouter = require("./routers/todoRouter");
const modRouter = require("./routers/modRouter");
const testRouter = require("./routers/testRouter");

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

// Session stuff
// START
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

// END

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

//         ************************
//                  ROUTES
//         ************************

// **** SESSION TESTING ****
app.use("/test", testRouter);

// **** AUTHENTICATION ****
app.use("/auth", authRouter);

// **** TODOS ****
app.use("/todo", todoRouter);

// **** MODERATION ****
<<<<<<< HEAD

// Approve a User
app.put("/users/:user_name", async (req, res) => {
  try {
    const { user_name } = req.params;

    const updateUser = await pool.query(
      "UPDATE users SET user_approved = $1 WHERE user_name = $2",
      [true, user_name]
    );
    res.send("User Approved");
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
});

// Delete a User
app.delete("/users/:user_name", async (req, res) => {
  try {
    const { user_name } = req.params;

    const deleteUser = await pool.query(
      "DELETE FROM users WHERE user_name = $1",
      [user_name],
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          console.log(result);
          res.send("User was Deleted");
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
=======
app.use("/user", modRouter);
>>>>>>> sessionV2

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
