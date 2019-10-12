import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Employeelist from '../components/employee-list.component';

test('render editace zaměstnance je v pořádku', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Employeelist />);
  //expect(renderer.getRenderOutput()).toMatchSnapshot();
  //console.log(renderer.getRenderOutput());
});
