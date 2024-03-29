import React from 'react';
import {AiFillInstagram, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 &copy; Beast Store All Rights Reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillFacebook />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer