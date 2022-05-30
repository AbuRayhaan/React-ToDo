import React from "react"
import TodoList from "./TodoList";
import Header from "./Header";

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup Development environment",
                completed: true,
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false,
            },
            {
                id: 3,
                title: "Deploy the live server",
                completed: false,
            }
        ],
  };    

  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, completed: !todo.completed,
          }
        }
        return todo;
      })
    }));
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  render() {
    return (
      <div>
        <Header />
        <TodoList 
        todos = {this.state.todos} 
        handleChangeProps={this.handleChange} 
        delTodoProps={this.delTodo}
        />
      </div>
    )
  }
}
export default TodoContainer