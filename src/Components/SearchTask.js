import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


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


class SearchTask extends Component {

    render() {
        const {classes} = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="search"
                    label="Wyszukaj zadanie"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                />
                <Button fab color="primary" className={classes.button}>
                    search
                </Button>
            </form>
        );
    }
}

SearchTask.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchTask);