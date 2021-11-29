import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {


    const resumeUrl = 'https://drive.google.com/file/d/1kkbPd9e6V8r4iie3qgQkCKEVd40luOmF/view?usp=sharing'

    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-4">
                <div class="container text-uppercase">
                    <Link to="/home" className="navbar-brand fw-bold cool-link">Ashfika Lira</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav  ms-auto">

                            <li class="nav-item">
                                <Link to={'/projects'} className="nav-link cool-link">
                                     My Projects

                                </Link>
                            </li>

                            <li class="nav-item">
                                <a className="nav-link cool-link" rel="noreferrer" href={resumeUrl} target="_blank">Resume</a>
                            </li>

                            <li class="nav-item">
                                <Link to="/about" class="nav-link cool-link" aria-current="page">
                                    About Me
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link cool-link" aria-current="page">
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;