import React, { Component } from 'react';
import { connect } from 'react-redux';

import Carousel from './carousel';
import Pillars from './pillars'
import Service from './service'
import Bank from './bank'
import Contact from './contact'
import About from './about'
import Footer from './footer'

class Home extends Component{

    render() {

        return (
            <div>
                <Carousel/>
                <Pillars/>
                <Service/>
                <Bank/>
                <Contact/>
                <About/>
                <Footer/>
            </div>
    );
    }
}

function mapStateToProps(props){
    return props
}

export default connect(mapStateToProps) (Home);

