const express = require("express");
const app = express();
const port = 8080;
const cartsRoutes = require("./routes/carts.routes");
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use("/", cartsRoutes);

app.listen(port, () =>
  console.log(`Hell yeah.  This is running on port: ${port}`)
);

// app.get("/", (req, res) => res.send("hello"));
