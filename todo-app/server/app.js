const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}\nvia http://localhost:8080`);
});

// Servir les fichiers statiques de l'application React build
app.use(express.static("dist"));

const todos = [
  {
    id: 1,
    title: "Buy milk",
    completed: false,
  },
  {
    id: 2,
    title: "Buy eggs",
    completed: false,
  },
  {
    id: 3,
    title: "Buy bread",
    completed: false,
  },
];

app.get("/api/tasks", (req, res) => {
  res.send(todos);
});