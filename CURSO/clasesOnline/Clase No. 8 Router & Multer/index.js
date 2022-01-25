const express = require("express");
const { Router } = express;
const PORT = 8080;

const app = express();
const router = Router();

router.get("/recurso", (req, res) => {
  res.send("get ok");
});

router.post("/recurso", (req, res) => {
  res.send("post ok");
});

app.use("/api", router);

app.listen(8080);
