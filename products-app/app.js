require("dotenv").config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//indicar al backend desde donde puede admitir peticiones
const cors = require("cors");

//Connect mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/products-app", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then((x) => 
console.log(`Connected to mongo! database name: "${x.connections[0].name}"`)
)
.catch((err) => console.log("error connecting ", err));

const app = express();

app.use(
  cors({
   origin: ["http://localhost:3001"],
   credentials: true,
}))


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//more connections
const indexRouter = require("./routes/index"

);
const productsRouter = require("./routes/products");
const authRouter = require("./routes/auth")
app.use("/", indexRouter);
app.use("/", authRouter);
app.use("/products", productsRouter)


module.exports = app;
