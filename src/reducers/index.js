import types from '../constants/';

export const initialState = {
  todos: [],
  deletedTodos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_TODO:
      return {
        ...state.todos,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };
    case types.DELETE_TODO:
      return {
        todos: [
          // filtruje te todo ktore nie maja takiego samego id jak przeslane
          ...state.todos.filter(todo => todo.id !== action.id),
        ],
        deleteTodos: [
          ...state.todos.filter(todo => todo.id === action.id),
        ],
      };

    case types.UNDELETE_TODO:
      return {
        todos: [
          ...state.todos, ...state.deleteTodos.filter(todo => todo.id === action.id),
        ],
        deleteTodos: [
          ...state.todos.filter(todo => todo.id !== action.id),
        ],
      };

    default:
      return state;
  }
};

export default reducer;
