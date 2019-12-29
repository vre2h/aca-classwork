import React from "react";

const FILTER_STATES = {
  all: "All",
  active: "active",
  completed: "completed"
};

class FilteringOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { filter } = this.props;

    return (
      <div>
        <button
          className={filter === FILTER_STATES.all ? "select" : ""}
          onClick={() => this.props.onFilter(FILTER_STATES.all)}
        >
          All
        </button>
        <button
          className={filter === FILTER_STATES.active ? "select" : ""}
          onClick={() => this.props.onFilter(FILTER_STATES.active)}
        >
          Active
        </button>
        <button
          className={filter === FILTER_STATES.completed ? "select" : ""}
          onClick={() => this.props.onFilter(FILTER_STATES.completed)}
        >
          Completed
        </button>
      </div>
    );
  }
}

export default FilteringOptions;
