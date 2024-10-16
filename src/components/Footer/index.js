import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import './index.css'

const Footer = () => (
    <div>
        <div className="sm-footer-container">
            <div className="sm-footer-hr-line"></div>
            <div className="sm-footer-logo-container"> 
                <img src="https://res.cloudinary.com/davbz0f7y/image/upload/v1729005032/Matrix%20Labs%20Assignment/krv6tv7qhmxumx6qbwks.png" alt="logo"/>
                <h1 className="sm-footer-company-name"> EthAi </h1>
            </div>

            <div className="sm-footer-social-links">
                    <button className="sm-social-btn"> <FaTelegramPlane /> </button>
                    <button className="sm-social-btn"> <FaInstagram /> </button>
                    <button className="sm-social-btn"> <FaXTwitter /> </button>
                    <button className="sm-social-btn"> <FaFacebook /> </button>
                    <button className="sm-social-btn"> <FaDiscord /> </button>
            </div>
        </div>

        <div className="lg-footer-container">
            
        </div>
    </div>
)

export default Footer