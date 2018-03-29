import React from 'react';
import { List, Checkbox } from 'semantic-ui-react';
import './TodoList.css';

function TodoItem({title, status}) {
    const className = status ? 'finished-todo' : '';

    return (
        <List.Item>
            <Checkbox toggle label={title} checked={status} className={className} />
        </List.Item>
    );
}

export default function TodoList() {
    return (
        <List>
            <TodoItem title="Write backend" status={true} />
            <TodoItem title="Write frontend" status={false} />
        </List>
    );
}
