import React from 'react'
import './Hero.css'

import AnchorLink from 'react-anchor-link-smooth-scroll';
import name from '../public/name.jpg'
export const Hero = () => {
  return (
    <div className="hero" id='home'>
      <img src={name} alt="" className='name' />
      <h1>
        <span>I'm Sheldon Matthew</span>, frontend developer in Uganda
      </h1>
      <p>
        I am a frontend developer from Uganda, Kampala with 2years of experince
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}
export default Hero