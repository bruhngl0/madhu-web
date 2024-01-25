import React from 'react';
import '../styles/hero.scss'
const Hero = () => {
  const text = 'MINDS  - I';
  const items = [];

  for (let i = 0; i < 10; i++) {
    items.push(<div className="text" key={i}>{`${text}`}</div>);
  }

  return (
  <>  
  <div className='main-hero'>
  <div className='hero'>
  <div className='hero-one'>{items}</div>
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
