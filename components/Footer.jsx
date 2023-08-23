import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 EcommerceStore All right reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
      <p className='creator'>Made by:</p>
      <p className='application-owner'>Usama Khan</p>
      <p className='application-owner'>FullStack Developer</p>
    </div>
  )
}

export default Footer