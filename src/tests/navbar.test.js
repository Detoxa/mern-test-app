import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Navbar from '../components/navbar.component';

test('render navigace je v pořádku', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Navbar />);
  //expect(renderer.getRenderOutput()).toMatchSnapshot();
  //console.log(renderer.getRenderOutput());
});
