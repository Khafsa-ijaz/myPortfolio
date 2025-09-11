import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "./About.css";
import { RiCheckDoubleLine } from "react-icons/ri";
export function About()
{     
  
     const [clients, setClients] = useState(0);
    const [projects, setProjects] = useState(0);
    const [hours, setHours] = useState(0);
    const [workers, setWorkers] = useState(0);
    const runcounter=(setter,target,speed)=>
    {
 let count=0;
  const interval= setInterval(() => {
     count++;
     setter(count);
     if(count>=target) clearInterval(interval)
  }, speed);
    }

    useEffect(()=>{
       runcounter(setClients,400,2);
       runcounter(setProjects,120,10);
       runcounter(setHours,1500,1);
       runcounter(setWorkers,50,30)
    },[])
    return(
        <div className="about">
            <div className="sub-about" data-aos="fade-up">
                <h3> ABOUT</h3>
                <p>Lorem ipsum dolor sit, adoloremque officia sapiente voluptatibus repudiandae, praesentium quia, nobis libero!</p>
            </div>
            <div className="picAndContent" >
                <div className="pic">
                    <img src="./images/web.PNG"/>
                </div>
                <div className="content" data-aos="zoom-out-left" data-aos-duration="2000">
                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eligendi praesentium accusantium repudiandae tenetur nostrum unde debitis repellendus reiciendis laborum autem aperiam quaerat quam, 
                        corporis ab est minima? Voluptatibus, commodi.</p>
                        <ul className="list">
                            <li><RiCheckDoubleLine size={25} style={{color:"green"}}/>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><RiCheckDoubleLine size={25} style={{color:"green"}}/> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li><RiCheckDoubleLine size={34} style={{color:"green"}}/>Ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                        </ul>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                </div>
            </div>
            <div className="Counts">
                <div className="smallCards">
                    <h3>{clients}</h3>
                    <h4>Clients</h4>
                </div>
                <div className="smallCards">
                    <h3>{projects}</h3>
                     <h4>Projects</h4>
                </div>
                <div className="smallCards">
                    <h3>{hours}</h3>
                     <h4>Hours Of Support</h4>
                </div>
                <div className="smallCards">
                    <h3>{workers}</h3>
                     <h4>Worker</h4>
                </div>
            </div>

        </div>
    );
}