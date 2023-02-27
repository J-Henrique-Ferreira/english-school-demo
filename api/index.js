const express = require("express");
const routes = require("./routes");

const app = express();
routes(app);

const PORT = 3333;

app.listen(PORT, () => {
  console.log("server running on PORT -> 3333");
});
