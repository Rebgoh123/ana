import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import withWidth from "@material-ui/core/withWidth/withWidth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


import general from "../../assets/faq/general.svg";
import business from "../../assets/faq/business.svg";
import personal from "../../assets/faq/personal.svg";

import Typography from '@material-ui/core/Typography';



function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

function TabSquare(props) {
    return (
        <div className="faq-item">
            <img className="teamSize" src={props.src}/>
            <p className="faq-caption">{props.title}</p>
        </div>
    );
}



class Faq extends Component{

    state = {
        value: 0,
        expanded: null,
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangePanel = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {

        const buttonSize = /xs|sm/.test(this.props.width) ? 'small' : /md/.test(this.props.width) ? 'medium' : 'large';
        const { value,expanded } = this.state;


        return (
            <div className="faq section-spacing" style={{}}>
                <h1>FAQ</h1>
                <div className="faq-box-center">


                    <Grid container spacing={24}   justify="center"
                    >
                        <Tabs value={value} onChange={this.handleChange}>

                            <Tab className="faq-tab" label={<TabSquare title="General" src={general} />}/>
                            <Tab className="faq-tab"  label={<TabSquare title="Personal" src={personal}/>} />
                            <Tab className="faq-tab"  label={<TabSquare title="Business" src={business}/>} />

                         </Tabs>

                    </Grid>
                </div>

                {value === 0 && <TabContainer>

                    <ExpansionPanel style={{background:'transparent', boxShadow:'none'}} expanded={expanded === 'panel1'} onChange={this.handleChangePanel('panel1')}>
                        <ExpansionPanelSummary expandIcon={expanded === 'panel1' ? <KeyboardArrowUp /> : <KeyboardArrowRight />}>
                        <h2 style={{paddingLeft: '2em'}}>What documents are required for a Business Property loan application?</h2>
                        </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            1. Copy of NRIC of all borrowers <br/>
                            2. Latest 2 Years Personal Income Tax Assessment of all borrowers (known as Notice of Assessment) <br/>
                            3. Latest 2 years Financial Statements of company <br/>
                            4. Latest 6 months loan statements if any <br/>
                            5. Latest 6 months’ Bank Statements of operating company 6. Copy of Letter of Offer from current bank if any<br/>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                    <ExpansionPanel style={{background:'transparent', boxShadow:'none'}} expanded={expanded === 'panel2'} onChange={this.handleChangePanel('panel2')}>
                        <ExpansionPanelSummary expandIcon={expanded === 'panel2' ? <KeyboardArrowUp /> : <KeyboardArrowRight />}>
                            <h2 style={{paddingLeft: '2em'}}>What are the financing solutions you provide to companies?</h2>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                1. Copy of NRIC of all borrowers <br/>
                                2. Latest 2 Years Personal Income Tax Assessment of all borrowers (known as Notice of Assessment) <br/>
                                3. Latest 2 years Financial Statements of company <br/>
                                4. Latest 6 months loan statements if any <br/>
                                5. Latest 6 months’ Bank Statements of operating company 6. Copy of Letter of Offer from current bank if any<br/>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel style={{background:'transparent', boxShadow:'none'}} expanded={expanded === 'panel3'} onChange={this.handleChangePanel('panel3')}>
                        <ExpansionPanelSummary expandIcon={expanded === 'panel3' ? <KeyboardArrowUp /> : <KeyboardArrowRight />}>
                            <h2 style={{paddingLeft: '2em'}}>How does a company qualify for financing?</h2>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                1. Copy of NRIC of all borrowers <br/>
                                2. Latest 2 Years Personal Income Tax Assessment of all borrowers (known as Notice of Assessment) <br/>
                                3. Latest 2 years Financial Statements of company <br/>
                                4. Latest 6 months loan statements if any <br/>
                                5. Latest 6 months’ Bank Statements of operating company 6. Copy of Letter of Offer from current bank if any<br/>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                </TabContainer>}
                {value === 1 && <TabContainer>
                    <ExpansionPanel style={{background:'transparent', boxShadow:'none'}} expanded={expanded === 'panel1'} onChange={this.handleChangePanel('panel1')}>
                        <ExpansionPanelSummary expandIcon={expanded === 'panel1' ? <KeyboardArrowUp /> : <KeyboardArrowRight />}>
                            <h2 style={{paddingLeft: '2em'}}>PERSONAL - > What documents are required for a Business Property loan application?</h2>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                1. Copy of NRIC of all borrowers <br/>
                                2. Latest 2 Years Personal Income Tax Assessment of all borrowers (known as Notice of Assessment) <br/>
                                3. Latest 2 years Financial Statements of company <br/>
                                4. Latest 6 months loan statements if any <br/>
                                5. Latest 6 months’ Bank Statements of operating company 6. Copy of Letter of Offer from current bank if any<br/>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel style={{background:'transparent', boxShadow:'none'}} expanded={expanded === 'panel2'} onChange={this.handleChangePanel('panel2')}>
                        <ExpansionPanelSummary expandIcon={expanded === 'panel2' ? <KeyboardArrowUp /> : <KeyboardArrowRight />}>
                            <h2 style={{paddingLeft: '2em'}}>What are the financing solutions you provide to companies?</h2>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                1. Copy of NRIC of all borrowers <br/>
                                2. Latest 2 Years Personal Income Tax Assessment of all borrowers (known as Notice of Assessment) <br/>
                                3. Latest 2 years Financial Statements of company <br/>
                                4. Latest 6 months loan statements if any <br/>
                                5. Latest 6 months’ Bank Statements of operating company 6. Copy of Letter of Offer from current bank if any<br/>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel style={{background:'transparent', boxShadow:'none'}} expanded={expanded === 'panel3'} onChange={this.handleChangePanel('panel3')}>
                        <ExpansionPanelSummary expandIcon={expanded === 'panel3' ? <KeyboardArrowUp /> : <KeyboardArrowRight />}>
                            <h2 style={{paddingLeft: '2em'}}>How does a company qualify for financing?</h2>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                1. Copy of NRIC of all borrowers <br/>
                                2. Latest 2 Years Personal Income Tax Assessment of all borrowers (known as Notice of Assessment) <br/>
                                3. Latest 2 years Financial Statements of company <br/>
                                4. Latest 6 months loan statements if any <br/>
                                5. Latest 6 months’ Bank Statements of operating company 6. Copy of Letter of Offer from current bank if any<br/>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                </TabContainer>}
                {value === 2 && <TabContainer>Item Three</TabContainer>}

                    <p className="faq-centered">Should you still have questions unanswered, feel free to contact us today!</p>

                <Button variant="outlined" className="contact-button"  size={buttonSize} style={{display:'block', margin:'auto'}}>
                    CONTACT US!
                </Button>
            </div>
        );
    }
}

export default withWidth()(Faq);