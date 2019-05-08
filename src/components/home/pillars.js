import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import withWidth from "@material-ui/core/withWidth/withWidth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import best from '../../assets/pillars_logo/best.svg';
import confidential from '../../assets/pillars_logo/confidential.svg';
import experience from '../../assets/pillars_logo/experience.svg';
import personalised from '../../assets/pillars_logo/personalised.svg';

class Pillar extends Component{

    render() {

        const buttonSize = /xs|sm/.test(this.props.width) ? 'small' : /md/.test(this.props.width) ? 'medium' : 'large';
        const type = /xs|sm/.test(this.props.width) ? 'mobile' : /md/.test(this.props.width) ? 'tablet' : 'desktop';

        const content = [
            {"id" : 1, "image":<img className="pillarSize" src={confidential}/>, "sub":'Confidential'},
            {"id" : 2, "image":<img className="pillarSize" src={personalised}/>, "sub":'One-stop Professional Solution'},
            {"id" : 3, "image":<img className="pillarSize" src={experience}/>, "sub":'Experienced Consultants'},
            {"id" : 4, "image":<img className="pillarSize" src={best}/>, "sub":'Exclusive Rates and Strategic Options'},
        ]

    return (
        <div className="pillars section-spacing">
            <h1>4 Pillars of Working with Augend & Addend</h1>
            <Grid container spacing={24} className='content'>
                {content.map((value) =>
                    <Grid item md={3} xs={6}>
                        <div className="pillars-round">
                            {value.image}
                        </div>
                        <p className="pillars-subtitle p">{value.sub}</p>
                    </Grid>
                )}

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