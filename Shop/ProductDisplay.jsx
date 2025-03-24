import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const desc = "";


const ProductDisplay = ({item}) => {
    // console.log(item)
    const {name, id, price, seller, ratingsCount, img}= item;
    const [prequantity, setQuantity] = useState("");
    // const [coupon, setCoupon] = useState("");
    // const [size, setSize] = useState("Select size");
    // const [color, setColor] = useState("Select color");

    const handleDecrease = () => {
        if(prequantity > 1){
            setQuantity(prequantity - 1)
        }

    }
    const handleIncrease = () => {

            setQuantity(prequantity + 1)
        
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: prequantity,
        }
        // console.log(product)
        const exitingCart = JSON.parse(localStorage.getItem("cart"))  || [];
        const exitingProductIndex = exitingCart.findIndex((item)=> item.id===id);
        if(exitingProductIndex !== -1){
            exitingCart[exitingProductIndex],quantity += prequantity;
        }else{
            exitingCart.push(product);
        }

        // update local storage
        localStorage.setItem("cart",JSON.stringify(exitingCart));

        //reset form fields
        setQuantity(1);
    }
     
  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span> {ratingsCount} </span>
            </p>
            <h4>${price}</h4>
            <h5>{seller}</h5>
            <p>{desc}</p>
        </div>
        {/* quantity */}
        <div>
            <form onSubmit={handlesubmit}> 
                <div className='cart-plus-minus'>
                    <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                    <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' 
                    value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
                    <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                </div>
                
                {/* btn section */}
                <button type='submit' className='lab-btn'>
                    <span>Add to cart</span>
                </button>
                <Link to="/cart-page" className='lab-btn bg-primary'>
                    <span>Check Out</span>
                </Link>
            </form>
        </div>
    </div>
  )
}
            
export default ProductDisplay