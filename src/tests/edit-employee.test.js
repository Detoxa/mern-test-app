import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Editemployee from '../components/edit-employee.component';

test('render editace zaměstnance je v pořádku', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Editemployee />);
  //expect(renderer.getRenderOutput()).toMatchSnapshot();
  //console.log(renderer.getRenderOutput());
});
