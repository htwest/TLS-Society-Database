const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const pool = require("./db");
const path = require("path");

//         ************************
//                  ENV
//         ************************

const PORT = process.env.PORT || 5000;

//         ************************
//                  MIDDLEWARE
//         ************************

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

//         ************************
//                  ROUTES
//         ************************

// **** TODOS ****

// Create Todo
app.post("/todos", async (req, res) => {
  try {
    const description = req.body.descripiton;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get All Todo's
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.log(err);
  }
});

// Get a Todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.log(error);
  }
});

// Update a Todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.json("Todo was Updated");
  } catch (err) {
    console.error(err.message);
  }
});

// Delete a Todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json("Todo was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

// **** AUTHENTICATION ****

// Create a New User
app.post("/signup", async (req, res) => {
  try {
    //  Password Hash
    const hashedPassword = await bcrypt.hash(req.body.user_password, 10);

    // Sing Up Info
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
      res.sendStatus(200);
    }
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

// Log In
app.post("/login", async (req, res) => {
  const name = req.body.user_name;
  const password = req.body.user_password;

  // Check if User Exists
  const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [
    name,
  ]);

  if (user.rows.length === 0) {
    return res.status(400).send("Cannnot find user");
  }

  // Compare Passwords
  const hashedPassword = user.rows[0].user_password;
  try {
    if (await bcrypt.compare(password, hashedPassword)) {
      res.send("Logged In");
    } else {
      res.send("Not Allowed");
    }
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

// **** MODERATION ****

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
      [user_name]
    );
    res.send("User was Deleted");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

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
