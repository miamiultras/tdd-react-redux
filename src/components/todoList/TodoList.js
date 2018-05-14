import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, deleteTodo, undeleteTodo }) => {
  const todoItems = todos.map(todo => (
    <li key={todo.id}>
      <span className="todo-text">{todo.text}</span>
      <button className="todo-delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  ));

  return (
    <div>
      <ul>
        {todoItems}
      </ul>
      <button onClick={() => undeletTodo(todo.id)}></button>
    </div>

  );
};

// We tell our component that it will receive a prop called todos, it will be an array of objects,
// its id will be a number and text will be a string, and everything is required
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  unDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
