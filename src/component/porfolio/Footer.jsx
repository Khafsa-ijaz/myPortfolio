import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { Link } from "react-scroll";
export function Footer()
{
    return(
        <div className="footer">
         <div className="footerContent">
            <div><h2><span style={{color:" rgb(208, 160, 35)"}}>-</span>Let's <span style={{color:" rgb(208, 160, 35)",fontWeight:"lighter"}}> Connect</span> there</h2></div>
            <div className="subFooter">
                <div className="div1">
                    <h2>Khafsa Ijaz</h2>
                 <p>
  Every line of code I write is a step towards transforming<br/>  ideas into reality  building the web with purpose and passion.
</p>

                <div className="socialLinks">
                     <ul>
                        <li><a href="https://www.instagram.com/khafsa_ijaz?igsh=MXZkZ2I2ZGlvbzJldQ=="><FaInstagram size={25} style={{color:" rgb(208, 160, 35)"}}/></a></li>
                        <li><a href="https://www.linkedin.com/in/khafsa-ijaz-598128364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn size={25}style={{color:" rgb(208, 160, 35)"}}/></a></li>
                        <li><a href="https://www.facebook.com/share/1YhUShipVx/"><CiFacebook size={25} style={{color:" rgb(208, 160, 35)"}}/></a></li>
                    </ul>
                   
                </div>
                </div>
                  <div className="div1">
                    <h3>Quick Links</h3>
                    <div className="quickLinks">
                         <ul>
                        <li><Link  to="header" smooth={true} duration={500}>Home</Link></li>
                        <li><Link  to="about" smooth={true} duration={500}>About</Link></li>
                        <li><Link  to="skills" smooth={true} duration={500}>Skills</Link></li>
                        <li><Link to="project" smooth={true} duration={500} >Project</Link></li>
                        <li><Link  to="certificates" smooth={true} duration={500}>Certification</Link></li>
                    </ul>
                    </div>
                  </div>
                    <div className="div1">
                        <h3>Contact Us</h3>
                         <div className="contact1">
                         <ul>
                        <li><a>+923213389593</a></li>
                        <li><a>khafsaijazijazkhan16@gmail.com</a></li>
                
                        
                    </ul>
                    </div>
                    </div>
            </div>
         </div>
         <div className="copyRight">
            <h3> Copy Right &nbsp;&copy;&nbsp;2025 <span style={{color:"rgb(208, 160, 35)",fontWeight:"lighter"}}>Khafsa Ijaz.</span>&nbsp;All Right Reserved.</h3>
         </div>
         
        </div>
    )
}