
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const Endpoint = require("./controllers/RBAC/Endpoint");
const Permission = require("./controllers/RBAC/Permission");
const Role = require("./controllers/RBAC/Role");

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT;


app.use("/endpoint", Endpoint);
app.use("/permission", Permission);
app.use("/role", Role);

async function connectDatabase(){
    mongoose.connect(process.env.MONGO_URL);
}

connectDatabase().then(function(){
    app.listen(PORT, () => {
        console.log("listening on port: ", PORT);
    })
});