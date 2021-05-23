import React from "react"
import image from "../src/img/about1.svg"
/*import { NavLink } from "react-router-dom";*/
import Common from "./Common";


const About=()=>{
    return(
        <>
           <Common 
           name="Welcome to About Page" 
           imgsrc= {image} 
           visit="/contact" 
           btname="Contact Now"/>
        </>    
    );
}
export default About;

//<button type="button" class="btn btn-outline-primary" >Get Started</button>
//<a href="" className="btn-get-started" >Get Started </a>
// we can pass the values for the common section