import React  from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import best from '../../assets/pillars_logo/best.svg';
import confidential from '../../assets/pillars_logo/confidential.svg';
import experience from '../../assets/pillars_logo/experience.svg';
import invitation from '../../assets/pillars_logo/invitation.svg';
import personalised from '../../assets/pillars_logo/personalised.svg';


const Pillars = function (){
    return (
        <div className="pillars">
            <h1>6 Pillars of Working with Augend & Addend</h1>
            <Grid container spacing={24}>
                <Grid item xs>
                    <div className="pillars-round">
                        <img className="pillarSize" src={confidential}/>

                        <p className="pillars-subtitle"> Confidential</p>
                    </div>
                </Grid>

                <Grid item xs>
                    <div className="pillars-round">
                        <img className="pillarSize-big" src={invitation}/>

                        <p className="pillars-subtitle"> Invitation to Exclusive Black Tie Events</p>
                    </div>
                </Grid>

                <Grid item xs>
                    <div className="pillars-round">
                        <img className="pillarSize" src={best}/>

                        <p className="pillars-subtitle" > Best Business Expansion Solution</p>
                    </div>
                </Grid>
                <div className="pillar-divider"/>
                <Grid item xs>
                    <div className="pillars-round">
                        <img className="pillarSize-big" src={experience}/>

                        <p className="pillars-subtitle" > Experience</p>
                    </div>
                </Grid>
                <Grid item xs>
                    <div className="pillars-round">
                        <img className="pillarSize-big" src={personalised}/>
                        <p className="pillars-subtitle"> Fast & Efficient</p>
                    </div>
                </Grid>
                <Grid item xs>
                    <div className="pillars-round">
                        <img className="pillarSize-big" src={personalised}/>

                        <p className="pillars-subtitle"> Personalised Services</p>
                    </div>
                </Grid>
            </Grid>

            <Button variant="outlined" className="pillars-button">
                Learn more about us  <FontAwesomeIcon style={{marginLeft:'5px'}}icon="play" />
            </Button>

        </div>
    );
}

export default Pillars;