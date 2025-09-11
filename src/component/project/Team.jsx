 import { BiLogoInstagram,BiLogoFacebookCircle,BiLogoLinkedin } from 'react-icons/bi';
 import "./Team.css"
export function Team()
{
    const team=[
        {
            img:"./images/web.PNG",
            tname:"Walter White",
            desg:"Chief Executive Officer",
            insta:"insta.com",
            fb:"fb.com",
        linkedin:"fb.com",
        },
         {
            img:"./images/web.PNG",
            tname:"Walter White",
            desg:"Chief Executive Officer",
            insta:"insta.com",
            fb:"fb.com",
            linkedin:"fb.com",
        },
         {
            img:"./images/web.PNG",
            tname:"Walter White",
            desg:"Chief Executive Officer",
            insta:"insta.com",
            fb:"fb.com",
            linkedin:"fb.com",
        }

    ]
    const Teamcard=({img,tname,desg,insta,fb,linkedin})=>
    { 
        return(
         <div className="teamCard" data-aos="fade-up"
     data-aos-duration="3000">
                     <img src={img}/>
                <div className="teamInfo">
                    <h3>{tname}</h3><hr/>
                    <div className="social"> 
                    <h4>{desg}</h4>
                    <div className="socialLinks"> 
                     <a href={insta}> <BiLogoInstagram size={27}/></a>  
                       <a href={fb}> <BiLogoFacebookCircle size={27}/></a> 
                       <a href={linkedin}> <BiLogoLinkedin size={27}/></a>  
                    </div>
                    </div>
                    
                </div>
         </div>
    )

    }
    return(
        <div className="team">
            <div className="teamContent" data-aos="zoom-out-left">
                <h3>TEAM</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at eum voluptatum repellendus illum?</p>
            </div>
            <div className="teamCardmain">
               {
                team.map((t,index)=>(
                    <Teamcard
                    key={index}
                    img={t.img}
                    tname={t.tname}
                    desg={t.desg}
                    insta={t.insta}
                    fb={t.fb}
                    linkedin={t.linkedin}
                    />
                ))
               }
               
            </div>
        </div>
    );

}