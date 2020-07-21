import React from "react";
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import YogaPractice from "./Components/YogaPractice";
import Yoga1 from "./Components/Yogasan/Yoga1";
import Yoga2 from "./Components/Type/Yoga2";
import Yoga3 from "./Components/Pranayam/Yoga3";
import Yoga4 from "./Components/SuryaNamskar/Yoga4";
import Yoga5 from "./Components/Yogasan1/Yoga5";
import Yoga6 from "./Components/Yogasan2/Yoga6";
import Prana1 from "./Components/Pranayam/Yoga3/Prana1";
import Prana2 from "./Components/Pranayam/Yoga3/Prana2";
import Prana3 from "./Components/Pranayam/Yoga3/Prana3";
import Prana4 from "./Components/Pranayam/Yoga3/Prana4";


const App = () => {
     return(
        
    <div>
        <BrowserRouter>
        <div className="demo-big-content">
        <Layout>
        <Header title="Yogshala" className="headerApp" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/yoga">Yoga Practice</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Yogshala">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/yoga">Yoga Practice</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content"/>
            <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/about" component = {About} />
            <Route exact path = "/yoga" component = {YogaPractice} />
            <Route exact path = "/contact" component = {Contact} />
            <Route exact path = "/yoga1" component = {Yoga1} />
            <Route exact path = "/yoga2" component = {Yoga2} />
            <Route exact path = "/yoga3" component = {Yoga3} />
            <Route exact path = "/yoga4" component = {Yoga4} /> 
            <Route exact path = "/yoga5" component = {Yoga5} />
            <Route exact path = "/yoga6" component = {Yoga6} />
            <Route exact path = "/prana1"component = {Prana1}/>
            <Route exact path = "/prana2"component = {Prana2}/>
            <Route exact path = "/prana3"component = {Prana3}/>
            <Route exact path = "/prana4"component = {Prana4}/>
            
            </Switch>
        </Content>
        </Layout>
        </div>
        
        </BrowserRouter>      
    </div>      
                
    );
}


export default App;