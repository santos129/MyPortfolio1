import React from "react";
import "./About.css";
import image from "../../assets/Images/MyPhoto.jpg";
const About = () => {
  return (
    <>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={image} alt="Profile" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Hi, my name is <br /> <span class="name">Santosh Nepali</span>.<br />
              I'm passionate about web development and creating
                user-friendly, visually appealing websites. With a strong
                background in React.js and a love for crafting elegant user
                interfaces, I'm dedicated to delivering high-quality frontend
                solutions that engage and delight users.
                </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default About;
