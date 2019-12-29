import React from "react";

import Input from "../Input/Input";

import "./todo.css";

const FILTER_STATES = {
  all: "All",
  active: "active",
  completed: "completed"
};

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      currentId: 1,
      filter: FILTER_STATES.all
    };
  }

  onTodoAdd = todoValue => {
    this.setState(state => ({
      todos: [
        ...state.todos,
        { id: state.currentId, name: todoValue, isComplete: false }
      ],
      currentId: state.currentId + 1
    }));
  };

  onTodoSelect = activeId => {
    this.setState(state => ({
      todos: state.todos.map(todo =>
        todo.id === activeId ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    }));
  };

  onFilter = filter => {
    this.setState({
      filter
    });
  };

  getFilteredTodos = (todos, filter) => {
    let normalizedTodos = todos;

    if (filter === FILTER_STATES.completed) {
      normalizedTodos = todos.filter(todo => todo.isComplete);
    } else if (filter === FILTER_STATES.active) {
      normalizedTodos = todos.filter(todo => !todo.isComplete);
    }

    return normalizedTodos;
  };

  render() {
    const { todos, filter } = this.state;
    const normalizedTodos = this.getFilteredTodos(todos, filter);

    return (
      <div>
        <h1>Todo</h1>
        <Input onTodoAdd={this.onTodoAdd} />
        <section>
          <ul>
            {normalizedTodos.map(({ name, id, isComplete }) => (
              <li
                className={isComplete ? "checked" : ""}
                onClick={() => this.onTodoSelect(id)}
                key={id}
              >
                {name}
              </li>
            ))}
          </ul>
          <div>
            <button
              className={filter === FILTER_STATES.all ? "select" : ""}
              onClick={() => this.onFilter(FILTER_STATES.all)}
            >
              All
            </button>
            <button
              className={filter === FILTER_STATES.active ? "select" : ""}
              onClick={() => this.onFilter(FILTER_STATES.active)}
            >
              Active
            </button>
            <button
              className={filter === FILTER_STATES.completed ? "select" : ""}
              onClick={() => this.onFilter(FILTER_STATES.completed)}
            >
              Completed
            </button>
          </div>
        </section>
      </div>
    );
  }
}
