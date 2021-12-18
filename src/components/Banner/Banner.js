import React from "react";
import Typical from "react-typical";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="profile-container bg-new">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://www.facebook.com/Ashley.Alam.33/">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
              <a href="#">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Ashfika Lira </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front End Specialist",
                    1000,
                    "Full stack Developer ",
                    1000,
                    "Mern stack Developer",
                    1000,
                    "Cross Platform Developer",
                    1000,
                    "React/React Native",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
			I am creative and tech-savvy. I am efficient, can meet deadlines and quickly create content. I am a passionate full-stack web developer with 10+ hands-on projects experience.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
			<a href="https://drive.google.com/u/0/uc?id=1oncmniilVwx0RuxtlV4AC52RzC-kl13r&export=download" type="button" className="btn btnDwnResume me-2 mb-2 mb-md-0 highlighted-btn"> Download Resume
                        </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}