import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

import bea from '../../assets/bank_logo/bea.png';
import boc from '../../assets/bank_logo/boc.png';
import cimb from '../../assets/bank_logo/cimb.png';
import citibank from '../../assets/bank_logo/citibank.png';
import dbs from '../../assets/bank_logo/dbs.png';
import ethoz from '../../assets/bank_logo/ethoz.png';
import HLfinance from '../../assets/bank_logo/HLfinance.png';
import hsbc from '../../assets/bank_logo/hsbc.png';
import maybank from '../../assets/bank_logo/maybank.png';
import ocbc from '../../assets/bank_logo/ocbc.png';
import posb from '../../assets/bank_logo/posb.png';
import rhb from '../../assets/bank_logo/rhb.png';
import sbi from '../../assets/bank_logo/sbi.png';
import singapurafinance from '../../assets/bank_logo/singapurafinance.png';
import standchart from '../../assets/bank_logo/standchart.png';
import uob from '../../assets/bank_logo/uob.png';

import bea_mobile from '../../assets/bank_logo/bea_mobile.png';
import boc_mobile from '../../assets/bank_logo/boc_mobile.png';
import cimb_mobile from '../../assets/bank_logo/cimb_mobile.png';
import citibank_mobile from '../../assets/bank_logo/citibank_mobile.png';
import dbs_mobile from '../../assets/bank_logo/dbs_mobile.png';
import ethoz_mobile from '../../assets/bank_logo/ethoz_mobile.png';
import HLfinance_mobile from '../../assets/bank_logo/HLFinance_mobile.png';
import hsbc_mobile from '../../assets/bank_logo/hsbc_mobile.png';
import maybank_mobile from '../../assets/bank_logo/maybank_mobile.png';
import ocbc_mobile from '../../assets/bank_logo/ocbc_mobile.png';
import posb_mobile from '../../assets/bank_logo/posb_mobile.png';
import rhb_mobile from '../../assets/bank_logo/rhb_mobile.png';
import sbi_mobile from '../../assets/bank_logo/sbi_mobile.png';
import singapurafinance_mobile from '../../assets/bank_logo/singapurafinance_mobile.png';
import standchart_mobile from '../../assets/bank_logo/standchart_mobile.png';
import uob_mobile from '../../assets/bank_logo/uob_mobile.png';

import promo from '../../assets/promotion/promo1.png';
import promo_mobile from '../../assets/promotion/promo1_mobile.png';

const styles = theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionMobile: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },

});

class Bank extends Component{

    render() {
        const { classes } = this.props;

        const bg = {
            backgroundImage: `linear-gradient(to bottom, rgba(205, 169, 157, 0.7), rgba(205, 169, 157, 0.7)),
  url(${promo_mobile})`
        };

        const settingDesktop = {
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
        };

        const settingsMobile = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
        };

        const renderDesktop = (
            <Slider {...settingDesktop} >
                <div>
                    <img className="bankLogoSize" src={bea}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={boc}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={cimb}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={citibank}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={dbs}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={ethoz}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={HLfinance}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={hsbc}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={maybank}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={ocbc}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={posb}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={rhb}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={sbi}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={singapurafinance}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={standchart}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={uob}/>
                </div>
            </Slider>
        );


        const renderMobile = (
            <Slider {...settingsMobile}>
                <div>
                    <img className="bankLogoSize" src={bea_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={boc_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={cimb_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={citibank_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={dbs_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={ethoz_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={HLfinance_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={hsbc_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={maybank_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={ocbc_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={posb_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={rhb_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={sbi_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={singapurafinance_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={standchart_mobile}/>
                </div>

                <div>
                    <img className="bankLogoSize" src={uob_mobile}/>
                </div>
            </Slider>
        );

        return (
            <div className="bank section-spacing">
                <h1> Our Bank Partners </h1>
                    <div className={classes.sectionDesktop}>
                        {renderDesktop}
                    </div>

                    <div className={classes.sectionMobile}>
                        {renderMobile}
                    </div>
            </div>
        );
    }
}

Bank.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bank);