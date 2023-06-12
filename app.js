import express from 'express';
import cors from 'cors';
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  cors({
    credentials: true,
    origin: 'https://a5--fastidious-toffee-e721ad.netlify.app', 
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

// Handle CORS preflight requests
app.options("*", cors());

app.listen(process.env.PORT || 4000);


