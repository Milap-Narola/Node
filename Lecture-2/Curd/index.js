const express = require("express");
const dbConnect = require("./db");
const User = require("./userSchema");
const isValid = require("./Validation");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {

    let data = await User.find();
    res.send(data);

});

app.post("/", isValid, async (req, res) => {
    let data = await User.create(req.body);
    res.send(data);
});

app.delete("/:id", async (req, res) => {
    let { id } = req.params;
    let data = await User.findByIdAndDelete(id);
    res.send(data ? "User deleted" : "User not found");
});

app.patch("/:id", async (req, res) => {
    let { id } = req.params;
    let data = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.send(data);

});

dbConnect().then(() => {
    app.listen(8090, () => {
        console.log("Listening on port 8090");
    });
});
