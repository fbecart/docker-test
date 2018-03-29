import React from 'react';
import { List, Checkbox } from 'semantic-ui-react';
import './TodoList.css';

function TodoItem({id, title, status, onToggle}) {
    const className = status ? 'finished-todo' : '';

    return (
        <List.Item>
            <Checkbox toggle label={title} checked={status} className={className} onChange={(e) => onToggle(id, !status)} />
        </List.Item>
    );
}

export default function TodoList({ todos, onToggle }) {
    return (
        <List>
            {
                todos.map(({id, title, status}) => <TodoItem key={id} id={id} title={title} status={status} onToggle={ onToggle } />)
            }
        </List>
    );
}
