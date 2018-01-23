import React from 'react';
import {render} from 'react-dom';
/**
 * Local imports
 */
import Looper from './components/looper';

/**
 * Stylesheet
 */
require('./css/style.less');

/**
 * Render outermost Container
 */
render(<Looper/>, document.getElementById('app'));