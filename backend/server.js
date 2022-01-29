const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { dbConnect } = require("./config/dbConnect");
const { route } = require("./routes/todoroute");

const app = express();
dbConnect();
app.use(express.json());
app.use("/api", route);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listening on port ${PORT}!`));
