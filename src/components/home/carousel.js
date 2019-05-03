import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import banner1 from '../../assets/header_banner/banner1.png';
import banner2 from '../../assets/header_banner/banner2.png';
import banner3 from '../../assets/header_banner/banner3.png';
import banner4 from '../../assets/header_banner/banner4.png';
import banner5 from '../../assets/header_banner/banner5.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

});

class Carousel extends Component{

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <p className="caption section-spacing">
                            FIND THE BEST RATES.<br/>
                            <b>GET EASY APPROVAL.</b>
                        </p>
                        <img className="bannerSize" src={banner1}/>
                    </div>
                    <div>
                        <p className="caption section-spacing">
                            GET YOUR DREAM HOME.<br/>
                            <b>AT THE BEST RATE.</b></p>
                        <img className="bannerSize" src={banner2}/>
                    </div>
                    <div>
                        <p className="caption section-spacing">
                            WE MAKE YOUR <b>PROPERTY<br/>
                            FINANCING EASY.</b></p>
                        <img className="bannerSize" src={banner3}/>
                    </div>
                    <div>
                        <p className="caption section-spacing">
                            FINANCE YOUR BUSINESS<br/>
                            <b>WITHOUT THE HASSLE.</b></p>
                        <img className="bannerSize" src={banner4}/>
                    </div>
                    <div>
                        <p className="caption section-spacing">
                            <b> MOVE YOUR BUSINESS<br/>
                                FORWARD</b> WITH US.</p>
                        <img className="bannerSize" src={banner5}/>
                    </div>
                </Slider>

                <div class="banner-button section-padding">
                    


                </div>

                {/*<div className="banner section-padding">*/}
                    {/*<div class="container">*/}
                        {/*<Grid container spacing={24} className="header-button">*/}
                            {/*<Grid item xs={6} className="header-button-grid">*/}
                                {/*<Paper className="header-button-left">*/}
                                    {/*<Button variant="outlined" className="button-header-per button-header">*/}
                                        {/*<Grid item xs={10} >*/}
                                            {/*PERSONAL LOAN*/}
                                        {/*</Grid>*/}
                                        {/*<Grid item xs={2} style={{background:"rgba(000,000,000,0.5)"}}>*/}
                                        {/*<FontAwesomeIcon  icon="arrow-right" />*/}
                                        {/*</Grid>*/}
                                    {/*</Button>*/}
                                {/*</Paper>*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={6} className="header-button-grid">*/}
                                {/*<Paper className="header-button-right">*/}
                                    {/*<Button variant="outlined" className="button-header-biz button-header">*/}
                                        {/*<Grid item xs={10} >*/}
                                            {/*BUSINESS LOAN*/}
                                        {/*</Grid>*/}
                                        {/*<Grid item xs={2} style={{background:"rgba(000,000,000,0.5)"}}>*/}
                                        {/*<FontAwesomeIcon  icon="arrow-right" />*/}
                                        {/*</Grid>*/}
                                    {/*</Button>*/}
                                {/*</Paper>*/}
                            {/*</Grid>*/}
                        {/*</Grid>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

function mapStateToProps(props){
    return props
}

export default connect(mapStateToProps) (Carousel);