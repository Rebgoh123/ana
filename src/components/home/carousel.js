import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Button from '@material-ui/core/Button';
import withWidth  from '@material-ui/core/withWidth';
import Grid from "@material-ui/core/Grid/Grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import banner1 from '../../assets/header_banner/banner1.png';
import banner2 from '../../assets/header_banner/banner2.png';
import banner3 from '../../assets/header_banner/banner3.png';
import banner4 from '../../assets/header_banner/banner4.png';
import banner5 from '../../assets/header_banner/banner5.png';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

class Carousel extends Component{

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
        };

        const buttonSize = /xs|sm/.test(this.props.width) ? 'small' : /md/.test(this.props.width) ? 'medium' : 'large';
        const fullWidth = /xs|sm/.test(this.props.width) ? true : /md/.test(this.props.width) ? true : false;
        const type = /xs|sm/.test(this.props.width) ? 'mobile' : /md/.test(this.props.width) ? 'tablet' : 'desktop';

        const content = [
            {"id" : 1, "src": <img className="bannerSize" src={banner1}/>, "caption": <p className="caption">FIND THE BEST RATES.<br/><b>GET EASY APPROVAL.</b></p>},
            {"id" : 2, "src": <img className="bannerSize" src={banner2}/>, "caption": <p className="caption">GET YOUR DREAM HOME.<br/> <b>AT THE BEST RATE.</b></p>},
            {"id" : 3, "src": <img className="bannerSize" src={banner3}/>, "caption": <p className="caption"> WE MAKE YOUR <b>PROPERTY<br/> FINANCING EASY.</b></p>},
            {"id" : 4, "src": <img className="bannerSize" src={banner4}/>, "caption": <p className="caption">  FINANCE YOUR BUSINESS<br/> <b>WITHOUT THE HASSLE.</b></p>},
            {"id" : 5, "src": <img className="bannerSize" src={banner5}/>, "caption": <p className="caption">   <b> MOVE YOUR BUSINESS<br/> FORWARD</b> WITH US.</p>},
        ]

        return (
            <div className="carousel section-padding">

            <Slider {...settings}>
                {content.map((value) =>
                    <div>
                    <div className="section-spacing">
                        {value.caption}
                    </div>
                        {value.src}
                    </div>
                )}
                </Slider>

                <div className="section-padding">
                    <div className={"banner-button-" + type} style={{zIndex:'99', backgroundColor:'white'}} >
                        <Grid container spacing={24}>
                            <Grid item xs={6} className="no-padding-right">
                                <Button className={"banner-per per"} size={buttonSize}>
                                    <Grid container item xs={12} spacing={24}>
                                    <Grid item xs={10} style={{textAlign:'center'}}>
                                        PERSONAL LOAN
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FontAwesomeIcon className={"right-arrow-loan-" + type} style={{}} icon="arrow-right"/>
                                    </Grid>
                                    </Grid>
                                </Button>
                            </Grid>
                            <Grid item xs={6}  className="no-padding-left">
                                <Button className={"banner-biz biz"} size={buttonSize} >
                                    <Grid container item xs={12} spacing={24}>
                                    <Grid item xs={10} style={{textAlign:'center'}}>
                                        BUSINESS LOAN
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FontAwesomeIcon className={"right-arrow-loan-" + type} style={{}} icon="arrow-right"/>
                                    </Grid>
                                    </Grid>
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default withWidth()(Carousel);