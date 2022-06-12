const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//importing the routes
const songRouter = require("./api/songs");

//getting my local env file
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());
app.use("/api", songRouter);

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true}, () => console.log("Successfully connected to database"));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
