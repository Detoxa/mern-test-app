import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import CreateEmployee from '../components/create-employee.component';

test('render vytvoření zaměstnance je v pořádku', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<CreateEmployee />);
  //expect(renderer.getRenderOutput()).toMatchSnapshot();
  //console.log(renderer.getRenderOutput());
});
