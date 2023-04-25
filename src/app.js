import express from "express";
import cors from "cors";
import {MongoClient} from "mongodb";
import router from "./routes/index.router.js";



const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


app.listen(5000, console.log("Listening PORT 5000"));




