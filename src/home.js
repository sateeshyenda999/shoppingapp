import React, { useState } from "react";
import { Link } from "react-router-dom";
import {BsArrowRight} from "react-icons/bs"
import {FiTruck} from "react-icons/fi"
import {BsCurrencyDollar} from "react-icons/bs"
import {CiPercent} from "react-icons/ci"
import {BiHeadphone} from "react-icons/bi"
import {AiOutlineShoppingCart,AiOutlineCloseCircle} from "react-icons/ai"
import {BsEye} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"

import HomeProduct from "./Homeproduct"
import "./home.css"
 const  Home=({detail,close,setClose,view,addtocart})=>{
     const [homeproduct,sethomeproduct]=useState(HomeProduct)
     return(
         <>
         { close ?
        <div className="productdetail">
            <div className="container">
                <button  className="ion"onClick={()=>setClose(false)}><AiOutlineCloseCircle/></button>
                <div className="img_box">
                    {
                        detail.map((x)=>{
                            return(
                                <div className="productbox">
                                    <div className="imgbox">
                                        <img src={x.Img} alt={x.Title}></img>
                                        <div className="detail">
                                            <h4>{x.Title}</h4>
                                            <h2>{x.Cat}</h2>
                                            <p> A aSmall screen every one loves</p>
                                            <h3>{x.price}</h3>
                                            <button>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div>:null
       
                }
         
         <div className="topbanner">
             <div className="container">
                 <div className="detail">
                     <h2>The Best Book Collection 2023</h2>
                     <Link to ="/product" className="link">shop now <BsArrowRight/></Link>   
                 </div>
                 <div className="imgbox">
                     <img src="./img/slider-img.png" alt="img"/>
                 </div>
             </div>
         </div>
         <div className="product_type">
             <div className="container">
                 <div className="box">
                     <div className="image">
                         <img src="./img/Mobile Phone.png" alt="mobilephone"></img>
                     </div>
                     <div className="detail">
                         <p>23 products</p>
                     </div>
                 </div>
                 <div className="box">
                     <div className="image">
                         <img src="./img/headphone.png" alt="headphone"></img>
                     </div>
                     <div className="detail">
                         <p>23 products</p>
                     </div>
                 </div>
                 <div className="box">
                     <div className="image">
                         <img src="./img/tp6.png" alt="cpu"></img>
                     </div>
                     <div className="detail">
                         <p>23 products</p>
                     </div>
                 </div>
                 <div className="box">
                     <div className="image">
                         <img src="./img/smart watch.png" alt="cpu"></img>
                     </div>
                     <div className="detail">
                         <p>23 products</p>
                     </div>
                 </div>
             </div>
         </div>
         <div className="about">
             <div className="container">
                 <div className="box">
                     <div className="icon">
                         <FiTruck/>

                     </div>
                     <div className="detail">
                         <h3>free shipping</h3>
                         <p>order above 1000</p>
                     </div>
                 </div>
                 <div className="box">
                     <div className="icon">
                         <BsCurrencyDollar/>
                     </div>
                     <div className="detail">
                         <h3>return and refvund</h3>
                         <p>money back gurantee</p>
                     </div>
                 </div>
                 <div className="box">
                     <div className="icon">
                         <CiPercent/>
                        
                     </div>
                     <div className="detail">
                         <h3>on member discount</h3>
                         <p>on every order</p>
                     </div>
                 </div>
                 <div className="box">
                     <div className="icon">
                        <BiHeadphone/>
                     </div>
                     <div className="detail">
                         <h3>customer support</h3>
                         <p>every time call support</p>
                     </div>
                 </div>
             </div>
         </div>
         <div className="product">
             <h2>Top Products</h2>
             <div className="container">
                 {
                     homeproduct.map((eachitem)=>{
                         return (
                            
                             <div className="box" key={eachitem.id}>
                                 <div className="imgbox">
                                     <img src={eachitem.Img} alt={eachitem.Title}></img>
                                     <div className="icon">
                                         <li onClick={()=>addtocart(eachitem)}><AiOutlineShoppingCart/></li>
                                         <li onClick={()=>view(eachitem)}><BsEye/></li>
                                         <li><AiOutlineHeart/></li>

                                     </div>
                                 </div>
                                 <div className="detail">
                                     <p>{eachitem.Cat}</p>
                                     <h3>{eachitem.Title}</h3>
                                     <h3>${eachitem.Price}</h3>
                                </div>
                             </div>
                             
                         )
                     })
                 }


                 </div>
             </div>
             <div className="banner">
                 <div className="adv">
                     <div className="detail">
                         <h4>latest technology added</h4>
                         <h3>Apple ipad 10.2 9 th generation</h3>
                        <p> <BsCurrencyDollar/>986</p>
                        <Link to="/product" className="link">shop now<BsArrowRight/></Link>
                     </div>
                     <div className="img_box">
                         <img src="./img/slider-img.png" alt="">

                         </img>
                     </div>
                 </div>
             </div>
         </>
     )
 }
 export default Home