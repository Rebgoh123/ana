import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";

import Carousel from './carousel';
import Pillars from './pillars'
import Service from './service'
import Bank from './bank'
import Promo from './promo'
import Contact from './contact'
import About from './about'
import Footer from './footer'
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import wa from '../../assets/social_media/wa.svg';
import banner1 from "../../assets/header_banner/banner1.png";

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

                <div className="float">
                <Button aria-label="WA" className="float-btn">
                    <img src={wa}/>
                </Button>
                </div>
                    <Helmet>
                        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5cd311b2d9c2967b"></script>
                    </Helmet>

            </div>
    );
    }
}

function mapStateToProps(props){
    return props
}

export default connect(mapStateToProps) (Home);

