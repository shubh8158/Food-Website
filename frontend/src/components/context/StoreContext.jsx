import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const StoreContext=createContext(null)

export const StoreContextProvider=(props)=>{

    const [cartItems,setCartItems]=useState({});
    const url="http://localhost:8080";
    const [token,setToken]=useState("");
    // For getting data from db
    const[food_list,setFoodList]=useState([]);


    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            // Create a new entry for our food-item
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            // If entry is there then add it with previous
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item);
                totalAmount+= itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    // Function for fetching food list from Db
    const fetchFoodList=async()=>{
        const response=await axios.get(url+"/api/food/list");
        setFoodList(response.data.data);
    }

    useEffect(()=>{
        
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue={
        food_list,cartItems,setCartItems,addToCart,removeFromCart,getTotalCartAmount,url,token,setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}