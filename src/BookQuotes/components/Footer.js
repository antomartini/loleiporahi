import React from "react"
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <a href="https://www.twitter.com/antoomartini"><FaTwitter className="socialMedia" /></a>
            <a href="https://www.instragram.com/antoomartini"><FaInstagram className="socialMedia" /></a>
            <a href="https://www.linkedin.com/in/maría-antonella-martini"><FaLinkedin className="socialMedia" /></a>
            <a href="https://github.com/antomartini"><FaGithub className="socialMedia" /></a>
            <a href="loleiporahienunlibro@gmail.com"><FaMailBulk className="socialMedia" /></a>
        </footer>
    )
}

export default Footer