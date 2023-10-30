import React, { useEffect } from "react"; 
import Nav from "./nav"
import Home from "./home"
import Footer from "./footer";
import Rout from "./rout";
import { BrowserRouter } from "react-router-dom";
import Productdetail from "./productdetail"
import { useState } from "react";
const App=()=>{
  const [cart,setCart]=useState([])
  const [close,setClose]=useState(false)
  const [detail,setdetail] =useState([])
  const [product,setproduct]=useState(Productdetail)
  const searchbtn=(product)=>{
    const change= Productdetail.filter((x)=>{
      return x.Cat===product
    })

    setproduct(change)

  }
  const view=(product)=>{
    setdetail([{...product}])
    setClose(true)


  }
 
  const addtocart=(p)=>{
    const exist=cart.find((x)=>{
      return x.id ===p.id
    })
    
   if(exist){
     alert("product is already added to cart")
   }
   else
   setCart([...cart,{...p,qty:1}])
   alert("product has been added to the cart")
    
  }
  
  return(
    <div>
      <BrowserRouter>
      <Nav searchbtn={searchbtn}/>
      <Rout addtocart={addtocart} product={product} cart={cart} setCart={setCart}setproduct={setproduct} detail={detail} view={view} close={close} setClose={setClose}/>
      
      <Footer/>
      
      </BrowserRouter>
      
    </div>
  )
}
export default App