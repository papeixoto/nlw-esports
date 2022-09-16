import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  res.send([
    { id: 1, title: "banana" },
    { id: 2, title: "banana" },
    { id: 3, title: "banana" },
  ]);
});

app.listen(3333);
