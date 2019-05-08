import React  from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import business from '../../assets/service_image/business.png';
import commercial from '../../assets/service_image/commercial.png';
import equity from '../../assets/service_image/equity.png';
import residential from '../../assets/service_image/residential.png';

import business_mobile from '../../assets/service_image/business_mobile.png';
import commercial_mobile from '../../assets/service_image/commercial_mobile.png';
import equity_mobile from '../../assets/service_image/equity_mobile.png';
import residential_mobile from '../../assets/service_image/residential_mobile.png';
import confidential from "../../assets/pillars_logo/confidential.svg";
import personalised from "../../assets/pillars_logo/personalised.svg";
import experience from "../../assets/pillars_logo/experience.svg";
import best from "../../assets/pillars_logo/best.svg";

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

        const contentDesktop = [
            {"id" : 1, "image":<img className="service-size" src={residential}/>, "sub":'Residential Property Loan'},
            {"id" : 2, "image":<img className="service-size" src={commercial}/>, "sub":'Commercial Property Loan'},
            {"id" : 3, "image":<img className="service-size" src={equity}/>, "sub":'Equity Loan'},
            {"id" : 4, "image":<img className="service-size" src={business}/>, "sub":' Business Loan'},
        ];

        const contentMobile = [
            {"id" : 1, "image":<img className="service-size" src={residential_mobile}/>, "sub":'Residential Property Loan'},
            {"id" : 2, "image":<img className="service-size" src={commercial_mobile}/>, "sub":'Commercial Property Loan'},
            {"id" : 3, "image":<img className="service-size" src={equity_mobile}/>, "sub":'Equity Loan'},
            {"id" : 4, "image":<img className="service-size" src={business_mobile}/>, "sub":' Business Loan'},
        ];

        return (
            <div className="service">
                <h1>Our Services</h1>

                <div className={classes.sectionDesktop}>
                    <div className="section-spacing">
                        <Grid container spacing={24}>
                                {contentDesktop.map((value) =>
                                    <Grid item xs>
                                    <div className="service-container">
                                        {value.image}
                                        <p className="centered"> {value.sub} </p>
                                    </div>
                                    </Grid>
                                )}
                        </Grid>
                    </div>
                </div>

                <div className={classes.sectionMobile}>
                    {contentMobile.map((value) =>
                        <div className="service-container">
                            {value.image}
                            <p className="centered"> {value.sub} </p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

Service.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Service);