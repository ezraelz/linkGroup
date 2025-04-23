import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faYoutube, faXTwitter, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './home.css';
import { icon } from '@fortawesome/fontawesome-svg-core';
import bg1 from '../assets/nobgblur.png';

const Home = () => {
    const links = [
        {link: 'https://web.facebook.com/esrael.zerihun.94', name: 'Facebook', icon: <FontAwesomeIcon icon={faFacebook} />},
        {link: 'https://github.com/ezraelz', name: 'Github', icon: <FontAwesomeIcon icon={faGithub} />},
        {link: 'https://www.linkedin.com/in/esrael-zerihun/', name: 'LinkedIn', icon: <FontAwesomeIcon icon={faLinkedin} />},
        {link: 'http://www.youtube.com/@esraelzerihun3671', name: 'Youtube', icon: <FontAwesomeIcon icon={faYoutube} />},
        {link: 'https://www.tiktok.com/@esraelzerihun', name: 'TikTok', icon: <FontAwesomeIcon icon={faTiktok} />},
        {link: 'https://x.com/Esra82237692', name: 'twitter', icon: <FontAwesomeIcon icon={faXTwitter} />},
        {link: 'https://www.instagram.com/esrael_zerihun/', name: 'Instagram', icon: <FontAwesomeIcon icon={faInstagram} />},
    ]
    return (
        <div className='home'>
            <div className="header">
                <img src={bg1} alt="" />
                <h1>Link Group</h1>
            </div>
            <div className="link-group">
                {links.map((link)=>(
                    <p><a href={link.link}>{link.icon} {link.name}</a></p>
                ))}
            </div>

        </div>
    );
};

export default Home;