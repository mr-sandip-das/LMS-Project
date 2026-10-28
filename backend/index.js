import app from "./app.js";
import { config } from "dotenv";

config()

app.listen(process.env.PORT,()=>{
 console.log(`Server is Start on ${process.env.PORT} PORT`);
});