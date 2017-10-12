/* eslint-disable no-undef */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Render components', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
