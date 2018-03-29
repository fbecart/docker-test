import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class NewTodo extends React.Component {
    state = {
        value: ''
    };

    render() {
        const { value } = this.state;
        return (
            <Form onSubmit={(e) => this.onSubmit(e)}>
                <Form.Group inline>
                    <input placeholder='New ToDo' value={value} onChange={(e) => this.onChange(e)} />
                    <Button>Add</Button>
                </Form.Group>
            </Form>
        );
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    onSubmit(e) {
        this.props.onSubmit(this.state.value);
        this.setState({
            value: ''
        });
    }
}
