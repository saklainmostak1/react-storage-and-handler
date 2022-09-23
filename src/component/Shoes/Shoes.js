import React from 'react';
import { add, multiplay } from '../../utilities/Calculate';

const Shoes = () => {
    const fast = 13
    const second = 11
    const result = multiplay(fast, second)

    const sum = add(fast, second)
    return (
        <div>
            <h3>This Shoes Compo</h3>
            <p>Result: {result} and Total: {sum}</p>
        </div>
    );
};

export default Shoes;