import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { IoPlayCircleOutline } from "react-icons/io5";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import "./Project.css";
export  function Project() {
  const array =[
    {
 vid:"./images/vid.mp4",
    heading:"Practice Frontend Theme",
    para:"Tried something new!Created a practice frontend theme to experiment with colors, layouts, and transitions",
    b1:"./images/vid.mp4",
    b2:"https://khafsa-ijaz.github.io/website-port/"
    },
     {
 vid:"./images/Quizz.mp4",
    heading:"Quizz App/Website",
    para:"Real-time score, remarks & global state management Practiced Redux Store and clean component structure",
    b1:"./images/Quizz.mp4",
    b2:"https://quiz-appnew-2uqa.vercel.app/"
    },
     {
 vid:"./images/fav.mp4",
    heading:"Favorites Website",
    para:"A React-based UI to add items to favorites and filter between All / Favorites.",
    b1:"./images/fav.mp4",
    b2:"./images/fav.mp4"
    },
     {
 vid:"./images/portfolio.mp4",
    heading:"personal portfolio website",
    para:"Focused on a smooth user experience and a modern design that truly represents me as a frontend developer",
    b1:"./images/portfolio.mp4",
    b2:"https://my-portfolio-i4sr.vercel.app/"
    }
   
  ]

  return (
    <div  className="project" id="project">
    <div className="bar">
      <div className="barText">
        <h2><span style={{color:" rgb(208, 160, 35)"}}>-</span>My Project</h2>
        <p>Turning ideas into reality through practical, hands-on projects.</p>
      </div>
      
    </div>
    <div className="project-section">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

 {
  array.map((arr,index)=>
  ( <SwiperSlide key={index}>
          <div className="cardp">
               <video 
      src={arr.vid}
      autoPlay 
      loop 
      muted 
      playsInline 
      className="slide-video"
    />
            <div className="card-text">
              <h3>{arr.heading}</h3>
              <p>{arr.para}</p>
              <div className="card-buttons">
            <a href={arr.b1}>
              <div className="b1">
              <button className="watch-btn">Watch Now</button><IoPlayCircleOutline size={28}/></div></a>    
       <a href={arr.b2}>
        <div className="b2">
          <button className="live-btn">Live View</button>
        </div>
        </a> 
      </div>
            </div>
          </div>
        </SwiperSlide>))
 }
      </Swiper>
    </div>
    </div>
  );
}
