import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import Container from './Components/Container';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    paper: {
        padding: 16,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
});

class App extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Paper className={classes.paper}>
                        <Typography type="display2" gutterBottom>
                            Zaplanuj swój dzień.
                        </Typography>
                        <Typography type="subheading" gutterBottom>
                            Dodaj zadanie, a nie zapomnisz o niczym ważnym.
                        </Typography>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Container/>
                            </Paper>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);