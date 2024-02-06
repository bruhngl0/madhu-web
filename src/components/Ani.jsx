import React from 'react'
import "../styles/ani.scss"

const Ani = () => {
  return (
    <div>
      <div className='ani-head'>
        <img src = "animations.png" />
      </div>

      <div className="two-section-container">
            {/* Video Section */}
            <div className="video-section">
                <video controls>
                    <source src="Eureka.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Text Section */}
            <div className="text-section">
                <h2>Your Heading Here</h2>
                <p>
                    Your text goes here. This can be a description or any other relevant information that complements the video.
                </p>
            </div>
        </div>


        <div className="two-section-container-two">
          

            {/* Text Section */}
            <div className="text-section">
                <h2>Your Heading Here</h2>
                <p>
                    Your text goes here. This can be a description or any other relevant information that complements the video.
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
    </div>
  )
}

export default Ani
