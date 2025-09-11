 import "./Footer.css";
 import { Link } from "react-scroll";
 import { BiLogoInstagram,BiLogoFacebookCircle,BiLogoLinkedin } from 'react-icons/bi';
export function Footer()
{
    return(
        <>
        <footer className="footer">
           <div className="address">
           <h2>Khafsa Ijaz</h2>
           <div className="content">
            <a href="#"><h3>Phone:0321****</h3></a>
           <a href="#"><h3>Email:Khafsaijaz@gmail.com</h3></a>
           </div>
           
           </div>
            <div className="links">
                <h2>Quick Links</h2>
              <div className="content"><ul>
                    <li><Link to="about" smooth="true" duration={500}>About</Link></li>
                    <li><Link to="services" smooth="true" duration={500}>Service</Link></li>
                    <li><Link to="portfolio" smooth="true" duration={500}>portfolio</Link></li>
                    <li><Link to="contact" smooth="true" duration={500}>Contact</Link></li>
                    <li><Link to="privacy" smooth="true" duration={500}>Privacy</Link></li>
                </ul></div>
             
           </div>
            <div className="follow" >
                <h2>Follow US</h2>
                <div className="social-links ">
                     <a><BiLogoInstagram /></a>
                 <a><BiLogoFacebookCircle/></a>
                 <a><BiLogoLinkedin/></a>
                </div>
                
           </div>
           
        </footer>
        <div className="copy">
            <h4>©Copyright Khafsa IJaz  All Rights Reserved</h4>
        </div>
       </>
    );

}