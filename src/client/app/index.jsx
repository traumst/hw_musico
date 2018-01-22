import React from 'react';
import { render } from 'react-dom';
import Looper from './components/looper';

require('./css/style.less');

render(<Looper/>, document.getElementById('app'));