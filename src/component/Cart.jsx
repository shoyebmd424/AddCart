import React, { useState } from 'react'
import "./Card.css"
function Cart(props) {
    const [val,setVal]=useState(props.data);
 
   const handleAdd=(i)=>{
    const a={name:val[i].name,price:val[i].price}
    val.push(a)
       const abc=[...val]
       setVal(abc)
   }
   
   
   const handleDelete=(i)=>{
       const deletVal=[...val]
       deletVal.splice(i,1)
       setVal(deletVal)  
   }
   console.log("After clicking data ",val)
  return (
    <>
      
        {val.map((data,i)=>{
            return(
                <div key={i} className="card">
                <div>
                    <h5>{data.name}</h5>
                  </div>
                  <div className="cart-btn">
                    <p>{data.price}</p>
                    <button  onClick={()=>handleAdd(i)} className="btn add-to-cart">Add to cart</button>
                    <button onClick={()=>handleDelete(i)} className=" btn remove-to-cart">Remove From cart</button>
                  </div>
                </div>
                
            )
        })}
    </>
  )
}

export default Cart
