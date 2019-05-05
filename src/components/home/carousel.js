import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Button from '@material-ui/core/Button';
import withWidth  from '@material-ui/core/withWidth';



import banner1 from '../../assets/header_banner/banner1.png';
import banner2 from '../../assets/header_banner/banner2.png';
import banner3 from '../../assets/header_banner/banner3.png';
import banner4 from '../../assets/header_banner/banner4.png';
import banner5 from '../../assets/header_banner/banner5.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
        const type = /xs|sm/.test(this.props.width) ? 'mobile' : /md/.test(this.props.width) ? 'tablet' : 'desktop';

        return (
            <div className="carousel section-padding">

            <Slider {...settings}>
                    <div>
                        <div className="section-spacing">
                            <p className="caption">
                            FIND THE BEST RATES.<br/> <b>GET EASY APPROVAL.</b>
                        </p>
                        </div>
                        <img className="bannerSize" src={banner1}/>
                    </div>

                    <div>
                    <div className="section-spacing">
                        <p className="caption">
                            GET YOUR DREAM HOME.<br/> <b>AT THE BEST RATE.</b></p>
                    </div>
                        <img className="bannerSize" src={banner2}/>
                    </div>

                    <div>
                    <div className="section-spacing">
                        <p className="caption">
                            WE MAKE YOUR <b>PROPERTY<br/> FINANCING EASY.</b></p>
                    </div>
                        <img className="bannerSize" src={banner3}/>
                    </div>

                    <div>
                        <div className="section-spacing">
                            <p className="caption">
                            FINANCE YOUR BUSINESS<br/> <b>WITHOUT THE HASSLE.</b></p>
                        </div>
                        <img className="bannerSize" src={banner4}/>
                    </div>

                    <div>
                        <div className="section-spacing">
                            <p className="caption">
                                <b> MOVE YOUR BUSINESS<br/> FORWARD</b> WITH US.</p>
                        </div>
                        <img className="bannerSize" src={banner5}/>
                    </div>

                </Slider>

                <div className="section-padding">
                    <div className={"banner-button-" + type} style={{zIndex:'99', backgroundColor:'white'}} >
                        <Button className={"banner-per-" + type + " per"} size={buttonSize}>
                            PERSONAL LOAN <FontAwesomeIcon className={"right-arrow-loan-" + type} style={{}} icon="arrow-right"/>
                        </Button>
                        <Button className={"banner-biz-" + type + " biz"} size={buttonSize}>
                            BUSINESS LOAN <FontAwesomeIcon className={"right-arrow-" + type} icon="arrow-right"/>
                        </Button>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }
}


export default withWidth()(Carousel);