import React from 'react';
import '../styles/About.scss';
import profileImage from '../assets/images/profile.png';

const About = () => {
    return (
        <section id="about" className="About">
            <div className="wrapper">
                <div className="profile">
                    <img src={profileImage} alt="profile" />
                </div>
                <div className="content">
                    <div>
                        <h2>about me</h2>
                        <p>
                            안녕하세요
                        </p>

                    </div>
                    
                    <div>
                        <h2>
                            contact details
                        </h2>
                        <p>
                            장진영
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;