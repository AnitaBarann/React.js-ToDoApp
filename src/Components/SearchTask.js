import React from 'react';
import List from 'material-ui/List';

import Task from './Task';

const SearchTask = (props) => (
    <List>
        {props.tasks.filter((task) => task.toUpperCase().indexOf(props.query.toUpperCase()) !== -1)
            .map((task, index) => (
                <Task key={index} label={task} onRemove={props.onRemove}/>
            ))
        }

    </List>
);

export default SearchTask;