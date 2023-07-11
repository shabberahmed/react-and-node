import Express  from "express";
import Cors  from "cors";
import dotenv from "dotenv";
import connect from "./database/connenction.js";
import route from "./routes/studentRoute.js";
const app=Express()
app.use(Cors())
app.use(Express.json())
dotenv.config()
app.use("/api",route)
connect()
.then(() =>
    app.listen(9000,()=>console.log("server star"))
).catch((err) => {
    console.log(err)
});
