import React, { useState } from "react";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('#home');  // Default to home

    const handleClick = (event) => {
        event.preventDefault();  // Prevent default anchor behavior for smooth scrolling
        const link = event.target.getAttribute('href');
        setActiveLink(link);
        // Smooth scroll to section (optional, using native JS)
        const target = document.querySelector(link);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="mb-2">
                <nav className="navbar navbar-expand-lg navbarr mb-2">
                    <div className="container-fluid">
                        <a className="navbar-brand ml-2 mee" href="#home" style={{ color: 'white' }}>
                            𝓝. 𝓔𝓶𝓶𝓪𝓷𝓾𝓮𝓵
                        </a>
                        <button
                            className="navbar-toggler bg-info"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ms-2 ${activeLink === '#home' ? 'active' : ''}`}
                                        href="#home"
                                        onClick={handleClick}
                                        style={{ color: activeLink === '#home' ? 'cyan' : 'white' }}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item ms-2">
                                    <a
                                        className={`nav-link ${activeLink === '#myworks' ? 'active' : ''}`}
                                        href="#myworks"
                                        onClick={handleClick}
                                        style={{ color: activeLink === '#myworks' ? 'cyan' : 'white' }}
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li className="nav-item ms-2">
                                    <a
                                        className={`nav-link ${activeLink === '#projects' ? 'active' : ''}`}
                                        href="#projects"
                                        onClick={handleClick}
                                        style={{ color: activeLink === '#projects' ? 'cyan' : 'white' }}
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li className="nav-item ms-2">
                                    <a
                                        className={`nav-link ${activeLink === '#contact' ? 'active' : ''}`}
                                        href="#contact"
                                        onClick={handleClick}
                                        style={{ color: activeLink === '#contact' ? 'cyan' : 'white' }}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid aboutt text-center">
                    <h1 className="namee mt-5">NWANKWO EMMANUEL</h1>
                    <p>
                        <span className="mee1">FULLSTACK &nbsp; PYTHON &nbsp; WEB &nbsp; DEVELOPER</span> <br />
                    </p>
                    <a href="/Emma_Resume.pdf" className="btn btn-warning btn-center mt-2" download>
                        Download Resume
                    </a>
                    <p>
                        <span className="typed" data></span>
                    </p>
                    <a className="btn btn-center" href="#projects">
                        <i className="fa fa-arrow-down gradient p-2 arrow"></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;