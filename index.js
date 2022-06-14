const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const pool = require("./db");
const path = require("path");

const testUsers = require("./testUsers");

// ************
// ENV
// ************

const PORT = process.env.PORT || 5000;

// ************
// MIDDLEWARE
// ************

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

// ************
// ROUTES
// ************

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

app.get("/users", (req, res) => {
  res.json(testUsers);
});

app.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(salt);
    console.log(hashedPassword);
    const user = {
      name: req.body.name,
      password: req.body.password,
    };
    testUsers.push(user);
    res.status(201).send();
  } catch (err) {
    console.log(err);
  }
});

// **** CATCH ALL ****

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// ************
// SERVER
// ************

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
