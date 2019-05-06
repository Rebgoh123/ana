import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import withWidth from "@material-ui/core/withWidth/withWidth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import efficient from "../../assets/team/efficient.svg";
import neutral from "../../assets/team/neutral.svg";
import smoother from "../../assets/team/smoother.svg";

import ceo from "../../assets/team/ceo.png";
import promo_mobile from "../../assets/promotion/promo1_mobile.png";


class Team extends Component{

    render() {

        const buttonSize = /xs|sm/.test(this.props.width) ? 'small' : /md/.test(this.props.width) ? 'medium' : 'large';

        return (
            <div className="team section-spacing" style={{}}>
                <h1>About Augend & Addend Team</h1>

                <div className="team-centered">
                    <Grid container spacing={24}>

                        {/* start 3 information*/}

                        <Grid item md={4} xs={12} className="team-information" style={{borderRight: '1px solid #E0E0E0'}}>
                            <h2 className="team-first">16</h2>
                            <span className="team-first-sub"> Bank Partners</span>
                        </Grid>

                        <Grid item md={4} xs={12} className="team-information" style={{borderRight: '1px solid #E0E0E0'}}>
                            <h2 className="team-first">100%</h2>
                            <span className="team-first-sub"> Satisfied Clients</span>

                        </Grid>

                        <Grid item md={4} xs={12} className="team-information">
                            <h2 className="team-first">$5M</h2>
                            <span className="team-first-sub"> In loans till date</span>

                        </Grid>

                        {/* end 3 information*/}
                    </Grid>
                </div>

                <div className="team-desc">

                            <p>Capital by Augend & Addend is an independent mortgage advisory established in 2019. Our goal is to automate and give you the best rates for your biggest financial commitments (housing/commercial/SME loans).</p>
                    <Button variant="outlined" className="contact-button"  size={buttonSize} style={{display:'block', margin:'auto'}}>
                        CONTACT US TODAY!
                    </Button>
                </div>

                <div className="team-box-center">
                    <Grid container spacing={24}>

                        <Grid item xs={12} sm={4}>
                            <Paper className="team-box">
                                <img className="teamSize" src={efficient}/>
                                <h4>Efficient Services </h4>
                                <span className="team-box-info">  We help you to save every bit of interest rate by doing all the footwork instead of you spending hours to check on the best rates!</span>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper className="team-box">
                                <img className="teamSize" src={neutral}/>
                                <h4>Neutral Standpoints </h4>
                                <span className="team-box-info"> As a neutral entity, we are happy to bring you the best and most unbiased advise of loans selection.</span>

                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper className="team-box">
                                <img className="teamSize" src={smoother}/>
                                <h4>Smoother Auditing </h4>
                                <span className="team-box-info"> As a fintech company, we are automated to be able to make your future financing a much smoother journey.</span>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

                <div className="team-ceo-center">
                    <Grid container spacing={24} className="team-ceo-style">

                        <Grid item xs={6} sm={4}  style={{backgroundImage:`url(${ceo})`}}/>

                            {/*<img src={ceo} style={{width:'100%'}}/>*/}


                        <Grid item xs={6} sm={8} >

                            <h2 style={{color:'#C4161C'}}>Full Name </h2>
                            <h3 style={{color:'#828F97'}}>DIRECTOR HEAD OF SALES</h3>
                            <p>A strong passion in Accounting and finance strong passion in Accounting and financestrong passion in Accounting and financestrong passion in Accounting and financestrong passion in Accounting and financestrong passion in Accounting and finance.</p>

                        </Grid>
                    </Grid>
                </div>

            </div>
        );
    }
}

export default withWidth()(Team);