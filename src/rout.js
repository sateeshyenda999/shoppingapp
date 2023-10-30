import React from "react"
import Home from "./home";
import {Routes,Route} from "react-router-dom"
import Product from "./product"
import Cart from "./cart"
const Rout=({product,setproduct,detail,view,close,setClose,cart,setCart,addtocart})=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home close={close} setClose={setClose} view={view} detail={detail} addtocart={addtocart}/>}/>
            <Route path="/product" element={<Product  addtocart ={addtocart} cart={cart} setCart={setCart} detail={detail}product={product} view={view} setproduct={setproduct} close={close} setClose={setClose}/>}></Route>
            <Route path="/cart" element={<Cart  cart={cart} setCart={setCart}/>}></Route>
        </Routes>
        </>
    )
}
export default Rout;