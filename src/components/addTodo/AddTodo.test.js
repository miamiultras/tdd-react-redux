import React from 'react';
import { shallow, mount } from 'enzyme';
import enzymeConfig from '../../enzyme.config';
import AddTodo from './AddTodo';

describe('AddTodo component', () => {
  let component;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = shallow(
      <AddTodo
        submitTodo={submitMock}
      />,
    );
  });

  it('should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('should have one input', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  })

  describe('add todo button', () => {
    it('should exists', () => {
      expect(component.find('.todo-submit').length).toEqual(1);
    })

    it('should call the submitTodo function when clicked', () => {
      // funkcja mockujaca
      const submitMock = jest.fn();
      // tutaj mutuje component bo potrzebuje mount(...)
      component = mount(<AddTodo submitTodo={submitMock} />);
      // oczekujemy ze submitTodo jest odpalony zero razy
      expect(submitMock.mock.calls.length).toEqual(0);
      // odpalamy go
      component.find('form').simulate('submit');
      // oczekujemy ze submitTodo jest odpalony 1 raz
      expect(submitMock.mock.calls.length).toEqual(1);
    })
  })

});