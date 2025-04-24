import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routes/userRoute.js";

const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());


// routes
app.use('/api/user',userRouter)

// DB connection
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
})

// port listen
app.listen(port, () => {
  console.log(`port running on localhost:${port}`);
});
