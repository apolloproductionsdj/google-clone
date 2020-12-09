import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';





function About() {
    return (
        <div className="about">
            <div className="about_header">
                <div className="about__headerLeft">
                    <Link to="/">
                        <img
                            className="aboutPage__logo"
                            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                            alt=""
                        />
                    </Link>
                </div>

                <div className="about__headerRight">
                    <div className="aboutPage__option">
                        <div className="searchPage__option">
                            <Link to="/about">About</Link>
                        </div>
                        <div className="searchPage__option">
                            <Link to="/products">Products</Link>
                        </div>
                        <div className="searchPage__option">
                            <Link to="/commitments">Commitments</Link>
                        </div>
                        <div className="searchPage__option">
                            <Link to="/stories">Stories</Link>
                        </div>
                        <div className="searchPage__option">
                            <Link to="/keyword">The Keyword</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_body module-anchor-statement">
                <h1>Our mission is to <span class="blue">organize</span> the world’s <span class="red">information</span> and make it <span class="green">universally accessible</span> and <span class="yellow">useful</span>.</h1>
            </div>
        </div>
    )
}

export default About
