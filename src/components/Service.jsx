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
     <p className=" services-four">Elevate your digital presence with our Augmented Reality (AR), Virtual Reality (VR), Interactive ArchViz, and 3D Visuals services. Our team specializes in creating captivating experiences that seamlessly blend the boundaries between the real and virtual worlds. Explore new dimensions of creativity and innovation with us.</p>
    </div>

    <div className="services-five">
     <div className=" services-six">
       <TbAugmentedReality className='services-seven' /> 
       <p className="services-eight">AR Odyssey</p>
       <p>Our immersive AR solutions redefine how users interact with reality, turning everyday moments into extraordinary adventures. Experience the future today.</p>
     </div>
     <div className=" services-six">
       < PiVirtualReality className='services-seven' /> 
       <p className="services-eight">VR Visions </p>
       <p> VR Visions offer immersive adventures that defy the boundaries of reality. Journey to  realms and discover boundless possibilities beyond imagination.</p>
     </div>
     <div className=" services-six">
       <TbBrandThreejs className='services-seven' /> 
       <p className="services-eight">Interactive Archviz</p>
       <p> Walk through your dream spaces, interact with designs, and make informed decisions in a dynamic 3D environment. Experience architecture like never before.</p>
     </div>
     <div className=" services-six">
       <BiLogoBlender className='services-seven' /> 
       <p className="services-eight">3D Visualization</p>
       <p>Unlock the art of 3D Visualization. We bring ideas to life, crafting captivating visual narratives and dynamic showcases.</p>
     </div>
    </div>
    
   </section>
  )
}

export default Service