import React  from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bg from '../../assets/bg_contact.png';

const Contact = function (){

    const contact = [
        {"id" : 1, "icon": <FontAwesomeIcon className="contact-icon" icon="phone" />, "label":'Call Us!', "para": '+65 9123 4567'},
        {"id" : 2, "icon": <FontAwesomeIcon className="contact-icon" icon="envelope-open-text" />, "label":'E-Mail', "para": 'enquiry@augendaddend.com.sg'},
        {"id" : 3, "icon": <FontAwesomeIcon className="contact-icon" icon="fax" />, "label":'Fax', "para": '+65 6123 4567'},
        {"id" : 4, "icon": <FontAwesomeIcon className="contact-icon" icon="location-arrow" /> , "label":'Address', "para": ' Capital by Augend & Addend 1234 Ang Mo Kio Industrial Park Singapore 123456'},
    ]

    return (
        <div className="contact-mobile">
        <div className="contact section-spacing" style={{backgroundImage:`url(${bg})`,backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%', paddingTop:'2em', paddingBottom:'2em'}} >

            <div className="contact-info">

                <h1> Get In Touch With Us</h1>

                <Grid container spacing={24} className="content">
                            {contact.map((value) =>

                                <Grid container item md={6} xs={12} spacing={24} >
                                    <Grid item xs={2} style={{textAlign:'right'}}>
                                        {value.icon}
                                    </Grid>
                                    <Grid item xs={8}>
                                        <div className="contact-label p">
                                            {value.label}
                                        </div>
                                        <div className="contact-para p">
                                            {value.para}
                                        </div>
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>

                <Button variant="outlined" className="contact-button" component={ Link } to="/contact">
                    Leave a message
                </Button>
            </div>
            </div>
        </div>
    );
}

export default Contact;


