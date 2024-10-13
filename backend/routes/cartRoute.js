import express from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js";


const cartRouter=express.Router();
// For Add to cart
cartRouter.post("/add",authMiddleware, addToCart);
// For remove
cartRouter.post("/remove",authMiddleware, removeFromCart);
// For get data
cartRouter.post("/get",authMiddleware, getCart);


export default cartRouter;

