import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
class App extends Component {
  render() {
    return (
      <Container>
        <Header as='h1'>ToDo List</Header>
        <NewTodo />
        <TodoList />
      </Container>
    );
  }
}

export default App;
