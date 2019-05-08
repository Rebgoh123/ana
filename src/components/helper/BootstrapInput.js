import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },

    bootstrapRoot: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#828F97',
            boxShadow: '0 0 0 0.2rem rgb(130,143,151,.25)',
        },
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
});


export class BootstrapTextfield extends React.Component {

    render() {
        return (

        <div className={this.props.classes.root}>
            <FormControl className={this.props.classes.margin} fullWidth={true}>
                {this.props.label === undefined ? <div/> :<InputLabel shrink htmlFor="bootstrap-input" className={this.props.classes.bootstrapFormLabel}>
                    {this.props.label}
                </InputLabel> }
                <InputBase
                    fullWidth={true}
                    classes={{
                        root: this.props.classes.bootstrapRoot,
                        input: this.props.classes.bootstrapInput,
                    }}
                    id={this.props.id}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange === undefined ? '' : this.props.onChange}
                    type={this.props.type === undefined ? 'text' : this.props.type}
                    startAdornment={this.props.startAdornment === undefined ? '' : this.props.startAdornment}
                    readOnly={this.props.readOnly===undefined ? false : this.props.readOnly}
                    multiline={this.props.multiline===undefined ? false : this.props.multiline}
                    rows={this.props.rows===undefined ? '' : this.props.rows}
                    placeholder={this.props.placeholder===undefined? '' : this.props.placeholder}
                />
            </FormControl>
        </div>
        );
    }
}

BootstrapTextfield.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BootstrapTextfield);