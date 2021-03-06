import React from 'react';
import { shallow } from 'enzyme';
import enzymeConfig from './enzyme.config';
import { App } from './App';
import { initialState } from './reducers/';


it('App renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(
    <App
      state={initialState}
      submitTodo={mockFunction}
      deleteTodo={mockFunction}
      todos={[]}
    />
  );
  expect(component.exists()).toEqual(true);
});
