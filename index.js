const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const pool = require("./db");
const path = require("path");

const testUsers = require("./testUsers");

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

// Get All Users
app.get("/users", (req, res) => {
  res.json(testUsers);
});

// Create a New User
app.post("/signup", async (req, res) => {
  // **
  // CHECK IF USER ALREADY EXISTS HERE
  // **

  try {
    const hashedPassword = await bcrypt.hash(req.body.user_password, 10);
    // console.log(salt);
    // console.log(hashedPassword);

    const name = req.body.user_name;
    const email = req.body.user_email;
    const password = hashedPassword;
    const approved = false;
    const mod = false;

    const newTodo = await pool.query(
      "INSERT INTO users (user_name,  user_email, user_password, user_approved,  user_mod) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, email, password, approved, mod]
    );
    res.sendStatus(200);
  } catch (err) {
    status.send(500);
    console.log(err);
  }
});

// Log In
app.post("/users/login", async (req, res) => {
  const user = testUsers.find((user) => (user.name = req.body.name));
  if (user === null) {
    return res.status(400).send("Cannnot find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
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

// Approve a user (update user_approved)

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
