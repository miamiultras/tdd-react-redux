import { reducer, initialState } from '.';
import types from '../constants/';

describe('Reducer', () => {
  const todoText = 'A todo';

  it('should return the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('add todo', () => {
    it('should return the correct state', () => {
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText
          },
        ],
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('delete todo', () => {
    it('should return the correct state', () => {

      const startingState = {
        todos: [
          {
            id: 1,
            text: todoText
          },
        ],
      };

      const action = {
        type: types.DELETE_TODO,
        id: 1,
      };

      const expectedState = {
        todos: [],
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

});