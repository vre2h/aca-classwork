import React from "react";

const FILTER_STATES = {
  all: "All",
  active: "active",
  completed: "completed"
};

export default function FilteringOptions({ filter, onFilter }) {
  return (
    <div>
      <button
        className={filter === FILTER_STATES.all ? "select" : ""}
        onClick={() => onFilter(FILTER_STATES.all)}
      >
        All
      </button>
      <button
        className={filter === FILTER_STATES.active ? "select" : ""}
        onClick={() => onFilter(FILTER_STATES.active)}
      >
        Active
      </button>
      <button
        className={filter === FILTER_STATES.completed ? "select" : ""}
        onClick={() => onFilter(FILTER_STATES.completed)}
      >
        Completed
      </button>
    </div>
  );
}
