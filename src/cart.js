import Productdetail from "./productdetail"
import {AiOutlineClose} from "react-icons/ai"
import { Link } from "react-router-dom"
import "./cart.css"
const Cart=({cart,setCart})=>{
    const increment=(p)=>{
        const exist=cart.find((x)=>{
            return x.id===p.id
        })
        setCart(cart.map((eachitem)=>{
            return eachitem.id===p.id ? {...exist,qty:exist.qty+1} : eachitem
        }))

    }
    const decrement=(p)=>{
        const exist=cart.find((x)=>{
            return x.id===p.id
        })
        setCart(cart.map((eachitem)=>{
            return eachitem.id===p.id ? {...exist,qty:exist.qty-1}:eachitem
        }))
    }
    const remove=(product)=>{
        const exist=cart.find((x)=>{
            return x.id===product.id
        })
        if (exist.qty>0){
        setCart(cart.filter((x)=>{
            return x.id!==product.id

        }))
    }
    }
    const Totalprice= cart.reduce((price,item)=>price+item.qty*item.price,0)
    return(
        <div className="cartcontainer">
            {
                cart.length === 0 && 
                <div className="emptycart">
                    <h2 className="empty">cart is empty</h2>
                    <Link to ="/product" className="shpn">shop now</Link>
                </div>
            }
            <div className="contant">
                {
                    cart.map((eachitem)=>{
                        return(
                            <div className="cart_item" key={eachitem.id}>
                                <div className="img_box">
                                    <img src={eachitem.Img} alt={eachitem.Title}></img>
                                </div>
                                <div className="detail">
                                    <h4>{eachitem.Cat}</h4>
                                    <h3>{eachitem.Title}</h3>
                                    <p>price :{eachitem.Price}</p>
                                    <div className="qty">
                                        <button onClick={()=>increment(eachitem)}className="plus">+</button>
                                        <input></input>
                                        <button onClick={()=>decrement(eachitem)}className="minus">-</button>


                                        <h4>sub total:${eachitem.Price*eachitem.qty}</h4>

                                    </div>
                                    <button onClick={()=>remove(eachitem)}><AiOutlineClose/></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <h2 className="total price">${Totalprice}</h2>
            
        </div>
        
    )
}
export default Cart