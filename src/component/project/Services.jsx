import "./Services.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import { FaRegPlayCircle } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { GoCalendar } from "react-icons/go";
import { LuGitCompare } from "react-icons/lu";
import { HiOutlineSignal,HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";
import { RiArtboardLine } from "react-icons/ri";
export function Services()
{
    const array=[
    {
      icon: <TbActivityHeartbeat size={41} />,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maxime quibusdam ab repellendus architecto similique eligendi deserunt saepe e.",
    },
    {
      icon: <HiOutlineSignal size={41} />,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maxime quibusdam ab repellendus architecto similique eligendi deserunt saepe eos accusantium numquam",
    },
    {
      icon: <RiArtboardLine size={41} />,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maxime quibusdam ab repellendus architecto saepe eos accusantium numquam corporis reiciendis odio omnis.",
    },
    {
      icon: <LuGitCompare size={41} />,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maxime quibusdam ab repellendus accusantium numquam corporis reiciendis odio omnis.",
    },
    {
      icon: <GoCalendar size={41} />,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maxime reiciendis odio omnis, veniam dolores sed illum nesciunt.",
    },
    {
      icon: <HiMiniChatBubbleBottomCenterText size={41} />,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repreheos accusantium numquam corporis reiciendis odio omnis.",
    },
  ];
    const ServiceCard=({icon,title,description})=>
    {
        return( 
        <div className="subCard" data-aos="fade-up"
     data-aos-duration="3000">
                <div className="logo">{icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            )
        
    }
    return(
        <div className="services">
          <div className="subServices" data-aos="zoom-out-left">
            <h3>
                SERVICES
            </h3>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
           <div className="servicesCard">
            {array.map((service, index)=>( <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />))}
           </div>
          
        </div>
    )
}