import React from 'react';
import {add }from '../../utilities/Calculate';

const Cosmetics = () => {
    const fast = 55;
    const second = 66
    const total = add(fast, second)
    return (
        <div>
            <h1>Welcome to my cosmetics</h1>
            <p>Total: {total}</p>
            
        </div>
    );
};

export default Cosmetics;