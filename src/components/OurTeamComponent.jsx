import React from 'react';
import '../styles/team.scss';

const OurTeamComponent = () => {
    return (
        <section id = "contacts">  
        <div className='team' >
        <img src = "cona.png" className='team-one' />
        </div>
            <div className="team-container">
            {/* Team Member 1 */}
            <div className="team-member">
                <img src="akhil.png" alt="Team Member 1" className="team-photo" />
                <div className="team-description">
                    <h3> AKHIL JAY</h3>
                    <p> Co-Founder</p>
                    <p>3D-Modelling & Texturing Specialist</p>
                    <a href="mailto:akhil@mindsi.in" className="footer-link">akhil@mindsi.in</a>
                </div>
            </div>

            {/* Team Member 2 */}
            <div className="team-member">
                <img src="madhu.png" alt="Team Member 2" className="team-photo" />
                <div className="team-description">
                    <h3>MADHU MJ</h3>
                    <p>Co-Founder</p>
                    
                    <p>3D-Modelling & Texturing Specialist</p>
                    <a href="mailto:madhujampala@mindsi.in" className="footer-link">madhujampala@mindsi.in</a>
                </div>
            </div>

            {/* Team Member 3 */}
            <div className="team-member">
                <img src="rahul.png" alt="Team Member 3" className="team-photo" />
                <div className="team-description">
                    <h3>RAHUL SHEREGUDEM </h3>
                    <p>Co-Founder</p>
                    <p>3D-Animator Specialist</p>
                    <a href="mailto:rahulsheregudem@mindsi.in" className="footer-link">rahulSheregudem@mindsi.in</a>
                </div>
            </div>
        </div>
        </section>

    );
};

export default OurTeamComponent;
