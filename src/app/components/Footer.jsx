import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin,  faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


// import Logo from "../img/logo.png";
import Lionel from "../img/lionel.jpg"

const Footer = () => {
    return (
        <footer >

            <div className="container">
                <div>
                    <img className="selfie" src={Lionel} alt="Hero illustration" />
                 

                </div>

                <div style={{ margin: '3px', }}>
                    <ul>
                        <li>
                            <a href="https://twitter.com/@mawulistephens">
                                <FontAwesomeIcon icon={faTwitter} /> Twitter
                            </a>
                        </li>
                        <li>
                            <a href="mailto:mawulistephens@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} /> Email
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook/mawulistephen">
                                <FontAwesomeIcon icon={faSquareFacebook} /> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/mawuli-stephen">
                                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                            </a>
                        </li>
                    </ul>

                </div>

                <div>
                    {/* <img src={Logo} alt="" /> */}
                    <span> Made with ♥️ and <b>React.js</b>.</span>
                    {/* <span> <b>React.js And Node.Js</b> </span> */}
                </div>
            </div>

        </footer>
    );
};


export default Footer