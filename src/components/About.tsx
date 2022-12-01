import React from "react";
import "../styles/About.scss";
import profileImage from "../assets/images/profile.png";
import Percent from "./Percent";

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
            <p>안녕하세요. 프론트엔드 개발자 장진영입니다.</p>
          </div>
          <div>
            <h2>used skills</h2>
            <div style={{ textIndent: 0 }}>
              <Percent title="ReactJs" percent={80} />
              <Percent title="ReactNative" percent={80} />
              <Percent title="Javascript" percent={90} />
              <Percent title="Typescript" percent={60} />
            </div>
          </div>
          <div>
            <h2>address</h2>
            <p>deveq@kakao.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
