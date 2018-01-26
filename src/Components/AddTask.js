import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
});


class AddTask extends Component {

    render() {
        const {classes} = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="with-placeholder"
                    label="Nowe zadanie"
                    placeholder=""
                    className={classes.textField}
                    margin="normal"
                />
                <Button fab color="primary" aria-label="add" className={classes.button}>
                    <AddIcon />
                </Button>
            </form>
        );
    }
}

AddTask.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddTask);
