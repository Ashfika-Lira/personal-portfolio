import React from 'react';
import './Footer.css';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {

    const resumeUrl = 'https://drive.google.com/file/d/1kkbPd9e6V8r4iie3qgQkCKEVd40luOmF/view?usp=sharing'


    return (
        <div className="">
            <footer className="mt-5 bg-dark">
                <div className="footer-top ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="address">
                                    <h3 className="text-uppercase fw-bold text-white">Ashfika Alam Lira</h3>
                                    <p className="mb-4 mt-4">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />Konapara, Jatrabari, Dhaka-1362, Bangladesh.
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPhoneAlt} /> +8801864978892
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} /> ashleyalam33@gmail.com
                                    </p>

                                </div>
                            </div>

                            <div className="col-lg-2 col-sm-6 footer-menus">
                                <h4 className="text-uppercase fw-bold">Search Me</h4>
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/ahsfika-lira-800229217/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                                    <li><a href="https://github.com/Ashfika-Lira" target="_blank" rel="noreferrer">GitHub</a></li>
                                    <li><a href="https://www.facebook.com/Ashley.Alam.33/" target="_blank" rel="noreferrer">Facebook</a></li>
                                </ul>

                            </div>

                            <div className="col-lg-3 col-sm-6 footer-menus">
                                <h4 className="text-uppercase fw-bold">Site Map</h4>
                                <ul>
                                    <li><HashLink as={HashLink} to="/projects">My Projects</HashLink></li>
                                    <li><a href={resumeUrl} target="_blank" rel="noreferrer">Online Resume</a></li>
                                    <li><HashLink as={HashLink} to="/blogs">Blog</HashLink></li>
                                    <li><HashLink as={HashLink} to="/about">About Me</HashLink></li>
                                    <li><HashLink as={HashLink} to="/contact">Contact Me</HashLink></li>
                                </ul>

                            </div>

                            <div className="col-lg-4 col-sm-6 newsletter">
                                <h4 className="text-uppercase fw-bold">Social Links</h4>

                                <div className="social-links mt-3">
                                    <a href="https://www.linkedin.com/in/ahsfika-lira-800229217/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href="https://github.com/Ashfika-Lira" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://www.facebook.com/Ashley.Alam.33/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;