import React from "react";
import profil from "../assets/Woman icon.png"

const About = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card p-3">
            <div className="text-center">
              <img
                src={profil}
                width={300}
                className="rounded-circle"
                alt="a"
              />
            </div>
            <div className="text-center">
              <span className="bg-success p-1 px-4 rounded text-white">
                Fullstack Developer
              </span>
              <h5 className="mt-2 mb-0">Ayse Ugurlu</h5>
              
              <div className="px-4 mt-1">
                <p className="fonts">
                 I'm a full-stack developer with a passion for building scalable and efficient software solutions. With a
                </p>
              </div>
              <ul className="social-list text-success">
                <li>
                  <i className="fa-brands fa-facebook" />
                </li>
                <li>
                  <i className="fa-brands fa-dribbble" />
                </li>
                <li>
                  <i className="fa-brands fa-instagram" />
                </li>
                <li>
                  <i className="fa-brands fa-linkedin" />
                </li>
                <li>
                  <i className="fa-brands fa-google" />
                </li>
              </ul>
              <div className="buttons">
                <button className="btn btn-outline-primary px-4">
                  <a
                    className="text-decoration-none text-black "
                    href="https://github.com/ayseugurlu"
                    target="true">
                    Message
                  </a>
                </button>
                <button className="btn btn-success px-4 ms-3">
                  <a
                    className="text-decoration-none text-white"
                    href="https://github.com/ayseugurlu"
                    target="true">
                    Contact
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
