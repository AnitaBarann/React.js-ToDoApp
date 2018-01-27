import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import SearchTask from './SearchTask';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            task: '',
            tasks: ['dokończyć zadanie', 'wyspać się', 'kino']
        };
        this.textChanged = this.textChanged.bind(this);
        this.searchChanged = this.searchChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnRemove = this.handleOnRemove.bind(this);
    }

    textChanged(event) {
        this.setState({task: event.target.value});
    }

    searchChanged(event) {
        this.setState({query: event.target.value});
    }

    handleSubmit(event) {
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: ''
        });
        event.preventDefault();
    }

    handleOnRemove(taskToRemove) {
        this.setState({
            tasks: this.state.tasks.filter(task => task !== taskToRemove),
            task: ''
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                id="task"
                                label="Nowe zadanie"
                                value={this.state.task}
                                onChange={this.textChanged}
                                className={classes.textField}
                                margin="normal"
                            />
                            <Button type="submit" fab mini color="primary" arial-label="add" className={classes.button}>
                                <AddIcon/>
                            </Button>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <TextField
                            id="task"
                            label="Wyszukaj zadanie"
                            onChange={this.searchChanged}
                            className={classes.textField}
                            margin="normal"
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <h2>Zadania na dzisiaj:</h2>
                    <SearchTask
                        query={this.state.query}
                        tasks={this.state.tasks}
                        onRemove={this.handleOnRemove}
                    />
                </Grid>
            </Grid>
        );
    }
}

Container.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);