import React from "react";
import {Grid,Cell} from "react-mdl";
import Contact from "./Contact";
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import { Card,CardActions,CardText,CardTitle,Button } from "react-mdl";
import {Link} from "react-router-dom";

function YogaPractice (){
    return(
        <div>
            <section>
            <div className="container3">  
                <h6>॥ हरि ॐ तत्सत् ॥|</h6>
                <hr/>
                <h4>  ॐ सह नाववतु ।
                        सह नौ भुनक्तु ।
                        सह वीर्यं करवावहै ।
                        तेजस्वि नावधीतमस्तु मा विद्विषावहै ।
                        ॐ शान्तिः शान्तिः शान्तिः ॥</h4>
                <Grid className="demo-grid-3">
                    <Cell col={4} >
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle><img src={img1} className="Yogaimg" alt="img1" /></CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                        <Link to="/yoga1"><Button colored><strong> YOGASANA </strong> </Button></Link>
                        </CardActions>
                    </Card>
                    </Cell>

                    <Cell col={4} >
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle><img src={img2} className="Yogaimg" alt="img2" /></CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                        <Link to="/yoga2"><Button colored><strong>TYPES OF ASANA</strong></Button></Link>
                        </CardActions>
                    </Card>
                    </Cell>

                    <Cell col={4} >
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle><img src={img3} className="Yogaimg" alt="img4" /></CardTitle>
  
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                        <Link to="/yoga3"><Button colored><strong>PRANAYAMA</strong></Button></Link>
                        
                        </CardActions>
                    </Card>
                    </Cell>

                    <Cell col={4} >
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle><img src={img4} className="Yogaimg" alt="img3" /></CardTitle>
  
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                        <Link to="/yoga4"> <Button colored><strong>SURYA NAMSKAR</strong></Button></Link>
                        </CardActions>
                    </Card>
                    </Cell>

                    <Cell col={4} >
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle><img src={img5} className="Yogaimg" alt="img4" /></CardTitle>
  
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                        <Link to="/yoga5"> <Button colored><strong>ASANA FOR ATTRACTIVE BODY SHAPE </strong></Button></Link>
                        </CardActions>
                    </Card>
                    </Cell>

                    <Cell col={4} >
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle><img src={img6} className="Yogaimg" alt="img4" /></CardTitle>
  
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                        <Link to="/yoga6"> <Button colored><strong>ASANA FOR HELTH PRPOBLEM</strong></Button></Link>
                        </CardActions>
                    </Card>
                    </Cell>
                </Grid>
            </div> 
            </section>
            <Contact/>
        
        </div>

    )
}
export default YogaPractice;