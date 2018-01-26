import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import {FormControlLabel} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';

const style = {
    checked: {
        color: green[500],
        textDecoration: 'line-through',
    },
    unChecked: {}
};


class TasksList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checked: false
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        return (
        <ListItem>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={this.state.checkedG}
                        onChange={this.handleChange('checkedG')}
                        classes={{checked: classes.checked}}
                        value="checkedG"
                    />
                }
            />

            <ListItemText primary={this.props.name} style={this.state.checked ? style.checked : style.unChecked}/>

            <ListItemSecondaryAction>
                <Button fab aria-label="delete" className={classes.button}>
                    <DeleteIcon onClick={this.props.onDelete}/>
                </Button>
            </ListItemSecondaryAction>

        </ListItem>
    );
    }

}

TasksList.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(style)(TasksList);