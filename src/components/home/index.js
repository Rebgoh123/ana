import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Carousel from './carousel';
import Pillars from './pillars'
import Service from './service'
import Bank from './bank'
import Promo from './promo'
import Contact from './contact'
import About from './about'
import Footer from './footer'
import Test from './test'

class Home extends Component{

    render() {

        return (
            <div>
                        <Carousel/>
                        <Pillars/>
                        <Service/>
                        <Bank/>
                        <Promo/>
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

