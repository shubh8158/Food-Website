import express from "express"
import cors  from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import "dotenv/config"
import orderRouter from "./routes/orderRoute.js"


// App config
const app=express()
const port=process.env.PORT || 8080;

// middlewares
app.use(express.json())
app.use(cors());

// DB Connection
connectDB();

// Api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter);

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})

