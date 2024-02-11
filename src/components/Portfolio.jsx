import React from 'react'
import "../styles/portfolio.scss"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

  return (
       <>
       <div className='port-main'>   
       <img src = "mno.png" />
       </div> 
    
       
      
       <Slider {...settings} className='one'>
        <img src = "./PortFilo/1.jpg"/>
        <img src = "./PortFilo/2.jpg"/>
   
        <img src = "./PortFilo/4.jpg"/>
        <img src = "./PortFilo/5.jpg"/>
        <img src = "./PortFilo/6.jpg"/>
        <img src = "./PortFilo/7.jpg"/>
        <img src = "./PortFilo/18.jpg"/>
        <img src = "./PortFilo/9.jpg"/>
     
        <img src = "./PortFilo/11.jpg"/>
        <img src = "./PortFilo/12.jpg"/>
        <img src = "./PortFilo/20.jpg"/>
        </Slider>

        <Slider {...settings} className='two'>
      
        <img src = "./PortFilo/14.jpg"/>
        <img src = "./PortFilo/15.jpg"/>
        <img src = "./PortFilo/3.jpg"/>
        <img src = "./PortFilo/17.jpg"/>
        <img src = "./PortFilo/10.jpg"/>
        <img src = "./PortFilo/19.jpg"/>
        <img src = "./PortFilo/8.jpg"/>
        <img src = "./PortFilo/21.jpg"/>
        <img src = "./PortFilo/23.jpg" alt = "la"/>
      
       
        </Slider>
       
       
       
       

       
       </>

 
  )
}

export default Portfolio
