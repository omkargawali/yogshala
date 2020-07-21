import React from "react";
import {Grid,Cell} from "react-mdl";
import Footer from "./Footer";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Contact (){
    return(
        <div>
            <section>
            <div className="container2">  
                <h6>॥ हरि ॐ तत्सत् ॥</h6>
                <hr/>
                <Grid className="demo-grid-4">
                    <Cell col={6} >
                    <Form>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="exampleName">Full Name</Label>
                            <Input type="name" name="name" id="exampleName" placeholder="Enter your full name " />
                        </FormGroup>
                        </Col>

                        <Col md={6}>
                        <FormGroup>
                            <Label for="exampleNumber">Number</Label>
                            <Input type="number" name="number" id="exampleNumber" placeholder="Enter your mobile number " />
                        </FormGroup>
                        </Col>
                        </Row>
                        <FormGroup>

                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email ID"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress2">Address</Label>
                            <Input type="text" name="address" id="exampleAddress" placeholder="Apartment, studio, or floor"/>
                        </FormGroup>
                    
                        <FormGroup row>
                            <Label for="exampleText" sm={2}>Write Something</Label>
                            <Col sm={10}>
                            <Input type="textarea" name="text" id="exampleText" />
                            </Col>
                        </FormGroup>
                        
                    <FormGroup check>
                        <Input type="checkbox" name="check" id="exampleCheck"/>
                        <Label for="exampleCheck" check>Check me out</Label>
                    </FormGroup>
                    <Button>SUBMIT</Button>
                    </Form>
                    </Cell>

                    <Cell col={6} >
                        <div className="heading1">
                        <h2 >Need Help? Sure we are Online !</h2>
                        <hr/>
                        </div>
                        <table className='table' style={{width:"70%"}}>
                        <tr>
                            <td>
                            
                            
                            
                            </td>
                            <td>+91 8600335916</td> 
                            
                        </tr>
                        <tr>
                            <td>
                            
                        
                            
                            </td>
                            
                            <td>gavaliomkar174@gmail.com</td>
                        </tr>
                        </table>
                    </Cell>
                    
                </Grid>
            </div>  
            
            </section>
            <Footer/>
        </div>

    )
}
export default Contact;