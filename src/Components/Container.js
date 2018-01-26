import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import TasksList from "./TasksList";
import AddTask from "./AddTask";
import SearchTask from "./SearchTask";

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Container extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <AddTask/>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <SearchTask/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h2>Zadania na dzisiaj</h2>
                            <TasksList/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Container.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);