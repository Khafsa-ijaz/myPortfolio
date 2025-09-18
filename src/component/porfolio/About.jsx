import "./About.css";
import { FaArrowCircleRight } from "react-icons/fa";
export function About()
{
   return(
    //#D0A023 rgb(208, 160, 35)
    <div className="about" id="about">
      <div className="aboutCard">
        <div> <img src="./images/pro.png"/></div>
        
         <div className="content">
            
            <h2> <span style={{color:"rgb(208, 160, 35)"}}>—</span>About Me</h2>
              <h3>Who is<span style={{color:"rgb(208, 160, 35)",fontWeight:"lighter"}}> Khafsa Ijaz?</span></h3>
              <p>A dedicated and creative Web Developer with a strong academic background and a passion for building <br/>  dynamic, user-friendly websitesand applications. As a Computer Science Gold Medalist, I bring both technical <br/> knowledge and attention to detail into every project.</p>
         <div className="cvMain">
            <a href="./Khafsa_ijaz.pdf"><div className="cv" ><button>Download CV</button><div>< FaArrowCircleRight size={26} style={{color:"white"}}/></div></div></a>
            <h4>Khafsa Ijaz</h4>
         </div>
         </div>
      </div>
    </div>

   )
}