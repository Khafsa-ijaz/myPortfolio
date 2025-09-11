import "./Portfolio.css"
import "aos/dist/aos.css";
import { RxZoomIn } from "react-icons/rx";
import { BsLink45Deg } from "react-icons/bs";
import { useState } from "react";
// import { BiParagraph } from "react-icons/bi";
export function Portfolio(){
    const data=[
        {
            img:"./images/mob.PNG",
            icon1:<RxZoomIn size={24}/>,
            icon2:< BsLink45Deg size={24}/>,
            heading:"Lorem, ipsum.",
           paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.",
           category:"app"

        },
          {
            img:"./images/web1.PNG",
            icon1:<RxZoomIn size={24}/>,
            icon2:< BsLink45Deg size={24}/>,
            heading:"Lorem, ipsum.",
           paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.",
            category:"web"
        },
         {
            img:"./images/robo1.PNG",
            icon1:<RxZoomIn size={24}/>,
            icon2:< BsLink45Deg size={24}/>,
            heading:"Lorem, ipsum.",
           paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.",
              category:"robo"
        },
          {
            img:"./images/app1.PNG",
            icon1:<RxZoomIn size={24}/>,
            icon2:< BsLink45Deg size={24}/>,
            heading:"Lorem, ipsum.",
           paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.",
             category:"app"
        },
         {
            img:"./images/robo2.PNG",
            icon1:<RxZoomIn size={24}/>,
            icon2:< BsLink45Deg size={24}/>,
            heading:"Lorem, ipsum.",
           paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.",
             category:"robo"
        },
          {
            img:"./images/robo3.PNG",
            icon1:<RxZoomIn size={24}/>,
            icon2:< BsLink45Deg size={24}/>,
            heading:"Lorem, ipsum.",
           paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.",
            category:"robo"
        },
         {
            img:"./images/app3.PNG",
            icon1:<RxZoomIn size={24}/>,
            icon2:< BsLink45Deg size={24}/>,
            heading:"Lorem, ipsum.",
           paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.",
            category:"app"
        },
          {
            img:"./images/web2.PNG",
            icon1:<RxZoomIn size={24}/>,
            icon2:< BsLink45Deg size={24}/>,
            heading:"Lorem, ipsum.",
           paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.",
            category:"web"
        }

    ]
    const [selected,setselected]=useState("all");
    const PortfolioItems=({img,icon1,icon2,heading, paragraph})=>
    {
        return(
             <div className="items" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                    <img src={img} alt=""/>
                    <div className="slidingContent">
                        <h2>{heading}</h2>
                        <div className="slidingInside"> 
                            <p>{paragraph}</p>
                             <a>{icon1}</a>
                             <a>{icon2}</a>
                        </div>
                        
                    </div>
                    
                </div>

        );
    }
    const selecteditems=
    selected==="all"
    ?data:data.filter((item)=>item.category===selected)
    return(
        
        <div className="portfolio">
            <div className="portfolioContent" data-aos="zoom-out-left">
                <h3>PORTFOLIO</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati velit dolorem quos.</p>
                <ul>
                    <li><a onClick={()=>setselected("all")}>All</a></li>
                    <li><a onClick={()=>setselected("app")}>App</a></li>
                    <li><a onClick={()=>setselected("web")}>Web</a></li>
                    <li><a onClick={()=>setselected("robo")}>Robotics</a></li>

                </ul>
            </div>
            <div className="portfolioItems">
                {selecteditems.map((port,index)=>(<PortfolioItems
                key={index}
                img={port.img}
                icon1={port.icon1}
                 icon2={port.icon2}
                 heading={port.heading}
                 paragraph={port.paragraph}
                />))}
               
            </div>
        </div>
    )
}