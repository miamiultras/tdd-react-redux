import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from './actions/';
import AddTodo from './components/addTodo/AddTodo';

export const App = ({ submitTodo }) => (
  <div>
    <h1>Todo List</h1>
    <AddTodo submitTodo={submitTodo} />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
