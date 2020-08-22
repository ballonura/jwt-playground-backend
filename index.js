require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", require("./routes/index"));

const http = require("http");
const server = http.createServer(app);

server.listen(process.env.PORT || 5000);
