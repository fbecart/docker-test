import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
class App extends Component {
  render() {
    const todos = [
      {
        id: 'abc',
        title: 'Finish Backend',
        status: true
      }, {
        id: 'def',
        title: 'Finish UI',
        status: false
      }, {
        id: 'ghi',
        title: 'Write tests',
        status: false
      }
    ];

    return (
      <Container>
        <Header as='h1'>ToDo List</Header>
        <NewTodo onSubmit={(title) => this.createNewTodo(title)} />
        <TodoList todos={todos} onToggle={(id, newState) => this.toggleTodo(id, newState)} />
      </Container>
    );
  }

  createNewTodo(title) {
    console.log('Creating todo: ' + title);
  }

  toggleTodo(id, newState) {
    console.log('Toggling todo ' + id + ', ' + newState);
  }
}

export default App;
