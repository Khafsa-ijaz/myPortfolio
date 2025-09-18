import "./Certification.css";
import "aos/dist/aos.css";
export function Certification()
{
    return(
          <div className="certificates" id="certificates">
            <div className="cerContent">
                <h2><span style={{color:"rgb(208, 160, 35)"}}>-</span>Certification</h2>
                <h3>My<span style={{color:"rgb(208, 160, 35)",fontWeight:"lighter"}}> Achievement </span> Journey</h3>
            </div>
           <div className="subCerti">
            <div className="certiCard">
                <img data-aos="zoom-in-down" src="./images/certificate2.png"></img>
                <div className="perContent">
                    <h2>April 2025|&nbsp;<span style={{color:"rgb(208, 160, 35)"}}>PSEB</span></h2>
                    <h3>Full Stack Development Workshopg</h3>
                    <p>Intensive workshop on full-stack web development covering front-end and back-end technologies, database management, and deployment strategies.</p>
                </div>
            </div>
            <div className="certiCard">
                <img data-aos="zoom-in-down" src="./images/certificate2.png"></img>
                <div className="perContent">
                    <h2>December 2024|&nbsp;<span style={{color:"rgb(208, 160, 35)"}}>WUBAJK</span></h2>
                    <h3>Academic Excellence</h3>
                    <p>Achieved Gold Medal in Computer Science, demonstrating exceptional academic performance and dedication to excellence in the field of technology and software development.</p>
                </div>
            </div>
             <div className="certiCard">
                <img data-aos="zoom-in-down" src="./images/certificate2.png"></img>
                <div className="perContent">
                    <h2>November 2023|&nbsp;<span style={{color:"rgb(208, 160, 35)"}}>Coursera</span></h2>
                    <h3>Project Management Certification</h3>
                    <p>Comprehensive certification covering project planning, execution, monitoring, and closure. Learned industry-standard<br/> methodologies and tools for effective project management</p>
                </div>
            </div>
            
           </div>
          </div>
    );
}