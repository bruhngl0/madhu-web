import React from 'react';
import '../styles/hero.scss'
const Hero = () => {
 

  return (
  <>  
  <div className='main-hero'>
  <div className='hero'>
  <div className='hero-one'>
    <img src = "mindslogo.png" />
    
  </div>
  <p className='hero-text'>Beyond the Bounds of the Ordinary</p>
  </div>

  <div className='lower-hero'>
    <div className='imgone'>    <img src= "heroimg.png"/> <img src= "yellow.png"/> </div>

   <div className='para'> <img src="color.png" alt='aav' ></img> </div>
   <div className='imgtwo'>    <img src= "inverted.png"/> <img src= "heroimg2.png"/> </div>
  </div>
  </div>
  </>

  );
};

export default Hero;
