import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#828F97',
            boxShadow: '0 0 0 0.2rem rgb(130,143,151,.25)',
        },
    },
}))(InputBase);

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,


    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
});

class BootstrapSelect extends React.Component {
    state = {
        age: '',
    };

    handleChange = event => {
        this.setState({ age: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={this.props.classes.margin} fullWidth={true}>
                    {this.props.label === undefined ? <div/> :<InputLabel shrink htmlFor="bootstrap-input" className={this.props.classes.bootstrapFormLabel}>
                        {this.props.label}
                    </InputLabel> }
                    <NativeSelect
                        value={this.state.age}
                        onChange={this.handleChange}
                        input={<BootstrapInput name="age" id="age-customized-native-simple"
                        />}
                    >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
            </form>
        );
    }
}

BootstrapSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BootstrapSelect);