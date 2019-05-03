import React  from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bg from '../../assets/bg_contact.png';

const Contact = function (){
    return (
        <div className="contact" style={{backgroundImage:`url(${bg})`,backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%', padding:'3em'}} >

            <div className="contact-info">

                <h1> Get In Touch With Us</h1>

                <Grid container spacing={24} style={{padding:'1em'}}>
                <Grid item md={6} xs={12}>
                <div className="contact-label">
                <FontAwesomeIcon className="contact-icon" icon="phone" /> Call Us!
                </div>
                <p className="contact-para">+65 9123 4567</p>
                </Grid>
                <Grid item  md={6} xs={12}>
                <div className="contact-label">
                <FontAwesomeIcon className="contact-icon" icon="envelope-open-text" />    E-Mail
                </div>
                <p className="contact-para">enquiry@augendaddend.com.sg
                </p>
                </Grid>
                <Grid item  md={6} xs={12}>
                <div className="contact-label">
                <FontAwesomeIcon className="contact-icon" icon="fax" />    Fax
                </div>
                <p className="contact-para">+65 6123 4567
                </p>

                </Grid>
                <Grid item  md={6} xs={12}>
                <div className="contact-label">
                <FontAwesomeIcon className="contact-icon" icon="location-arrow" />    Address
                </div>
                <p className="contact-para"> Capital by Augend & Addend 1234 Ang Mo Kio Industrial Park Singapore 123456
                </p>

                </Grid>
                </Grid>
                <Button variant="outlined" className="contact-button" style={{display:'block', margin:'auto'}}>
                    Leave a message
                </Button>
            </div>



        </div>
    );
}

export default Contact;


