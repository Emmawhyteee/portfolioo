import React from 'react';  // React import is already there
import contactMeImage from '../assets2/p4-removebg-preview.png';  // Import images from src/assets2
import latestImage from '../assets2/latest.png';

const Contact = () => {
    return (
        <div className="container-fluid my-5" style={{ backgroundColor: '#1A1C2B', color: 'white' }}>
            <div className='my-5 text-center mx-auto'>
                <h1>PROFESSIONAL<br />EXPERIENCE</h1>
            </div>
            {/* accordion part start */}
            <div className='container accordionwidth' style={{ width: 600 }}>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Web Developer @ BT-Brandings Nigeria &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2024 - present
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show accordd"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p>Developed the UI and UX eco-system for an e-commerce website using ReactJs component structures with bootstrap css.</p>
                                <p><a className='btn btn-primary'>JS</a><a className='btn btn-primary me-1 ms-1'>React</a><a className='btn btn-primary'>css</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Fullstack web Developer intern @ Moat Academy &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; - 2024
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p>Developed the UI and UX eco-system and designed the Database for an e-commerce website using python(Flask) framework</p>
                                <p><a className='btn btn-primary'>python</a><a className='btn btn-primary me-1 ms-1'>j-Query</a><a className='btn btn-primary'>css</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                <p>Web Developer intern @Echub Africa &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 2023 - 2024</p>
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                {/* Add content here if needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* accordion part end */}
            <div className="row justify-content-center align-items-center" id='contact'>
                <div className="col-md-6">
                    <div className="speech-bubble mt-4 ml-3">
                        <img src={contactMeImage} alt="contactme?" />  {/* Use imported variable */}
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={latestImage} alt="" className='mb-2' />  {/* Use imported variable */}
                    <div className="social-icons">
                        {/* social icon */}
                        <a href="mailto:emmatexiii@gmail.com">
                            <i className="fa-regular fa-envelope fa-2x"></i>
                        </a>
                        &nbsp;
                        <a href="https://x.com/Emmawhyteee?t=P0QMyAuhAXtZ9vA3hViQSw&s=09">
                            <i className="fa-brands fa-twitter px-1 fa-2x"></i>
                        </a>
                        &nbsp;
                        <a href="http://www.linkedin.com/in/emmanuel-ebuka-nwankwo-32227a120">
                            <i className="fa-brands fa-linkedin fa-2x"></i>
                        </a>
                        <div className="author-name mb-2">𝓝𝔀𝓪𝓷𝓴𝔀𝓸 𝓔𝓶𝓶𝓪𝓷𝓾𝓮𝓵</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;