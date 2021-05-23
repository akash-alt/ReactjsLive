import React from "react"
import image from "../src/img/p1.svg"
/*import { NavLink } from "react-router-dom";*/
import Common from "./Common"


const Home=()=>{
    return(
        <>
           <Common 
           name="Grow your business with" 
           imgsrc= {image} 
           visit="/service" 
           btname="Get Started"/>
        </>    
    );
}
export default Home;

//<button type="button" class="btn btn-outline-primary" >Get Started</button>
//<a href="" className="btn-get-started" >Get Started </a>