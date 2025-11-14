const express = require("express");
const jwt = require("jsonwebtoken");

const { auth, JWT_SECRET } = require("./auth");
const { UserModel, TodoModel } = require("./dbb");

const app = express();
app.use(express.json());

// Signup
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  await UserModel.create({
    name,
    email,
    password,
  });

  res.json({ message: "User registered successfully" });
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const response = await UserModel.findOne({ email, password });

  if (!response) {
    return res.status(400).json({ message: "Incorrect credentials" });
  }

  const token = jwt.sign({ id: response._id.toString() }, JWT_SECRET);

  res.json({ token });
});

// Create Todo (Protected)
app.post("/todo", auth, async (req, res) => {
  const { title } = req.body;

  await TodoModel.create({
    title,
    userId: req.userId,
  });

  res.json({ message: "Todo created" });
});

// Get Todos (Protected)
app.get("/todos", auth, async (req, res) => {
  const todos = await TodoModel.find({ userId: req.userId });

  res.json({ todos });
});

app.listen(3000);
