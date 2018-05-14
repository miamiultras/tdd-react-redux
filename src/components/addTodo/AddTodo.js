import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitTodo(input.value);
          input.value = '';
        }}
      >
        <input
          className="todo-input"

          // przesylam callback w refie
          ref={(element) => {
            input = element;
          }}
        />
        <button type="submit" className="todo-submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

// typechecking props form a component
AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
};

export default AddTodo;
