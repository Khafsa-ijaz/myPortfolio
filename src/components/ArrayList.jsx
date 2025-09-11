import { useState } from 'react';
import style from './Series.module.css'
export const ArrayList=({cur})=>{
    const {id,name,img_url,rating,descrption,cast,genere,watch_url}=cur;
    const ratingstyle=rating >=8.8 ? style.super_hit : style.average;
    const btn_style ={
      padding:"1.2rem 2.4rem",
      border:"none",
      fontSize:"1.2rem",
      backgroundColor: rating>=8.8 ? "#7dcea0" :"#f7dc67",
      color:"var(--btn-color)",
      fontWeight:"bold",
      cursor:"pointer",


    }
    const [rat, setrat]=useState({rating});
    const handleButtonEvent=()=>{
      setrat(()=>rat+1)
      console.log(rating);
    };
    return(
    
      <li className={style.card}>
            <div>
  <img src={img_url} 
  alt={img_url}  width={"20%"} height={"30%"}></img>
  </div>
  <div className={style["card-content"]}>
  <h2>Name:{ name}</h2>
  <h4>Rating:<span className={`${style.ratingclass} ${ratingstyle}` }>{rating}</span></h4>
  <p>Summary:{descrption}</p>
  <h4>Genere:{genere}</h4>
  <h4>Cast:{cast}</h4>
  <a href='{watch_url}' target="" >
      <button  onClick={handleButtonEvent} style={btn_style}>Watch Now</button>
      </a>
  
</div>
      </li>
  
    
)
}