import React from 'react';
import { shallow } from 'enzyme';
import enzymeConfig from '../../enzyme.config';
import TodoList from './TodoList';

describe('TodoList component', () => {
  const todos = [
    {
      id: 1,
      text: 'A todo',
    },
  ];
  console.log(todos[0].text);
  
  const component = shallow(<TodoList todos={todos} />);


  it('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should display a todo when passed in as a prop', () => {
    expect(component.find('.todo-text').text()).toEqual(todos[0].text);
  });
});