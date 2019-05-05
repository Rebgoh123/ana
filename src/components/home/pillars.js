import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import best from '../../assets/pillars_logo/best.svg';
import confidential from '../../assets/pillars_logo/confidential.svg';
import experience from '../../assets/pillars_logo/experience.svg';
import invitation from '../../assets/pillars_logo/invitation.svg';
import personalised from '../../assets/pillars_logo/personalised.svg';
import fast from '../../assets/pillars_logo/fast.svg';
import withWidth from "@material-ui/core/withWidth/withWidth";


class Pillar extends Component{

    render() {

        const buttonSize = /xs|sm/.test(this.props.width) ? 'small' : /md/.test(this.props.width) ? 'medium' : 'large';
        const type = /xs|sm/.test(this.props.width) ? 'mobile' : /md/.test(this.props.width) ? 'tablet' : 'desktop';

        const services = [[{"src": "confidential"}, {"subtitle": "Confidential"}],
            [{"src": "invitation"}, {"subtitle": "Invitation to Exclusive Black Tie Events"}],
            [{"src": "best"}, {"subtitle": "Best Business Expansion Solution"}],
            [{"src": "experience"}, {"subtitle": "Experience"}],
            [{"src": "personalised"}, {"subtitle": "Personalised Services"}],
        ];

    return (
        <div className="pillars section-spacing">
            <h1>6 Pillars of Working with Augend & Addend</h1>
            <Grid container spacing={24}>
                <Grid item md={2} xs={4}>
                    <div className="pillars-round">
                        <img className="pillarSize" src={confidential}/>
                    </div>
                    <p className="pillars-subtitle"> Confidential</p>
                </Grid>

                <Grid item md={2} xs={4}>
                    <div className="pillars-round">
                        <img className="pillarSize" src={invitation}/>
                    </div>
                    <p className="pillars-subtitle"> Invitation to Exclusive Black Tie Events</p>
                </Grid>

                <Grid item md={2} xs={4}>
                    <div className="pillars-round">
                        <img className="pillarSize" src={best}/>
                    </div>
                    <p className="pillars-subtitle" > Best Business Expansion Solution</p>
                </Grid>

                <Grid item md={2} xs={4}>
                    <div className="pillars-round">
                        <img className="pillarSize" src={experience}/>
                    </div>
                    <p className="pillars-subtitle" > Experience</p>

                </Grid>

                <Grid item md={2} xs={4}>
                    <div className="pillars-round">
                        <img className="pillarSize" src={fast}/>
                    </div>
                    <p className="pillars-subtitle"> Fast & Efficient</p>
                </Grid>

                <Grid item md={2} xs={4}>
                    <div className="pillars-round">
                        <img className="pillarSize" src={personalised}/>
                    </div>
                    <p className="pillars-subtitle"> Personalised Services</p>
                </Grid>

                <div className="section-padding" style={{width:'100%'}}>
                    <div className={"pillar-button-" + type}>
                <Button variant="outlined" className={"pillar-" + type} size={buttonSize}>
                    Learn more about us  <FontAwesomeIcon style={{marginLeft:'5px'}}icon="play" />
                </Button>
                    </div>
                </div>
            </Grid>
        </div>
    );
    }
}

export default withWidth()(Pillar);