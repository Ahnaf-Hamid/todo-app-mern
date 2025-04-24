import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import "dotenv/config";


const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Ápi working')
})

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    app.listen(port,()=>{
        console.log(`db connected and port running on localhost:${port}`);
    })
}).catch((err)=>{
    console.log(err);
})

