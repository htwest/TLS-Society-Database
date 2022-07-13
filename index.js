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
    secret: process.env.SECRET,
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

// **** AUTHENTICATION ****
app.use("/auth", authRouter);

// **** TODOS ****
app.use("/todo", todoRouter);

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
