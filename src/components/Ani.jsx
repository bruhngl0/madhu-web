import React from 'react'
import "../styles/ani.scss"

const Ani = () => {

 

  return (
    <section id = "animations">    
    <div className='ani-main'>
      <div className='ani-head'>
        <img src = "animations.png" />
      </div>

      <div className="two-section-container">
            {/* Video Section */}
            <div className="video-section">
         
                <video controls>
                    <source src="Eureka01.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Text Section */}
            <div className="text-section">
                <h2>Immersive Visual Storytelling</h2>
              
               <p>                
                 <ul>
                    <li>    Captivating character animations</li>
                    <li> Breathtaking environments </li>
                    <li>Engaging narratives that resonate with audiences</li>
                 </ul>
               </p>

               <h2>State Of Art Technology</h2>
               <p>  
               <ul>
                    <li>    Cutting-edge software and rendering techniques</li>
                    <li> Stunning visual fidelity and realism </li>
                    <li>Results that exceed expectations</li>
                 </ul>
               </p>

              
            </div>
        </div>


        <div className="two-section-container-two">
          

            {/* Text Section */}
            <div className="text-section">
            <h2>Seamless Integration and Collaboration</h2>
              
              <p>                
                <ul>
                   <li>   Open communication throughout the creative process</li>
                   <li> Client involvement every step of the way </li>
                   <li>Commitment to excellence and attention to detail</li>
                </ul>
              </p>

              <h2>Experience the Difference</h2>
              <p>  
              <ul>
                   <li>    Elevate your brand with exceptional 3D animations</li>
                   <li>Explore our portfolio to see our work firsthand </li>
                   <li>Contact us to discuss your project and bring your ideas to life</li>
                </ul>
              </p>

             
            </div>

              {/* Video Section */}
              <div className="video-section">
                <video controls>
                    <source src="Bignate.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

        <div className='ar-section'>
          <div className='logoar'>
          <img src= "solids.png" />
          </div>
          <div className='ar-content'>
            <div className='content-main'>
              <div>
              <img src = "nn.png" />
              </div>

           
            </div>
            
            <div class='ar-content-two'>
              <div className='ar-container-one'>
    <div>
        <img src="al.png" />
    </div>
    <div>
        <p>Augmented reality revolutionizes furniture shopping by offering immersive online experiences, allowing customers to visualize products in their spaces before purchase.</p>
    </div>
    </div>
    

    <div className='ar-container-one'>
    <div >
        <img src="dv.png" />
    </div>
    <div>
        <p>Virtual reality (VR) technology immerses users in interactive, computer-generated environments, offering experiences ranging from gaming and education to training and therapeutic applications across various industries.</p>
    </div>
    </div>

    <div className='ar-container-one'>
    <div>
        <img src="pops.png" />
    </div>
    <div>
        <p>AR in real estate enhances property viewing by overlaying digital information on physical spaces, while AR GPS aids navigation with augmented directions.</p>
    </div>
    </div>
</div>


          </div>
        </div>
    </div>
    </section>

  )
}

export default Ani
