import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoValue: "",
      placeholder: "Add Todo",
      todos: []
    };
  }

  onInputChange = ({ target: { value } }) => {
    console.groupCollapsed("ON_INPUT_CHANGE");
    console.log(`value: ${value}`);
    console.groupEnd();
    this.setState({
      todoValue: value
    });
  };

  onTodoAdd = () => {
    const { todoValue } = this.state;

    this.setState(state => ({
      todos: [...state.todos, { name: todoValue, isComplete: false }],
      todoValue: ""
    }));
  };

  render() {
    const { todoValue, placeholder, todos } = this.state;

    return (
      <div>
        <h1>Todo</h1>
        <section>
          <div>
            <input
              placeholder={placeholder}
              value={todoValue}
              onChange={this.onInputChange}
            />
            <button onClick={this.onTodoAdd}>Add</button>
          </div>
          <div>
            <ul>
              {todos.map(({ name }, idx) => (
                <li key={idx}>{name}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
