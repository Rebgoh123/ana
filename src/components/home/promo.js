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

class Promo extends Component{

    render() {
        const { classes } = this.props;

        const bg = {
            backgroundImage: `linear-gradient(to bottom, rgba(205, 169, 157, 0.7), rgba(205, 169, 157, 0.7)),
  url(${promo_mobile})`
        };

        return (
                <div className="Promo ">
            <div className={classes.sectionDesktop}>
<div className="section-spacing">
                    <img className="promoBannerSize" src={promo}/>
                    <div className="promoIntro">
                    <h2>Claim a FREE $100 NTUC Voucher!</h2>
                    <h3>Simply secure your loan with us today.</h3>
                    <Button variant="contained" className="button-promo-per">
                    PERSONAL LOAN
                    </Button>
                    <Button variant="contained" className="button-promo-biz">
                    BUSINESS LOAN
                    </Button>
                    </div>
</div>
                </div>

            <div className={classes.sectionMobile}>
                    <div className="promoBannerSize" style={{backgroundImage:`url(${promo_mobile})`}}/>

                    <div class="promoIntro">
                        <h2>Claim a FREE $100 NTUC Voucher!</h2>
                        <h3>Simply secure your loan with us today.</h3>
                    </div>
            </div>
        </div>
        );
    }
}

Promo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Promo);