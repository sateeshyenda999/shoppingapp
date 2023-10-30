import React, { useState } from "react"
import{AiOutlineShoppingCart} from "react-icons/ai"
import{BsEye} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import Productdetail from "./productdetail"
import{AiOutlineCloseCircle} from "react-icons/ai"
import "./Product.css"

const Product=({product,setproduct,detail,view,close,setClose,addtocart})=>{
    
    const filterproduct=(product)=>{
        const update=Productdetail.filter((x)=>{
            return x.Cat===product
        })
        setproduct(update)

    }
    const Allproduct=()=>{
        setproduct(Productdetail)
    }
    return(
        <>{ close ?
        <div className="productdetail">
            <div className="container">
                <button  className="ion"onClick={()=>setClose(false)}><AiOutlineCloseCircle/></button>
                <div className="img_box">
                    {
                        detail.map((x)=>{
                            return(
                                <div className="productbox" key={x.id}>
                                    <div className="imgbox">
                                        <img src={x.Img} alt={x.Title}></img>
                                        <div className="detail">
                                            <h4>{x.Title}</h4>
                                            <h2>{x.Cat}</h2>
                                            <p> A Small screen every one loves</p>
                                            <h3>{x.Price}</h3>
                                            <button onClick={()=>addtocart(x)}>Add to Cart</button>
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
        
        <div className="products">
             <h3>#products</h3>
             <p>Home   Products</p>
            <div className="container">
                <div className="filter">
                    <div className="categories">
                        <h2>categories</h2>
                            <ul>
                                <li onClick={()=>Allproduct()}>Allproducts</li>
                                <li onClick={()=>filterproduct("Tablet")} >Tablet</li>
                                <li onClick={()=>filterproduct("Smart Watch")}>Smart Watch</li>
                                <li onClick={()=>filterproduct("Headphone")}>Head Phone</li>
                                <li onClick={()=>filterproduct("Camera")}>Camera</li>
                                <li onClick={()=>filterproduct("Gaming")}>Gaming</li>
                            </ul>             
                    </div>
                </div>
                <div className="productbox">
                    <div className="contant">
                        {
                            product.map((eachitem)=>{
                                return(
                                    <>
                                    <div className="box" key={eachitem.id}>
                                        <div className="img_box">
                                            <img src={eachitem.Img} alt={eachitem.Title}></img>
                                            <div className="icon">
                                               <li onClick={()=>addtocart(eachitem)}><AiOutlineShoppingCart/></li>
                                               <li onClick={()=>view(eachitem)}><BsEye/></li>
                                               <li><AiOutlineHeart/></li>
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <div>{eachitem.Cat}</div>
                                            <div>{eachitem.Title}</div>
                                            <div>{eachitem.Price}</div>
                                        </div>
                                    
                                        
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Product