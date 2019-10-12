import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import App from '../App';

test('render app je v pořádku', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<App />);
  //expect(renderer.getRenderOutput()).toMatchSnapshot();
  //console.log(renderer.getRenderOutput());
});
