import bodyParser from "body-parser";
import express from "express";
import eventRoutes from "./routes/events.js";

const app = express();

app.use(bodyParser.json());

app.use(eventRoutes);
console.log("Listening on port", process.env.PORT);

app.listen(process.env.PORT);
