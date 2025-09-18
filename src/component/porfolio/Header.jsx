import "./Header.css"
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { Link } from "react-scroll";
import { useEffect } from "react";
import {  RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import  { useState,useRef } from "react";
import Typed from "typed.js";
export function Header()
{
     useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    const [menu, setmenu]=useState(false);
     const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "Emerging web <br/>Developer To Rule",
       
      ],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
    return(

        <div className="main" id="home">
              <div className="bg">
        <div className="header">
            <div className="mobile-nav" onClick={()=>setmenu(!menu)}>
                {menu?<RiCloseLine size={28} />:<RiMenu3Line size={28} />}
            </div>
             <nav className="nav">
                <h2 data-aos="zoom-in-up">Khafsa Ijaz</h2>
            <ul className={menu ? "navMenu" : ""}>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="project" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="certificates" smooth={true} duration={500}>Certificates</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
        </div>
        <div className="content">

            <div className="intro">
                 <h3>
              <span ref={typedEl}></span>
            </h3>
                {/* <h3>Emerging web <br/> Developer To Rule</h3> */}
               <div className="paragraph">
                <p>Passionate about creating responsive, user-friendly websites with <br/> clean design and efficient code.  Hands-on experience in building <br/> dynamic projects using React, JavaScript, and modern web tools.
</p>

               </div> 
                 <div className="buttons">
              <button>Get Started</button>
              
              <div className="watchNow"> 
                <MdOutlinePlayCircleFilled size={30} style={{color:"rgb(208, 160, 35)"}}/>
                <a>Watch Video</a></div></div>
               <div className="ranking">
                
                <div className="number">
                    <h3>
      <CountUp start={0} end={120} duration={3} /><span style={{color:"rgb(208, 160, 35)"}}>+</span>
    </h3>
                    <p>Lorem ipsum dolor <br/>amet consectetur.</p>
                </div>
                <div className="vertical-line"></div>
                <div className="number">
                    <h3>
      <CountUp start={0} end={120} duration={3} /><span style={{color:"rgb(208, 160, 35)"}}>+</span>
    </h3>
                    <p>Lorem ipsum dolor <br/> amet consectetur.</p>
                </div>
                  <div className="vertical-line"></div>
                <div className="number">
                   <h3>
      <CountUp start={0} end={120} duration={3} /><span style={{color:"rgb(208, 160, 35)"}}>+</span>
    </h3>
                    <p>Lorem ipsum dolor <br/> amet consectetur.</p>
                </div>
                
             </div>
            </div>
            <div className="imgCircle">
                 <div className="img" data-aos="zoom-in-up"><img src="./images/pro.png"/></div>
            </div>
            
            
             
        </div>
        
       </div>
        <div className="circle">
            <Link to="footer" smooth={true} duration={500}> <h3><RiArrowDropDownLine  size={20} style={{color:"rgb(208, 160, 35)"}}/></h3></Link>
         
       </div>
        </div>
     
    );
}