import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import withWidth from "@material-ui/core/withWidth/withWidth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import BootstrapSelect from '../helper/BootstrapSelect';
import ReCAPTCHA from "react-google-recaptcha";
import BootstrapInput from '../helper/BootstrapInput';

import bg from '../../assets/contact/bg.png';
import promo_mobile from "../../assets/promotion/promo1_mobile.png";


class Contact_Form extends Component{

    onChange(value) {
        console.log("Captcha value:", value);
    }

    render() {


        const buttonSize = /xs|sm/.test(this.props.width) ? 'small' : /md/.test(this.props.width) ? 'medium' : 'large';

        return (
            <div className="contact-form section-spacing" style={{backgroundImage:`url(${bg})`}}>
                <h1>Get In Touch With Us </h1>
                <p>Simply leave your contact details and we will be in touch with you shortly.</p>

                <Grid container spacing={24}>

                <Grid item xs={12}>
                    <BootstrapInput  placeholder='Name*'/>
                </Grid>

                <Grid item xs={6}>
                    <BootstrapInput  placeholder='Contact Number*'/>
                </Grid>
                <Grid item xs={6}>
                    <BootstrapInput  placeholder='E-mail Address*'/>
                </Grid>

                    <Grid item xs={6}>
                        <BootstrapSelect
                            label="Enquiring On"
                            name='AddressTypeID'
                            id='AddressTypeID'
                            value='no'

                        />
                    </Grid>
                    <Grid item xs={6}>
                        <BootstrapSelect
                            label="Type of Solution"
                            name='AddressTypeID'
                            id='AddressTypeID'
                            value='no'

                        />
                    </Grid>

                    <Grid item xs={6}>
                        <BootstrapSelect
                            label="Property Type"
                            name='AddressTypeID'
                            id='AddressTypeID'
                            value='no'

                        />
                    </Grid>
                    <Grid item xs={6}>
                        <BootstrapInput   label="Estimated Loan Size"
                                          placeholder=''/>
                    </Grid>

                    <Grid item xs={12}>
                        <BootstrapInput
                            placeholder=' Additional Remarks*'
                            multiline='true'
                            rows="5"/>
                    </Grid>

                    <Grid item xs={6}>
                        {/*<ReCAPTCHA*/}
                            {/*sitekey="6LeiQqIUAAAAAL_ybuFGJwTfXzaeLhewPnFz9XqE"*/}
                            {/*onChange={this.onChange}*/}
                        {/*/>*/}
                    </Grid>

                    <Grid item xs={6}>
                        <Button variant="contained">
                            Send
                        </Button>
                    </Grid>
            </Grid>

            </div>
        );
    }
}

export default withWidth()(Contact_Form);