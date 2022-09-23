import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import {add }from '../../utilities/Calculate';

const Cosmetics = () => {
    const [cosmetics , setCosmetics] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(Response => Response.json())
        .then(data => setCosmetics(data))
    },[])
    return (
        <div>
            <h1>Welcome to my cosmetics</h1>
           
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id}
                cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;