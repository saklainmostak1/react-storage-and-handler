import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic
    const addToCart = (id) =>{
        console.log('item added', id)
    } 
    const addToCartwithParam = () => addToCart(id)
    return (
        <div className='product'>
            <h1>Buy This: {name} </h1>
            <p>Only For: $ {price} </p>
            <p><small>It Has Id: {id}</small></p>
            <button onClick={addToCartwithParam}>Add to Cart</button> <br />
            {/* use this */}
            <button onClick={() => addToCart(id)}>Add to Cart short cut</button>
        </div>
    );
};

export default Cosmetic;