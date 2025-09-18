import { Header } from "./Header";
import { Cards } from "./Cards";
import { About } from "./About";
import { Skills } from "./Skills";
import { Project } from "./Project";
import {Certification} from "./Certification"
import { Footer } from "./Footer";
import {Line} from "./Line";
import {Contact} from "./Contact";

export function Main()
{
    return(
        <>
        <Header/>
        <Cards/>
        <About/>
        <Skills/>
        <Project/>
        <Certification/>
        <Line/>
        <Contact/>
        <Footer/>
        
        </>
    );
}