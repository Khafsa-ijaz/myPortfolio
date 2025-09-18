import "./Cards.css";
// import { FaGraduationCap } from "react-icons/fa6";
import { PiGraduationCapLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
export function Cards()
{
    return(
        <div className="mainCard" >
            <div className="card">
    <span className="corner tl"></span>
      <span className="corner tr"></span>
      <span className="corner bl"></span>
      <span className="corner br"></span>
      <div className="icon"><PiGraduationCapLight size={50} style={{color:"white"}}/></div>
       <h2>Academic Excellence</h2>
      <p>Computer Science Gold Medalist with a strong foundation in programming and software development.</p>
      <a href="#">Read More →</a>
            </div>
            <div className="card">
      <span className="corner tr"></span>
      <span className="corner bl"></span>
     <div className="icon"><IoBookOutline  size={50} style={{color:"white"}}/></div> 
       <h2>Continuous Learning</h2>
      <p>Currently expanding skills in Express.js, MySQL, and REST APIs to stay ahead in the evolving tech landscape.</p>
      <a href="#">Read More →</a>
            </div>
            <div className="card">
    <span className="corner tl"></span>
      <span className="corner tr"></span>
      <span className="corner bl"></span>
      <span className="corner br"></span>
      <div className="icon"><CiHeart  size={50} style={{color:"white"}}/></div>
      
       <h2>Passion for Code</h2>
      <p>Dedicated to creating meaningful digital experiences with clean, efficient code and user-centered design.</p>
      <a href="#">Read More →</a>
            </div>
        </div>
    );
}