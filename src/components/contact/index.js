import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Contact_Form from './contact_form';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button/Button";

class Contact extends Component{


    render() {

        const contact = [
            {"id" : 1, "icon": <FontAwesomeIcon className="contact-icon" icon="phone" />, "label":'Call Us!', "para": '+65 9123 4567'},
            {"id" : 2, "icon": <FontAwesomeIcon className="contact-icon" icon="envelope-open-text" />, "label":'E-Mail', "para": 'enquiry@augendaddend.com.sg'},
            {"id" : 3, "icon": <FontAwesomeIcon className="contact-icon" icon="fax" />, "label":'Fax', "para": '+65 6123 4567'},
            {"id" : 4, "icon": <FontAwesomeIcon className="contact-icon" icon="location-arrow" /> , "label":'Address', "para": ' Capital by Augend & Addend 1234 Ang Mo Kio Industrial Park Singapore 123456'},
            ]

        return (
            <div>
                <Grid container spacing={24}>

                    <Grid item xs={8}>
                        <Contact_Form/>
                    </Grid>
                    <Grid item xs={4}>

                            <h1> Augend & Addend</h1>

                        <Grid container spacing={8}>

                            {contact.map((value) =>

                                <Grid container item xs={12} spacing={24}>
                                <Grid item xs={2} style={{textAlign:'right'}}>
                                    {value.icon}
                                </Grid>
                                <Grid item xs={8}>
                                <div className="contact-label">
                                    {value.label}
                                </div>
                                <p className="contact-para">
                                    {value.para}
                                </p>
                                </Grid>
                                    </Grid>
                            )}

                        </Grid>
                            <Button variant="outlined" className="contact-button" style={{display:'block', margin:'auto'}}> View Map  </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(props){
    return props
}

export default connect(mapStateToProps) (Contact);

