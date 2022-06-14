const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: process.env.PG_USER,
  password: "",
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, // comes from Heroku Addon
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
};

// const pool = new Pool(
//   process.env.NODE_ENV === "production" ? proConfig : devConfig
// );

const pool = new Pool(devConfig);

module.exports = pool;
