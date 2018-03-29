import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default function NewTodo() {
    return (
        <Form>
            <Form.Group inline>
                <input placeholder='New ToDo' />
                <Button>Add</Button>
            </Form.Group>
        </Form>
    );
}
