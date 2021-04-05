const express = require("express");

// app config...
const app = express();
const port = process.env.PORT || 4000;

// middlewares.....
app.use(express.json());

const datas = [
  {
    name: "nithu",
    age: 20,
  },
  {
    name: "okok",
    age: 60,
  },
];

// routers....

app.get("/", (req, res) => {
  res.send("hi bor... ");
});

app.post("/api/test", (req, res) => {
  const data = {
    name: req.body.name,
    age: req.body.age,
  };
  datas.push(data);
  res.status(200).send(data);
});

// put.....

app.put("/api/test/put", (req, res) => {
  const data = {
    name: req.body.name,
    age: req.body.age,
  };
  datas.push(data);
  res.status(200).send(datas);
});
//Listener....
app.listen(port, () => console.log("port is listening right now!!s"));
