const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Required for handling JSON data

// Import routes
const booksRoutes = require("./routes/books");
const usersRoutes = require("./routes/users");

app.use("/books", booksRoutes);
app.use("/users", usersRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Bookstore API!");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
