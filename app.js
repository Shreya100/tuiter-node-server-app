import express from 'express';
import cors from 'cors';
import session from "express-session";
import mongoose from "mongoose";

const CONNECTION_STRING = "mongodb+srv://shreya21reddy:shreya3196@cluster0.9fbxaoj.mongodb.net/?retryWrites=true&w=majority"
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter'
// const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.set("trust proxy", 1);

app.use(
  cors({
    credentials: true,
    origin: '*', 
  })
);

app.use(
  session({
    secret: "any string",
    resave: false,
    proxy: true,
    saveUninitialized: false,
    cookie: {
      sameSite: "none",
      secure: true,
    },
  })
);


app.use(express.json());

import HelloController from "./controllers/hello-controller.js"
import UserController from "./users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";
app.use(express.json());
TuitsController(app)
HelloController(app)
UserController(app)
AuthController(app);

app.listen(process.env.PORT || 4000);


