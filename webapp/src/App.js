import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import NewTodo from './NewTodo';
import TodoList from './TodoList';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || window.API_URL_BASE,
  timeout: 1000
});

class App extends Component {
  state = {
    todos: []
  }

  render() {
    return (
      <Container>
        <Header as='h1'>ToDo List</Header>
        <NewTodo onSubmit={(title) => this.createNewTodo(title)} />
        <TodoList todos={this.state.todos} onToggle={(id, newState) => this.toggleTodo(id, newState)} />
      </Container>
    );
  }

  componentDidMount() {
    this.loadTodos();
  }

  loadTodos() {
    httpClient.get('/todos')
      .then((response) => response.data)
      .then((response) => response.map((todo) => {
        return {
          title: todo.title,
          status: todo.status,
          id: todo._meta.id
        }
      }))
      .then((todos) => {
        this.setState({
          todos: todos
        })
      });
  }

  createNewTodo(title) {
    httpClient.post('/todos', {
      title: title
    })
      .then(() => this.loadTodos());
  }

  toggleTodo(id, newState) {
    httpClient.get('/todos/' + id)
      .then((response) => response.data)
      .then((todo) => {
        return httpClient.put('/todos/' + id, {
          title: todo.title,
          status: newState
        })
      })
      .then(() => this.loadTodos());
  }
}

export default App;
