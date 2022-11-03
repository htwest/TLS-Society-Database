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
const Redis = require("ioredis");
const RedisStore = require("connect-redis")(session);

const app = express();
const pool = require("./db");
const path = require("path");

const authRouter = require("./routers/authRouter");
const testRouter = require("./routers/testRouter");
const modRouter = require("./routers/modRouter");
const dbRouter = require("./routers/dbRouter");

//         ************************
//                  ENV
//         ************************

const PORT = process.env.PORT || 3001;

//         ************************
//                  MIDDLEWARE
//         ************************

const redisClient = new Redis();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    store: new RedisStore({ client: redisClient }),
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

//         ************************
//                  ROUTES
//         ************************

// **** AUTHENTICATION ****
app.use("/api/auth", authRouter);

// **** DB ****
app.use("/api/db", dbRouter);

// **** MODERATION ****
app.use("/api/mod", modRouter);

// **** TEST ****
app.use("/api/test", testRouter);

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
