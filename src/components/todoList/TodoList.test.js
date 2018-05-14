import React from 'react';
import { shallow } from 'enzyme';
import enzymeConfig from '../../enzyme.config';
import TodoList from './TodoList';

describe('TodoList component', () => {
  const deleteMock = jest.fn();

  const props = {
    todos: [
      {
        id: 1,
        text: 'A todo',
      },
    ],
    deleteTodo: deleteMock,
  };

  const component = shallow(<TodoList {...props} />);

  it('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should display a todo when passed in as a prop', () => {
    expect(component.find('.todo-text').text()).toEqual(props.todos[0].text);
  });

  it('should call the deleteTodo function when delete button is clicked', () => {
    expect(deleteMock.mock.calls.length).toEqual(0);
    component.find('.todo-delete').simulate('click');
    expect(deleteMock.mock.calls.length).toEqual(1);
  })
  
  it('should call the undeleteTodo function when undelete button is clicked', () => {
    expect(deleteMock.mock.calls.length).toEqual(0);
    component.find('.todo-undelete').simulate('click');
    expect(deleteMock.mock.calls.length).toEqual(1);
  })
});