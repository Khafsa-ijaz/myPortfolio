import "./CallToAction.css"
import { Link } from "react-scroll";
export function CallToAction()
{
    return(
        <div className="callToAction">
            <div className="callContent">
             <h2>Call To Action</h2>
           <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           <button><Link to="contact" smooth="true" duration={500}>Call To Action</Link></button></div>
          
        </div>
    );

}