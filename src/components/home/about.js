import React  from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import about_us from '../../assets/about_us.svg';
import about_us_mobile from '../../assets/about_us_mobile.svg';


const styles = theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class About extends React.Component {

    render() {
        const { classes } = this.props;

        const About = 'Capital by Augend & Addend is an independent mortgage advisory established in 2019. Capital by Augend & Addend is an independent mortgage advisory established in 2019. Capital by Augend & Addend is an independent mortgage advisory established in 2019.\n'

        const renderMobileService = (
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <img className="aboutBanner-mobile" src={about_us}/>
                        </Grid>

                        <Grid item xs={12}>
                            <p className="contact-para p">
                                <b>About</b><br/><br/><br/>

                                Capital by Augend & Addend is an independent mortgage advisory established in 2019. Capital by Augend & Addend is an independent mortgage advisory established in 2019.<br/><br/>
                                Capital by Augend & Addend is an independent mortgage advisory established in 2019.
                            </p>
                        </Grid>

                        <Grid item xs={12}>
                            <div className="contact-tc p" style={{textAlign:'center'}}>Privacy Policy • Terms & Conditions</div>
                        </Grid>
                    </Grid>


        );

        const renderDesktopService = (

                    <Grid container spacing={24} style={{padding:'1em'}} className='about-content'>
                        <Grid item md={4} xs={12} style={{marginRight: '3em'}}>
                            <img className="aboutBanner" src={about_us}/>

                            <div className="contact-tc p">Privacy Policy • Terms & Conditions</div>
                        </Grid>

                        <Grid item  md={7} xs={12}>

                            <div className="contact-para p" >
                                <b>About</b><br/><br/><br/>
                                Capital by Augend & Addend is an independent mortgage advisory established in 2019. Capital by Augend & Addend is an independent mortgage advisory established in 2019.<br/><br/>
                                Capital by Augend & Addend is an independent mortgage advisory established in 2019.
                            </div>
                        </Grid>
                    </Grid>
        );


        return (
            <div className="about">

                <div className="about-info">

                <div className={classes.sectionDesktop}>
                        {renderDesktopService}
                </div>

                <div className={classes.sectionMobile}>
                    {renderMobileService}
                </div>

                </div>
            </div>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);

