import "./ToggleSwitch.css"
import { FaUserCheck } from "react-icons/fa6";
import { useState } from "react";
export const ToggleSwitch= ()=>{
    const [isON, setisOn]=useState(false)
    const handleToggleSwitch=()=>{
        setisOn(!isON)
    }
    return(
        <>
        <h1> <FaUserCheck />Profile</h1>
        <div className="toggle-switch" style={{backgroundColor:isON?"#4caf50":" "}} onClick={handleToggleSwitch}>
            <div className={`switch ${isON?"on":"off"}`}>
                <span className="switch-state">{isON?"on":"off"}</span>
            </div>
        </div>
        </>
    );
};