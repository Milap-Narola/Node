const express = require("express");
const app = express();
const cors = require("cors");
const todoRoutes = require("./routes/todo.route");


app.use(cors()); 
app.use(express.json());
app.use(express.static("public")); 


app.use("/todos", todoRoutes);

app.listen(8090, () => {
  console.log("Listening on port 8090");
});