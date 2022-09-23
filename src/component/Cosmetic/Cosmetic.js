import React from 'react';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic
    return (
        <div>
            <h1>Buy This: {name} </h1>
            <p>Only For: $ {price} </p>

            <p><small>It Has Id: {id}</small></p>
        </div>
    );
};

export default Cosmetic;