import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component{
  state = {
    todos: [],
    skiptodos: []
  }

  deleteTodo = (id) =>{
    const todosAlt = this.state.todos.filter(i =>{
      return i.id!== id
    });
    this.setState({
      todos: todosAlt
    })
  }

  deleteskipTodo = (id) =>{
    const skiptodosAlt = this.state.skiptodos.filter(i =>{
      return i.id!== id
    });

    this.setState({
      skiptodos: skiptodosAlt
    })
  }

  undoskipTodo = (undoskiptodo) =>{
    const skiptodosAlt = this.state.skiptodos.filter(j =>{
      return j.id!== undoskiptodo.id
    });

    let todosAlt = [...this.state.todos, undoskiptodo]

    this.setState({
      skiptodos: skiptodosAlt,
      todos: todosAlt
    })
  }

  addTodo = (todo) =>{
    todo.id = Math.random();
    let todosAlt = [...this.state.todos, todo]
    this.setState({
      todos: todosAlt
    })
  }

  skipTodo = (skiptodo) =>{
    const todosAlt = this.state.todos.filter(j =>{
      return j.id!== skiptodo.id
    });

    let skiptodosAlt = [...this.state.skiptodos, skiptodo]

    this.setState({
      skiptodos: skiptodosAlt,
      todos: todosAlt
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <div className="App">
          <Todos todos={this.state.todos} skiptodos={this.state.skiptodos}
                  deleteTodo={this.deleteTodo} skipTodo={this.skipTodo}
                  deleteskipTodo={this.deleteskipTodo} undoskipTodo={this.undoskipTodo}/>
          <AddTodo addTodo = {this.addTodo}/>
        </div>
      </div>
    );
  }
}

export default App
