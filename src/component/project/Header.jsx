import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import  { useState } from "react";
import { Link } from "react-scroll";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Header.css";
export  function Header()
{
     useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
     const [menu, setmenu]=useState(false);
    return(
       
       <header>
        <nav>
            <div className="mobile-menu" onClick={()=>setmenu(!menu)}>
                {menu?<RiCloseLine size={28} />:<RiMenu3Line size={28} />}
            </div>
            <ul className={menu ? "mob-main-menu" : ""}>
                <li data-aos="fade-up"><Link to="home" smooth="true" duration={500}>Home</Link></li>
               <li data-aos="fade-right"> <Link to="about" smooth="true" duration={500}>About</Link></li>
               <li  data-aos="fade-left"> <Link to="services" smooth="true" duration={500}>Services</Link></li>
               <li data-aos="zoom-in"><Link to="portfolio" smooth="true" duration={500}>portfolio</Link></li>
                <li data-aos="fade-up"><Link to="team" smooth="true" duration={500}>Team</Link></li>
                <li data-aos="fade-left"><Link to="contact" smooth="true" duration={500}>Contact</Link></li>
               <li className="dropdown" data-aos="fade-right"> <a href="#">DropDown<RiArrowDropDownLine size={25}/>
                    <ul className="menu">
                        <li>DropDown1</li>
                        <li>Dropdown2</li>
                    </ul>
                    </a>
                    </li>
              
               <button data-aos="zoom-in"> Get Started</button>
            </ul>
        </nav>
       </header>
    );
}