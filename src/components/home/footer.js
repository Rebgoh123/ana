import React  from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import about_us from '../../assets/about_us.svg';
import about_us_mobile from '../../assets/about_us_mobile.svg';

const Footer = function (){
    return (
        <div className="footer">

            <div className="footer-info" >
                Copyright © 2019 Augend & Addend. All Rights Reserved
            </div>
        </div>
    );
}

export default Footer;


