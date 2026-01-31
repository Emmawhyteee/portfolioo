import React from 'react';  

const Projects = () => {
  return (
    <>
      <div
        className="container project mt-0"
        style={{ backgroundColor: "#1A1C2B", color: "white" }}
        id="projects"
      >
        <h2 className="text-center">MY EXPERTISE</h2>
        <div className="row mx-1 expertise" data-aos="zoom-in-down">
          <div className="col-sm-10 col-md-4 g-2 bb">
            <div className="web">
              <div className="projectside">
                <h3>
                  <i className="fa fa-laptop fa-3x pt-2"></i>
                </h3>
                <h3 className="mt-3">
                  Software<div className="underlineeffect1"></div>
                  <br /> Development
                </h3>
              </div>
              
              <div className="box2">
                <p className="mt-2">
                  <span className="ent1"> &lt;h3&gt;</span> <br />
                  <div className="line"></div>
                  <span className="ent1">&lt;/h3&gt;</span>
                </p>
                
                <p className="mt-4">Experienced in both functional and
                  OOP: Python,Vanilla JavaScript,jquery.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-10 col-md-4 g-2 bb">
            <div className="web">
              <div className="projectside">
                <h3>
                  <i className="fa-brands fa-react fa-3x pt-2"></i>
                </h3>

                <h3 className="mt-3">
                  Frontend Dev<div className="underlineeffect2"></div>
                  <br /> React
                </h3>
              </div>

              <div className="box2">
                <p className="mt-2">
                  <span className="ent1"> &lt;h3&gt;</span> <br />
                  <div className="line"></div>
                  <span className="ent1">&lt;/h3&gt;</span>
                </p>

                <p className="mt-4">Passionate about UI/UX. Over 3 years of development
                  experience in HTML, CSS, JS, and Bootstrap Designing frameworks.</p>
              </div>   
              
            </div>
          </div>

          <div className="col-sm-10 col-md-4 g-2 bb">
            <div className="web">
              <div className="projectside">
                <h3>
                  <i className="fa-brands fa-python fa-3x pt-2"></i>
                </h3>
                <h3 className="mt-3">
                  Backend Dev<div className="underlineeffect3"></div>
                  <br /> Flask,Django
                </h3>
              </div>
              <div className="box2">
                <p className="mt-2">
                  <span className="ent1"> &lt;h3&gt;</span> <br />
                  <div className="line"></div>
                  <span className="ent1">&lt;/h3&gt;</span>
                </p>

                <p className="mt-4">
                  Implementing RESTful APIs, JSON, and HTTP requests, and building complex, scalable, and enterprise-level applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;