import React  from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import business from '../../assets/service_image/business.png';
import commercial from '../../assets/service_image/commercial.png';
import equity from '../../assets/service_image/equity.png';
import residential from '../../assets/service_image/residential.png';

import business_mobile from '../../assets/service_image/business_mobile.png';
import commercial_mobile from '../../assets/service_image/commercial_mobile.png';
import equity_mobile from '../../assets/service_image/equity_mobile.png';
import residential_mobile from '../../assets/service_image/residential_mobile.png';
import promo_mobile from "../../assets/promotion/promo1_mobile.png";


const styles = theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class Service extends React.Component {

    render() {
        const { classes } = this.props;

        const renderDesktopService = (
            <Grid container spacing={24}>
                <Grid item xs>
                    <div className="service-container">
                        <img className="service-size" src={residential}/>
                        <p className="centered"> Commercial Property Loan</p>
                    </div>
                </Grid>

                <Grid item xs>
                    <div className="service-container">
                        <img className="service-size" src={commercial}/>
                        <p className="centered"> Commercial Property Loan</p>
                    </div>
                </Grid>

                <Grid item xs>
                    <div className="service-container">
                        <img className="service-size" src={equity}/>
                        <p className="centered"> Equity Loan</p>
                    </div>
                </Grid>

                <Grid item xs>
                    <div className="service-container">
                        <img className="service-size" src={business}/>
                        <p className="centered"> Business Loan</p>
                    </div>
                </Grid>
            </Grid>
        );


        return (
            <div className="service">
                <h1>Our Services</h1>

                <div className={classes.sectionDesktop}>
                    <div className="section-spacing">
                    {renderDesktopService}
                    </div>
                </div>

                <div className={classes.sectionMobile}>
                    <div className="service-container">

                        <img className="service-size" src={residential_mobile}/>
                        <p className="centered"> Residential Property Loan</p>
                    </div>

                    <div className="service-container">
                        <img className="service-size" src={commercial_mobile}/>
                        <p className="centered"> Commercial Property Loan</p>
                    </div>

                    <div className="service-container">
                        <img className="service-size" src={equity_mobile}/>
                        <p className="centered"> Equity Loan</p>
                    </div>

                    <div className="service-container">
                        <img className="service-size" src={business_mobile}/>
                        <p className="centered"> Business Loan</p>
                    </div>
                </div>

            </div>
        );
    }
}

Service.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Service);