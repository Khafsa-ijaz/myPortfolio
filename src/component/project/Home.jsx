// import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { Header } from "./Header";
import {Footer} from "./Footer";
import { About } from "./About";
import { FaRegPlayCircle } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { GoCalendar } from "react-icons/go";
import { LuGitCompare } from "react-icons/lu";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";
import { Testimonial } from "./Testimonials";
import {CallToAction} from "./CallToAction"
import {Team} from "./Team";
import {Contact} from "./Contact"
export function Home()
{
    return(
        <>
         <Header/>
          <div className="home">
        <div className="banner">
            <div className="banner-text">
              <h1>Elegant and creative<br/> solutions</h1>
              <h3>We are team of talented designers making websites with Bootstrap</h3>
              <div className="buttons">
              <button>Get Started</button>
              
              <div className="watchNow"> 
                <FaRegPlayCircle size={30} style={{color:"green"}}/>
                <a>Watch Video</a></div></div>
            </div>
            <div className="picture">
               <img src="/images/web.PNG" alt="Web developer" />
            </div>
        </div>
        <div className="home-sub">
            <div className="card" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <div> <TbActivityHeartbeat size={60} style={{color:"rgb(57, 172, 57)"}}/></div>
                   <h2><a href="#">Lorem ipsum </a></h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Harum, earum nesciunt.</p>
            </div>
            <div className="card" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <div> < GoCalendar  size={60} style={{color:"rgb(57, 172, 57)"}}/></div>
                   <h2><a href="#">Lorem ipsum </a></h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Harum, earum nesciunt.</p>
            </div>
            <div className="card"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <div> < LuGitCompare size={60} style={{color:"rgb(57, 172, 57)"}}/></div>
                <h2><a href="#">Lorem ipsum </a></h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Harum, earum nesciunt.</p>
            </div>

        </div>
        </div>
        <About/>
        <Services/>
        <Portfolio/>
        <Testimonial/>
        <CallToAction/>
        <Team/>
        <Contact/>
        <Footer/>

        </>
      
    );
}