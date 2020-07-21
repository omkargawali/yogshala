import React from "react";
import YogaPractice from "./YogaPractice";
import yoga from './yoga.jpg'

function About (){
    return(
        <div>
            <section>
            <div className="container1">  
            <h6>|| हरि ॐ तत्सत् ||</h6>
            <hr/>
            <h4>योगेन चित्तस्य पदेन वाचा मलं शारीरस्य च वैद्यकेन्।
            योsपाकरोत्तम् प्रवरम मुनीनां प्रंजलि प्रांजलिनतोsस्मि।।</h4> 
            
                
			<div className="row align-items-center">
				<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="post-media wow fadeIn">
                    <img src={yoga} className="img-fluid img-rounded" alt="logo" />  
                    </div>
                </div>
				
				<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="message-box1">
                        <h2><strong>Why Yogshala ?</strong></h2>
                        <p>We are specialist in providing good and effective content about YOGA that helps to our website visitors get correct information about YOGA. We always ready to teaching our website visitors How to do YOGA step by step ?. We give always first priority to our visitors to solve thair query.We daily providing YOGA content  this is helpful for our visitors we also provide information,advantages about specific YOGA.</p>
                    </div>
                </div>
				
            </div>
                
            </div> 

            
            </section>
            <YogaPractice/>
        </div>

    )
}
export default About;