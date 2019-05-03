import React  from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import about_us from '../../assets/about_us.svg';
import about_us_mobile from '../../assets/about_us_mobile.svg';

const About = function (){
    return (
        <div className="about">

            <div className="about-info">

                <Grid container spacing={24} style={{padding:'1em'}}>
                    <Grid item md={3} xs={12}>
                        <img className="bannerSize" src={about_us}/>

                        <p className="contact-para">Privacy Policy • Terms & Conditions</p>
                    </Grid>

                    <Grid item  md={8} xs={12}>

                        <p className="contact-para">
                            <b>About</b><br/><br/><br/>
                             Capital by Augend & Addend is an independent mortgage advisory established in 2019. Capital by Augend & Addend is an independent mortgage advisory established in 2019. Capital by Augend & Addend is an independent mortgage advisory established in 2019.
                        </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default About;


