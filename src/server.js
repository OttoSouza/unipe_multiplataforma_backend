const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
app.use(express.json());

app.use(cors('*'));
app.use(allowCro)
// app.use((require, response, next) => {
//   response.header("Access-Control-Allow-Origin", "http://localhost:3000/");
//   response.header("Access-Control-Allow-Origin", "GET, PUT, POST, DELETE");
//   app.use(cors());
//   next();
// });

app.use(routes);

app.listen(process.env.PORT || 5000);
