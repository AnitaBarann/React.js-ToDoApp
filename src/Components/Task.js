import React, {Component} from 'react';
import {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';
import Checkbox from 'material-ui/Checkbox';


const style = {
    checked: {
        color: 'green',
        textDecoration: 'line-through'
    },
    unChecked: {}
};

class Task extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checked: false
        }
    }

    handleChange(event) {
        this.setState({checked: event.target.checked});
    }

    render() {
        return (
            <ListItem>
                <Checkbox onChange={this.handleChange}/>
                <ListItemText primary={this.props.label} style={this.state.checked ? style.checked : style.unChecked}/>
                <ListItemSecondaryAction>
                    <Button fab aria-label="delete">
                        <DeleteIcon onClick={() => this.props.onRemove(this.props.label)}/>
                    </Button>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Task;