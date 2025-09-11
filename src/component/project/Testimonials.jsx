// import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";
export function Testimonial()
{ 
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
     responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,  // mobile
        settings: { slidesToShow: 1 }
      }
    ]
  };
    const testmonials =[
        {
            para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque alias consequuntur ipsa similique laborum expedita voluptate, hic libero distinctio dolores praesentium consectetur ducimus cumque reiciendis vero magnam quod voluptatum accusantium?",
            img:"./images/web.PNG",
            pname:"Fransic Lee",
            designation:"Freelancer",
        },
        {
            para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque alias consequuntur ipsa similique laborum expedita voluptate, hic libero distinctio dolores praesentium consectetur ducimus cumque reiciendis vero magnam quod voluptatum accusantium?",
            img:"./images/web.PNG",
            pname:"junaid Lee",
            designation:"Freelancer",
        },
        {
            para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque alias consequuntur ipsa similique laborum expedita voluptate, hic libero distinctio dolores praesentium consectetur ducimus cumque reiciendis vero magnam quod voluptatum accusantium?",
            img:"./images/web.PNG",
            pname:"frahdi Lee",
            designation:"Freelancer",
        },
        {
            para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque alias consequuntur ipsa similique laborum expedita voluptate, hic libero distinctio dolores praesentium consectetur ducimus cumque reiciendis vero magnam quod voluptatum accusantium?",
            img:"./images/web.PNG",
            pname:"Fransic Lee",
            designation:"Freelancer",
        },
        {
            para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque alias consequuntur ipsa similique laborum expedita voluptate, hic libero distinctio dolores praesentium consectetur ducimus cumque reiciendis vero magnam quod voluptatum accusantium?",
            img:"./images/web.PNG",
            pname:"Fransic Lee",
            designation:"Freelancer",
        },
        {
            para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque alias consequuntur ipsa similique laborum expedita voluptate, hic libero distinctio dolores praesentium consectetur ducimus cumque reiciendis vero magnam quod voluptatum accusantium?",
            img:"./images/web.PNG",
            pname:"Fransic Lee",
            designation:"Freelancer",
        },
    ] 
    const Reviews=({para,img,pname,designation})=>
    {
        return(
            <div className="reviewCard" data-aos="fade-up-left">
                    <p>  <RiDoubleQuotesL size={25} style={{color:"green"}}/>
                    {para}
                     <RiDoubleQuotesR size={25} style={{color:"green"}}/></p>
                  <img src={img}/>
                    <h3>{pname}</h3>
                    <h4>{designation}</h4>
                </div>
        )
    }
    return(
        <div className="testimonials" data-aos="zoom-out-left">
          
            <div className="subtest">
              <h2>TESTIMONIALS</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium pariatur laborum iure.</p>
            </div>
           

                <div className="reviews" >
                   <Slider {...settings}>
                     {testmonials.map((test, index) => (
    <Reviews
      key={index}
      para={test.para}
      img={test.img}
      pname={test.pname}
      designation={test.designation}
    />
  ))}
                   </Slider>
              
              

            </div>
         
        </div>
    );
}