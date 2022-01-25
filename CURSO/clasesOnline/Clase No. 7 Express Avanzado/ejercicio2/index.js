const express = require("express");
const fs = require("fs");
const { Router } = express;
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class File {
  constructor() {
    this.filePath = "./files/products.txt";
  }
  async read() {
    try {
      const users = await fs.promises.readFile(this.filePath, "utf-8");
      return JSON.parse(users);
    } catch (err) {
      return [];
    }
  }
  async save(item) {
    try {
      const products = await this.read();
      const newProduct = {
        id: products.length + 1,
        ...item,
      };
      products.push(newProduct);
      await fs.promises.writeFile(
        this.filePath,
        JSON.stringify(products, null, 2)
      );
    } catch (err) {
      console.log("Something went wrong", err);
    }
  }
  async delete() {
    await fs.promises.unlink(this.filePath);
    console.log("Deleted");
  }
  async random() {
    const items = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
    const quantity = items.length;
    const item = { item: items[Math.floor(Math.random() * quantity)] };
    return item;
  }
}
const file = new File();

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

app.use("/static", express.static("public"));

const server = app.listen(PORT, () => {
  console.log(`Server listening on PORT ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error on Server ${error}`));
