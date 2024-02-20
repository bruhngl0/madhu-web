import React from 'react'
import { TbAugmentedReality } from 'react-icons/tb'
import { PiVirtualReality } from 'react-icons/pi'
import  { TbBrandThreejs } from 'react-icons/tb'
import { CgWebsite } from 'react-icons/cg'
import { BiLogoBlender } from 'react-icons/bi'
import '../styles/services.scss'
const Service = () => {
  return (
    <section id= "services" className="services">
   
    <div>
     <p className="services-two">Our Services</p>
     <p className=" services-three ">Immersive Experiences</p>
     <p className=" services-four">Enhance your online footprint with our 3D modeling, texturing, animation, motion graphics, AR, and VR services. Our dedicated team excels in crafting immersive experiences that transcend conventional boundaries, offering a seamless fusion of reality and virtuality. Discover limitless creativity and innovation with our comprehensive suite of services.</p>
    </div>

    <div className="services-five">
     <div className=" services-six">
       <TbAugmentedReality className='services-seven' /> 
       <p className="services-eight">3D Modeling & Texturing</p>
       <p>Specializing in high-quality 3D modeling services, we meticulously craft detailed models tailored to your unique vision and project requirements.</p>
     </div>
     <div className=" services-six">
       < TbBrandThreejs  className='services-seven' /> 
       <p className="services-eight">3D Animations </p>
       <p> Unlocking boundless creativity through captivating 3D animations, we breathe life into stories, characters, and concepts with stunning visual fidelity and immersive storytelling techniques.</p>
     </div>
     <div className=" services-six">
       <PiVirtualReality className='services-seven' /> 
       <p className="services-eight">AR/VR Odessy</p>
       <p> Our immersive AR solutions redefine how users interact with reality, turning everyday moments into extraordinary adventures. Experience the future today.</p>
     </div>
     <div className=" services-six">
       <BiLogoBlender className='services-seven' /> 
       <p className="services-eight">3D Product Design/Advertisement.</p>
       <p>Crafting compelling 3D product designs and advertisements, we bring your brand to life with precision, creativity, and attention to detail.</p>
     </div>
    </div>
    
   </section>
  )
}

export default Service