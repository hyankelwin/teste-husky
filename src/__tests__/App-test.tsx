import React from 'react';
import App from '../App';
import { render, act } from 'react-native-testing-library';

it('renders correctly', async () => {
  const tree = render(<App />);
  console.log('TESTE');

  await act(async () => {
    expect(tree).toMatchSnapshot();
  });
});
