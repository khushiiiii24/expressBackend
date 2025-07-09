import express from "express";
const app = express();
const port = 4000;

let data = [
  { id: 1, name: "dog" },
  { id: 2, name: "cat" },
  { id: 3, name: "elephant" },
  { id: 4, name: "giraff" },
];
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello to my first API");
});
app.post("/", (req, res) => {
  res.send(data);
});

app.post("/name/add", (req, res) => {
  const newName = req.body;
  data.push(newName);
  res.send(data);
});

app.put("/name/update/:id", (req, res) => {
  let { id } = req.params;
  id = Number(id);

  const newData = data.map((obj) => {
    return obj.id === id ? { ...obj, ...req.body } : obj;
  });
  res.send(newData);
});

app.delete("/name/delete/:id", (req, res) => {
  let { id } = req.params;
  id = Number(id);

  data = data.filter((obj) => obj.id !== id);
  res.send(data);
});
app.listen(port, () => {
  console.log("Server is started " + port);
});
