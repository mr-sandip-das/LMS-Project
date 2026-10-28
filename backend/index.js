import app from "./app.js";
import { config } from "dotenv";
import connectDB from "./config/db.js";

config();
connectDB();

app.listen(process.env.PORT,()=>{
 console.log(`Server is Start on ${process.env.PORT} PORT`);
});