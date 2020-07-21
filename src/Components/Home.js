import React from "react";
import About from "./About";
import {Grid,Cell} from "react-mdl";

function Home (){
    return(
        <>
        <div  className="Container">
            <Grid className="demo-grid-1">  
            <Cell col={12} > 
            <div className="container">
				<div className="row">
					<div className="col-md-12 col-sm-12 text-right">
						<div className="big-tagline">
							<h2>Welcome To<strong>Yogshala</strong></h2>
							<p>With good & effective content </p>
							
						</div>
					</div>
			    </div>
            </div>                 
            </Cell>  
            </Grid>
   
        </div>
            <About/>
        </>
        )
 }

 export default Home;