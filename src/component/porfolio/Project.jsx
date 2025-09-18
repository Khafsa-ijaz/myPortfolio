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
    heading:"Expert Customs Clearance",
    para:"Professional documentation and regulatory compliance services",
    b1:"./images/vid.mp4",
    b2:"https://khafsa-ijaz.github.io/website-port/"
    },
     {
 vid:"./images/vid.mp4",
    heading:"Expert Customs Clearance",
    para:"Professional documentation and regulatory compliance services",
    b1:"./images/vid.mp4",
    b2:"https://khafsa-ijaz.github.io/website-port/"
    },
     {
 vid:"./images/vid.mp4",
    heading:"Expert Customs Clearance",
    para:"Professional documentation and regulatory compliance services",
    b1:"./images/vid.mp4",
    b2:"https://khafsa-ijaz.github.io/website-port/"
    },
     {
 vid:"./images/vid.mp4",
    heading:"Expert Customs Clearance",
    para:"Professional documentation and regulatory compliance services",
    b1:"./images/vid.mp4",
    b2:"https://khafsa-ijaz.github.io/website-port/"
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
