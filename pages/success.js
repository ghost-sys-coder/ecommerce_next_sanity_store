import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { runFireworks } from '../lib/utils';
import { useStateContext } from "../context/StateContext.js";


const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    console.log(setCartItems)
    
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, [])

  return (
    <div className='success-wrapper'>
        <div className="success">
            <p className="icon">
                <BsBagCheckFill />
            </p>
              <h2>Thank you for your order</h2>
              <p className="email-msg">Check your email inbox for the receipt details</p>
              <p className="decription">
                  If you have inquiries or questions, please email: 
                  <a href="mailto:ecommercedock@gmail.com" className="email">
                      ecommercedock@gmail.com
                  </a>
              </p>
              <Link href={'/'}>
                  <button type='button' width='300px' className='btn'>
                      Continue Shopping
                  </button>
              </Link>
        </div>
    </div>
  )
}

export default Success;