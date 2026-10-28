import express from "express"
import cors from "cors"
import authRouter from "./routes/authRoutes.js";

const app=express();

app.use(express.json()); 
app.use(cors());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, resp) => {
  resp.send("LMS API is running");
});

app.use("/api/auth",authRouter);

export default app;