import express from "express";
import file from "./controller.js";
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/items", async (req, res) => {
  const items = await file.read();
  res.json({ items });
});
app.post("/items", async (req, res) => {
  const data = req.body;
  await file.save(data);
  res.json(data);
});
app.get("/item-random", async (req, res) => {
  await file.random().then((list) => {
    res.json(list);
  });
});
const server = app.listen(PORT, () => {
  console.log(`Server listening on PORT ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error on Server ${error}`));
