import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/users.mjs";
import mongoDB from "./config/mongoDB.mjs";
import initializeDb from "./config/mongoDB.mjs";
import session from "express-session";

//Defining top-level variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
initializeDb();

//Middlewares
const bodyParser = express.json;
app.use(bodyParser());

//API ROUTES
app.use(userRouter);


//Running the express server
app.listen(PORT, () => {
    console.log("Server started at " + PORT);
});

