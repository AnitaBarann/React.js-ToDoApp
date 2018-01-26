import React, {Component} from 'react';
import Container from "./Components/Container";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});

class App extends Component {
    render() {
        const {classes} = this.props;
        return (
                <Paper className={classes.root} elevation={4}>
                    <Typography type="display2" gutterBottom>
                        Zaplanuj swój dzień.
                    </Typography>
                    <Typography type="subheading" gutterBottom>
                        Dodaj zadanie, a nie zapomnisz o niczym ważnym.
                    </Typography>
                    <Container/>
                </Paper>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);
