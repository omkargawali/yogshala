import React from "react";
import { Footer } from "react-mdl";
import {Grid,Cell} from "react-mdl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faWhatsapp, faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons'

function footer (){
    return(
         <>       
        <Footer size="mega">
        <Grid className="demo-grid-6">
            <Cell col={4}>
                <h2>About Us</h2>
                <p>Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>

            </Cell>


            <Cell col={4}>
            
            <h2>Information Link</h2>

              <li><a href="/">Home</a></li>
              <li><a href="about">About</a></li>
              <li><a href="/yoga">Yoga Practice</a></li>
              <li> <a href="/contact">Contact</a></li>
            
            </Cell>

            <Cell col={4}>
                <h2>Contact Details</h2>
                    <ul>
                        <li>
                            <div className="icon">
                            <a href="https://www.youtube.com/channel/UCvHnu5a2ESN1qfhZwPJl5DQ?view_as=subscriber">
                            <FontAwesomeIcon  icon={faWhatsapp}/>+91 8600335916</a>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                            <a href="https://www.youtube.com/channel/UCvHnu5a2ESN1qfhZwPJl5DQ?view_as=subscriber">
                            <FontAwesomeIcon  icon={faYoutube}/>YouTube</a>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                            <a href="https://www.youtube.com/channel/UCvHnu5a2ESN1qfhZwPJl5DQ?view_as=subscriber">
                            <FontAwesomeIcon  icon={faFacebookMessenger}/>Omkar Gawali</a>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                            <a href="https://www.youtube.com/channel/UCvHnu5a2ESN1qfhZwPJl5DQ?view_as=subscriber">
                            <FontAwesomeIcon  icon={faInstagram}/>Yogshala</a>
                            </div>
                        </li>
                        </ul>
            </Cell>
            
    </Grid>
        </Footer>
        <div className="copyrights">
            <div className="container10">
                <div className="footer-distributed">
                    <div className="footer-center">                   
                        <p className="footer-company-name">All Rights Reserved. &copy; 2020 Yogshala Design By : Omkar </p>
                    </div>
                </div>
            </div>
        </div>
        </>
     )
}
export default footer;
