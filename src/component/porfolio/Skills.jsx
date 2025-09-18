import "./Skills.css";
import { useState,useEffect } from "react";
export function Skills()
{
    function ProgressBar({ label, percent }) {
  const [progress, setProgress] = useState(0);
  const p = Math.max(0, Math.min(100, percent));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(p); // animate to target value
    }, 200);
    return () => clearTimeout(timeout);
  }, [p]);

  return (
    <div className="progress-container" id="skills">
      <div className="progress-header">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
    return(
        <>
        <div class="line-with-circle">
  <hr class="line1" />
  <div class="circlemid"></div>
  <hr class="line2" />
 </div>
        <div className="skills">
            <div className="subSkills">
               <div className="subcontent">
                <h2> <span style={{color:"rgb(208, 160, 35)"}}>—</span>Skills</h2>
                <p>Core web development skills gained through hands-on projects.</p>
            </div>
             <div className="skillBar">
        <ProgressBar label="HTML" percent={90} />
        <ProgressBar label="CSS" percent={90} />
        <ProgressBar label="JavaScript" percent={75} />
        <ProgressBar label="React" percent={80} />
        <ProgressBar label="PHP" percent={60} />
      </div></div>
         
         </div></>
         

    );
}