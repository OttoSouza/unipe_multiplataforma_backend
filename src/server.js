const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
  })
);

app.use(routes);

app.listen(process.env.PORT || 5000);
